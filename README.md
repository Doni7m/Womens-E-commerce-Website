# Womens-E-commerce-Website

This project contains a React frontend built with Vite and a small Express backend used for demo purposes.

## Getting Started

Install dependencies and start both the frontend and backend:

```bash
npm install
```

### Frontend

Run the development server with:

```bash
npm run dev
```

### Backend

A simple API is available in the `server` folder. Start it with:

```bash
npm run server
```

The backend exposes the following endpoints:

- `GET /api/categories` – returns product categories.
- `GET /api/products` – returns featured products.
- `POST /api/newsletter` – accepts `{ email }` in the body and returns a confirmation message.
