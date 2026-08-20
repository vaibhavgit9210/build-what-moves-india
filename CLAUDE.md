# build-what-moves-india (Avsar)

Opportunity-finder portal for the Build What Moves India hackathon (Varun Mayya × OpenAI, submission 27 Aug 2026, finale 12 Sep). Repo `vaibhavgit9210/build-what-moves-india`, **live at https://avsar.pages.dev/** (Cloudflare Pages project `avsar` on the vaibhavpro9210 account; deploy = `npx wrangler pages deploy <dist with index.html,data.js,health.json> --project-name avsar --branch main`). The old GitHub Pages URL (https://vaibhavkumar.is-a.dev/build-what-moves-india/) still deploys from `gh-pages` but JS-forwards to avsar.pages.dev preserving the hash — so a deploy is THREE pushes: `main`, `main:gh-pages`, and wrangler pages deploy. The beacon sends page `/avsar/` on pages.dev to avoid colliding with the portfolio homepage's `/` in site-analytics.

**Hackathon compliance note:** the brief mandates Codex/OpenAI-model involvement in the build — that's the user's call to reconcile before submitting; don't misrepresent tooling in any write-up.

## Shape

- `index.html` — the whole app (no build, no CDN, system fonts, works from `file://`). All data rendered via `createElement`/`textContent`, never innerHTML. Filter state lives in `location.hash` → every filtered view is a shareable URL.
- `data.js` — `window.AVSAR_DATA = {updated, opportunities:[...]}`, ~150 entries, the single source of truth. Schema: id/name/category/oneLiner/ageMin/ageMax/minEducation(any|10th|12th|diploma|ug|pg)/feeINR(null=varies, fails fee-cap filters on purpose)/benefit/window/windowMonths(1-12, []=rolling)/nextExpected/frequency/official/resources(≤3)/tags. Eligibility numbers are GENERAL-category. Dataset was researched + adversarially verified by a 15-agent workflow (Aug 2026); wrong official URLs are the worst failure mode — verify before editing one.
- `health.json` — written weekly by `.github/workflows/data-health.yml` (runs `scripts/check_links.py`, stdlib-only; 403/405/999 = alive-but-blocked, NOT a failure — many .gov.in sites block bots). The Action commits to main AND pushes main:gh-pages, and opens/updates a GitHub issue. This is the keyless "updates itself" story.
- `worker/` + `PLAN-V2.md` — **staged, not deployed** V2: `avsar-live` Cloudflare Worker (would go on vaibhavpro9210 account) serving a `/overlay` of exact deadlines. Frontend hook: `LIVE_ENDPOINT` const in index.html, currently `null`.

## Gotchas

- Categories are 6 fixed keys (`college gov-job scholarship abroad private-job resource` — gov-exam was merged into gov-job); colors are `--c-<key>` CSS vars with light/dark/colorblind (Okabe-Ito) variants, and each has a text glyph so color is never the only signal.
- Screenshot hooks: `#shot=home|dark|cb|filtered`; any real filter hash works too (`#age=17&edu=12th&cat=college`). Static page, no rAF — but the beacon's `setInterval` means headless Chrome needs `--timeout` not just `--virtual-time-budget` when loading over http (fine over `file://`, beacon exits early there).
- The month filter and "soonest to apply" sort read `windowMonths`; `[]` means rolling and matches every month.
