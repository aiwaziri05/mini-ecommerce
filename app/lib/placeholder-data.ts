// ==============================
// CUSTOMERS
// ==============================

const customers = [
  {
    id: 'c1f7c9a2-8c3d-4b91-9f2a-6e8a1b5d2c10',
    email: 'john@example.com',
    password_hash: 'hashedpassword123',
    created_at: '2024-01-01T10:00:00Z',
  },
  {
    id: '9a2d6e4b-3f71-4c88-8a6b-2d9f5c7e1a33',
    email: 'sarah@example.com',
    password_hash: 'hashedpassword456',
    created_at: '2024-01-02T12:00:00Z',
  },
];

// ==============================
// CATEGORIES
// ==============================

const categories = [
  {
    id: '7b1f3d2a-5c6e-4a91-8b2c-9d3f7e1a4c55',
    name: 'Shoes',
  },
  {
    id: '2e9a1c4d-8b6f-4d33-9c2a-5f7b1e3a6d77',
    name: 'Clothing',
  },
  {
    id: '5d3a7c1e-9b2f-4e88-a6c1-3f9d2b7a4e99',
    name: 'Accessories',
  },
];

// ==============================
// PRODUCTS
// ==============================

const products = [
  {
    id: 'f3a9c2d1-6b7e-4a55-8c2f-1d9b3e7a6c11',
    name: 'Nike Air Max',
    description: 'Comfortable running shoes',
    price: 75000,
    image_url: '/products/nike-air-max.jpg',
    category_id: categories[0].id,
    created_at: '2024-01-05T10:00:00Z',
  },
  {
    id: 'a7e1d3c9-2b6f-4d88-9a1c-5f3b7e2d6c22',
    name: 'Adidas Hoodie',
    description: 'Warm and stylish hoodie',
    price: 45000,
    image_url: '/products/adidas-hoodie.jpg',
    category_id: categories[1].id,
    created_at: '2024-01-06T11:00:00Z',
  },
  {
    id: 'c9b2e7a1-4d6f-4c33-8a5b-2e1f7d3c9a44',
    name: 'Leather Wallet',
    description: 'Premium wallet',
    price: 15000,
    image_url: '/products/wallet.jpg',
    category_id: categories[2].id,
    created_at: '2024-01-07T09:30:00Z',
  },
];

// ==============================
// CARTS
// ==============================

const carts = [
  {
    id: '8d2f6c1a-3b7e-4a99-9c1f-5e3a7b2d6c88',
    customer_id: customers[0].id,
    created_at: '2024-02-01T10:00:00Z',
  },
];

// ==============================
// CART ITEMS
// ==============================

const cart_items = [
  {
    id: 'd1a3c7e9-5b2f-4a44-8c6d-2e1b7f3a9d11',
    cart_id: carts[0].id,
    product_id: products[0].id,
    quantity: 2,
  },
  {
    id: 'e2b7c1a4-6d5f-4c77-8a3b-5f1d2e7c9a22',
    cart_id: carts[0].id,
    product_id: products[2].id,
    quantity: 1,
  },
];

// ==============================
// ORDERS
// ==============================

const orders = [
  {
    id: '1a7c3e9d-5b2f-4d66-8c1a-9e3b7d2f6a55',
    customer_id: customers[0].id,
    total_amount: 165000,
    status: 'pending',
    created_at: '2024-02-10T12:00:00Z',
  },
  {
    id: '6f2b9d1c-4a7e-4c88-9a3d-1e7b5c2f6d99',
    customer_id: customers[1].id,
    total_amount: 45000,
    status: 'paid',
    created_at: '2024-02-11T15:30:00Z',
  },
];

// ==============================
// ORDER ITEMS
// ==============================

const order_items = [
  {
    id: '3c7a1d9e-5f2b-4a44-8c6d-2e1b7f3a9d11',
    order_id: orders[0].id,
    product_id: products[0].id,
    quantity: 2,
    price: 75000,
  },
  {
    id: '9e2b7c1a-4d6f-4c77-8a3b-5f1d2e7c9a22',
    order_id: orders[0].id,
    product_id: products[2].id,
    quantity: 1,
    price: 15000,
  },
  {
    id: '7d1e3c9a-5f2b-4a88-8c6d-2e1b7f3a9d33',
    order_id: orders[1].id,
    product_id: products[1].id,
    quantity: 1,
    price: 45000,
  },
];

// ==============================
// EXPORTS
// ==============================

export {
  customers,
  categories,
  products,
  carts,
  cart_items,
  orders,
  order_items,
};
