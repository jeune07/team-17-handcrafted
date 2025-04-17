import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const updated = await prisma.user.updateMany({
    where: { email: "jeunewinsley9@gmail.com" },
    data: { role: "SELLER" },
  });

  return NextResponse.json({ message: "Updated to seller", updated });
}
