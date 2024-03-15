import Image from "next/image";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { CgInsights } from "react-icons/cg";
const getPosts = async () => {
  try {
    let res = await axios.get('http://localhost:3000/api/posts?currentPage=1&pageSize=15');
    let posts = await res.data;
    return posts;
  } catch (error) {
    console.log('error while fetching data', error);
  }
  return [];
}

export default async function Home() {
  let posts = await getPosts();
  console.log('posts', posts);


  return (
    <div>
      <h1 className="font-semibold text-2xl">Next Blog Home Page</h1>

      {/* posts */}
      <div className="flex flex-wrap m-auto my-4 gap-4">

        {posts.length && posts.map((post: any, idx: number) => {
          return <div key={idx} className="m-auto md:m-0 w-[280px] h-[300px]  border border-gray-200 rounded overflow-hidden relative hover:shadow-md">
            <h2 className="bg-gray-100 font-semibold text-xl  p-2 overflow-hidden">{post.slug}</h2>
            <p className="p-2">{post.desc.length > 150 ? post.desc.slice(0, 150) : post.desc}
              <a href={`/blogs/${post.slug}`} className="px-2 underline text-blue-800">view</a>
            </p>

            <p className="bg-gray-100 p-1 absolute bottom-0 w-full flex items-center gap-2">
              <div className="flex items-center gap-1">
                <CgInsights className="text-2xl" />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <AiFillLike />
                <span>{post.likes}</span>
              </div>
            </p>
          </div>
        })}

      </div>
    </div>
  );
}
