import { NextResponse, NextRequest } from "next/server";

import { Prisma } from '../../../generated/prisma';

import { Filters } from "@/enums/filters";
import { FILTERS_QUERY_PARAM } from "@/app/lib/util/filters";

import prisma from "@/lib/prisma";

const getFilters = (filtersString: string) => {
    if (filtersString === '') return [];
    const filtersSplitted = filtersString.split(',') || [];
    return filtersSplitted.map(Number);
}

const getLocationsQuery = (longitude: number, latitude: number, maxDistance: number, filters: number[]) => {
    if (filters.length > 0) {
        return Prisma.sql`
            SELECT
            l.id,
            l.name, 
            ST_DistanceSphere(l.location, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)) AS distance
        FROM "Location" l
        JOIN "AttributesOnLocations" al ON al."locationId" = l.id
        WHERE ST_DistanceSphere(l.location, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)) <= ${maxDistance}
            AND al."attributeId" = ANY(${filters})
            ORDER BY distance ASC
            LIMIT 50;
        `;
    }
    
    return Prisma.sql`
        SELECT
            l.id,
            l.name, 
            ST_DistanceSphere(l.location, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)) AS distance
        FROM "Location" l
        WHERE ST_DistanceSphere(l.location, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)) <= ${maxDistance}
        ORDER BY distance ASC
        LIMIT 50;
    `;
}

export async function GET(request: NextRequest) {
    const latitude = parseFloat(request.nextUrl.searchParams.get(Filters.LATITUDE) || '0');
    const longitude = parseFloat(request.nextUrl.searchParams.get(Filters.LONGITUDE) || '0');
    const filtersString = request.nextUrl.searchParams.get(FILTERS_QUERY_PARAM) || '';

    const filters = getFilters(filtersString);

    const maxDistance = 30000;

    const locations = await prisma.$queryRaw(getLocationsQuery(longitude, latitude, maxDistance, filters));

    return NextResponse.json({
        "latitude": latitude,
        "longitude": longitude,
        "data": locations
    });
}