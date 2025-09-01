"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { date_today } from "@/lib/date_time";

export async function fetchGratitudes() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'gratitudes');

        return data[0].gratitudes ?? []
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function addGratitudes(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { gratitudes: { ...values } } }, { new: true });

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editGratitudes(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'gratitudes._id': _id },
            { $set: { 'gratitudes.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/mind');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteGratitudes(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'gratitudes._id': id },
            { $pull: { 'gratitudes': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/mind');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchGratitudeById(values: any) {
    const { id } = values;

    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const gratitudes = user.gratitudes.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return gratitudes[0]

    } catch (error) {
        console.log(error);
        return error;
    }
};
