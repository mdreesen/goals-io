"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { revalidatePath } from 'next/cache';

export async function editProfile(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { _id: _id },
            { ...values },
            { new: true });

        revalidatePath('/dashboard/weight');


    } catch (e) {
        console.log(e)
        return e
    }
}

