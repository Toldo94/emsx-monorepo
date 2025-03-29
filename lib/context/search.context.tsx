'use client'

import { createContext, useContext, useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { PlacementType } from "../type-definitions/placement-type";
import { getPlacementTypes } from "../../server/static/placement-type";
import { GeoLocation, GeoLocationSchema } from "../type-definitions/geo-loaction";
import { getGeoLocation } from "@/server/search/geo-location";
import { Filters } from "@/enums/filters";
import { getLocations } from "@/server/search/locations";
import { LocationResponseSchema, Location } from "../type-definitions/location";
import { FILTERS_QUERY_PARAM } from "../../app/lib/util/filters";

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    placementTypes: PlacementType[];
    setPlacementTypes: (placementTypes: PlacementType[]) => void;
    geoLocation: GeoLocation | null;
    fetchGeoLocation: (partialAddress: string) => void;
    fetchLocations: () => void;
    createSearchUrl: () => string;
    selectedPlacementTypes: PlacementType[];
    setSelectedPlacementTypes: (selectedPlacementTypes: PlacementType[]) => void;
    locations: Location[];
}

const initialState: SearchContextType = {
    searchQuery: "",
    placementTypes: [],
    geoLocation: null,
    selectedPlacementTypes: [],
    setSearchQuery: () => { },
    setPlacementTypes: () => { },
    fetchGeoLocation: () => { },
    createSearchUrl: () => "",
    setSelectedPlacementTypes: () => { },
    locations: [],
    fetchLocations: () => { }
}

export const SearchContext = createContext<SearchContextType>(initialState);


export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const searchParams = useSearchParams();


    const [searchQuery, setSearchQuery] = useState<string>("");
    const [placementTypes, setPlacementTypes] = useState<PlacementType[]>([]);
    const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);
    const [selectedPlacementTypes, setSelectedPlacementTypes] = useState<PlacementType[]>([]);
    const [locations, setLocations] = useState<Location[]>([]);

    const fetchPlacementTypes = async () => {
        if (placementTypes.length > 0) return;
        const placementTypesData = await getPlacementTypes();
        setPlacementTypes(placementTypesData);
    }

    const fetchGeoLocation = async (partialAddress: string) => {
        try {
            const geoLocationData = await getGeoLocation(partialAddress);
            if (geoLocationData.status === 200) {
                const parsedGeoLocation = GeoLocationSchema.parse(geoLocationData.data);
                setGeoLocation(parsedGeoLocation);
                setSearchQuery(parsedGeoLocation.formatted_address);
            }
        } catch (error) {
            console.error("Error fetching geo location: ", error);
        }
    }

    const fetchLocations = async () => {
        if (!geoLocation) return;

        const locationsData = await getLocations(geoLocation.latitude, geoLocation.longitude, selectedPlacementTypes.map(placementType => placementType.id));
        const parsedLocations = LocationResponseSchema.parse(locationsData);
        setLocations(parsedLocations.data);
    }

    const createSearchUrl = () => {
        const searchParams = new URLSearchParams();

        if (geoLocation) {
            searchParams.set(Filters.ADDRESS, geoLocation.formatted_address);
            searchParams.set(Filters.LATITUDE, geoLocation.latitude.toString());
            searchParams.set(Filters.LONGITUDE, geoLocation.longitude.toString());
        }

        if (selectedPlacementTypes.length > 0) {
            searchParams.set(FILTERS_QUERY_PARAM, selectedPlacementTypes.map(placementType => placementType.id).join(','));
        }

        return `/search?${searchParams.toString()}`;
    }

    const getFiltersFromUrl = () => {
        const address = searchParams.get(Filters.ADDRESS) || "";
        const latitude = parseFloat(searchParams.get(Filters.LATITUDE) || '0');
        const longitude = parseFloat(searchParams.get(Filters.LONGITUDE) || '0');


        const filters = searchParams.get(FILTERS_QUERY_PARAM) || "";

        const searchPlacementTypes: number[] = [];

        if (filters.length > 0) {
            const filtersSplitted = filters.split(',') || [];
            searchPlacementTypes.push(...filtersSplitted.map(Number));
        }

        if (address) {
            setGeoLocation({
                formatted_address: address,
                latitude: latitude,
                longitude: longitude
            });
        }

        if (searchPlacementTypes.length > 0) {
            const filteredPlacementTypes = placementTypes.filter((type: PlacementType) => searchPlacementTypes.includes(type.id));
            setSelectedPlacementTypes(filteredPlacementTypes);
        }
    }

    useEffect(() => {
        fetchPlacementTypes();
    }, []);

    useEffect(() => {
        getFiltersFromUrl();
        fetchLocations();
    }, [searchParams, placementTypes]);

    return (
        <SearchContext.Provider
            value={{
                placementTypes,
                geoLocation,
                searchQuery,
                setSearchQuery,
                setPlacementTypes,
                fetchGeoLocation,
                createSearchUrl,
                selectedPlacementTypes,
                setSelectedPlacementTypes,
                locations,
                fetchLocations
            }}>{children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext);