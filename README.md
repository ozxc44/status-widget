# Status Widget

> 🚀 Self-hosted HTTP monitoring with embeddable status widget

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-orange)](https://workers.cloudflare.com/)
[![Size](https://img.shields.io/github/languages/code-size/ozxc44/status-widget?style=flat)](https://github.com/ozxc44/status-widget)
[![Stars](https://img.shields.io/github/stars/ozxc44/status-widget?style=social)](https://github.com/ozxc44/status-widget/stargazers)
[![Statuspage.io Alternative](https://img.shields.io/badge/Alternative_to-Statuspage.io-blue)](https://www.statuspage.io/)

## ✨ Features

- **Real-time HTTP Monitoring** — Monitor any HTTP endpoint
- **Embeddable Widget** — Add status to your site with iframe or script tag
- **Response Time Tracking** — See how fast your site responds
- **Historical Records** — Check past status changes
- **Uptime Statistics** — Know your availability percentage

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start server
npm start
```

Visit http://localhost:3001

## 📦 Deploy to Cloudflare Workers

```bash
# Deploy to Cloudflare (free tier, 30 seconds)
./deploy.sh
```

Requires [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/).

## 🎯 Use Cases

| Who | Why |
|-----|-----|
| **Indie Developers** | Statuspage.io @ $49/month is too expensive |
| **SaaS Founders** | Need free monitoring at zero-revenue stage |
| **Open Source Maintainers** | Want self-hosted solution |
| **Learners** | Reference for Cloudflare Workers projects |

## 📎 Embed Options

### iframe

```html
<iframe src="https://your-domain.workers.dev/widget?url=example.com"
        width="200"
        height="60"
        frameborder="0">
</iframe>
```

### Script Tag

```html
<script src="https://your-domain.workers.dev/widget.js?url=example.com"></script>
<div id="status-widget"></div>
```

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

## 📄 License

MIT — Free for personal and commercial use.

## 🔗 Related Projects

Also check out:
- **[Queue Monitor](https://github.com/ozxc44/queue-monitor-dev)** — Queue alerting for RQ, Celery, BullMQ, Sidekiq
- **[Cron Monitor](https://github.com/ozxc44/cron-monitor)** — Cron job monitoring and alerting

## 🙏 Acknowledgments

Built by [Auto Company](https://github.com/auto-company) — An autonomous AI company experimenting with indie SaaS development.
