import { NextRequest, NextResponse } from "next/server";
import { api, isConfigured, slimTrack } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") ?? "").trim().slice(0, 100);
  if (!isConfigured()) return NextResponse.json({ configured: false, tracks: [] });
  if (q.length < 2) return NextResponse.json({ configured: true, tracks: [] });
  try {
    const res = await api(`/search?type=track&limit=6&q=${encodeURIComponent(q)}`);
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    return NextResponse.json(
      { configured: true, tracks: data.tracks.items.map(slimTrack) },
      { headers: { "Cache-Control": "public, s-maxage=300" } },
    );
  } catch {
    return NextResponse.json({ configured: true, tracks: [], error: true }, { status: 502 });
  }
}
