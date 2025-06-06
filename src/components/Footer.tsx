import React from 'react';
import { 
  Instagram, Facebook, 
  CreditCard, Truck, ArrowLeftRight,
  Mail, Phone, MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sobre a Bella</h3>
            <p className="text-gray-400 text-sm">
              Sua loja online de produtos femininos com foco em qualidade, 
              sustentabilidade e beleza.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-sm">contato@bella.com.br</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm">São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Vantagens</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <CreditCard className="h-5 w-5 mr-2" />
                <span className="text-sm">Pagamento Seguro</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Truck className="h-5 w-5 mr-2" />
                <span className="text-sm">Entrega para Todo Brasil</span>
              </li>
              <li className="flex items-center text-gray-400">
                <ArrowLeftRight className="h-5 w-5 mr-2" />
                <span className="text-sm">Troca Grátis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Bella. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;