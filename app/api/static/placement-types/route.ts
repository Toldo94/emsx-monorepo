import { NextResponse, NextRequest } from "next/server";


import dbConnect from "@/lib/db";
import PlacementType from "@/models/PlacementType";

export async function GET(request: NextRequest) {
    await dbConnect();

    const placementTypes = await PlacementType.find({});

    return NextResponse.json({
        data: placementTypes
    });
}