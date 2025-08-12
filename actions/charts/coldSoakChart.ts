"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { current_year } from '@/lib/date_time';

export async function dataYears() {
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });
        const data = user?.cold_soaks ?? [];

        const years = data?.map((item: any) => {

            // Create a Date object from the string
            const date = new Date(item?.date);
            // Extract the year
            const year = date.getFullYear();
            return year;
        });

        const convertYears = [...new Set(years.sort())].reverse();

        switch (true) {
            case convertYears.length === 1:
                return [...convertYears];
                break
            default:
                return convertYears
        };

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function dataPerYear(year: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const data = user?.cold_soaks ?? [];

        // book_start_date by month to current year
        const january_date = data?.filter((item: any) => item?.dateFormatted?.includes('Jan') && item?.dateFormatted?.includes(year)).length;
        const february_date = data?.filter((item: any) => item?.dateFormatted?.includes('Feb') && item?.dateFormatted?.includes(year)).length;
        const march_date = data?.filter((item: any) => item?.dateFormatted?.includes('Mar') && item?.dateFormatted?.includes(year)).length;
        const april_date = data?.filter((item: any) => item?.dateFormatted?.includes('Apr') && item?.dateFormatted?.includes(year)).length;
        const may_date = data?.filter((item: any) => item?.dateFormatted?.includes('May') && item?.dateFormatted?.includes(year)).length;
        const june_date = data?.filter((item: any) => item?.dateFormatted?.includes('Jun') && item?.dateFormatted?.includes(year)).length;
        const july_date = data?.filter((item: any) => item?.dateFormatted?.includes('Jul') && item?.dateFormatted?.includes(year)).length;
        const august_date = data?.filter((item: any) => item?.dateFormatted?.includes('Aug') && item?.dateFormatted?.includes(year)).length;
        const september_date = data?.filter((item: any) => item?.dateFormatted?.includes('Sep') && item?.dateFormatted?.includes(year)).length;
        const october_date = data?.filter((item: any) => item?.dateFormatted?.includes('Oct') && item?.dateFormatted?.includes(year)).length;
        const november_date = data?.filter((item: any) => item?.dateFormatted?.includes('Nov') && item?.dateFormatted?.includes(year)).length;
        const december_date = data?.filter((item: any) => item?.dateFormatted?.includes('Dec') && item?.dateFormatted?.includes(year)).length;

        return [
            {
                name: 'January',
                coldSoaks: january_date,
            },
            {
                name: 'February',
                coldSoaks: february_date,
            },
            {
                name: 'March',
                coldSoaks: march_date,
            },
            {
                name: 'April',
                coldSoaks: april_date,
            },
            {
                name: 'May',
                coldSoaks: may_date,
            },
            {
                name: 'June',
                coldSoaks: june_date,
            },
            {
                name: 'July',
                coldSoaks: july_date,
            },
            {
                name: 'August',
                coldSoaks: august_date,
            },
            {
                name: 'September',
                coldSoaks: september_date,
            },
            {
                name: 'October',
                coldSoaks: october_date,
            },
            {
                name: 'November',
                coldSoaks: november_date,
            },
            {
                name: 'December',
                coldSoaks: december_date,
            },
        ];

    } catch (error) {
        console.log(error)
    }
};

export async function dataPerMonth() {

    const year = current_year();
    const useMonths = await dataPerYear(year);
    const useYear = await dataYears();

    try {
        await connectDB();

        return {
            years: useYear,
            dataPerYear: useMonths
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};