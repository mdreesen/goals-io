"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { formatDateAndTime } from "@/lib/formatters";
import { revalidatePath } from 'next/cache';
import { date_today } from '@/lib/date_time';

type Current_Water = {
    current_progress: string
    total_water: string,
    date: string
}

export const fetchWaterIntakeToday = async () => {

    try {
        await connectDB();
        const session = await getServerSession();

        // Get today's date
        const today = formatDateAndTime(date_today());

        const user = await User.findOne({ email: session?.user.email });

        const waterIntakeToday = user.water.find((item: any) => today.includes(item.date));

        return waterIntakeToday ?? { water_intake: '0', date: today };

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
        const today = formatDateAndTime(date_today());

        // Find weight recorded today
        // If no weight today, get from latest recorded weight
        const user = await User.findOne({ email: session?.user.email });
        const userWeight = user.weight;
        const latestWeight = user.weight.reverse()[0];
        const findWeightToday = userWeight.find((item: any) => item.weight_date.includes(today) ?? latestWeight);

        return findWeightToday?.weight ?? '0';

    } catch (error) {
        console.log(error)
        return error
    }
};

// Total weight and convert to oz for water intake
export async function fetchAllWaterForToday() {
    try {
        await connectDB();

        const useConvertToOz = await fetchWaterIntakeToOz();
        const useWaterIntakeToday = await fetchWaterIntakeToday();

        // Use today's date
        const today = formatDateAndTime(date_today());

        // Convert water data to numbers for math
        const totalWater = Number(useConvertToOz) / 2;
        const waterToday = Number(useWaterIntakeToday?.water_intake);

        // Take numbers and have a total of progress so far
        const currentProgress = (waterToday / totalWater) * 100;

        const config: Current_Water = {
            current_progress: currentProgress.toString() ?? '',
            total_water: totalWater.toString() ?? '',
            date: today
        };

        return config

    } catch (error) {
        console.log(error)
        return error
    }
};