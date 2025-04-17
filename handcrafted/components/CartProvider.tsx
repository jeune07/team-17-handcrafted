// components/CartProvider.tsx
'use client';

import { CartProvider } from "@/app/context/cart-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}