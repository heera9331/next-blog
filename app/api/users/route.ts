import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/utils";
import { User }from "@/models"; 

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const users = await User.find({});

    return NextResponse.json(users);
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request:NextRequest) => {
  const body = await request.json();

  const newUser = new User(body);

  try {
    await connectDB(); 
    await newUser.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};