/*
 * avsar-live — STAGED V2 worker. Deployable today; returns an empty overlay
 * until SOURCES are configured. Design in ../PLAN-V2.md.
 *
 * Contract served at GET /overlay (CORS: GET only, any origin):
 *   { checkedAt: ISO string,
 *     entries: { "<opportunity-id>": { status: "open"|"upcoming"|"closed"|"not-announced"|"exam-completed",
 *                deadline: "YYYY-MM-DD"|null, applyUrl: string|null, notificationUrl: string|null,
 *                confidence: "auto"|"human" } } }
 *
 * The frontend (index.html -> withLive) overlays these four fields onto the static
 * exam record: current status, application deadline, application URL and the
 * official notification URL. Anything missing falls back to the static data, so the
 * site keeps working unchanged when this worker is down or unconfigured.
 *
 * Rules baked in: read-only public pages / documented public APIs only,
 * KV-cached (12h), auto-extracted dates marked confidence:"auto".
 */

// Each source watches ONE public page/API and maps what it finds onto
// opportunity ids from ../data.js. Fill these in as access/keys arrive.
const SOURCES = [
  // { id: 'nta-calendar', url: 'https://www.nta.ac.in/', ids: ['jee-main','neet-ug','cuet-ug'], kind: 'llm-extract' },
  // { id: 'datagov-scholarships', url: 'https://api.data.gov.in/resource/...?api-key=$DATA_GOV_KEY', ids: [...], kind: 'json' },
];

const JSON_HEADERS = {
  'content-type': 'application/json',
  'access-control-allow-origin': '*',
  'cache-control': 'public, max-age=3600',
};

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method !== 'GET') return new Response('GET only', { status: 405 });
    if (url.pathname === '/overlay') {
      const cached = env.AVSAR_KV ? await env.AVSAR_KV.get('overlay') : null;
      return new Response(cached || JSON.stringify({ checkedAt: null, entries: {} }), { headers: JSON_HEADERS });
    }
    return new Response('avsar-live: staged. GET /overlay', { status: 404 });
  },

  async scheduled(_event, env, ctx) {
    ctx.waitUntil(refresh(env));
  },
};

async function refresh(env) {
  if (!SOURCES.length || !env.AVSAR_KV) return;
  const entries = {};
  for (const src of SOURCES) {
    try {
      const res = await fetch(src.url, { headers: { 'user-agent': 'avsar-live/1 (+https://vaibhavkumar.is-a.dev/build-what-moves-india/)' } });
      if (!res.ok) continue;
      const body = await res.text();
      const found = src.kind === 'json' ? mapJson(src, body) : await llmExtract(src, body, env);
      Object.assign(entries, found);
    } catch (_e) { /* one bad source never breaks the overlay */ }
  }
  await env.AVSAR_KV.put('overlay', JSON.stringify({ checkedAt: new Date().toISOString(), entries }), { expirationTtl: 60 * 60 * 24 * 3 });
}

function mapJson(_src, _body) {
  // TODO per-API mapping once a key is provided (data.gov.in etc.)
  return {};
}

async function llmExtract(src, html, env) {
  // Cascade: Groq -> Gemini -> Workers AI (keyless), same pattern as ananta-brain.
  // Prompt the model to emit the overlay contract for src.ids from the page text;
  // everything extracted here is tagged confidence:"auto".
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 12000);
  const prompt = `From this Indian exam/scheme notification page text, extract application status and deadline for these ids: ${src.ids.join(', ')}. Reply ONLY with JSON {"<id>":{"status":"open|upcoming|closed|not-announced|exam-completed","deadline":"YYYY-MM-DD or null","applyUrl":"url or null","notificationUrl":"url of the official notification PDF or null"}} for ids actually mentioned. Never invent a date or URL — use null when the page does not state it.\n\nPAGE: ${text}`;
  try {
    const out = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', { messages: [{ role: 'user', content: prompt }] });
    const parsed = JSON.parse((out.response.match(/\{[\s\S]*\}/) || ['{}'])[0]);
    const entries = {};
    for (const [id, v] of Object.entries(parsed)) {
      if (src.ids.includes(id)) entries[id] = { status: v.status || null, deadline: v.deadline || null, applyUrl: v.applyUrl || null, notificationUrl: v.notificationUrl || null, confidence: 'auto' };
    }
    return entries;
  } catch (_e) {
    return {};
  }
}
