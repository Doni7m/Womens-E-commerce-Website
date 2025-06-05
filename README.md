# Bella Shop - Moda e Lifestyle

Este projeto é uma demonstração de uma loja online voltada ao publico feminino. Inclui um frontend em React + Tailwind e um backend simples em Node/Express.

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Em um terminal, inicie o servidor backend:
   ```bash
   npm run server
   ```
3. Em outro terminal, inicie o frontend:
   ```bash
   npm run dev
   ```

## Logins de exemplo

- **Usuário**: `user1` / `senha123`
- **Administrador**: `admin` / `admin123`

## Adicionando produtos

Os produtos ficam definidos no arquivo `server/data.js` no array `products`. Para adicionar um novo produto, adicione um novo objeto ao array seguindo o formato abaixo:

```js
{
  id: 5,
  name: 'Nome do Produto',
  price: 199.9,
  category: 'Categoria',
  image: 'URL da imagem',
  sustainable: false
}
```

Reinicie o backend para que o novo produto seja carregado.
