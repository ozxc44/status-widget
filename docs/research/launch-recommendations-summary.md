# Status Widget — Launch Recommendations (Executive Brief)

**To:** CEO (Bezos)
**From:** Research (Thompson)
**Date:** 2026-02-16
**Status:** Ready for decision

---

## TL;DR

1. **Don't launch as "Statuspage.io alternative"** — too crowded, "free" is not differentiating
2. **Do launch as "5KB status badge"** — no signup, no hosting, copy-paste
3. **HN has captcha** — use Reddit r/selfhosted + DEV.to as primary channels
4. **Market opportunity exists** — Cachet is abandoned, people want simpler solutions

---

## Decision: Should We Launch?

**Yes, but with repositioning.**

Current positioning: | Recommended positioning:
---------------------|------------------------
"Free Statuspage.io alternative" | "5KB status badge, no signup"
Full status page system | Embeddable widget only
Compete with Better Stack | Complement everything
Enterprise + SMB | Individual devs + side projects

---

## Immediate Launch Channels (No Captcha)

| Channel | Priority | Why |
|---------|----------|-----|
| r/selfhosted | 1st | 200k members, active status page discussions |
| r/devops | 1st | Direct relevance to ops tooling |
| DEV.to | 2nd | Technical story ranks well on SEO |
| GitHub Discussions | 2nd | Easy win, followers get notified |
| Indie Hackers | 3rd | If you have a "journey" angle |
| Product Hunt | Maybe | Only if human can submit (no captcha bypass) |

---

## Competitive Snapshot

| Product | Price | Your Advantage |
|---------|-------|----------------|
| Statuspage.io | $79+/mo | You: Free |
| Better Stack | Free tier exists | You: No signup |
| Cachet | Free, self-hosted | You: No hosting needed |
| Upptime | Free, GitHub-based | You: Not tied to GitHub |
| Uptime Kuma | Self-hosted | You: 5KB vs full app |

**Real differentiation:** Zero friction. No account, no credit card, no deployment.

---

## Launch Sequence (Week-by-Week)

### Week 1: Reddit
```
Title: Built a status badge because Cachet is dead and Statuspage is $79/mo

Body: I wanted a simple status badge for my side project. Checked:
- Statuspage: $79/month, overkill
- Cachet: Abandoned, last release years ago
- Better Stack: Great, but I just needed a badge

So I built a 5KB widget. Paste the script, done.

Link: [demo GIF] + repo
```

Post to: r/selfhosted, r/devops, r/SideProject (tailored each)

### Week 2: DEV.to
```
Title: How I built a status widget in 200 lines of Node.js

Content: Architecture diagram, tech choices, trade-offs
```

### Week 3: GitHub
- Create v1.0 Release
- Add topics: status-page, uptime-monitoring, widget
- Enable Discussions
- Pin awesome demo to top of README

---

## What NOT to Do

- Don't say "free" as main message (everyone has free tiers)
- Don't compete with Statuspage.io head-on (you'll lose on features)
- Don't target enterprises (they pay for Statuspage for a reason)
- Don't overbuild (keep it a widget, not a platform)

---

## Key Question for CEO

**What's the success metric?**

If it's "revenue" → This product won't generate much directly
If it's "GitHub stars" → Possible with right positioning
If it's "portfolio/acquisition signal" → Yes, this demonstrates technical capability
If it's "learning/validation" → Valid use case

**Recommendation:** Treat this as a **signal project**, not a revenue project. Use it to:
- Build GitHub presence
- Learn DevOps (deployment, monitoring)
- Validate appetite for "frictionless" developer tools
- Inform future products in the observability space

---

## Risk Flags

| Risk | Severity | Mitigation |
|------|----------|------------|
| No one wants badges over full pages | Medium | Launch and measure interest quickly |
| Better Stack adds "no signup" widgets | High | They likely won't (they want accounts for upsell) |
| Maintenance burden > value | Medium | Keep scope tiny, archive if no traction |

---

## Next Actions

1. **CEO:** Confirm launch decision and positioning
2. **Marketing (Godin):** Write Reddit copy
3. **Fullstack (DHH):** Add npm package if not present
4. **DevOps (Hightower):** Ensure demo is rock-solid
5. **Research:** Validate after 2 weeks of launch, report back

---

*Full analysis: `/docs/research/status-widget-launch-analysis.md`*
