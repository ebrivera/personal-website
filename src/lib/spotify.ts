// Server-side helpers for the Spotify Web API. Credentials come from Vercel env vars:
// SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN (from /api/spotify/login).

export const REDIRECT_URI = "https://ebrivera.com/api/spotify/callback";
export const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
].join(" ");

const basicAuth = () =>
  "Basic " +
  Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64");

export const isConfigured = () =>
  Boolean(process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET && process.env.SPOTIFY_REFRESH_TOKEN);

let cached: { token: string; expires: number } | null = null;

export async function accessToken(): Promise<string> {
  if (cached && cached.expires > Date.now() + 30_000) return cached.token;
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: basicAuth(), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: process.env.SPOTIFY_REFRESH_TOKEN ?? "" }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`token refresh failed: ${res.status}`);
  const data = await res.json();
  cached = { token: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return cached.token;
}

export async function exchangeCode(code: string) {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { Authorization: basicAuth(), "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: REDIRECT_URI }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`code exchange failed: ${res.status} ${await res.text()}`);
  return res.json() as Promise<{ refresh_token: string }>;
}

export async function api(path: string, init: RequestInit = {}) {
  const token = await accessToken();
  return fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers: { ...(init.headers ?? {}), Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
}

type SpotifyTrack = {
  name: string;
  uri: string;
  artists: { name: string }[];
  album: { name: string; images: { url: string; width: number }[] };
  external_urls: { spotify: string };
  duration_ms: number;
};

export const slimTrack = (t: SpotifyTrack) => ({
  title: t.name,
  artist: t.artists.map((a) => a.name).join(", "),
  album: t.album.name,
  art: [...t.album.images].sort((a, b) => a.width - b.width).find((i) => i.width >= 64)?.url ?? t.album.images[0]?.url ?? null,
  artLg: [...t.album.images].sort((a, b) => b.width - a.width)[0]?.url ?? null,
  url: t.external_urls.spotify,
  uri: t.uri,
  durationMs: t.duration_ms,
});
