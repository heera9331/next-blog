"use client"

import Image from "next/image";

import { FormEvent, useState } from "react";
import React from "react";
import { TextArea, Button, Input } from "@/components"
import axios from "axios";

export default function Page() {
    const [post, setPost] = useState({
        slug: "",
        desc: "",
        tags: "",
        category: ""
    })
    const handleSubmit = async () => {
        let res = await axios.post('/api/blogs', post);

        if (res.statusText == "OK") {
            alert('successfully published');
        }
    }

    return (
        <div className="max-w-[720px] m-auto">
            <form action="#" method="post">
                <Input
                    type="text"
                    label="Slug (Title)"
                    value={post.slug}
                    htmlFor="slug"
                    placeholder="Enter title/slug"
                    onChange={(e) => {
                        setPost({ ...post, slug: e.target.value });
                    }}
                />

                <TextArea
                    label="Description"
                    value={post.desc}
                    htmlFor="desc"
                    placeholder="Write blog"
                    onChange={(e) => {
                        setPost({ ...post, desc: e.target.value });
                    }}
                />

                <Input
                    type="text"
                    label="Category"
                    value={post.category}
                    htmlFor="category"
                    placeholder="category"
                    onChange={(e) => {
                        setPost({ ...post, category: e.target.value });
                    }}
                />
                <Input
                    type="text"
                    label="Tags"
                    value={post.tags}
                    htmlFor="tags"
                    placeholder="Enter comma separated tags"
                    onChange={(e) => {
                        setPost({ ...post, tags: e.target.value });
                    }}
                />

                <div className="text-center py-2">
                    <Button
                        text="Publish"
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    />
                </div>

            </form>
        </div>
    );
}
