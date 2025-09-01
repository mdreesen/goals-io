"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { formatDateAndTime } from "@/lib/formatters";
import { date_today } from '@/lib/date_time';

export async function fetchAllColdSoak() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'cold_soaks');
        const limited = await User.find({ email: session?.user.email }, { cold_soaks:{ $slice: -10 } }).limit(10);

        return {
            data: data[0].cold_soaks.reverse() ?? [],
            limited: limited[0].cold_soaks.reverse() ?? [],
            results: data[0].cold_soaks.length.toString()
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function fetchAllColdSoakToday() {
    const session = await getServerSession();
    const today = await date_today();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'cold_soaks');
        const latestData = data[0].cold_soaks.reverse()[0];

        return {
            data: data[0].cold_soaks.reverse() ?? [],
            last_recorded: formatDateAndTime(latestData?.date),
            cold_soaked_today: today.includes(formatDateAndTime(latestData?.date)),
            latest_data: latestData
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function addColdSoak(values: any) {
    const session = await getServerSession();

    try {
        await connectDB();
        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { cold_soaks: { ...values } } }, { new: true });

        revalidatePath('/dashboard/body');

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function deleteColdSoak(values: any) {
    const { id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'cold_soaks._id': id },
            { $pull: { 'cold_soaks': { _id: id } } },
            { new: true });

        revalidatePath('/dashboard/body');


    } catch (error) {
        console.log(error)
        return error
    }
};
