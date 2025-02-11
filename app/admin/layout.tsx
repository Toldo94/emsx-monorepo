import Sidebar from "./components/sidebar"

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        <div className="flex gap-4">
            <div className="w-1/4">
                <Sidebar />
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>
    </section>
}