import { NextResponse, NextRequest } from "next/server";

import { Filters } from "@/enums/filters";
import { FILTERS_QUERY_PARAM } from "@/app/lib/util/filters";

import prisma from "@/lib/prisma";

const getFilters = (filtersString: string) => {
    if (filtersString === '') return [];
    const filtersSplitted = filtersString.split(',') || [];
    return filtersSplitted.map(Number);
}

export async function GET(request: NextRequest) {
    const latitude = parseFloat(request.nextUrl.searchParams.get(Filters.LATITUDE) || '0');
    const longitude = parseFloat(request.nextUrl.searchParams.get(Filters.LONGITUDE) || '0');
    const filtersString = request.nextUrl.searchParams.get(FILTERS_QUERY_PARAM) || '';

    const filters = getFilters(filtersString);

    const maxDistance = 30000;

    const locations = await prisma.location.findMany({
        where: {
            attributes: {
                some: {
                    attribute: {
                        id: {
                            in: filters
                        }
                    }
                }
            }
        }
    });


    return NextResponse.json({
        "latitude": latitude,
        "longitude": longitude,
        "data": locations
    });
}