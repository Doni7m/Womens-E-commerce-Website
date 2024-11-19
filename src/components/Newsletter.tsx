import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="bg-pink-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-2xl bg-white px-6 py-6 sm:py-8 lg:flex lg:items-center lg:justify-between lg:px-8 shadow-sm">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Receba Ofertas Exclusivas
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Cadastre-se para receber novidades, tendências e descontos especiais.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <div className="flex-1">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                  placeholder="Seu melhor email"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-5 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Inscrever-se
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;