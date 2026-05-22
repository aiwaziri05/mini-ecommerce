'use client';

import { useState } from 'react';

export default function SidebarFilter() {
  // State to handle accordion toggle sections
  const [openSections, setOpenSections] = useState({
    categories: true,
    priceRange: true,
    color: true,
    availability: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className='w-full space-y-6 shrink-0 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm'>
      <div>
        <h3 className='text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 pb-2 border-b border-gray-100'>
          Filters
        </h3>

        <div className='space-y-4'>
          <div className='border-b border-gray-100 pb-4'>
            <button
              onClick={() => toggleSection('categories')}
              className='flex items-center justify-between w-full text-sm font-semibold text-gray-800 py-2 hover:text-blue-600 transition-colors'
            >
              Category
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${openSections.categories ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {openSections.categories && (
              <div className='mt-2 space-y-2.5 transition-all'>
                {[
                  'Jewelery',
                  "Men's Clothing",
                  'Electronics',
                  "Women's Clothing",
                ].map((category) => (
                  <label
                    key={category}
                    className='flex items-center gap-3 cursor-pointer group'
                  >
                    <input
                      className='w-4.5 h-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 focus:ring-2 transition-all cursor-pointer'
                      type='checkbox'
                    />
                    <span className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors'>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Filter Group: Price Range (Naira ₦ Matched to Image) */}
          <div className='border-b border-gray-100 pb-4'>
            <button
              onClick={() => toggleSection('priceRange')}
              className='flex items-center justify-between w-full text-sm font-semibold text-gray-800 py-2 hover:text-blue-600 transition-colors'
            >
              Price Range
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${openSections.priceRange ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {openSections.priceRange && (
              <div className='mt-2 space-y-2.5 transition-all'>
                {[
                  { label: 'Under ₦50.00', id: 'p1' },
                  { label: '₦50.00 - ₦200.00', id: 'p2' },
                  { label: '₦200.00 - ₦600.00', id: 'p3' },
                  { label: '₦600.00+', id: 'p4' },
                ].map((range) => (
                  <label
                    key={range.id}
                    className='flex items-center gap-3 cursor-pointer group'
                  >
                    <input
                      className='w-4.5 h-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 focus:ring-2 transition-all cursor-pointer'
                      type='checkbox'
                    />
                    <span className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors'>
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Filter Group: Color */}
          <div className='border-b border-gray-100 pb-4'>
            <button
              onClick={() => toggleSection('color')}
              className='flex items-center justify-between w-full text-sm font-semibold text-gray-800 py-2 hover:text-blue-600 transition-colors'
            >
              Color
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${openSections.color ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {openSections.color && (
              <div className='flex flex-wrap gap-2.5 mt-3'>
                <button
                  className='w-6 h-6 rounded-full bg-black border border-gray-200 ring-offset-2 hover:ring-2 hover:ring-blue-600 transition-all'
                  title='Onyx Black'
                ></button>
                <button
                  className='w-6 h-6 rounded-full bg-gray-200 border border-gray-300 ring-offset-2 hover:ring-2 hover:ring-blue-600 transition-all'
                  title='Cloud Silver'
                ></button>
                <button
                  className='w-6 h-6 rounded-full bg-blue-600 border border-blue-700 ring-offset-2 hover:ring-2 hover:ring-blue-600 transition-all'
                  title='Cobalt Blue'
                ></button>
                <button
                  className='w-6 h-6 rounded-full bg-amber-600 border border-amber-700 ring-offset-2 hover:ring-2 hover:ring-blue-600 transition-all'
                  title='Gold'
                ></button>
              </div>
            )}
          </div>

          {/* Filter Group: Availability */}
          <div className='pb-2'>
            <button
              onClick={() => toggleSection('availability')}
              className='flex items-center justify-between w-full text-sm font-semibold text-gray-800 py-2 hover:text-blue-600 transition-colors'
            >
              Availability
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${openSections.availability ? 'rotate-180' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            {openSections.availability && (
              <div className='mt-2 space-y-2.5 transition-all'>
                <label className='flex items-center gap-3 cursor-pointer group'>
                  <input
                    defaultChecked
                    className='w-4.5 h-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 focus:ring-2 transition-all cursor-pointer'
                    type='checkbox'
                  />
                  <span className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors'>
                    In Stock
                  </span>
                </label>
                <label className='flex items-center gap-3 cursor-pointer group'>
                  <input
                    className='w-4.5 h-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 focus:ring-2 transition-all cursor-pointer'
                    type='checkbox'
                  />
                  <span className='text-sm text-gray-600 group-hover:text-blue-600 transition-colors'>
                    New Arrivals Only
                  </span>
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
