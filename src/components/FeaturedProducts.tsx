import React from 'react';
import { Star, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vestido Floral Sustentável',
    price: 'R$ 299,90',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80',
    category: 'Roupas',
    sustainable: true,
  },
  {
    id: 2,
    name: 'Sérum Facial Vitamina C',
    price: 'R$ 159,90',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80',
    category: 'Skincare',
    sustainable: false,
  },
  {
    id: 3,
    name: 'Bolsa Artesanal Eco',
    price: 'R$ 189,90',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80',
    category: 'Acessórios',
    sustainable: true,
  },
  {
    id: 4,
    name: 'Fone de Ouvido Rose Gold',
    price: 'R$ 399,90',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80',
    category: 'Eletrônicos',
    sustainable: false,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                {product.sustainable && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Sustentável
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-500">{product.category}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.name}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-500">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;