// Remembers which queued songs came from visitors, so everyone can see "from <name>".
// Uses Upstash Redis over REST when its env vars exist (Vercel Marketplace sets KV_REST_API_* or
// UPSTASH_REDIS_REST_*); otherwise falls back to an in-memory map that resets with the server.

const URL_ = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
const TTL_S = 6 * 60 * 60;
const memory = new Map<string, { name: string; expires: number }>();

async function redis(cmd: (string | number)[]) {
  const res = await fetch(URL_!, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  return (await res.json()).result;
}

export async function rememberAdd(uri: string, name: string) {
  const who = name || "a visitor";
  memory.set(uri, { name: who, expires: Date.now() + TTL_S * 1000 });
  if (URL_ && TOKEN) await redis(["SET", `qadd:${uri}`, who, "EX", TTL_S]).catch(() => {});
}

export async function whoAdded(uris: string[]): Promise<(string | null)[]> {
  if (!uris.length) return [];
  if (URL_ && TOKEN) {
    const r = await redis(["MGET", ...uris.map((u) => `qadd:${u}`)]).catch(() => null);
    if (Array.isArray(r)) return r;
  }
  return uris.map((u) => {
    const m = memory.get(u);
    return m && m.expires > Date.now() ? m.name : null;
  });
}

// Songs added while nothing is playing. Spotify can only queue to an active player, so these wait
// here and get sent to the queue the next time now-playing sees music playing.
type Pending = { uri: string; name: string };
const MAX_PENDING = 100;
let memPending: Pending[] = [];

export async function addPending(uri: string, name: string) {
  const item = { uri, name };
  if (URL_ && TOKEN) {
    await redis(["RPUSH", "qpending", JSON.stringify(item)]);
    await redis(["LTRIM", "qpending", -MAX_PENDING, -1]).catch(() => {});
    return;
  }
  memPending = [...memPending, item].slice(-MAX_PENDING);
}

export async function takePending(): Promise<Pending[]> {
  if (URL_ && TOKEN) {
    const r = await redis(["LPOP", "qpending", MAX_PENDING]).catch(() => null);
    return Array.isArray(r) ? r.map((x: string) => JSON.parse(x)) : [];
  }
  const out = memPending;
  memPending = [];
  return out;
}

export async function putBackPending(items: Pending[]) {
  if (!items.length) return;
  if (URL_ && TOKEN) await redis(["LPUSH", "qpending", ...items.map((i) => JSON.stringify(i)).reverse()]).catch(() => {});
  else memPending = [...items, ...memPending];
}

export async function pendingCount(): Promise<number> {
  if (URL_ && TOKEN) return Number(await redis(["LLEN", "qpending"]).catch(() => 0)) || 0;
  return memPending.length;
}
