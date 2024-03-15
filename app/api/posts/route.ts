import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils";
import { Post } from "@/models"; 

export const GET = async (request: NextRequest) => {
    
  try {
    await connectDB();

    const posts = await Post.find({});

    return NextResponse.json(posts, {status: 201});
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request:NextRequest, res: NextResponse) => {
  const post = await request.json();
  post.slug = post.slug.trim().replaceAll(" ", "-").toLowerCase();
   
  console.log('post ', post); 
    await connectDB();
    let ack = await Post.insertMany([post]);
    console.log('ack', ack);
    return NextResponse.json({msg: "Post has been created", ack}, {status: 201});
   
};