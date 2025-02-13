import { NextResponse, NextRequest } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search');

    const locations = await db.location.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: search || '',
                    },
                },
                {
                    locationId: {
                        contains: search || '',
                    },
                },
            ],
        },
    });
    return NextResponse.json(locations);
}