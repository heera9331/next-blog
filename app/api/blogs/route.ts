import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils";
import Post from "@/models/Post"; 

export const GET = async (request: NextRequest) => {
    
  try {
    await connectDB();

    const posts = await Post.find({});

    return NextResponse.json(posts);
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request:NextRequest) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};