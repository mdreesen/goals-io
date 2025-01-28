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
};

export async function deleteUser() {

    try {
        await connectDB();
        const session = await getServerSession();

        await User.deleteOne({ email: session?.user.email });


    } catch (e) {
        console.log(e)
        return e
    }
};

