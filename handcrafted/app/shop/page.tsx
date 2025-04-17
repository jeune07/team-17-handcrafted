// app/shop/page.tsx
import prisma from "@/lib/db";
import Image from "next/image";
import Link from "next/link"; // 👈 Make sure this is here

export default async function ShopPage() {
  const products = await prisma.product.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">🛍️ Shop Handcrafted Goods</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} passHref>
            <div className="bg-white p-4 shadow rounded-lg hover:shadow-md transition cursor-pointer">
              {product.imageUrl && (
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48 rounded"
                />
              )}
              <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700 mb-1">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">By {product.user?.name}</p>
            </div>
            
            
          </Link>
          
          
        ))}
      </div>
      <Link
  href="/shop"
  className="inline-block mt-6 text-indigo-600 hover:underline text-sm"
>
  ← Back to Shop
</Link>
    </div>
  );
}
