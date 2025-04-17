import './globals.css';
import Providers from "@/components/CartProvider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Haven',
  description: 'Marketplace for unique handcrafted goods',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <Header />
        <Providers>
          <main className="min-h-[calc(100vh-160px)] px-6 py-8">
            {children}
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
