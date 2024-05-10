
import Twitter from "@/app/lib/ui/icons/twitter";
import Facebook from "@/app/lib/ui/icons/facebook";
export default function Footer() {
    return <footer className="bg-darkSlateGray w-full">
        <div className="mx-auto max-w-7xl text-white px-2 sm:px-6 lg:px-8">
            <div className="mx-14 py-12 flex justify-between">
                <div className='flex'>

                    <div><Twitter /></div>
                    <div><Facebook /></div>
                    <div>1</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div>Contact us</div>
                        <div className="mx-8">Cookies and Privacy Policy</div>
                        <div>Terms and conditions</div>
                    </div>
                    <div className="md:mt-4">Ⓒ Copyright 2023, Andrews Advisory Limited</div>
                </div>
            </div>
        </div>
    </footer>
}