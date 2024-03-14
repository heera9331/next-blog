"use client"
import { IoClose } from "react-icons/io5";
import React, { useState } from "react"
import { IoMenu } from "react-icons/io5";
const Header: React.FC = () => {
    const [click, setClick] = useState(false);

    return (
        <header className="bg-gray-100 border-b border-black border-opacity-25 flex justify-between px-4 items-center py-3">
            <h1 className="font-semibold text-2xl">Next Blog</h1>
            <nav className="flex items-center gap-2">
                <ul className={`md:flex md:items-center gap-2 ${click ? "" : "hidden"}
                
                ${click && "absolute top-14 right-0"}                `}>
                    <li className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1">
                        <a href="/" className="font-semibold">Home</a>
                    </li>
                    <li className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1">
                        <a href="/sitemap" className="font-semibold">SiteMap</a>
                    </li>
                    <li className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1">
                        <a href="/register" className="font-semibold">Register</a>
                    </li >
                    <li className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1">
                        <a href="/login" className="font-semibold">Login</a>
                    </li>
                </ul>
                {!click &&
                    <IoMenu className="text-2xl md:hidden"
                        onClick={() => {
                            setClick(!click);
                        }}
                    />}

                {click && <IoClose className="text-2xl md:hidden"
                    onClick={() => {
                        setClick(!click);
                    }}
                />}

            </nav>

        </header>
    )
}

export default Header;