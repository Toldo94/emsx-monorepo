import Twitter from "@/app/lib/ui/icons/twitter";
import Facebook from "@/app/lib/ui/icons/facebook";
import Linkedin from "@/app/lib/ui/icons/linkedin"
import Instagram from "@/app/lib/ui/icons/instagram";
import Youtube from "@/app/lib/ui/icons/youtube";
import Link from "next/link";

export default function Footer() {
    return <footer className="bg-darkSlateGray w-full">
        <div className="mx-auto max-w-7xl text-white px-2 sm:px-6 lg:px-8">
            <div className="mx-7 md:mx-14 py-12 flex flex-col md:flex-row justify-between">
                <div className='flex mb-7'>
                    <div className="mr-4">
                        <Link href="https://twitter.com/emsplacements" passHref={true}>
                            <Twitter/>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link href="https://www.facebook.com/emsplacements" passHref={true}>
                            <Facebook/>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link href="https://www.linkedin.com/company/emsplacements" passHref={true}>
                            <Linkedin/>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link href="https://www.instagram.com/emsplacements/" passHref={true}>
                            <Instagram/>
                        </Link>
                    </div>
                    <div className="mr-4">
                        <Link href="#">
                            <Youtube/>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="mb-4">Contact us</div>
                        <div className="mb-4 md:mx-8">Cookies and Privacy Policy</div>
                        <div className="mb-4">Terms and conditions</div>
                    </div>
                    <div className="md:mt-4 text-sm">Ⓒ Copyright 2023, Andrews Advisory Limited</div>
                </div>
            </div>
        </div>
    </footer>
}