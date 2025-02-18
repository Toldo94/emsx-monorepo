import DarkSection from "../lib/ui/dark-section";
import Practice from "../lib/ui/icons/practice";
import Student from "../lib/ui/icons/student";
import University from "../lib/ui/icons/university";
import NavigrationButton from "../lib/ui/navigration-button";

export default function Page() {
    return (
        <main className="h-dvh">
            <DarkSection id="registration-screen" className="h-full">
                <div className="h-full flex">
                    <div className="bg-white text-black mx-auto my-auto w-3/4 p-8">
                        <div className="">

                            <h1 className="font-black text-xl text-center">
                                Register for EMSX
                            </h1>

                            <div className="flex justify-center">
                                <p className="pt-3 pb-12 text-center w-3/4">
                                    EMSX helps students, universities and placement providers manage EMS placements more efficiently. Select your user to register now.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row my-4">
                                <div className="w-full md:w-1/3">
                                    <div className="flex flex-col">
                                        <div className="mx-auto">
                                            <Student />
                                        </div>
                                        <div className="mt-5 mx-auto text-base font-bold">
                                            As a Student
                                        </div>
                                        <p className="text-center mt-4">
                                            Approve and manage your EMS placements
                                        </p>
                                        <div className="mx-auto mt-6">
                                            <NavigrationButton link="/registration/student" label="Register" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <div className="flex flex-col">
                                        <div className="mx-auto">
                                            <University />
                                        </div>
                                        <div className="mt-5 mx-auto text-base font-bold">
                                            As a University
                                        </div>
                                        <p className="text-center mt-4">
                                            Oversee and manage your students EMS placements
                                        </p>
                                        <div className="mx-auto mt-6">
                                            <NavigrationButton link="/registration/university" label="Register" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 my-2">
                                    <div className="flex flex-col">
                                        <div className="mx-auto">
                                            <Practice />
                                        </div>
                                        <div className="mt-5 mx-auto text-base font-bold">
                                            As a Practice
                                        </div>
                                        <p className="text-center mt-4">
                                            Find, book and manage your EMS placements
                                        </p>
                                        <div className="mx-auto mt-6">
                                            <NavigrationButton link="/registration/practice" label="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DarkSection>
        </main >
    );
}
