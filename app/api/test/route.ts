import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const scan = await prisma.scan.create({
    data: {
      baseUrl: "https://example.com",
    },
  });

  return NextResponse.json(scan);
}
