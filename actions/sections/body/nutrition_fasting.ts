"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from 'next/cache';
import { date_time_fasting } from "@/lib/date_time";
import { parse } from "@/lib/formatters";

export async function fetchAllFasting() {
    const session = await getServerSession();

    try {
        await connectDB();

        const data = await User.find({ email: session?.user.email }, 'fasting');

        return {
            data: data[0].fasting.reverse() ?? [],
        }

    } catch (error) {
        console.log(error);
        return error;
    }
};

export async function fetchFasting() {
    const session = await getServerSession();

    try {
        await connectDB();
        const now = await date_time_fasting();

        const data = await User.find({ email: session?.user.email }, 'fasting');
        const latestFastingData = data[0].fasting.reverse()[0];

        const fastingText = () => {
            switch (true) {
                // No fasting data
                case !latestFastingData?._id:
                    return 'Not Started';
                    break
                // Fasting started
                case latestFastingData.start:
                    return "Currently Fasting";
                    break
                // Started but not complete
                case latestFastingData.ended && !latestFastingData.completed:
                    return "Ended Early";
                    break
                // Not completed fasting
                case !latestFastingData?.completed:
                    return "Not Complete";
                    break
                default:
                    return "Complete"
            };
        };

        return {
            user: latestFastingData ?? [],
            date_now: now,
            today_complete: latestFastingData?.completed,
            duration: latestFastingData?.duration,
            status: fastingText(),
            currently_fasting: latestFastingData.start
        };

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function addFasting(values: any) {
    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { fasting: { ...values } } }, { new: true });

        revalidatePath('/dashboard/body');

    } catch (error) {
        console.log(error)
        return error
    }
};

export async function editFasting(values: any) {
    const { _id } = values;

    const session = await getServerSession();

    const data = await User.find({ email: session?.user.email }, 'fasting');
    const findFastingId = data[0].fasting.find((item: any) => parse(item._id).includes(_id)) ?? [];

    const makeFastingObj = {
        duration: findFastingId.duration,
        ...values
    }

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'fasting._id': _id },
            { $set: { 'fasting.$': { ...makeFastingObj } } },
            { new: true });

        revalidatePath('/dashboard/body');


    } catch (error) {
        console.log(error)
        return error
    }
};
