'use server';
import { connectDB } from "@/lib/mongodb";
import { fetchWeight } from '@/actions/weight';
import { booksByYear } from '@/actions/book';
import { fetchAllWaterForToday } from '@/actions/nutrition_water';

export async function fetchOverview() {
    const useWeight = await fetchWeight();
    const useBook = await booksByYear();
    const useWater = await fetchAllWaterForToday();

    try {
        await connectDB();

        return {
            weightOverview: useWeight,
            bookOverview: useBook,
            waterOverview: useWater
        }
    } catch (e) {
        console.log(e)
        return e
    }
};