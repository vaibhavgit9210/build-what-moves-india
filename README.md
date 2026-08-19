# Avsar (अवसर) — one honest list of India's opportunity doors

**Live:** https://vaibhavkumar.is-a.dev/build-what-moves-india/

Built for [Build What Moves India](https://buildwhatmovesindia.com/) — an independent hackathon prototype, **not** an official government product.

## The problem

Opportunity information in India is scattered across dozens of portals — NTA, UPSC, SSC, NSP, state boards, bank recruitment sites, embassy scholarship pages — each with its own maze. The person who loses is the 17-year-old in a small town (or the 28-year-old switching tracks) who doesn't even know which doors exist for them, let alone which they're eligible for.

## The solution

One list. Honest filters. You say your **age**, your **education**, what **fee** you can afford, and **when** you can apply — Avsar shows every exam, scholarship, government job, private route and study-abroad door you're eligible for, each with a one-liner, its typical application window, and the **real official link** plus a couple of curated resources. No explanations you didn't ask for, no ads, no login.

- **List view** with search, sort (soonest to apply / name / fee) and shareable filter URLs (the filters live in the `#hash`, so a link *is* a saved search).
- **Dark, light and colorblind modes** (colorblind mode switches to an Okabe-Ito palette; category glyph shapes are always on so color is never the only signal).
- **Any age group** — the dataset spans class-8 scholarships to no-age-limit exams like GATE.

## How it stays fresh (v1, zero keys)

This is the fully open version — it needs no API keys or private access:

- `data.js` is the single source of truth: ~150 hand-verified entries with eligibility, fees, benefits, typical windows and official URLs. Every entry was adversarially fact-checked (wrong official URLs are the worst failure mode this product can have).
- A **weekly GitHub Action** (`.github/workflows/data-health.yml`, stdlib-only Python) checks every official + resource link and flags entries whose expected window has passed. It commits the result to `health.json`, which the site reads to show "link may be down / needs re-verification" markers and the last-checked date — and opens a GitHub issue listing what needs a human.
- Data fixes are one-file PRs. See the schema comment at the top of `data.js`.

Dates are stored as **typical recurring windows** ("typically Nov–Jan", months `[11,12,1]`), not exact deadlines — recurring windows stay true across years without a scraper; exact dates are v2's job.

## V2: live data (staged, needs keys)

`worker/` contains a staged Cloudflare Worker and `PLAN-V2.md` the full design: given API keys / data-pipeline access, a scheduled worker overlays **exact deadlines, "open now" status and direct apply links** onto the same static site (the frontend already has the hook — one constant, `LIVE_ENDPOINT`, is `null` today). Nothing in v2 touches live government systems; it reads public notification pages and public APIs only.

## Run it

Open `index.html` in a browser. That's it — no build, no dependencies, works from `file://`.

Screenshot / test hooks: `#shot=home|dark|cb|filtered` (deterministic presets), and any filter state is reproducible from its share URL, e.g. `#age=17&edu=12th&cat=college,scholarship&month=11`.

## Honesty box (what's real, what's mocked)

- Real: the full dataset (hand-researched + verified Aug 2026), all filtering/sorting, themes, link-health pipeline.
- Curated, not live: dates are typical windows; always confirm on the official page before paying anything.
- Mocked/staged: the live-deadline overlay (v2 worker) is scaffolded but not deployed — it needs keys.
- This is an independent prototype. It links **to** official portals; it is not one.
