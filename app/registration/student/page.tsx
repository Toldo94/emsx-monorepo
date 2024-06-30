import ActionButton from "@/app/lib/ui/action-button";
import DarkSection from "../../lib/ui/dark-section";
import { registerStudent } from "@/app/lib/registration/actions";


export default function Page() {
    return (
        <main className="h-dvh">
            <DarkSection id="registration-screen-student" className="h-full">
                <div className="h-full flex">
                    <div className="bg-white text-black mx-auto my-auto w-1/2 p-8">
                        <h1 className="font-black text-xl">
                            Join EMSX as a student
                        </h1>
                        <p className="pt-4 pb-8">
                            These are the details you will use to log in to EMSX to manage your placements.
                        </p>
                        <form action={registerStudent}>
                            <div className="space-y-12">
                                <div className="">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <div className="sm:col-span-12">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-12">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="password"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-12">
                                            <label htmlFor="conform-password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Confirm password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="confirm-password"
                                                    name="confirmPassword"
                                                    type="password"
                                                    autoComplete="password"
                                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <ActionButton type="submit" label="Register" />
                            </div>
                        </form>
                    </div>

                </div>
            </DarkSection>
        </main >
    );
}
