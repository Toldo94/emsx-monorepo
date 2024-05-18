import DarkSection from "@/app/lib/ui/dark-section";
import Image from "next/image";

export default function Cover() {
    return <DarkSection id="Cover">
        <Image alt="Cover image" src="/images/cover-page.png" width={1280} height={500}/>
    </DarkSection>
}