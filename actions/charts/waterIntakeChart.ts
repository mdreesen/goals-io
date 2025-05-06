"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";

export async function waterByday() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'water');

        return data[0]?.water ?? [];

    } catch (error) {
        console.log(error);
        return error;
    }
};