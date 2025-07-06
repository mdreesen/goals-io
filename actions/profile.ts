"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { revalidatePath } from 'next/cache';

export async function editProfile(values: any) {
    const { _id, email } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { _id: _id },
            { email: email.toLowerCase(), ...values },
            { new: true });

        revalidatePath('/dashboard/profile');


    } catch (error) {
        console.log(error)
        return error
    }
}

