"use client"


import React from "react";
import PlacementTypesSelect from "../../ui/placement-types-select";
import { useSearchContext } from "@/lib/context/search.context";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { useRouter } from "next/navigation";

export default function SearchBar() {

    const router = useRouter();
    const { placementTypes, fetchGeoLocation, searchQuery, setSearchQuery, createSearchUrl, selectedPlacementTypes, setSelectedPlacementTypes } = useSearchContext();


    const debouncedfetchGeoLocation = useDebounce(fetchGeoLocation, 500);

    const handleSearchQueryChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const location = e.target.value;
        setSearchQuery(location);
        await debouncedfetchGeoLocation(location);
    };

    const onSearchClick = () => {
        const searchUrl = createSearchUrl();
        router.push(searchUrl);
    }

    return (
        <>
            <div className="flex-col justify-center items-start gap-1 inline-flex">
                <div className="text-black text-sm font-semibold font-['Poppins']">Location</div>
                <input
                    type="text"
                    className="text-[#808080] text-sm font-normal font-['Poppins'] focus:outline-none"
                    placeholder="Where would you like to go?"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </div>
            <div className="w-[0px] mx-8 h-auto border border-neutral-200"></div>
            <div className="max-w-[300px] flex flex-col w-full">
                <div className="text-black text-sm font-semibold font-['Poppins']">Placement type</div>
                <PlacementTypesSelect options={placementTypes} onChange={setSelectedPlacementTypes} selectedOptions={selectedPlacementTypes} />
            </div>
            <div className="w-[0px] mx-8 h-auto border border-neutral-200"></div>
            <div className="flex justify-between">
                <div className="items-center inline-flex mx-4">
                    <div className="text-center text-black text-sm font-medium font-['Poppins']">More filters</div>
                </div>
                <div className="w-[115px] h-[41px] bg-[#8dd9fb] rounded-[99px] justify-center items-center gap-2 inline-flex cursor-pointer"
                    onClick={onSearchClick}
                >
                    <div className="text-center text-black text-sm font-medium font-['Poppins']">Search</div>
                </div>
            </div>
        </>
    );
}