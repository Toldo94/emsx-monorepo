import { NextResponse } from "next/server";


import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id // 'a', 'b', or 'c'

  const location = await prisma.location.findUnique({
    where: {
      id: parseInt(id)
    },
    select: {
      id: true,
      name: true,
      veterinaryGroup: true,
      locationId: true,
    }
  });

  return NextResponse.json(location);
}