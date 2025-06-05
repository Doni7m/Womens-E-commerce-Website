import express from 'express';
import cors from 'cors';
import { products, users, admins } from './data.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    return res.json({ token: 'user-token', role: 'user', username });
  }
  res.status(401).json({ error: 'Credenciais inválidas' });
});

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(a => a.username === username && a.password === password);
  if (admin) {
    return res.json({ token: 'admin-token', role: 'admin', username });
  }
  res.status(401).json({ error: 'Credenciais inválidas' });
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const token = req.headers['authorization'];
  if (token !== 'admin-token') {
    return res.status(403).json({ error: 'Acesso negado' });
  }
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
