import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(request: Request) {
    const locations = await db.location.findMany();
    return NextResponse.json(locations);
}