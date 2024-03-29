import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { CgInsights } from "react-icons/cg";
import { CommentForm } from "@/components";


async function getPost(id: string) {
    const res = await axios.get(`/api/posts/${id}`);

    if (res.statusText != "OK") {
        return notFound()
    }

    let post = await res.data;
    return post;
}


// export async function generateMetadata(post) {
//     console.log(post);

//     return {
//         title: post.slug,
//         description: post.desc,
//     };
// }

const BlogPost = async ({ params }: any) => {
    try {
        const post = await getPost(params.id);
    
        if (!post) {
            notFound();
        }
    
        const tags = post.tags.split(',');
    
        console.log(tags);
    
    } catch (error) {
        return notFound();
    }
    // generateMetadata(post);

    return (
        <div className="">
            <h1 className="font-semibold text-2xl py-1">{post && post.slug.replaceAll("-", " ").toUpperCase()}</h1>
            <div>
                <p className="text-xl">{post.desc}</p>
                <div className="bg-orange-600 p-1 w-full flex items-center gap-2 my-2">
                    <div className="flex items-center gap-1">
                        <CgInsights className="text-2xl" />
                        <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <AiFillLike />
                        <span>{post.likes}</span>
                    </div>
                </div>

                <div className="my-2">
                    <h2 className="text-xl font-semibold py-2">Hashtags</h2>
                    <div className="py-2">
                        {tags && tags.map((tag: string, idx: number) => {
                            return <p className="p-1 inline bg-gray-100" key={idx}>{`#${tag}`}</p>
                        })}
                    </div>
                </div>
                <CommentForm />
            </div>
        </div>
    );
};

export default BlogPost;