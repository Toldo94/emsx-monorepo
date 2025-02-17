import { NextResponse, NextRequest } from "next/server";


import dbConnect from "@/lib/db";
import Location from "@/models/Location";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search');
    const latitude = 53.8007554;
    const longitude = -1.5490774;

    const maxDistance = 30000;

    await dbConnect();

    const locations = await Location.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                },
                distanceField: "distance",
                distanceMultiplier: 0.000621371, // Convert meters to miles
                spherical: true,
                maxDistance: maxDistance
            }
        },
        {
            $match: {
                placementTypeSearch: "firstOpinion"
            }
        },
        {
            $project: {
                _id: 0,
                id: "$_id",
                name: 1,
                distance: 1,
                placementTypeSearch: 1,
                placementType: 1,
                groupId: 1,
                groupClinic: 1,
                groupSites: 1,
            }
        },
        { $limit: 50 }
    ]);



    console.log(locations);

    return NextResponse.json({
        "message": "Hello World",
        "latitude": latitude,
        "longitude": longitude,
        "data": locations
    });
}