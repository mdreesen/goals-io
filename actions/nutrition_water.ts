"use server";
import { connectDB } from "@/lib/mongodb";
import User from "@/(models)/User";
import { getServerSession } from "next-auth/next";
import { formatDateAndTime, bodyWeightToWaterInOz } from "@/lib/formatters";
import { revalidatePath } from 'next/cache';
import { date_today } from '@/lib/date_time';

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
export async function fetchWaterIntakeToOz() {
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

        // Find weight for today if recorded
        const findWeightToday = userWeight.find((item: any) => item.weight_date.includes(today));

        // Either use weight found today, if not today, then use latest weight recoreded
        const useWeight = findWeightToday?.weight ?? latestWeight?.weight;

        // Convert weight found to oz
        const hasWeight = bodyWeightToWaterInOz(useWeight);

        return hasWeight;

    } catch (error) {
        console.log(error)
        return error
    }
};

// Total weight and convert to oz for water intake
export async function fetchAllWaterForToday() {
    try {
        await connectDB();
        const session = await getServerSession();

        const user = await User.findOne({ email: session?.user.email });

        const useConvertToOz = await fetchWaterIntakeToOz();

        // Use today's date
        const today = date_today();

        // Find water recorded for today
        const waterIntakeToday = user.water.reverse().find((item: any) => item.date.includes(today)) ?? { water_intake: '0' };

        // Convert water data to numbers for math
        const waterToday = Number(waterIntakeToday.water_intake);

        // Take numbers and have a total of progress so far
        const currentProgress = (waterToday / useConvertToOz) * 100;

        // Check if any user created water today
        const waterCheck = waterIntakeToday.date !== today ? true : false;

        const useWaterIntake = {
            waterIntakeToday: waterIntakeToday,
            create: waterCheck,
            useDateToday: today,
            current_progress: currentProgress.toString(),
            total_water: useConvertToOz,
            date: today,
        }

        return useWaterIntake

    } catch (error) {
        console.log(error)
        return error
    }
};