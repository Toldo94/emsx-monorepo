import { NextResponse } from "next/server";


import { db } from "@/app/lib/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const id = (await params).id // 'a', 'b', or 'c'

    const location = await db.location.findUnique({
        where: { id: String(id) },
    });

    return NextResponse.json(location);
  }