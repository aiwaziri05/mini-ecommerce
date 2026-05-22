import { fetchProduct } from '@/app/lib/data';
import type { Product } from '@/app/lib/definitions';
import TopFilter from './top-filter';
import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
export default async function ProductCards() {
  const products = await fetchProduct();

  return (
    <section>
      <div>
        <TopFilter productCount={products.length} />
      </div>
      <div className='grow grid grid-cols-1 gap-5 py-2 md:py-4 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className='group relative flex flex-col overflow-hidden rounded-2xl border border-blue-100/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md'>
      <div className='relative aspect-square w-full overflow-hidden bg-blue-50/20'>
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          priority={false}
          loading='eager'
        />

        <div className='absolute right-3 top-3'>
          <span className='rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur shadow-sm shadow-blue-900/10'>
            New Arrival
          </span>
        </div>
      </div>

      <div className='flex flex-1 flex-col justify-between p-4'>
        <div className='space-y-1'>
          <p className='text-[10px] font-bold uppercase tracking-widest text-blue-500/95'>
            {product.category_name}
          </p>

          <h3 className='truncate line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition-colors group-hover:text-blue-600'>
            {product.name}
          </h3>
        </div>

        <div className='mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3'>
          <span className='text-base font-bold text-slate-900'>
            {product.price}
          </span>

          <button
            type='button'
            className='inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-100 transition-all duration-150 hover:bg-blue-700 active:scale-95'
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCartIcon className='size-4' />
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}
