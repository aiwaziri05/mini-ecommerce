// ==============================
// DOMAIN TYPES
// ==============================

export type OrderStatus = 'pending' | 'paid' | 'failed';

export type SortOption = 'price_asc' | 'price_desc' | 'newest';

export type PaymentProvider = 'stripe' | 'paystack';

// ==============================
// DATABASE TYPES (RAW)
// ==============================

// CUSTOMERS
export type CustomerRow = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
};

// PRODUCTS
export type ProductRow = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category_id: string | null;
  created_at: string;
};

// CATEGORIES
export type CategoryRow = {
  id: string;
  name: string;
};

// CART
export type CartRow = {
  id: string;
  customer_id: string | null;
  created_at: string;
};

export type CartItemRow = {
  id: string;
  cart_id: string;
  product_id: string;
  quantity: number;
};

// ORDERS
export type OrderRow = {
  id: string;
  customer_id: string;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
};

export type OrderItemRow = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price: number;
};

// ==============================
// JOINED QUERY TYPES
// ==============================

export type ProductWithCategoryRow = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category_name: string | null;
};

export type CartItemWithProductRow = {
  id: string;
  product_id: string;
  quantity: number;
  name: string;
  price: number;
  image_url: string | null;
};

export type OrderWithItemsRow = {
  id: string;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
  product_id: string;
  quantity: number;
  price: number;
};

// ==============================
// UI TYPES
// ==============================

// PRODUCTS
export type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category: string;
};

export type ProductDetails = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
};

// CART
export type CartItem = {
  id: string;
  product_id: string;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
  total: number;
};

export type Cart = {
  id: string;
  items: CartItem[];
  total_amount: number;
};

// ORDERS
export type Order = {
  id: string;
  totalAmount: number;
  status: OrderStatus;
  created_at: string;
};

export type OrderItem = {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
};

// ==============================
// FORM / INPUT TYPES
// ==============================

export type AddToCartInput = {
  product_id: string;
  quantity: number;
};

export type CreateOrderInput = {
  customer_id: string;
};

export type UpdateOrderStatusInput = {
  order_id: string;
  status: OrderStatus;
};
