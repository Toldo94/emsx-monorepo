import { auth } from "@/auth"

export default async function StudentProfilePage() {
    const seession = await auth();

    console.log("Session: ", seession);
    return <h1>Hello wrold</h1>
}