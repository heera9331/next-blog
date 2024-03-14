"use client";
import "../globals.css";
 
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading, Input } from "@/components";
import { useRouter } from "next/navigation";

const Page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    let timeout: any = null;

    const handleLogin = async () => {
        try {
            console.log(user);
            setLoading(true);
            timeout = setTimeout(() => { }, 2000);
            let res = await axios.post(`/api/auth`, user);
            console.log(res);
            let data = res.data;
            setLoading(false);

            if (data?.error) {
                alert(data.error);
            } else {
                console.log(data);
                // token, isAdmin, userId 
                setLoading(false);
                router.push("/home");
            }
        } catch (error) {
            setLoading(false);
            alert("Server connection timeout");
            console.error("Error during login:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        return () => {
            clearInterval(timeout);
        };
    }, [timeout]);

    return (
        <>
            <div className="flex flex-col m-1 h-[78vh]">
                <div className="p-4 m-auto shadow-sm shadow-slate-600 sm:w-[450px]">
                    {!loading ? (
                        <>
                            <div className="px-2">
                                <h1 className="text-2xl font-semibold">Login</h1>
                                <form
                                    className="text-black p-4"
                                    action="#"
                                    method="post"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <Input
                                        inputColor={"text-black"}
                                        label={"Email"}
                                        htmlFor={"email"}
                                        value={user.email}
                                        placeholder={"Email"}
                                        className={
                                            "bg-gray-100 p-1 text-black rounded-sm focus:outline-none"
                                        }
                                        type={"email"}
                                        onChange={(e: any) => {
                                            setUser({ ...user, email: e.target.value });
                                        }}
                                    />
                                    <Input
                                        inputColor={"text-black"}
                                        label={"Password"}
                                        htmlFor={"password"}
                                        value={user.password}
                                        placeholder={"Password"}
                                        className={"bg-gray-100 p-1 rounded-sm focus:outline-none"}
                                        type={"password"}
                                        onChange={(e) => {
                                            setUser({ ...user, password: e.target.value });
                                        }}
                                    />

                                    <div
                                        className="flex items-center justify-center bg-secondary m-2 rounded-sm my-4 cursor-pointer"
                                        onClick={handleLogin}
                                    >
                                        <button className="p-1 text-white font-semibold">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;