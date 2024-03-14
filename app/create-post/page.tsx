"use client"

import Image from "next/image";
import { Input } from "@/components"
import { useState } from "react";  
import React from "react";
 

export default function Page() {
    const [post, setPost] = useState({
        slug: "",
        desc: "",
        tags: "",
        category: ""
    })

    return (
        <div>
            <form action="#" method="post">
                <Input
                    label="Slug (Title)"
                    value={post.slug}
                    htmlFor="slug"
                    placeholder="Enter title/slug"
                    onChange={(e) => {
                        setPost({ ...post, slug: e.target.value });
                    }}
                />
                 
                <Input
                    label="Description"
                    value={post.desc}
                    htmlFor="desc"
                    placeholder="Write blog"
                    onChange={(e) => {
                        setPost({ ...post, desc: e.target.value });
                    }}
                />
                 
            </form>
        </div>
    );
}
