const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let reqPath = parsedUrl.pathname;

  // Root URL opens Welcome page, /home opens the boutique Home page, /collection and /products open Collection page, /admin opens Admin Portal
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  } else if (reqPath === '/home') {
    reqPath = '/home.html';
  } else if (reqPath === '/collection' || reqPath === '/products') {
    reqPath = '/collection.html';
  } else if (reqPath === '/admin') {
    reqPath = '/admin.html';
  }

  // Handle Orders REST API (/api/orders)
  if (reqPath.startsWith('/api/orders')) {
    const ordersFilePath = path.join(__dirname, 'orders.json');

    const readOrders = () => {
      try {
        if (!fs.existsSync(ordersFilePath)) {
          fs.writeFileSync(ordersFilePath, '[]', 'utf8');
        }
        const data = fs.readFileSync(ordersFilePath, 'utf8');
        return JSON.parse(data || '[]');
      } catch (e) {
        return [];
      }
    };

    const writeOrders = (orders) => {
      fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8');
    };

    if (req.method === 'GET') {
      const orders = readOrders();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify(orders));
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const newOrder = JSON.parse(body || '{}');
          if (!newOrder.id) {
            newOrder.id = 'YV-' + Math.floor(100000 + Math.random() * 900000);
          }
          if (!newOrder.createdAt) {
            newOrder.createdAt = new Date().toISOString();
          }
          if (!newOrder.status) {
            newOrder.status = newOrder.orderStatus || 'Pending';
          }
          if (!newOrder.orderStatus) {
            newOrder.orderStatus = newOrder.status || 'Pending';
          }
          const orders = readOrders();
          orders.unshift(newOrder); // newest first
          writeOrders(orders);
          res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ success: true, order: newOrder }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ success: false, error: 'Invalid order JSON' }));
        }
      });
      return;
    }

    if (req.method === 'PATCH' || req.method === 'PUT') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const orderId = payload.id || reqPath.split('/').pop();
          const orders = readOrders();
          const idx = orders.findIndex(o => o.id === orderId);
          if (idx !== -1) {
            if (payload.orderStatus && !payload.status) payload.status = payload.orderStatus;
            if (payload.status && !payload.orderStatus) payload.orderStatus = payload.status;
            orders[idx] = { ...orders[idx], ...payload, id: orderId };
            writeOrders(orders);
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ success: true, order: orders[idx] }));
          } else {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ success: false, error: 'Order not found' }));
          }
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          return res.end(JSON.stringify({ success: false, error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (req.method === 'DELETE') {
      const orderId = reqPath.split('/').pop();
      const orders = readOrders();
      const filtered = orders.filter(o => o.id !== orderId);
      writeOrders(filtered);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ success: true, deleted: orderId }));
    }
  }

  const filePath = path.join(__dirname, decodeURIComponent(reqPath));
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n=============================================================`);
  console.log(`✨ YOVA COLLECTIONS - LUXURY ROLLED GOLD BOUTIQUE`);
  console.log(`🚀 Home page running live at http://localhost:${PORT}`);
  console.log(`💎 Direct access enabled: No login, OTP, or password required`);
  console.log(`=============================================================\n`);
});
