"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
const Page = () => {
    const session = useSession();
    const router = useRouter();

    console.log(session);
    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/login");
    }

    return (
        <div>
            <h1 className="font-semibold text-2xl">Profile</h1>
        </div>
    )
}

export default Page;