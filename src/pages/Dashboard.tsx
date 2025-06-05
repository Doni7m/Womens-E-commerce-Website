import React from 'react';
import { Heart } from 'lucide-react';

const orders = [
  { id: '987654', date: '12/04/2024', total: 'R$ 199,90', status: 'Entregue' },
  { id: '123456', date: '20/03/2024', total: 'R$ 89,90', status: 'Enviado' },
];

const recommended = [
  {
    id: 1,
    name: 'Blusa Conforto',
    price: 'R$ 129,90',
    image:
      'https://images.unsplash.com/photo-1520975869019-49a900c485d9?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Tênis Casual',
    price: 'R$ 249,90',
    image:
      'https://images.unsplash.com/photo-1528701800489-20be21f5b2c6?auto=format&fit=crop&q=80',
  },
];

const payments = [
  'Cartão de Crédito (final 1234)',
  'Pix cadastrado',
  'Boleto Bancário',
];

const addresses = [
  'Rua das Flores, 123 - São Paulo/SP',
  'Av. Central, 456 - Rio de Janeiro/RJ',
];

const Dashboard = () => {
  return (
    <div className="bg-gray-50 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Minha Conta</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pedidos Recentes</h2>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pedido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">#{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.total}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Produtos Recomendados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommended.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg shadow overflow-hidden">
                <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <p className="text-sm text-gray-500">{product.name}</p>
                  <p className="font-semibold text-gray-900">{product.price}</p>
                </div>
                <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Formas de Pagamento</h2>
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {payments.map((payment) => (
              <li key={payment} className="px-6 py-4 text-sm text-gray-700">
                {payment}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Endereços</h2>
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
            {addresses.map((address) => (
              <li key={address} className="px-6 py-4 text-sm text-gray-700">
                {address}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
