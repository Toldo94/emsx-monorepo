import { NextResponse, NextRequest } from "next/server";

import dbConnect from "@/lib/db";
import Location from "@/models/Location";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search');

    await dbConnect();

    const locations = await Location.find({
        $or: [
            {
                name: {
                    $regex: search || '',
                    $options: 'i'
                },
            },
            {
                locationId: {
                    $regex: search || '',
                    $options: 'i'
                },
            },
        ],
    }).select({
        _id: 0,
        id: "$_id",
        name: 1,
        veterinaryGroup: 1,
        locationId: 1,
        placementTypeSearch: 1,
        placementType: 1,
        groupId: 1,
        groupClinic: 1,
        groupSites: 1,
    });

    return NextResponse.json(locations);
}