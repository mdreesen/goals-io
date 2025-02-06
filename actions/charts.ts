"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { current_year } from '@/lib/date_time';

export async function bookYears() {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });
        const books = user?.books ?? [];

        const years = books?.map((item: any) => {

            // Create a Date object from the string
            const date = new Date(item?.book_start_date || item?.book_end_date);

            // Extract the year
            const year = date.getFullYear();

            return year;
        });

        const convertYears = [...new Set(years.sort())].reverse();

        switch (true) {
            case convertYears.length === 1:
                return [current_year(), ...convertYears];
                break
            default:
                return convertYears
        };

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function booksPerYear(year: any) {

    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const books = user?.books ?? [];

        // book_start_date by month to current year
        const january_start = books?.filter((item: any) => item?.book_start_date?.includes('Jan') && item?.book_start_date?.includes(year)).length;
        const february_start = books?.filter((item: any) => item?.book_start_date?.includes('Feb') && item?.book_start_date?.includes(year)).length;
        const march_start = books?.filter((item: any) => item?.book_start_date?.includes('Mar') && item?.book_start_date?.includes(year)).length;
        const april_start = books?.filter((item: any) => item?.book_start_date?.includes('Apr') && item?.book_start_date?.includes(year)).length;
        const may_start = books?.filter((item: any) => item?.book_start_date?.includes('May') && item?.book_start_date?.includes(year)).length;
        const june_start = books?.filter((item: any) => item?.book_start_date?.includes('Jun') && item?.book_start_date?.includes(year)).length;
        const july_start = books?.filter((item: any) => item?.book_start_date?.includes('Jul') && item?.book_start_date?.includes(year)).length;
        const august_start = books?.filter((item: any) => item?.book_start_date?.includes('Aug') && item?.book_start_date?.includes(year)).length;
        const september_start = books?.filter((item: any) => item?.book_start_date?.includes('Sep') && item?.book_start_date?.includes(year)).length;
        const october_start = books?.filter((item: any) => item?.book_start_date?.includes('Oct') && item?.book_start_date?.includes(year)).length;
        const november_start = books?.filter((item: any) => item?.book_start_date?.includes('Nov') && item?.book_start_date?.includes(year)).length;
        const december_start = books?.filter((item: any) => item?.book_start_date?.includes('Dec') && item?.book_start_date?.includes(year)).length;

        const january_end = books?.filter((item: any) => item?.book_end_date?.includes('Jan') && item?.book_end_date?.includes(year)).length;
        const february_end = books?.filter((item: any) => item?.book_end_date?.includes('Feb') && item?.book_end_date?.includes(year)).length;
        const march_end = books?.filter((item: any) => item?.book_end_date?.includes('Mar') && item?.book_end_date?.includes(year)).length;
        const april_end = books?.filter((item: any) => item?.book_end_date?.includes('Apr') && item?.book_end_date?.includes(year)).length;
        const may_end = books?.filter((item: any) => item?.book_end_date?.includes('May') && item?.book_end_date?.includes(year)).length;
        const june_end = books?.filter((item: any) => item?.book_end_date?.includes('Jun') && item?.book_end_date?.includes(year)).length;
        const july_end = books?.filter((item: any) => item?.book_end_date?.includes('Jul') && item?.book_end_date?.includes(year)).length;
        const august_end = books?.filter((item: any) => item?.book_end_date?.includes('Aug') && item?.book_end_date?.includes(year)).length;
        const september_end = books?.filter((item: any) => item?.book_end_date?.includes('Sep') && item?.book_end_date?.includes(year)).length;
        const october_end = books?.filter((item: any) => item?.book_end_date?.includes('Oct') && item?.book_end_date?.includes(year)).length;
        const november_end = books?.filter((item: any) => item?.book_end_date?.includes('Nov') && item?.book_end_date?.includes(year)).length;
        const december_end = books?.filter((item: any) => item?.book_end_date?.includes('Dec') && item?.book_end_date?.includes(year)).length;

        return [
            {
                name: 'January',
                start_date: january_start,
                end_date: january_end,
            },
            {
                name: 'February',
                start_date: february_start,
                end_date: february_end,
            },
            {
                name: 'March',
                start_date: march_start,
                end_date: march_end,
            },
            {
                name: 'April',
                start_date: april_start,
                end_date: april_end,
            },
            {
                name: 'May',
                start_date: may_start,
                end_date: may_end,
            },
            {
                name: 'June',
                start_date: june_start,
                end_date: june_end,
            },
            {
                name: 'July',
                start_date: july_start,
                end_date: july_end,
            },
            {
                name: 'August',
                start_date: august_start,
                end_date: august_end,
            },
            {
                name: 'September',
                start_date: september_start,
                end_date: september_end,
            },
            {
                name: 'October',
                start_date: october_start,
                end_date: october_end,
            },
            {
                name: 'November',
                start_date: november_start,
                end_date: november_end,
            },
            {
                name: 'December',
                start_date: december_start,
                end_date: december_end,
            },
        ];

    } catch (error) {
        console.log(error)
    }
};

export async function booksByMonth() {

    try {
        await connectDB();

        const year = current_year();
        const useMonths = await booksPerYear(year);
        const useBookYears = await bookYears();

        return {
            years: useBookYears,
            dataPerYear: useMonths
        }

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function weightByMonth() {

    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, 'weight');

        return data[0]?.weight ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function waterByday() {

    try {
        await connectDB();
        const session = await getServerSession();

        const data = await User.find({ email: session?.user.email }, 'water');

        return data[0]?.water ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};