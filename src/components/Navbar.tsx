import React, { useState } from 'react';
import { 
  Search, ShoppingBag, Heart, User, Menu, X,
  Shirt, Bot, Sparkles, Leaf, Smartphone, Home as HomeIcon
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: 'Roupas & Acessórios', icon: Shirt },
    { name: 'Calçados', icon: Bot },
    { name: 'Beleza & Skincare', icon: Sparkles },
    { name: 'Eletrônicos', icon: Smartphone },
    { name: 'Casa & Decoração', icon: HomeIcon },
    { name: 'Sustentável', icon: Leaf },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-pink-600">Bella</h1>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="flex items-center text-gray-600 hover:text-pink-600 px-3 py-2 text-sm font-medium"
              >
                <category.icon className="h-4 w-4 mr-1" />
                {category.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-600">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-pink-600">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-pink-600">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-pink-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="flex items-center text-gray-600 hover:text-pink-600 block px-3 py-2 text-base font-medium"
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;