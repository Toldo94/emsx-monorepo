'use client'

import { Element } from "react-scroll";

import { useSearchContext } from "@/lib/context/search.context";
import SearchBar from "../lib/components/search-bar/search-bar";
import LocationCard from "./location-card";

export default function Search() {
    const { locations } = useSearchContext();


    return (
        <section className="h-screen w-full">
        <div className="flex flex-row h-full">
          <div className="flex flex-col w-1/2 h-full">
            <div className="w-full my-2">
              <div className="w-full h-[71px] flex justify-between bg-white rounded-[99px] px-8 py-4 shadow-[0px_3px_6px_0px_rgba(139,131,131,0.14)] overflow-hidden">
                <SearchBar />
              </div>
            </div>
            <div className="flex-1 min-h-0 my-2 overflow-y-auto">
              {locations.map((location) => (
                <Element key={location.id} name={location.id.toString()}>
                  <LocationCard key={location.id} location={location} />
                </Element>
              ))}
            </div>
          </div>
          
         
          <div className="flex flex-col items-center justify-center w-1/2">
            <h1>Map will be here</h1>
          </div>
        </div>
      </section>
      
    )
}