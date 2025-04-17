'use client';

import { useCart } from "@/app/context/cart-context"; // ✅ Corrected path
import React from "react";

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function AddToCartButton({ id, name, price, imageUrl }: Props) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({
      id,
      name,
      price,
      imageUrl,
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg"
    >
      Add to Cart
    </button>
  );
}
