import { NextResponse, NextRequest } from "next/server";

import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search');

    const locations = await prisma.location.findMany({
        where: {
            name: {
                contains: search || '',
                mode: 'insensitive'
            }
        },
        select: {
            id: true,
            name: true,
            veterinaryGroup: {
                select: {
                    name: true
                }
            },
            locationId: true,
            
        }
    });

    return NextResponse.json(locations);
}