'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-emerald-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">Handcrafted Haven</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
