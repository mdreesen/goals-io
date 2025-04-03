"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { current_year } from "@/lib/date_time";
import { findBook } from '@/lib/book_formatters';

export async function bookSearch({ book_title, book_author }: any) {

    const splitAuthor = book_author.split(",");
    const useAuthor = splitAuthor[0] ?? book_author;

    try {

        // Using API with authors and without Authors
        const openLibrary = await fetch(`https://openlibrary.org/search.json?q=${book_title}?author=${useAuthor}&limit=5`);
        const openLibraryAllTitle = await fetch(`https://openlibrary.org/search.json?q=${book_title}&limit=5`);

        const useOpenLibrary = await openLibrary.json();
        const useOpenLibraryAllTitles = await openLibraryAllTitle.json();

        // Filtering all titles api and finding the author name within
        const filterTitles = useOpenLibraryAllTitles.docs.filter((item: any) => item.author_name.includes(useAuthor));

        // Image URL used for the books
        // https://covers.openlibrary.org/a/id/8441376.jpg

        // If the api with authors found titles, lets use this api
        // Otherwise, lets use the api with found authors within the items
        // Default to an empty array
        switch (true) {
            case useOpenLibrary.docs.length > 0:
                return useOpenLibrary.docs;
                break
            case filterTitles.length > 0:
                return filterTitles;
                break
            default:
                return [];
        }
    } 
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function fetchBooks() {
    const session = await getServerSession();

    try {
        await connectDB();

        const limited = await User.find({ email: session?.user.email }, { books: { $slice: -10 } }).limit(10);
        const data = await User.find({ email: session?.user.email }, 'books');

        return {
            limited: limited[0].books ?? [],
            allData: data[0].books ?? [],
            totalBooks: data[0].books.length.toString()
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function addBook(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        const useBookSearch = await bookSearch({ book_title: values.book_title, book_author: values.book_author });
        const useFindBook = await findBook({ data: useBookSearch });

        function useImage() {
            const imageURL = `https://covers.openlibrary.org/a/id/${useFindBook}.jpg`;

            if (useFindBook !== undefined) {
                return imageURL;
            } else {
                return ''
            }
        };

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { books: { ...values, book_image: useImage() } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editBook(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        const useBookSearch = await bookSearch({ book_title: values.book_title, book_author: values.book_author });
        const useFindBook = await findBook({ data: useBookSearch });

        function useImage() {
            const imageURL = `https://covers.openlibrary.org/a/id/${useFindBook}.jpg`;

            if (useFindBook !== undefined) {
                return imageURL;
            } else {
                return ''
            }
        };

        await User.findOneAndUpdate(
            { 'books._id': _id },
            { $set: { 'books.$': { ...values, book_image: useImage() } } },
            { new: true });

        revalidatePath('/dashboard/mind');


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

        revalidatePath('/dashboard/mind');


    } catch (e) {
        console.log(e)
        return e
    }
};

export async function fetchBookById(values: any) {
    const { id } = values;
    const session = await getServerSession();

    try {
        await connectDB();

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
    const session = await getServerSession();

    try {
        await connectDB();

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

