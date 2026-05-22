import sql from './db';
import type { ProductsTableRaw } from './definitions';
import { formatCurrency } from './utils';

export async function fetchProduct() {
  try {
    const data = await sql<ProductsTableRaw[]>`
      SELECT categories.name AS category_name,
      products.id,
      products.name,
      products.price,
      products.description,
      products.image_url,
      products.rating FROM categories JOIN products ON categories.id = products.category_id
      ORDER BY products.created_at DESC
      LIMIT 15
    `;

    const products = data.map((product) => ({
      ...product,
      price: formatCurrency(product.price),
    }));
    return products;
  } catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch products.');
  }
}
