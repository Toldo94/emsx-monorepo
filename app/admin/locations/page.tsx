'use client'

import Link from "next/link";

import { httpClient } from "@/lib/http-client";
import { useEffect, useState } from "react";

export default function AdminDashboardLocations() {
    const [searchQuery, setSearchQuery] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        httpClient.get(`/api/admin/locations`).then(res => setLocations(res.data));
    }, []);

    return (
        <main className="min-h-screen">
            <div className="my-4 flex">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full p-2 border border-gray-300 rounded-l"
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="mx-2 p-2 bg-blue-500 text-white rounded-r" onClick={() => {
                    httpClient.get(`/api/admin/locations?search=${searchQuery}`).then(res => setLocations(res.data));
                }}>
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {/* Example card */}
                {locations.map((location: any) => (
                    <Link key={location.id} href={`/admin/locations/${location.id}`}>
                        <div className="p-4 border border-gray-300 rounded shadow">
                            <h2 className="text-xl font-bold">{location.name}</h2>
                            <p>{location.veterinaryGroup}</p>
                            <p>{location.locationId}</p>
                        </div>
                    </Link>
                ))}
                {/* Add more cards as needed */}
            </div>
        </main>
    );
}
