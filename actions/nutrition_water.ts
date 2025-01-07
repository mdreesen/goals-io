"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { formatDateAndTime, convertWaterIntake } from "@/lib/formatters";
import { revalidatePath } from 'next/cache';

export const fetchWaterIntakeToday = async () => {

    try {
        await connectDB();
        const session = await getServerSession();

        // Get today's date
        const today = formatDateAndTime(new Date());

        const user = await User.findOne({ email: session?.user.email });

        const waterIntakeToday = user?.water?.find((item: any) => item.date.includes(today));

        return waterIntakeToday ?? [];

    } catch (e) {
        console.log(e);
        return e;
    }
};

export async function createWaterIntake(values: any) {

    const session = await getServerSession();

    try {
        await connectDB();

        await User.findOneAndUpdate({ email: session?.user.email }, { $addToSet: { water: { ...values } } }, { new: true });

    } catch (e) {
        console.log(e)
        return e
    }
};

export async function editWaterIntake(values: any) {
    const { _id } = values;

    try {
        await connectDB();

        await User.findOneAndUpdate(
            { 'water._id': _id },
            { $set: { 'water.$': { ...values } } },
            { new: true });

        revalidatePath('/dashboard/nutrition');


    } catch (e) {
        console.log(e)
        return e
    }
};

// Total weight and convert to oz for water intake
export const fetchWaterIntakeToOz = async () => {
    try {
        await connectDB();
        const session = await getServerSession();

        // Get today's date
        const today = formatDateAndTime(new Date());

        // Find weight recorded today
        const user = await User.findOne({ email: session?.user.email });
        const userWeight = user.weight;
        const findWeightDate = userWeight.find((item: any) => item.weight_date.includes(today));

        // Find latest recorded weight
        const latestUserWeight = user.weight.reverse();
        const latestRecordedWeight = latestUserWeight[0] ?? [];


        // If user has a recorded date, use this
        // Otherwise, use date from what was last recorded
        return convertWaterIntake(findWeightDate) ?? convertWaterIntake(latestRecordedWeight);
    } catch (error) {
        console.log(error)
        return error
    }
};