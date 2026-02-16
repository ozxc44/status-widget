# Status Widget

> 🚀 **Self-hosted HTTP monitoring with embeddable status widget** — Free, lightweight, privacy-focused

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/github/languages/code-size/ozxc44/status-widget?style=flat)](https://github.com/ozxc44/status-widget)
[![Stars](https://img.shields.io/github/stars/ozxc44/status-widget?style=social)](https://github.com/ozxc44/status-widget/stargazers)

---

## 🎯 Why?

**Statuspage.io costs $49/month.** That's too much when you're starting out.

**Status Widget is free forever.** Self-host it, embed it, own your data.

---

## ✨ What It Does

| Feature | Description |
|---------|-------------|
| **Real-time Monitoring** | Check any HTTP endpoint every 60 seconds |
| **Embeddable Widget** | Add status to your site with one line of code |
| **Response Time** | See how fast your site responds |
| **History** | Check past status changes |
| **Uptime %** | Know your availability |

---

## 🚀 30-Second Setup

```bash
# Clone
git clone https://github.com/ozxc44/status-widget.git
cd status-widget

# Install
npm install

# Start
npm start
```

Visit http://localhost:3001

**Live Demo**: https://status.zhuzeyang.xyz

---

## 📦 Deploy Anywhere

### Deploy to Your Server

```bash
./deploy.sh
```

Requires Node.js. Configure `deploy.sh` with your server details.

### Deploy to Cloudflare Workers (Free)

1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `wrangler publish`

---

## 🎯 Use Cases

| Who | Why |
|-----|-----|
| **Indie Hackers** | $49/mo is too much for a side project |
| **SaaS Startups** | Need free monitoring at zero-revenue stage |
| **Open Source** | Want self-hosted, no vendor lock-in |
| **Privacy** | Keep your data on your own servers |

---

## 📎 Embed on Your Site

### Option 1: Script Tag (Recommended)

```html
<script src="https://your-domain.com/widget.js?url=example.com"></script>
<div id="status-widget"></div>
```

### Option 2: iframe

```html
<iframe src="https://your-domain.com/widget?url=example.com"
        width="200" height="60" frameborder="0">
</iframe>
```

### Result

A clean status badge showing:
- 🟢 Online / 🔴 Offline
- Response time in ms
- "Powered by Status Widget" link

---

## 🔌 API

### Check Status

```
GET /api/check?url=<url>
```

Response:
```json
{
  "success": true,
  "url": "https://example.com",
  "isOnline": true,
  "statusCode": 200,
  "responseTime": 123,
  "timestamp": 1234567890
}
```

### Get History

```
GET /api/history?url=<url>
```

Response:
```json
{
  "success": true,
  "url": "https://example.com",
  "history": [
    { "isOnline": true, "statusCode": 200, "responseTime": 123, "timestamp": 1234567890 },
    { "isOnline": false, "statusCode": 0, "responseTime": 5000, "timestamp": 1234567880 }
  ]
}
```

---

## 🆚 Alternatives

| | Status Widget | Statuspage.io | Uptime Kuma |
|---|---|---|---|
| **Price** | Free | $49+/mo | Free (self-hosted) |
| **Hosted** | No | Yes | No |
| **Setup Time** | 30 sec | 5 min | 10+ min |
| **Widget** | Yes | Yes | No |
| **Alerts** | Coming soon | Yes | Yes |

---

## 🗺️ Roadmap

- [ ] Email alerts when site goes down
- [ ] Slack/Discord webhook integration
- [ ] Custom check intervals
- [ ] Dark mode widget
- [ ] Historical uptime graphs

**Vote on features:** [GitHub Issues](https://github.com/ozxc44/status-widget/issues)

---

## 📄 License

MIT — Free for personal and commercial use.

---

## 🙏 Acknowledgments

Built by [Auto Company](https://github.com/auto-company) — An autonomous AI company experimenting with indie SaaS development.

---

**⭐ Star us on GitHub** — It helps more people discover Status Widget!

[https://github.com/ozxc44/status-widget](https://github.com/ozxc44/status-widget)
