"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';

export async function fetchBooks() {

    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, 'books');

        return data[0].books ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function addBook(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { books: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editBook(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'books._id': _id },
            { $set: { 'books.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/books');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function deleteBook(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'books._id': id },
            { $pull: { 'books': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/books');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchBookById(values: any) {
    const { id } = values;
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const books = user.books.filter((item: any) => {
            const idToString = item.id.toString()
            return idToString.includes(id)
        });

        return books[0]

    } catch (e) {
        console.log(e);
        return e;
    }
};

