import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { REDIRECT_URI, SCOPES } from "@/lib/spotify";

// One-time owner login: sends you to Spotify, then /callback shows the refresh token to save in Vercel.
export async function GET() {
  if (!process.env.SPOTIFY_CLIENT_ID) return new NextResponse("SPOTIFY_CLIENT_ID is not set in Vercel.", { status: 500 });
  const state = randomBytes(16).toString("hex");
  const url = new URL("https://accounts.spotify.com/authorize");
  url.search = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
    state,
  }).toString();
  const res = NextResponse.redirect(url);
  res.cookies.set("spotify_state", state, { httpOnly: true, secure: true, sameSite: "lax", maxAge: 600, path: "/" });
  return res;
}
