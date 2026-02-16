#!/bin/bash
# Status Widget v1.0.1 Release Creator
# Run this after pushing code to GitHub

echo "🚀 Creating GitHub Release for Status Widget v1.0.1"
echo ""
echo "Opening browser to create release..."
echo ""

# Detect OS and open browser
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open "https://github.com/ozxc44/status-widget/releases/new?tag=v1.0.1" 2>/dev/null \
        || sensible-browser "https://github.com/ozxc44/status-widget/releases/new?tag=v1.0.1"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    open "https://github.com/ozxc44/status-widget/releases/new?tag=v1.0.1"
else
    echo "Please open this URL manually:"
    echo "https://github.com/ozxc44/status-widget/releases/new?tag=v1.0.1"
fi

echo ""
echo "📝 Release notes template:"
echo ""
cat << 'EOF'
## Status Widget v1.0.1

Self-hosted HTTP monitoring with embeddable status widget.

### Features
- 🚀 30-second deployment to Cloudflare Workers
- 📊 Embeddable status badge for any website
- 🔔 HTTP/HTTPS monitoring with custom intervals
- 🎨 Clean, minimal UI
- 📦 Single file deployment
- 📝 MIT License - Free forever

### Quick Start
1. Edit `src/monitor.js` to add your URLs
2. Run `./deploy.sh`
3. Done!

### What's New in v1.0.1
- Added Issue templates (Bug, Feature, Question)
- Added PR template with checklist
- Added CONTRIBUTING.md guide
- Added SECURITY.md policy
- Improved README with badges and use cases
EOF
