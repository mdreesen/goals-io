"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export const fetchWeight = async () => {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        return user?.weight ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};

export const addWeight = async (values: any) => {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { weight: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editWeight(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'weight._id': _id },
            { $set: { 'weight.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/weight');


    } catch (e) {
        console.log(e)
        return e
    }
};