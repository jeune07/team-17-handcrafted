// app/api/products/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const dummyProducts = [
    {
      name: "Hand-Carved Wooden Bowl",
      description: "A beautiful hand-carved bowl made from reclaimed oak.",
      price: 29.99,
      imageUrl: "https://source.unsplash.com/featured/?wood,bowl",
    },
    {
      name: "Woven Cotton Wall Hanging",
      description: "Modern boho decor for any space.",
      price: 45.5,
      imageUrl: "https://source.unsplash.com/featured/?weaving,boho",
    },
    {
      name: "Natural Beeswax Candle Set",
      description: "3 candles made with 100% organic beeswax.",
      price: 18.0,
      imageUrl: "https://source.unsplash.com/featured/?candles,handmade",
    },
    {
      name: "Hand-Painted Ceramic Mug",
      description: "One-of-a-kind mug with artisan glaze.",
      price: 22.5,
      imageUrl: "https://source.unsplash.com/featured/?ceramic,mug",
    },
    {
      name: "Macrame Plant Hanger",
      description: "Holds your plant in handmade style.",
      price: 15.0,
      imageUrl: "https://source.unsplash.com/featured/?macrame,plants",
    },
  ];

  const seller = await prisma.user.findFirst({ where: { role: "SELLER" } });
  if (!seller) {
    return NextResponse.json({ error: "No seller found" }, { status: 400 });
  }

  const created = await prisma.product.createMany({
    data: dummyProducts.map((p) => ({
      ...p,
      userId: seller.id,
    })),
  });

  return NextResponse.json({ message: "Dummy products created", count: created.count });
}
