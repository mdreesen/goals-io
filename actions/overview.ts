'use server';
import { connectDB } from "@/lib/mongodb";
import { fetchWeight } from '@/actions/weight';
import { booksByYear } from '@/actions/book';
import { fetchAllWaterForToday } from '@/actions/nutrition_water';
import { fetchSettings } from '@/actions/settings';

export async function fetchOverview() {
    const useWeight = await fetchWeight();
    const useBook = await booksByYear();
    const useWater = await fetchAllWaterForToday();

    const settings = await fetchSettings();

    try {
        await connectDB();

        return {
            weightOverview: useWeight,
            bookOverview: useBook,
            waterOverview: useWater,

            showBooks: settings.useShowBooks.value,
            showWater: settings.useShowNutrition.value,
            showWeight: settings.useShowWeight.value,
        }
    } catch (e) {
        console.log(e)
        return e
    }
};