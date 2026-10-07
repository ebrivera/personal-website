import { NextRequest, NextResponse } from "next/server";
import { api, isConfigured } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!isConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const body = await req.json().catch(() => null);
  const uri = typeof body?.uri === "string" ? body.uri : "";
  if (!/^spotify:track:[A-Za-z0-9]{22}$/.test(uri)) return NextResponse.json({ error: "bad_track" }, { status: 400 });

  const res = await api(`/me/player/queue?uri=${encodeURIComponent(uri)}`, { method: "POST" });
  if (res.status === 404) return NextResponse.json({ error: "not_listening" }, { status: 409 });
  if (!res.ok) return NextResponse.json({ error: "spotify_error" }, { status: 502 });

  return NextResponse.json({ ok: true });
}
