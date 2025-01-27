"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { current_year } from "@/lib/date_time";

export async function fetchBooks() {

    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, { books:{ $slice: -10 } }).limit(10);

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

export async function booksByYear() {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const books = user?.books ?? [];

        // Get current year, conver to string
        const currentYear = current_year();

        const booksStartedToYear = books?.filter((item: any) => item?.book_start_date?.includes(currentYear)).length;
        const booksEndedToYear = books?.filter((item: any) => item?.book_end_date?.includes(currentYear)).length;

        return {
            booksStartedToYear: booksStartedToYear,
            booksEndedToYear: booksEndedToYear
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

