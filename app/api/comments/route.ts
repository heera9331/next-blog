import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils";
import { Comment }from "@/models"; 
import { cp } from "fs";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const users = await Comment.find({});

    return NextResponse.json(users);
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request:NextRequest) => {
  const body = await request.json();

  const newComment = new Comment(body);

  try {
    await connectDB(); 
    await newComment.save();

    return new NextResponse("Comment has been posted", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};