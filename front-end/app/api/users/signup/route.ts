import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password, username } = reqBody;

    const searchUsername = await User.findOne({ username });

    if (searchUsername) {
      return NextResponse.json(
        { error: "Такое имя уже существует" },
        { status: 400 }
      );
    }

    const searchEmail = await User.findOne({ email });

    if (searchEmail) {
      return NextResponse.json(
        { error: "Такой email уже существует" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error in signup server function:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await User.findOne();
    const { username } = users;
    const uniqueUserName = await User.findOne({ username });

    if (uniqueUserName) {
      return NextResponse.json(
        { error: "Такое имя уже существует" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
