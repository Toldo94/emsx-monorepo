import { NextResponse } from "next/server";


import dbConnect from "@/lib/db";
import Location from "@/models/Location";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
  ) {
    const id = (await params).id // 'a', 'b', or 'c'

    await dbConnect();

    const location = await Location.findById(id).select({
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

    console.log(location);

    return NextResponse.json(location);
  }