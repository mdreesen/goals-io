"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export const booksByMonth = async () => {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const books = user?.books ?? [];

        user?.books ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};