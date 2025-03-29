import { NextResponse, NextRequest } from "next/server";

import prisma from "@/lib/prisma";

import { Attributes } from "@/enums/attributes";

export async function GET(request: NextRequest) {
    const placementTypes = await prisma.attribute.findMany({
        where: {
            typeName: Attributes.PLACEMENT_TYPE
        },
        orderBy: {
            order: "asc"
        }
    });


    console.log(placementTypes);

    return NextResponse.json({
        data: placementTypes
    });
}