import { NextResponse } from "next/server";
import { api, isConfigured, slimTrack } from "@/lib/spotify";

export const dynamic = "force-dynamic";

// What's playing right now, or the last song played when nothing is.
export async function GET() {
  const headers = { "Cache-Control": "public, s-maxage=15, stale-while-revalidate=30" };
  if (!isConfigured()) return NextResponse.json({ configured: false }, { headers });
  try {
    const now = await api("/me/player/currently-playing");
    if (now.status === 200) {
      const data = await now.json();
      if (data?.item && data.currently_playing_type === "track")
        return NextResponse.json(
          { configured: true, playing: data.is_playing, progressMs: data.progress_ms, track: slimTrack(data.item) },
          { headers },
        );
    }
    const recent = await api("/me/player/recently-played?limit=1");
    const data = recent.ok ? await recent.json() : null;
    const item = data?.items?.[0];
    return NextResponse.json(
      { configured: true, playing: false, playedAt: item?.played_at ?? null, track: item ? slimTrack(item.track) : null },
      { headers },
    );
  } catch {
    return NextResponse.json({ configured: true, error: true }, { status: 502 });
  }
}
