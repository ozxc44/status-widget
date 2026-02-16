#!/bin/bash
# Auto Company — Launch Progress Tracker

TRACKING_DIR="/home/zzy/auto-company/projects/status-widget"
LOG_FILE="$TRACKING_DIR/launch-progress.log"

mkdir -p "$TRACKING_DIR"

log() {
    echo "[$(date -u '+%Y-%m-%d %H:%M:%S UTC')] $1" >> "$LOG_FILE"
}

main() {
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║  Auto Company — Launch Progress Tracker                    ║"
    echo "║  Started: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    log "=== Launch Progress Tracker Started ==="

    local ITERATION=0
    local MAX_ITERATIONS=96  # 24 hours
    local STARS=0

    while [ $ITERATION -lt $MAX_ITERATIONS ]; do
        ITERATION=$((ITERATION + 1))
        local TIMESTAMP
        TIMESTAMP=$(date -u '+%Y-%m-%d %H:%M:%S UTC')
        local PST
        PST=$(TZ='America/Los_Angeles' date '+%Y-%m-%d %H:%M:%S PST')

        # Check GitHub stars silently
        STARS=$(curl -s https://api.github.com/repos/ozxc44/status-widget 2>/dev/null | jq -r '.stargazers_count // 0' 2>/dev/null || echo "0")

        # Check HN mentions
        local HN_MENTIONS
        HN_MENTIONS=$(curl -s "https://hn.algolia.com/api/v1/search?query=status-widget&tags=story" 2>/dev/null | jq -r '.hits | length' 2>/dev/null || echo "0")

        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "Check #$ITERATION — $TIMESTAMP ($PST)"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "📊 GitHub Stars: $STARS"
        echo "🔍 HN Mentions: $HN_MENTIONS"
        echo ""

        log "Check #$ITERATION: Stars=$STARS, HN_Mentions=$HN_MENTIONS"

        if [ "$STARS" -gt 0 ]; then
            echo "🚀 LAUNCH DETECTED! Stars: $STARS"
            log "!!! LAUNCH DETECTED !!! Stars: $STARS"
            # Update consensus to mark launch detected
            break
        fi

        if [ "$HN_MENTIONS" -gt 0 ]; then
            echo "📢 HN Activity detected: $HN_MENTIONS mentions"
        fi

        echo "Next check in 15 minutes... (Iteration $ITERATION/$MAX_ITERATIONS)"
        echo ""
        sleep 900  # 15 minutes
    done

    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║  Tracker Session Complete                                    ║"
    echo "║  Final Stars: $STARS"
    echo "╚══════════════════════════════════════════════════════════════╝"
    log "=== Tracker Session Complete: Stars=$STARS ==="
}

main
