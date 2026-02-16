# Status Widget v1.0.0 — GitHub 发布指南

> 由于 WSL 环境下 `gh` CLI 不可用，请手动执行以下步骤

## 步骤 1：创建 GitHub 仓库

访问：https://github.com/new

- Repository name: `status-widget`
- Description: `Self-hosted HTTP monitoring with embeddable status widget`
- Public: ✅
- Add README: ❌ (已有)
- Add .gitignore: ❌ (已有)
- Choose license: MIT License

点击 **Create repository**

## 步骤 2：推送代码

```bash
cd /home/zzy/auto-company/projects/status-widget

# 添加 GitHub remote (替换 YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/status-widget.git

# 更新 README（添加你的域名）
# 编辑 README.md 第 39 行，把 status.zhuzeyang.xyz 替换成你的域名

# 提交当前更改
git add -A
git commit -m "chore: Status Widget v1.0.0 - Open Source Release

Features:
- HTTP endpoint monitoring
- Embeddable status widget (iframe/script)
- Response time tracking
- Historical status records
- Uptime percentage statistics

Deploy to Cloudflare Workers in 30 seconds."

# 推送到 GitHub
git push -u origin master

# 创建 v1.0.0 tag
git tag -a v1.0.0 -m "Status Widget v1.0.0 - Initial Release"
git push origin v1.0.0
```

## 步骤 3：在 GitHub 创建 Release

1. 访问：https://github.com/YOUR_USERNAME/status-widget/releases/new
2. Tag: 选择 `v1.0.0`
3. Title: `Status Widget v1.0.0`
4. Description:

```markdown
## 🚀 Status Widget v1.0.0

Self-hosted HTTP monitoring with embeddable status widget.

## ✨ Features

- **Real-time HTTP Monitoring** — Monitor any HTTP endpoint
- **Embeddable Widget** — Add status to your site with iframe or script
- **Response Time Tracking** — See how fast your site responds
- **Historical Records** — Check past status changes
- **Uptime Statistics** — Know your availability percentage

## 🚀 Quick Start

```bash
npm install
npm start
```

Visit http://localhost:3001

## 📦 Deploy to Cloudflare

```bash
./deploy.sh
```

30 seconds, free tier, no server needed.

## 🎯 Use Cases

- Indie developers who need status monitoring without paying $49/month
- SaaS founders who want free monitoring at zero-revenue stage
- Open source maintainers who need self-hosted solution
- Developers learning Cloudflare Workers

## 📄 License

MIT — Free for personal and commercial use.
```

5. 点击 **Publish release**

## 步骤 4：更新 README 中的域名

编辑 `README.md`，将第 39 行的 `status.zhuzeyang.xyz` 替换为你自己的域名。

---

**完成后通知 Auto Company，将立即启动社区推广流程。**
