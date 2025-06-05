import React from 'react';
import {
  Shirt, Footprints, Sparkles, Smartphone,
  Home as HomeIcon, Leaf
} from 'lucide-react';

const categories = [
  {
    name: 'Moda',
    description: 'Roupas e Acessórios',
    icon: Shirt,
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
  },
  {
    name: 'Calçados',
    description: 'Conforto e Estilo',
    icon: Footprints,
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    name: 'Beleza',
    description: 'Skincare e Maquiagem',
    icon: Sparkles,
    color: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
  {
    name: 'Eletrônicos',
    description: 'Gadgets Modernos',
    icon: Smartphone,
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Casa',
    description: 'Decoração e Utilidades',
    icon: HomeIcon,
    color: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    name: 'Sustentável',
    description: 'Produtos Eco-friendly',
    icon: Leaf,
    color: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Explore Nossas Categorias
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`${category.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                <category.icon className={`h-6 w-6 ${category.textColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;