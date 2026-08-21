#!/usr/bin/env python3
"""Weekly data-health check for Avsar. Stdlib only, no keys.

Reads data.js and:
  * checks every URL the site can send a person to (official site, exam page,
    notification PDF, application link, syllabus, exam pattern, previous papers,
    answer keys, mock tests, curated resources),
  * validates the exam records (duplicate ids/names, unknown organization or
    status, malformed or contradictory dates, missing notification for an
    "open" exam),
  * flags entries whose nextExpected window looks past,
and writes health.json (consumed by the site). Exit code 0 always — findings go
to health.json and the GitHub Action opens an issue.
"""
import concurrent.futures
import json
import re
import ssl
import sys
import urllib.request
from datetime import date, datetime, timezone

UA = "Mozilla/5.0 (compatible; avsar-health/1; +https://avsar.pages.dev/)"
MONTHS = {m: i + 1 for i, m in enumerate(
    ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"])}

ORGS = {"UPSC", "SSC", "Railways", "IBPS", "SBI", "RBI", "NABARD", "SEBI", "LIC", "GIC",
        "India Post", "Defence", "Teaching", "DRDO", "ISRO", "CSIR", "AIIMS"}
STATUSES = {"open", "upcoming", "closed", "not-announced", "exam-completed"}
ISO = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def load_data(path="data.js"):
    src = open(path, encoding="utf-8").read()
    m = re.search(r"window\.AVSAR_DATA\s*=\s*(\{.*\});?\s*$", src, re.S)
    if not m:
        sys.exit("could not parse data.js")
    return json.loads(m.group(1))


def check(url):
    """Return (ok, note). Blocked-but-alive (403/405/999) counts as ok — many
    .gov.in sites reject bots; only hard failures (DNS, timeout, 404/410/5xx)
    are flagged."""
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE  # several .gov.in chains are broken; reachability is the question here
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(url, method=method, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=25, context=ctx) as r:
                if r.status < 400:
                    return True, str(r.status)
        except urllib.error.HTTPError as e:
            if e.code in (403, 405, 406, 429, 999):
                return True, f"blocked({e.code})"
            if method == "GET":
                return False, f"http {e.code}"
        except Exception as e:
            # Some government hosts negotiate a TLS version this Python build rejects
            # while every browser accepts it. That is a client limitation, not a dead
            # link, so treat it like the 403/999 bot-blocks above.
            if "TLSV1_ALERT_PROTOCOL_VERSION" in str(e) or "UNSUPPORTED_PROTOCOL" in str(e):
                return True, "tls-handshake(client)"
            if method == "GET":
                return False, type(e).__name__
    return False, "unreachable"


MONTH_RE = re.compile(
    r"\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+(?:\d{1,2}\s*,?\s+)?(20\d\d)\b",
    re.IGNORECASE)


def window_stale(next_expected):
    """True only if EVERY month-year in nextExpected is in the past — ranges
    like "Nov 2026 – Jan 2027" stay fresh until their latest date passes.
    Strings with no month-adjacent year ("Fall 2026") are never flagged."""
    if not next_expected:
        return False
    dates = [(int(m.group(2)), MONTHS[m.group(1).lower()])
             for m in MONTH_RE.finditer(next_expected)]
    if not dates:
        return False
    today = date.today()
    return max(dates) < (today.year, today.month)


def urls_of(o):
    """Every URL this entry can send a person to, tagged with what it is."""
    out = [("official", o["official"])]
    out += [("resource", r["url"]) for r in o.get("resources", [])]
    if o.get("type") != "exam":
        return out
    for key in ("officialWebsite", "officialExamPage", "pastPapersPage", "answerKeysPage"):
        if o.get(key):
            out.append((key, o[key]))
    notif = o.get("notification") or {}
    for key in ("pdfUrl", "url"):
        if notif.get(key):
            out.append(("notification", notif[key]))
    for x in o.get("extraNotifications", []):
        if x.get("url"):
            out.append(("notification-extra", x["url"]))
    if (o.get("application") or {}).get("url"):
        out.append(("application", o["application"]["url"]))
    for key in ("syllabus", "examPattern"):
        if (o.get(key) or {}).get("url"):
            out.append((key, o[key]["url"]))
    if (o.get("expected") or {}).get("sourceUrl"):
        out.append(("expected-source", o["expected"]["sourceUrl"]))
    for grp in o.get("pastPapers", []):
        for p in grp.get("papers", []):
            out.append(("past-paper", p["url"]))
    for k in o.get("answerKeys", []):
        out.append(("answer-key", k["url"]))
    for m in o.get("mockTests", []):
        out.append(("mock-test", m["url"]))
    return out


def validate(data):
    """Data-quality checks that need no network."""
    issues, seen_ids, seen_names = [], {}, {}
    for o in data["opportunities"]:
        oid = o.get("id")
        if not oid:
            issues.append({"id": "?", "problem": "entry has no id"})
            continue
        if oid in seen_ids:
            issues.append({"id": oid, "problem": "duplicate id"})
        seen_ids[oid] = True
        if not o.get("name"):
            issues.append({"id": oid, "problem": "missing name"})
        if o.get("type") != "exam":
            continue

        name = (o.get("name") or "").strip().lower()
        if name in seen_names:
            issues.append({"id": oid, "problem": f"duplicate exam name (also {seen_names[name]})"})
        seen_names[name] = oid

        if o.get("organization") not in ORGS:
            issues.append({"id": oid, "problem": f"unknown organization {o.get('organization')!r}"})
        if o.get("status") not in STATUSES:
            issues.append({"id": oid, "problem": f"invalid status {o.get('status')!r}"})

        app = o.get("application") or {}
        exp = o.get("expected") or {}
        notif = o.get("notification") or {}
        dates = {"application.openingDate": app.get("openingDate"),
                 "application.closingDate": app.get("closingDate"),
                 "examDate": o.get("examDate"),
                 "notification.date": notif.get("date"),
                 "expected.notificationDate": exp.get("notificationDate"),
                 "expected.closingDate": exp.get("closingDate"),
                 "expected.examDate": exp.get("examDate")}
        for label, v in dates.items():
            if v is not None and not ISO.match(str(v)):
                issues.append({"id": oid, "problem": f"{label} is not YYYY-MM-DD: {v!r}"})
        o_open, o_close = app.get("openingDate"), app.get("closingDate")
        if ISO.match(str(o_open or "")) and ISO.match(str(o_close or "")) and o_close < o_open:
            issues.append({"id": oid, "problem": "application closes before it opens"})

        if o.get("status") == "open":
            if not o_close:
                issues.append({"id": oid, "problem": "status is open but no application closing date"})
            elif ISO.match(o_close) and o_close < date.today().isoformat():
                issues.append({"id": oid, "problem": f"status is open but closing date {o_close} has passed"})
            if not (notif.get("pdfUrl") or notif.get("url")):
                issues.append({"id": oid, "problem": "status is open but no notification link"})
        if o.get("status") == "not-announced" and notif.get("current") is True:
            issues.append({"id": oid, "problem": "status not-announced but notification marked current"})
        if not (o.get("eligibility") or {}).get("education"):
            issues.append({"id": oid, "problem": "no plain-language education requirement"})
        if not o.get("verifiedAt"):
            issues.append({"id": oid, "problem": "no verifiedAt date"})
    return issues


def main():
    data = load_data()
    issues = validate(data)

    pairs, seen = [], set()
    for o in data["opportunities"]:
        for kind, url in urls_of(o):
            if not url:
                continue
            if not url.startswith("https://") and not url.startswith("http://"):
                issues.append({"id": o["id"], "problem": f"{kind} URL is not absolute: {url}"})
                continue
            pairs.append((o["id"], kind, url))
            seen.add(url)

    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        for url, res in zip(seen, pool.map(check, list(seen))):
            results[url] = res

    bad_links = []
    for oid, kind, url in pairs:
        ok, note = results.get(url, (False, "unchecked"))
        if not ok:
            bad_links.append({"id": oid, "kind": kind, "url": url, "note": note})

    stale = [o["id"] for o in data["opportunities"] if window_stale(o.get("nextExpected"))]
    health = {
        "checkedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "urlsChecked": len(results),
        "badLinks": bad_links,
        "staleWindows": stale,
        "dataIssues": issues,
    }
    json.dump(health, open("health.json", "w", encoding="utf-8"), indent=1)
    print(f"checked {len(results)} urls: {len(bad_links)} bad, {len(stale)} stale windows, "
          f"{len(issues)} data issues")


if __name__ == "__main__":
    main()
