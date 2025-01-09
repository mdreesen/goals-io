"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";

export async function fetchUser() {
    try {
        await connectDB();
        const session = await getServerSession();

        // Find user and farmer with associated emails
        const user = await User.findOne({ email: session?.user.email });

        return user ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
}

