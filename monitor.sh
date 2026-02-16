#!/bin/bash
# Status Widget — HN Post Monitor
# Usage: ./monitor.sh <HN_POST_URL>

HN_POST_URL="$1"
LOG_FILE="hn-monitor.log"

if [ -z "$HN_POST_URL" ]; then
    echo "Usage: $0 <HN_POST_URL>"
    echo "Example: $0 https://news.ycombinator.com/item?id=12345678"
    exit 1
fi

echo "Starting monitoring for: $HN_POST_URL"
echo "Log file: $LOG_FILE"
echo "Press Ctrl+C to stop"
echo ""

# Extract post ID from URL
POST_ID=$(echo "$HN_POST_URL" | grep -oP 'id=\K\d+')

if [ -z "$POST_ID" ]; then
    echo "Warning: Could not extract post ID. URL format may be incorrect."
fi

while true; do
    TIMESTAMP=$(date -u '+%Y-%m-%d %H:%M:%S UTC')
    PST=$(TZ='America/Los_Angeles' date '+%Y-%m-%d %H:%M:%S PST')

    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║  Check: $TIMESTAMP ($PST)"
    echo "║  Post: $HN_POST_URL"
    echo "╚══════════════════════════════════════════════════════════════╝"

    # Fetch HN post data
    HN_API="https://hn.algolia.com/api/v1/items/$POST_ID"
    DATA=$(curl -s "$HN_API" 2>/dev/null)

    if [ -n "$DATA" ]; then
        POINTS=$(echo "$DATA" | jq -r '.points // "N/A"')
        COMMENTS=$(echo "$DATA" | jq -r '.children | length // 0')

        # Check GitHub stars
        STARS=$(curl -s https://api.github.com/repos/ozxc44/status-widget | jq -r '.stargazers_count // 0')

        echo "📊 Metrics:"
        echo "   Upvotes: $POINTS"
        echo "   Comments: $COMMENTS"
        echo "   GitHub Stars: $STARS"
        echo ""

        # Log to file
        echo "[$TIMESTAMP] Points: $POINTS | Comments: $COMMENTS | Stars: $STARS" >> "$LOG_FILE"

        # Alert if there are new comments
        if [ "$COMMENTS" -gt 0 ]; then
            echo "💬 NEW COMMENTS DETECTED!"
            echo "   Check: $HN_POST_URL"
            echo ""
        fi
    else
        echo "⚠️  Could not fetch HN data. Post may not be indexed yet."
        echo ""
    fi

    echo "Next check in 15 minutes... (or press Ctrl+C to exit)"
    echo ""
    sleep 900  # 15 minutes
done
