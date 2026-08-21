# V2 plan — live data overlay (staged; activates when keys/pipelines are provided)

V1 is fully static and keyless. V2 keeps the same frontend and adds a **live overlay**: exact deadlines, "open now" badges, direct apply links, and newly-announced opportunities. Everything below is designed so that providing a key or pipeline unlocks a slice independently — no big-bang rewrite.

## Architecture

```
[sources]                    [Cloudflare Worker: avsar-live]                 [frontend]
official notification pages ──scheduled cron (2x/day)──► parse & normalize ──► KV cache ──► GET /overlay ──► index.html
public APIs (data.gov.in) ───────────────┘                    │                                  (LIVE_ENDPOINT const,
RSS (Employment News etc.) ──────────────┘                    └─ LLM date-extraction (Groq→Gemini→Workers AI cascade,
                                                                  same pattern as ananta-brain / lemon-brain)
```

- **Worker** `avsar-live` on the vaibhavpro9210 Cloudflare account (same as site-analytics / guestbook / ananta-brain). Scaffold in `worker/` — deployable today, returns an empty overlay until sources are configured.
- **Overlay contract** (frontend already consumes it when `LIVE_ENDPOINT` is set in `index.html`):
  ```json
  { "checkedAt": "2026-08-19T09:00:00Z",
    "entries": { "ssc-cgl": { "status": "open", "deadline": "2026-11-25",
                              "applyUrl": "https://...", "notificationUrl": "https://...",
                              "confidence": "auto" } } }
  ```
  Unknown ids are ignored; missing entries fall back to the static record. For the exam entries the frontend overlays exactly four fields — **status, application deadline, application URL and official notification URL** (`withLive()` in `index.html`) — and anything marked `confidence: "auto"` renders with a visible "auto-extracted, verify" hint. The overlay can only *add* precision, never break the static site.

## Source slices (each unlocks independently)

| Slice | Needs | What it adds |
|---|---|---|
| data.gov.in catalog APIs | free API key (user signup) | scheme metadata, some scholarship windows |
| Notification-page watcher | nothing (public pages) but needs the worker deployed + LLM keys for parsing | exact dates for NTA/UPSC/SSC/IBPS calendars — fetch public calendar PDFs/pages on cron, extract dates via LLM, human-reviewable diff in KV before publish |
| Employment News / RSS feeds | nothing, worker only | newly announced gov recruitments |
| Buddy4Study / scholarship aggregator API | partner API key | private-scholarship deadlines |
| LLM extraction cascade | GROQ_API_KEY / GEMINI_API_KEY (wrangler secrets); Workers AI `[ai]` binding works keyless as last resort | turns unstructured notification text into the overlay contract |

## Guardrails (hackathon rules & good sense)

- Read-only, public pages and documented public APIs only. No live government system integration, no scraping of personal/restricted data, no undocumented private APIs.
- LLM-extracted dates are marked `"confidence": "auto"` in the overlay and rendered with an "(auto-extracted, verify)" hint until a human confirms.
- Rate-limited, cached in KV (12h TTL), cron 2×/day — polite to source sites.
- Secrets only as wrangler secrets; nothing in the repo.

## Activation checklist

1. `cd worker && npx wrangler deploy` (account vaibhavpro9210) — worker goes live returning `{entries:{}}`.
2. Add secrets: `npx wrangler secret put GROQ_API_KEY` (optional GEMINI_API_KEY; Workers AI binding needs none).
3. Set `SOURCES` in `worker/worker.js` (list of watcher configs; examples inline).
4. Flip `const LIVE_ENDPOINT = null` → `"https://avsar-live.vaibhavpro9210.workers.dev/overlay"` in `index.html`, redeploy Pages.
