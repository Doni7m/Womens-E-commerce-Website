import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/90 to-white/50" />
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Descubra seu</span>
              <span className="block text-pink-600">estilo único</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl">
              Explore nossa coleção exclusiva de moda, beleza e lifestyle. 
              Produtos selecionados para mulheres que valorizam qualidade e sustentabilidade.
            </p>
            <div className="mt-5 sm:mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700">
                Explorar Coleção
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;