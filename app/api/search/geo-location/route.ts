import { GeoLocationGoogleApiSchema } from "@/lib/type-definitions/geo-loaction";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const partialAddress = request.nextUrl.searchParams.get('address');
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${partialAddress}&components=country:GB&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    try {
        const geoLocation = GeoLocationGoogleApiSchema.parse(data.results[0]);
       
        if (geoLocation.formatted_address.toLowerCase().includes("united kingdom")) {
            return NextResponse.json({
                "message": "Location not found",
            }, { status: 404 });
        }

        return NextResponse.json({
            formatted_address: geoLocation.formatted_address,
            latitude: geoLocation.geometry.location.lat,
            longitude: geoLocation.geometry.location.lng,
        });
    } catch (error) {
        return NextResponse.json({
            "message": "Location not found",
        }, { status: 404 });
    }
}