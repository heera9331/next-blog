import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import axios from "axios";

async function getPost(id: string) {
    const res = await axios.get(`http://localhost:3000/api/posts/${id}`);
    if (res.statusText != "OK") {
        return notFound()
    }

    let post = await res.data;
    return post;
}


// export async function generateMetadata({ params }) {

//   const post = await getData(params.id)
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }

const BlogPost = async ({ params }: any) => {
    const data = await getPost(params.id);
    return (
        <div>
            <h1>Single Post Page</h1>
        </div>
    );
};

export default BlogPost;