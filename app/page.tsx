import Cover from "@/app/lib/ui/home/cover";
import Search from "./lib/ui/home/search";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Cover />
            <Search />
        </main>
    );
}
