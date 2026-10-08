import { NextRequest, NextResponse } from "next/server";
import { api, isConfigured } from "@/lib/spotify";
import { addPending, rememberAdd } from "@/lib/visitorAdds";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const body = await req.json().catch(() => null);
  const uri = typeof body?.uri === "string" ? body.uri : "";
  if (!/^spotify:track:[A-Za-z0-9]{22}$/.test(uri)) return NextResponse.json({ error: "bad_track" }, { status: 400 });

  const name = typeof body?.name === "string" ? body.name.replace(/[<>&"']/g, "").trim().slice(0, 40) : "";
  const res = await api(`/me/player/queue?uri=${encodeURIComponent(uri)}`, { method: "POST" });
  // No active player: hold the song until Ernesto is listening again (now-playing sends it on).
  if (res.status === 404) {
    try {
      await addPending(uri, name);
    } catch {
      return NextResponse.json({ error: "spotify_error" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, pending: true });
  }
  if (!res.ok) return NextResponse.json({ error: "spotify_error" }, { status: 502 });

  await rememberAdd(uri, name);
  return NextResponse.json({ ok: true });
}
