"use client"

import { useEffect, useState } from "react";
import React from "react";
import { TextArea, Button, Input } from "@/components"
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const session = useSession();
    const router = useRouter();
    console.log('session - ', session);
    const [post, setPost] = useState({
        slug: "",
        desc: "",
        tags: "",
        category: "",
        author: ""
    })

    const handleSubmit = async () => {
        console.log('blog to be publish ', post);

        try {
            let res = await axios.post('/api/posts', post);
            console.log('got response ', res);

            if (res.statusText == "Created") {
                alert('successfully published');
                router.push('/');
            } else {
                alert('something went wrong');
            }
        } catch (error) {
            console.log('error while post a blog', error);
        }
    }

    useEffect(() => {
        if (session.data?.user?.email) {
            setPost({ ...post, author: session.data?.user?.email })
        }

    }, [session, post])

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/login");
    }


    return (
        <div className="max-w-[720px] m-auto">
            <form method="post" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
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

                <div className="flex justify-center pt-2 flex-col items-center">
                    <button className="bg-white border border-black border-opacity-25 rounded-sm px-2 py-1 font-semibold hover:bg-gray-100">
                        Publish
                    </button>
                </div>

            </form>
        </div>
    );
}
