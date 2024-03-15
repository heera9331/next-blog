"use client"
import { useSession } from "next-auth/react"

const Page = () => {
    const session = useSession();

    console.log(session);

    return (
        <div>
            <h1 className="font-semibold text-2xl">Profile</h1>
        </div>
    )
}

export default Page;