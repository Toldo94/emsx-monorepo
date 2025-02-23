'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { PlacementType } from "../type-definitions/placement-type";
import { getPlacementTypes } from "../../server/static/placement-type";

interface SearchContextType {
    placementTypes: PlacementType[];
    setPlacementTypes: (placementTypes: PlacementType[]) => void;
}

const initialState: SearchContextType = {
    placementTypes: [],
    setPlacementTypes: () => { }
}

export const SearchContext = createContext<SearchContextType>(initialState);


export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [placementTypes, setPlacementTypes] = useState<PlacementType[]>([]);

    const fetchPlacementTypes = async () => {
        if (placementTypes.length > 0) return;
        const placementTypesData = await getPlacementTypes();
        setPlacementTypes(placementTypesData);
    }

    useEffect(() => {
        fetchPlacementTypes();
    }, []);

    return <SearchContext.Provider value={{ placementTypes, setPlacementTypes }}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => useContext(SearchContext);