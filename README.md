# Avsar (अवसर) — find the government exam you can apply for

**Live:** https://avsar.pages.dev/ (the old GitHub Pages URL forwards here, filters preserved)

Built for [Build What Moves India](https://buildwhatmovesindia.com/) — an independent hackathon prototype, **not** an official government product.

## The problem

Opportunity information in India is scattered across dozens of portals — NTA, UPSC, SSC, NSP, state boards, bank recruitment sites, embassy scholarship pages — each with its own maze. The person who loses is the 17-year-old in a small town (or the 28-year-old switching tracks) who doesn't even know which doors exist for them, let alone which they're eligible for.

## The solution

**Discover → Understand → Prepare → Apply**, in one place, for India's major government exams.

- **46 exam pages** covering UPSC, SSC, Railways (RRB), IBPS, SBI, RBI, NABARD, SEBI, LIC, GIC Re, India Post, defence (AFCAT and the three Agniveer streams), CTET, DRDO, ISRO, CSIR and AIIMS. Each page answers, in plain language: what is this, can I apply, when does it open, what is the actual notification, what do I study, and where do I apply.
- **The real official notification, embedded.** Where the government host permits framing, the actual PDF renders on the page; where it sends `X-Frame-Options` (UPSC, RRB, SBI, SEBI, LIC, GIC, ISRO, DRDO) you get a clear "cannot be previewed here" message and a large **Open official PDF** button instead of a blank box. Nothing is re-hosted, proxied or modified.
- **Official preparation resources only** — syllabus, exam pattern, previous question papers (collapsed by year), answer keys and official mock tests, each tagged ✓ Official. Where a body genuinely publishes none, the page says so and links its official exam page instead of inventing a link.
- **Honest dates.** A deadline appears only when an official notification gives one. Forecast dates are labelled **Expected** and carry the official source (for UPSC, its own Annual Calendar 2027). If there is no current notification, the page says *Notification not yet released*.
- **8 languages** — English, हिन्दी, मराठी, ಕನ್ನಡ, தமிழ், తెలుగు, বাংলা, മലയാളം — with exam names and acronyms left recognisable. Search works in those languages too ("सरकारी परीक्षा", "அரசு தேர்வு"), and searching "ssc cgl syllabus" or "upsc pyq" jumps straight to that section.
- **Three filters that matter** (organization, education, status) up front; age, fee, month and category filters are still there under *Filters*.
- **Dark, light and colorblind modes** (colorblind mode switches to an Okabe-Ito palette; category glyph shapes are always on so color is never the only signal), keyboard-navigable, 44px touch targets, mobile-first.

The wider dataset it grew from — scholarships, college entrances, study-abroad routes, private fellowships — is still in the same list below the exams, with the same age/education/fee/month filters.

## How it stays fresh (v1, zero keys)

This is the fully open version — it needs no API keys or private access:

- `data.js` is the single source of truth: 164 hand-verified entries, 46 of them full exam records. Every exam URL in it was fetched and HTTP-checked on 21 August 2026 (wrong official URLs are the worst failure mode this product can have).
- A **weekly GitHub Action** (`.github/workflows/data-health.yml`, stdlib-only Python) checks all 511 URLs the site can send a person to — official site, exam page, notification PDF, application link, syllabus, exam pattern, every previous paper, answer key and mock test — and also validates the exam records themselves (duplicate ids, unknown organization or status, malformed or contradictory dates, an "open" exam with no deadline or notification). It commits the result to `health.json`, which the site reads to show "this document failed our last check" markers, and opens a GitHub issue listing what needs a human. Government sites that answer 403/405/999 or negotiate a TLS version Python rejects are treated as alive-but-blocked, not dead.
- Data fixes are one-file PRs. See the schema comment at the top of `data.js` and the exam-layer notes in `CLAUDE.md`.

Exam dates come from the official notification or the recruiting body's own calendar. Everything else in the dataset still uses **typical recurring windows** ("typically Nov–Jan", months `[11,12,1]`) — those stay true across years without a scraper.

## V2: live data (staged, needs keys)

`worker/` contains a staged Cloudflare Worker and `PLAN-V2.md` the full design: given API keys / data-pipeline access, a scheduled worker overlays **exact deadlines, "open now" status and direct apply links** onto the same static site (the frontend already has the hook — one constant, `LIVE_ENDPOINT`, is `null` today). Nothing in v2 touches live government systems; it reads public notification pages and public APIs only.

## Run it

Open `index.html` in a browser. That's it — no build, no dependencies, works from `file://`.

Screenshot / test hooks: `#shot=home|dark|cb|filtered|exam|prep` (deterministic presets), and any view is reproducible from its share URL — `#age=17&edu=12th&cat=college,scholarship&month=11`, `#org=UPSC&status=open`, `#exam=ssc-cgl`, `#exam=upsc-cse&sec=papers`, `#lang=ta`.

## Honesty box (what's real, what's mocked)

- Real: the full dataset (hand-researched, every exam URL fetched and verified 21 Aug 2026), all filtering/sorting, the exam detail pages, the PDF embed and its fallback, 8-language UI, themes, link-health pipeline.
- Curated, not live: a snapshot. Application windows close; a status that says "open" today can be closed tomorrow. Always confirm on the official page before paying anything.
- Deliberately absent: no previous papers for SSC, RRB, IBPS, SBI, RBI, LIC, SEBI, AFCAT or NORCET — those bodies do not publish a public archive, so the pages say so rather than link a coaching site. No notification for NABARD Grade A/B, India Post GDS, the three Agniveer streams or AIIMS NORCET — none is live right now.
- Mocked/staged: the live-deadline overlay (v2 worker) is scaffolded but not deployed — it needs keys.
- This is an independent prototype. It links **to** official portals; it is not one.
