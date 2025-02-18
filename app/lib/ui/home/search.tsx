import LightSection from "@/lib/ui/light-section";
import React from "react";
import SearchBar from "../../components/search-bar/search-bar";

export default function Search() {
    return <LightSection>
        <div className="flex flex-col relative justify-center items-center">
            <SearchBar />
            <div className="mx-auto w-3/5 mt-32">
                <h1 className="text-center text-black text-[32px] font-bold font-['Poppins']">The platform to search, book and manage EMS student placements</h1>
            </div>
            <div className="mx-auto pt-4 w-3/5">
                <p className="text-center text-black text-[16px] font-normal font-['Poppins']">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero </p>
            </div>

        </div>
    </LightSection>
}