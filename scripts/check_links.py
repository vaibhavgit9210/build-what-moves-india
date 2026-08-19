#!/usr/bin/env python3
"""Weekly data-health check for Avsar. Stdlib only, no keys.

Reads data.js, checks every official + resource URL, flags entries whose
nextExpected window looks past, and writes health.json (consumed by the site).
Exit code 0 always — findings go to health.json and the Action opens an issue.
"""
import json
import re
import ssl
import sys
import urllib.request
from datetime import date, datetime, timezone

UA = "Mozilla/5.0 (compatible; avsar-health/1; +https://vaibhavkumar.is-a.dev/build-what-moves-india/)"
MONTHS = {m: i + 1 for i, m in enumerate(
    ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"])}


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


def main():
    data = load_data()
    bad_links, stale = [], []
    seen = {}
    for o in data["opportunities"]:
        urls = [("official", o["official"])] + [("resource", r["url"]) for r in o.get("resources", [])]
        for kind, url in urls:
            if url not in seen:
                seen[url] = check(url)
            ok, note = seen[url]
            if not ok:
                bad_links.append({"id": o["id"], "kind": kind, "url": url, "note": note})
        if window_stale(o.get("nextExpected")):
            stale.append(o["id"])
    health = {
        "checkedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "urlsChecked": len(seen),
        "badLinks": bad_links,
        "staleWindows": stale,
    }
    json.dump(health, open("health.json", "w", encoding="utf-8"), indent=1)
    print(f"checked {len(seen)} urls: {len(bad_links)} bad, {len(stale)} stale windows")


if __name__ == "__main__":
    main()
