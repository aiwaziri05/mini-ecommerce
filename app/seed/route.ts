import bcrypt from 'bcryptjs';
import sql from '../lib/db';
import {
  customers,
  categories,
  products,
  carts,
  orders,
} from '../lib/placeholder-data';

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  const insertedCustomers = await Promise.all(
    customers.map(async (customer) => {
      const hashedPassword = await bcrypt.hash(customer.password, 10);
      return sql`
          INSERT INTO customers (id, name, email, password)
          VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING
        `;
    }),
  );
  return insertedCustomers;
}

async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const insertedCategories = await Promise.all(
    categories.map(async (category) => {
      return sql`
        INSERT INTO categories (id, name)
        VALUES (${category.id}, ${category.name})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedCategories;
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(255) NOT NULL,
      price INTEGER NOT NULL,
      description TEXT,
      category_id UUID REFERENCES categories(id),
      image_url TEXT,
      rating JSONB NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const insertedProducts = await Promise.all(
    products.map(async (product) => {
      return sql`
        INSERT INTO products (id, name, price, description, category_id, image_url, rating)
        VALUES (${product.id}, ${product.name}, ${product.price}, ${product.description}, ${product.category_id}, ${product.image_url}, ${JSON.stringify(product.rating)})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedProducts;
}

async function createCarts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS carts (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      customer_id UUID REFERENCES customers(id),
      quantity INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  const insertedCarts = await Promise.all(
    carts.map(async (cart) => {
      return sql`
        INSERT INTO carts (id, customer_id)
        VALUES (${cart.id}, ${cart.customer_id})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedCarts;
}

async function seedCartItems() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS cart_items (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      cart_id UUID REFERENCES carts(id),
      product_id UUID REFERENCES products(id),
      quantity INTEGER NOT NULL
    )
  `;
  const insertedCartItems = await Promise.all(
    cart_items.map(async (item) => {
      return sql`
        INSERT INTO cart_items (id, cart_id, product_id, quantity)
        VALUES (${item.id}, ${item.product_id}, ${item.quantity})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedCartItems;
}

async function seedOrders() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      customer_id UUID REFERENCES customers(id),
      total_amount INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  const insertedOrders = await Promise.all(
    orders.map(async (order) => {
      return sql`
        INSERT INTO orders (id, customer_id, total_amount)
        VALUES (${order.id}, ${order.customer_id}, ${order.total_amount})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedOrders;
}

async function seedOrderItems() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS order_items (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      order_id UUID REFERENCES orders(id),
      product_id UUID REFERENCES products(id),
      quantity INTEGER NOT NULL
    )
  `;
  const insertedOrderItems = await Promise.all(
    order_items.map(async (item) => {
      return sql`
        INSERT INTO order_items (id, order_id, product_id, quantity)
        VALUES (${item.id}, ${item.order_id}, ${item.product_id}, ${item.quantity})
        ON CONFLICT (id) DO NOTHING
      `;
    }),
  );
  return insertedOrderItems;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => {
      // seedCustomers();
      // seedCategories();
      seedProducts();
      // createCarts();
      // seedCartItems();
      // seedOrders();
      // seedOrderItems();
    });

    return Response.json({
      success: true,
      message: 'Database seeded successfully',
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
