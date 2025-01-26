import DarkSection from "@/app/lib/ui/dark-section";
import Image from "next/image";

export default function Cover() {
    return <DarkSection id="cover">
        <Image alt="Cover image" src="/images/home-header.png" width={1280} height={500} />
    </DarkSection>
}