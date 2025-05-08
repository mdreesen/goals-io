"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { current_year } from '@/lib/date_time';

export async function workoutYears() {
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });
        const data = user?.workout ?? [];

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

export async function workoutsPerYear(year: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        const user = await User.findOne({ email: session?.user.email });

        const workout = user?.workout ?? [];

        // book_start_date by month to current year
        const january_date = workout?.filter((item: any) => item?.date?.includes('Jan') && item?.date?.includes(year)).length;
        const february_date = workout?.filter((item: any) => item?.date?.includes('Feb') && item?.date?.includes(year)).length;
        const march_date = workout?.filter((item: any) => item?.date?.includes('Mar') && item?.date?.includes(year)).length;
        const april_date = workout?.filter((item: any) => item?.date?.includes('Apr') && item?.date?.includes(year)).length;
        const may_date = workout?.filter((item: any) => item?.date?.includes('May') && item?.date?.includes(year)).length;
        const june_date = workout?.filter((item: any) => item?.date?.includes('Jun') && item?.date?.includes(year)).length;
        const july_date = workout?.filter((item: any) => item?.date?.includes('Jul') && item?.date?.includes(year)).length;
        const august_date = workout?.filter((item: any) => item?.date?.includes('Aug') && item?.date?.includes(year)).length;
        const september_date = workout?.filter((item: any) => item?.date?.includes('Sep') && item?.date?.includes(year)).length;
        const october_date = workout?.filter((item: any) => item?.date?.includes('Oct') && item?.date?.includes(year)).length;
        const november_date = workout?.filter((item: any) => item?.date?.includes('Nov') && item?.date?.includes(year)).length;
        const december_date = workout?.filter((item: any) => item?.date?.includes('Dec') && item?.date?.includes(year)).length;

        return [
            {
                name: 'January',
                workouts: january_date,
            },
            {
                name: 'February',
                workouts: february_date,
            },
            {
                name: 'March',
                workouts: march_date,
            },
            {
                name: 'April',
                workouts: april_date,
            },
            {
                name: 'May',
                workouts: may_date,
            },
            {
                name: 'June',
                workouts: june_date,
            },
            {
                name: 'July',
                workouts: july_date,
            },
            {
                name: 'August',
                workouts: august_date,
            },
            {
                name: 'September',
                workouts: september_date,
            },
            {
                name: 'October',
                workouts: october_date,
            },
            {
                name: 'November',
                workouts: november_date,
            },
            {
                name: 'December',
                workouts: december_date,
            },
        ];

    } catch (error) {
        console.log(error)
    }
};

export async function workoutsByMonth() {

    const year = current_year();
    const useMonths = await workoutsPerYear(year);
    const useYear = await workoutYears();

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