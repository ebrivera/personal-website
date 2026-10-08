import { NextResponse } from "next/server";
import { api, isConfigured, slimTrack } from "@/lib/spotify";
import { storeKind, pendingCount, putBackPending, rememberAdd, takePending, whoAdded } from "@/lib/visitorAdds";

// Send songs visitors added while nothing was playing into the queue, oldest first.
async function flushPending() {
  const items = await takePending().catch(() => []);
  for (let i = 0; i < items.length; i++) {
    const res = await api(`/me/player/queue?uri=${encodeURIComponent(items[i].uri)}`, { method: "POST" }).catch(() => null);
    if (res?.ok) await rememberAdd(items[i].uri, items[i].name);
    else if (!res || res.status === 404 || res.status === 429 || res.status >= 500) return putBackPending(items.slice(i));
  }
}

// The next few songs in the queue, each tagged with the visitor who added it (or null),
// plus how many more visitor-added songs are waiting further back.
async function upNext() {
  const none = { upNext: [], moreQueued: 0 };
  try {
    const res = await api("/me/player/queue");
    if (!res.ok) return none;
    const data = await res.json();
    const tracks = (data?.queue ?? []).filter((t: { type?: string }) => t?.type === "track").map(slimTrack);
    const names = await whoAdded(tracks.map((t: { uri: string }) => t.uri));
    const tagged = tracks.map((t: ReturnType<typeof slimTrack>, i: number) => ({ ...t, from: names[i] ?? null }));
    return { upNext: tagged.slice(0, 3), moreQueued: tagged.slice(3).filter((t: { from: string | null }) => t.from).length };
  } catch {
    return none;
  }
}

export const dynamic = "force-dynamic";

// What's playing right now, or the last song played when nothing is.
export async function GET() {
  const headers = { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" };
  if (!isConfigured()) return NextResponse.json({ configured: false }, { headers });
  try {
    const now = await api("/me/player/currently-playing");
    if (now.status === 200) {
      const data = await now.json();
      if (data?.item && data.currently_playing_type === "track") {
        if (data.is_playing) await flushPending();
        return NextResponse.json(
          {
            configured: true,
            playing: data.is_playing,
            progressMs: data.progress_ms,
            track: slimTrack(data.item),
            ...(data.is_playing ? await upNext() : { upNext: [], moreQueued: 0 }),
            waiting: data.is_playing ? 0 : await pendingCount(),
            store: storeKind(),
          },
          { headers },
        );
      }
    }
    const recent = await api("/me/player/recently-played?limit=1");
    const data = recent.ok ? await recent.json() : null;
    const item = data?.items?.[0];
    return NextResponse.json(
      {
        configured: true,
        playing: false,
        playedAt: item?.played_at ?? null,
        track: item ? slimTrack(item.track) : null,
        waiting: await pendingCount(),
        store: storeKind(),
      },
      { headers },
    );
  } catch {
    return NextResponse.json({ configured: true, error: true }, { status: 502 });
  }
}
