import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { checkStatus, getStatusHistory } from './monitor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// CORS 支持（用于小部件跨域嵌入）
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 主页
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// API: 检查端点状态
app.get('/api/check', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: 'URL parameter is required'
    });
  }

  try {
    const result = await checkStatus(url);
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error('Check error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// API: 获取状态历史
app.get('/api/history', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      success: false,
      error: 'URL parameter is required'
    });
  }

  try {
    const history = getStatusHistory(url);
    res.json({
      success: true,
      url,
      history
    });
  } catch (error) {
    console.error('History error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 小部件页面（用于 iframe）
app.get('/widget', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'widget.html'));
});

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Status Widget running on http://localhost:${PORT}`);
  console.log(`Widget embed URL: http://localhost:${PORT}/widget?url=<your-url>`);
});
