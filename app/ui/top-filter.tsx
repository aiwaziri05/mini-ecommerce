'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';

interface TopFilterProps {
  productCount?: number;
  onSortChange?: (value: string) => void;
  currentSort?: string;
}

export default function TopFilter({
  productCount = 10,
  onSortChange,
  currentSort = 'Newest Arrivals',
}: TopFilterProps) {
  return (
    <div className='flex flex-row items-center justify-between pb-2 mb-1 gap-4 bg-transparent select-none'>
      <div className='flex items-center gap-1.5'>
        <span className='text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase'>
          {productCount} Products found
        </span>
        <span className='h-1 w-1 rounded-full bg-gray-300'></span>
      </div>

      <div className='flex items-center gap-3'>
        <span className='text-[11px] font-bold tracking-[0.15em] text-gray-400 uppercase hidden sm:inline-block'>
          Sort by:
        </span>

        <div className='relative min-w-[150px]'>
          <select
            value={currentSort}
            onChange={(e) => onSortChange?.(e.target.value)}
            className='w-full appearance-none bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-xs font-semibold rounded-xl pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer shadow-sm'
          >
            <option value='Newest Arrivals'>Newest Arrivals</option>
            <option value='Price: Low to High'>Price: Low to High</option>
            <option value='Price: High to Low'>Price: High to Low</option>
            <option value='Popularity'>Popularity</option>
          </select>

          <div className='absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-gray-400'>
            <ChevronDownIcon className='size-3.5' />
          </div>
        </div>
      </div>
    </div>
  );
}
