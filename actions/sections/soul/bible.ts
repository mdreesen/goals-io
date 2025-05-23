"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchBible() {

    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'bibles');

        const devotional = data[0].bibles.reverse().filter((item: any) => item?.type?.includes('Devotional')) ?? [];
        const sermon = data[0].bibles.filter((item: any) => item?.type?.includes('Sermon')) ?? [];

        return {
            devotionalLimited: devotional.slice(0, 10),
            sermonLimited: sermon.slice(0, 10),
            devotionalAll: devotional,
            sermonAll: sermon,
            all: data
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function addBible(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { bibles: { ...values } } }, { new: true });

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editBible(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'bibles._id': _id },
            { $set: { 'bibles.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/spirit');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteBible(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'bibles._id': id },
            { $pull: { 'bibles': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/spirit');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchBibleById(values: any) {
    const { id } = values;
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const bibles = user.bibles.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return bibles[0]

    } catch (error) {
        console.log(error);
        return error;
    }
};