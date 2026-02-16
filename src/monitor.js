import { URL } from 'url';

// 状态历史存储（内存缓存）
const statusHistory = new Map();
const MAX_HISTORY = 100;

/**
 * 检查 HTTP 端点状态
 */
export async function checkStatus(targetUrl) {
  const normalizedUrl = normalizeUrl(targetUrl);
  const startTime = Date.now();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

    const response = await fetch(normalizedUrl, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'StatusWidget/1.0'
      }
    });

    clearTimeout(timeoutId);

    const responseTime = Date.now() - startTime;
    const isOnline = response.status >= 200 && response.status < 500;

    const result = {
      url: normalizedUrl,
      isOnline,
      statusCode: response.status,
      responseTime,
      timestamp: Date.now(),
      statusText: response.statusText
    };

    // 保存历史记录
    saveHistory(normalizedUrl, result);

    return result;
  } catch (error) {
    const responseTime = Date.now() - startTime;

    const result = {
      url: normalizedUrl,
      isOnline: false,
      statusCode: 0,
      responseTime,
      timestamp: Date.now(),
      error: error.name === 'AbortError' ? 'Timeout' : error.message
    };

    saveHistory(normalizedUrl, result);

    return result;
  }
}

/**
 * 获取状态历史
 */
export function getStatusHistory(url) {
  const normalizedUrl = normalizeUrl(url);
  return statusHistory.get(normalizedUrl) || [];
}

/**
 * 保存历史记录
 */
function saveHistory(url, result) {
  const normalizedUrl = normalizeUrl(url);

  if (!statusHistory.has(normalizedUrl)) {
    statusHistory.set(normalizedUrl, []);
  }

  const history = statusHistory.get(normalizedUrl);
  history.push(result);

  // 限制历史记录数量
  if (history.length > MAX_HISTORY) {
    history.shift();
  }
}

/**
 * 标准化 URL
 */
function normalizeUrl(url) {
  try {
    // 如果没有协议，默认添加 https
    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url;
    }

    const parsed = new URL(url);
    return parsed.toString();
  } catch {
    throw new Error('Invalid URL format');
  }
}

/**
 * 计算可用性百分比
 */
export function calculateUptime(url) {
  const history = getStatusHistory(url);
  if (history.length === 0) return null;

  const onlineCount = history.filter(h => h.isOnline).length;
  return Math.round((onlineCount / history.length) * 100);
}
