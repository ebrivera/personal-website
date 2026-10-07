import { NextRequest, NextResponse } from "next/server";
import { exchangeCode } from "@/lib/spotify";

const page = (body: string, status = 200) =>
  new NextResponse(
    `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Spotify connected</title>
<body style="font-family:Helvetica,Arial,sans-serif;background:#54796d;color:#f6f2e7;max-width:640px;margin:60px auto;padding:0 16px;line-height:1.5">${body}</body>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const error = req.nextUrl.searchParams.get("error");
  if (error) return page(`<h1>Spotify said no</h1><p>${error.replace(/[<>&]/g, "")}</p>`, 400);
  if (!code || !state || state !== req.cookies.get("spotify_state")?.value)
    return page("<h1>Login expired</h1><p>Start again at <a style='color:#efdca6' href='/api/spotify/login'>/api/spotify/login</a>.</p>", 400);
  try {
    const { refresh_token } = await exchangeCode(code);
    const res = page(`<h1>Spotify connected</h1>
<p>Copy this into Vercel as <b>SPOTIFY_REFRESH_TOKEN</b> (Settings, Environment Variables), then redeploy.</p>
<textarea readonly style="width:100%;height:120px;font:13px ui-monospace,Menlo,monospace;padding:10px;border-radius:8px;border:0" onclick="this.select()">${refresh_token}</textarea>
<p style="opacity:.8">Don't share this token. Anyone with it can control your Spotify playback.</p>`);
    res.cookies.delete("spotify_state");
    return res;
  } catch (e) {
    return page(`<h1>Something went wrong</h1><p>${String(e).replace(/[<>&]/g, "")}</p>`, 500);
  }
}
