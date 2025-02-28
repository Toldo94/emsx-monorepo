import { NextResponse, NextRequest } from "next/server";

import dbConnect from "@/lib/db";
import Location from "@/models/Location";
import { Filters } from "@/enums/filters";

const getPlacementTypes = (placementTypesString: string) => {
    if (placementTypesString === '') return [];
    return placementTypesString.split(',') || [];
}

export async function GET(request: NextRequest) {
    const latitude = parseFloat(request.nextUrl.searchParams.get(Filters.LATITUDE) || '0');
    const longitude = parseFloat(request.nextUrl.searchParams.get(Filters.LONGITUDE) || '0');
    const placementTypesString = request.nextUrl.searchParams.get(Filters.PLACEMENT_TYPES) || '';

    const placementTypes = getPlacementTypes(placementTypesString);

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
        ...(placementTypes.length > 0 ? [{
            $match: {
                $and: [
                    { placementTypeSearch: { $in: placementTypes } }
                ]
            }
        }] : []),
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
                address: 1
            }
        },
        { $limit: 50 }
    ]);

    // console.log(locations);

    return NextResponse.json({
        "latitude": latitude,
        "longitude": longitude,
        "data": locations
    });
}