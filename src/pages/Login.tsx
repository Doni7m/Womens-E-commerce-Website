import React, { useState } from 'react';

interface Props {
  admin?: boolean;
}

const Login = ({ admin }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const path = admin ? '/api/admin/login' : '/api/login';
    const res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Login realizado');
    } else {
      alert(data.error || 'Erro ao logar');
    }
  };

  return (
    <div className="max-w-sm mx-auto py-16">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {admin ? 'Login Administrador' : 'Login'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full border rounded p-2"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
