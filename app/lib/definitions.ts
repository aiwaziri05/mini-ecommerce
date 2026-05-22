// Interface Types
export type Customers = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type Rating = { rate: number; count: number };

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  category_name: string;
  image_url: string;
  rating?: Rating;
};

export type Category = {
  id: string;
  name: string;
  created_at: string;
};

type OrderItem = {
  product_id: string;
  name: string;
  price: string;
  quantity: number;
  image_url: string;
};

export type CartItem = {
  id: string;
  cart_id: string;
  product_id: string;
  name: string;
  price: string;
  image_url: string;
  quantity: number;
};

export type Cart = {
  id: string;
  customer_id: string;
  items: CartItem;
  created_at: string;
  updated_at: string;
};

type Address = {
  street: string;
  state: string;
  postal_code: string;
  country: string;
};

type Pricing = {
  subtotal: string;
  shipping_fee: string;
  tax: string;
  discount: string;
  total: string;
};

type Payment = {
  method: 'credit_card' | 'stripe' | 'paypal';
  transaction_id: string;
  status: 'unpaid' | 'paid' | 'refunded';
};

type Tracking = {
  carrier: string;
  number: string;
  estimated_delivery: string;
};

export type Order = {
  id: string;
  customer_id: string;
  items: OrderItem[];
  status: 'pending' | 'processed' | 'shipped' | 'delivered' | 'cancelled';
  created_at: string;
  updated_at: string;

  address: Address;
  billing_address: Address;

  pricing: Pricing;
  payment: Payment;
  tracking?: Tracking;
};

// Database Table Types

export type OrdersTableRaw = Omit<Order, 'id' | 'pricing'> & {
  id: number;
  order_id: string;
  sub_total: number;
  shipping_fee: number;
  tax: number;
  discount?: number;
  total: number;
};

export type ProductsTableRaw = Omit<Product, 'price'> & {
  price: number;
  created_at: string;
  updated_at: string;
};

export type CartTableRaw = Omit<Cart, 'id'> & {
  id: number;
};

// Inputs, sort & filters

export type SortOption = 'All' | Category;

export type quantityInput = {
  product_id: string;
  quantity: string;
};
