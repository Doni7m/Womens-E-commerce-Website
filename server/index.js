import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const categories = [
  { name: 'Moda', description: 'Roupas e Acessórios' },
  { name: 'Calçados', description: 'Conforto e Estilo' },
  { name: 'Beleza', description: 'Skincare e Maquiagem' },
  { name: 'Eletrônicos', description: 'Gadgets Modernos' },
  { name: 'Casa', description: 'Decoração e Utilidades' },
  { name: 'Sustentável', description: 'Produtos Eco-friendly' },
];

const products = [
  {
    id: 1,
    name: 'Vestido Floral Sustentável',
    price: 'R$ 299,90',
    image:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80',
    category: 'Roupas',
    sustainable: true,
  },
  {
    id: 2,
    name: 'Sérum Facial Vitamina C',
    price: 'R$ 159,90',
    image:
      'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80',
    category: 'Skincare',
    sustainable: false,
  },
  {
    id: 3,
    name: 'Bolsa Artesanal Eco',
    price: 'R$ 189,90',
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    sustainable: true,
  },
  {
    id: 4,
    name: 'Fone de Ouvido Rose Gold',
    price: 'R$ 399,90',
    image:
      'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    sustainable: false,
  },
];

app.get('/api/categories', (req, res) => {
  res.json(categories);
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email obrigatório' });
  }
  // In a real application we would store this in a database
  res.json({ message: 'Cadastro realizado com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
