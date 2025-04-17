// app/shop/[id]/page.tsx
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { user: true },
  });

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={700}
            height={400}
            className="w-full rounded-lg object-cover"
          />
        )}

        <h1 className="text-3xl font-bold text-indigo-700 mt-4">{product.name}</h1>
        <p className="text-xl text-gray-800 mt-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>

        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          Sold by <span className="font-semibold text-gray-700">{product.user?.name}</span>
        </div>

        <AddToCartButton
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />

        <Link href="/shop" className="block mt-6 text-indigo-600 hover:underline text-sm">
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}
