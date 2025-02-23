"use client"


import React from "react";
import PlacementTypesSelect from "../../ui/placement-types-select";
import { useSearchContext } from "@/lib/context/search.context";

export default function SearchBar() {

    const { placementTypes } = useSearchContext();

    console.log("TEST", placementTypes);

    return (
        <div className="w-[1030px] h-[71px] flex justify-between bg-white rounded-[99px] px-8 py-4 shadow-[0px_3px_6px_0px_rgba(139,131,131,0.14)] overflow-hidden absolute" style={{ top: '-35.5px' }}>
            <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-black text-sm font-semibold font-['Poppins']">Location</div>
                <input type="text" className="text-[#808080] text-sm font-normal font-['Poppins'] focus:outline-none" placeholder="Where would you like to go?" />
            </div>
            <div className="w-[0px] mx-8 h-auto border border-neutral-200"></div>
            <div className="max-w-[300px] flex flex-col w-full">
                <div className="text-black text-sm font-semibold font-['Poppins']">Placement type</div>
                <PlacementTypesSelect />
            </div>
            <div className="w-[0px] mx-8 h-auto border border-neutral-200"></div>
            <div className="flex justify-between">
                <div className="items-center inline-flex mx-4">
                    <div className="text-center text-black text-sm font-medium font-['Poppins']">More filters</div>
                </div>
                <div className="w-[115px] h-[41px] bg-[#8dd9fb] rounded-[99px] justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Search</div>
                </div>
            </div>
        </div>
    );
}