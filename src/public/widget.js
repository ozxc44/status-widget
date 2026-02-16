/**
 * Status Widget Embed Script
 *
 * 用法:
 * <script src="https://your-domain.com/widget.js?url=example.com"></script>
 * <div id="status-widget"></div>
 */

(function() {
  const params = new URLSearchParams(window.location.search);
  const scriptSrc = document.currentScript.src;
  const scriptUrl = new URL(scriptSrc);
  const targetUrl = scriptUrl.searchParams.get('url');

  if (!targetUrl) {
    console.error('Status Widget: Please provide a URL parameter');
    return;
  }

  // API 基础 URL（从小部件自己的域名）
  const API_BASE = scriptUrl.origin;

  // 创建小部件容器
  function createWidget() {
    const containerId = 'status-widget-' + Date.now();
    const container = document.createElement('div');
    container.id = containerId;
    container.className = 'status-widget-container';
    container.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border: 1px solid #e5e7eb;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    // 状态指示器
    const indicator = document.createElement('div');
    indicator.id = containerId + '-indicator';
    indicator.style.cssText = `
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #d1d5db;
    `;

    // 状态文本容器
    const textContainer = document.createElement('div');
    textContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 2px;
    `;

    // 状态文本
    const statusText = document.createElement('div');
    statusText.id = containerId + '-status';
    statusText.textContent = '检查中...';
    statusText.style.cssText = `
      font-size: 14px;
      font-weight: 500;
      color: #111827;
      white-space: nowrap;
    `;

    // 详细信息
    const detailsText = document.createElement('div');
    detailsText.id = containerId + '-details';
    detailsText.style.cssText = `
      font-size: 12px;
      color: #6b7280;
    `;

    textContainer.appendChild(statusText);
    textContainer.appendChild(detailsText);
    container.appendChild(indicator);
    container.appendChild(textContainer);

    // Powered by 链接
    const poweredBy = document.createElement('a');
    poweredBy.href = 'https://github.com/ozxc44/status-widget';
    poweredBy.target = '_blank';
    poweredBy.rel = 'noopener';
    poweredBy.textContent = 'Powered by Status Widget';
    poweredBy.style.cssText = `
      font-size: 10px;
      color: #9ca3af;
      text-decoration: none;
      margin-top: 4px;
    `;
    poweredBy.onmouseover = function() { this.style.color = '#6b7280'; };
    poweredBy.onmouseout = function() { this.style.color = '#9ca3af'; };

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    wrapper.appendChild(container);
    wrapper.appendChild(poweredBy);

    return { wrapper, container, indicator, statusText, detailsText };
  }

  // 检查状态
  async function checkStatus(elements) {
    try {
      const response = await fetch(`${API_BASE}/api/check?url=${encodeURIComponent(targetUrl)}`);
      const data = await response.json();

      if (data.isOnline) {
        elements.indicator.style.cssText = `
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #22c55e;
          animation: status-widget-pulse 2s ease-in-out infinite;
        `;
        elements.statusText.textContent = '在线';
        elements.statusText.style.color = '#15803d';
        elements.detailsText.textContent = `${data.responseTime}ms`;
      } else {
        elements.indicator.style.cssText = `
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
        `;
        elements.statusText.textContent = '离线';
        elements.statusText.style.color = '#dc2626';
        elements.detailsText.textContent = data.error || '无响应';
      }
    } catch (error) {
      elements.indicator.style.cssText = `
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #d1d5db;
      `;
      elements.statusText.textContent = '检查失败';
      elements.statusText.style.color = '#6b7280';
      elements.detailsText.textContent = '';
    }
  }

  // 注入 CSS 动画
  function injectStyles() {
    if (document.getElementById('status-widget-styles')) return;

    const style = document.createElement('style');
    style.id = 'status-widget-styles';
    style.textContent = `
      @keyframes status-widget-pulse {
        0% { transform: scale(0.95); opacity: 0.7; }
        50% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0.95); opacity: 0.7; }
      }
    `;
    document.head.appendChild(style);
  }

  // 初始化
  function init() {
    injectStyles();

    // 查找或创建容器
    let container = document.getElementById('status-widget');
    const elements = createWidget();

    if (container) {
      // 使用现有容器
      container.appendChild(elements.wrapper);
    } else {
      // 插入到脚本位置
      const script = document.currentScript;
      script.parentNode.insertBefore(elements.wrapper, script.nextSibling);
    }

    // 初始检查
    checkStatus(elements);

    // 定期检查
    setInterval(() => checkStatus(elements), 60000);
  }

  // DOM 准备好后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
