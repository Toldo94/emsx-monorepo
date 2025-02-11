export default async function AdminDashboardLocations() {
    const locations = await fetch('http://localhost:3000/api/admin/locations').then(res => res.json());

    return (
        <main className="min-h-screen">
            <div className="my-4 flex">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full p-2 border border-gray-300 rounded-l"
                />
                <button className="mx-2 p-2 bg-blue-500 text-white rounded-r">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {/* Example card */}
                {locations.map((location: any) => (
                    <div key={location.id} className="p-4 border border-gray-300 rounded shadow">
                        <h2 className="text-xl font-bold">{location.name}</h2>
                        <p>{location.veterinaryGroup}</p>
                    </div>
                ))}
                {/* Add more cards as needed */}
            </div>
        </main>
    );
}
