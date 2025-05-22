'use server';
import { connectDB } from "@/lib/mongodb";
import { fetchWeight } from '@/actions/weight';
import { booksByYear } from '@/actions/book';
import { fetchAllWaterForToday } from '@/actions/nutrition_water';
import { fetchSettings } from '@/actions/settings';
import { fetchFasting } from "./nutrition_fasting";

export async function fetchOverview() {
    const useBook = await booksByYear();
    const useFasting = await fetchFasting();
    const useWater = await fetchAllWaterForToday();
    const useWeight = await fetchWeight();

    const settings = await fetchSettings();

    try {
        await connectDB();

        return {
            bookOverview: useBook,
            fastingOverview: useFasting,
            waterOverview: useWater,
            weightOverview: useWeight,

            showBooks: settings.useShowBooks.value,
            showFasting: settings.useShowFasting.value,
            showWater: settings.useShowWaterIntake.value,
            showWeight: settings.useShowWeight.value,
        }
    } catch (error) {
        console.log(error)
        return error
    }
};