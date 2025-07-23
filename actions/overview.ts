'use server';
import { connectDB } from "@/lib/mongodb";
import { fetchWeightOverview } from '@/actions/sections/body/weight';
import { booksByYear } from '@/actions/sections/mind/book';
import { fetchAllWaterForToday } from '@/actions/sections/body/nutrition_water';
import { fetchSettings } from '@/actions/settings';
import { fetchFasting } from "./sections/body/nutrition_fasting";

export async function fetchOverview() {
    const useBook = await booksByYear();
    const useFasting = await fetchFasting();
    const useWater = await fetchAllWaterForToday();
    const useWeight = await fetchWeightOverview();

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