import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
