"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchEntry() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'journal');

        const entries = data[0].journal.reverse() ?? [];

        return {
            entries: entries.slice(0, 10),
            all: entries,
            results: data[0].journal.length.toString()
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function addEntry(values: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { journal: { ...values } } }, { new: true });

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editEntry(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'journal._id': _id },
            { $set: { 'journal.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/spirit');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteEntry(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'journal._id': id },
            { $pull: { 'journal': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/spirit');


    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchEntryById(values: any) {
    const { id } = values;
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const journal = user.journal.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return journal[0]

    } catch (error) {
        console.log(error);
        return error;
    }
};