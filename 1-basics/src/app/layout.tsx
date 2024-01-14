import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Amazon - Alışveriş',
    template: '%s | Amazon',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'flex flex-col'}>
        <header className="p-2 border border-b-[1px] border-gray-500">
          <h1>Next</h1>
        </header>

        <main className="h-[calc(100vh-70px)] ">{children}</main>

        <footer className="text-center border border-t-[1px] border-gray-500">
          Tüm hakları saklıdır
        </footer>
      </body>
    </html>
  );
}
