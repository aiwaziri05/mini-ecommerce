import sql from '../lib/db';
// import { products } from '../lib/placeholder-data';

// const connectDB = async () => {
//   try {
//     const result = await sql`SELECT now()`;
//     console.log(`Database connected successfully at ${result[0].now}`);
//     return { success: true, time: result[0].now };
//   } catch (error) {
//     console.error('Database connection failed:', error);
//     return { success: false, time: null };
//   }
// };

async function listProducts() {
  return sql`SELECT categories.name, products.name, products.price, products.description, products.image_url FROM categories JOIN products ON categories.id = products.category_id`;
}

export async function GET() {
  try {
    return Response.json(await listProducts());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
