import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import SidebarFilter from './ui/sidebar-filter';

export const metadata: Metadata = {
  title: 'Mini E-Commerce',
  description: 'A simple e-commerce application built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <div className='min-h-screen md:h-screen max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-gutter overflow-hidden'>
          <div className='w-full flex-none md:w-64'>
            <SidebarFilter />
          </div>
          <main className='grow h-full scroll-smooth md:overflow-y-auto [&::-webkit-scollbar]:hidden [-ms:overflow-style:none] [scrollbar-width:none]'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
