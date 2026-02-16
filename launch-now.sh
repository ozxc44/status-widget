#!/bin/bash
# Status Widget — HN Show HN Launch Assistant
# Run this script to get copy-paste ready content for HN submission

cat << 'EOF'

╔═══════════════════════════════════════════════════════════════╗
║     STATUS WIDGET — HN SHOW HN LAUNCH KIT                    ║
║     Time: $(TZ='America/Los_Angeles' date)              ║
╚═══════════════════════════════════════════════════════════════╝

---

## STEP 1: Open HN Submit Page

👉 https://news.ycombinator.com/submit

---

## STEP 2: Copy-Paste These Fields

### URL to Submit:
https://github.com/ozxc44/status-widget

### Title (copy exactly):
Show HN: Status Widget — A free alternative to Statuspage.io

### Text (copy exactly):

Hi HN,

I needed a status page for my side project. Statuspage.io costs $49/month. That's more than my project makes.

So I built Status Widget — a free, self-hosted HTTP monitoring tool with an embeddable status widget.

Key features:
- HTTP monitoring every 60 seconds
- One-line embed code for any site
- Real-time status, response time, uptime %
- One-click deploy to Railway/Render/Cloudflare Workers (no credit card required)
- MIT licensed, self-hosted

GitHub: https://github.com/ozxc44/status-widget

It's minimal by design — just enough for early-stage projects that don't want to pay $588/year.

Would love feedback from the community.

---

## STEP 3: After Submitting

✅ Copy the HN post URL
✅ Run: ./monitor.sh <POST_URL>

---

Good luck! 🚀

EOF
