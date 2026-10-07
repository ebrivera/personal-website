import { NextRequest, NextResponse } from "next/server";
import { api, isConfigured } from "@/lib/spotify";

export const dynamic = "force-dynamic";

const HOUR = 60 * 60 * 1000;
// Best effort limit of one song per visitor per hour: a cookie plus an in-memory IP map.
// The map resets when the server instance restarts; a KV store would make it strict.
const recent = new Map<string, number>();

export async function POST(req: NextRequest) {
  if (!isConfigured()) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const last = Math.max(recent.get(ip) ?? 0, Number(req.cookies.get("queued_at")?.value ?? 0) || 0);
  if (Date.now() - last < HOUR)
    return NextResponse.json({ error: "rate_limited", retryInMin: Math.ceil((HOUR - (Date.now() - last)) / 60000) }, { status: 429 });

  const body = await req.json().catch(() => null);
  const uri = typeof body?.uri === "string" ? body.uri : "";
  if (!/^spotify:track:[A-Za-z0-9]{22}$/.test(uri)) return NextResponse.json({ error: "bad_track" }, { status: 400 });

  const res = await api(`/me/player/queue?uri=${encodeURIComponent(uri)}`, { method: "POST" });
  if (res.status === 404) return NextResponse.json({ error: "not_listening" }, { status: 409 });
  if (!res.ok) return NextResponse.json({ error: "spotify_error" }, { status: 502 });

  const now = Date.now();
  recent.set(ip, now);
  for (const [k, t] of recent) if (now - t > HOUR) recent.delete(k);
  const out = NextResponse.json({ ok: true });
  out.cookies.set("queued_at", String(now), { httpOnly: true, secure: true, sameSite: "lax", maxAge: 3600, path: "/" });
  return out;
}
