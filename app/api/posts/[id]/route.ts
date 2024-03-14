import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils";
import { Post } from "@/models";

export const GET = async (request: NextRequest, { params }: {params: object}) => {
  const { id } = params;

  try {
    await connectDB();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: NextRequest, { params }: {params: object}) => {
  const { id } = params;

  try {
    await connectDB();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};