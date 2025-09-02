'use server';
import { connectDB } from "@/lib/mongodb";
import { fetchWeightOverview } from '@/actions/sections/body/weight';
import { booksByYear } from '@/actions/sections/mind/book';
import { fetchAllWaterForToday } from '@/actions/sections/body/nutrition_water';
import { fetchSettings } from '@/actions/settings';
import { fetchFasting } from "./sections/body/nutrition_fasting";
import { fetchAllColdSoakToday } from "./sections/body/coldSoak";

export async function fetchedAchived() {
    const useColdSoak = await fetchAllColdSoakToday();
    const useFasting = await fetchFasting();
    const useWater = await fetchAllWaterForToday();
    const useWeight = await fetchWeightOverview();

    const settings = await fetchSettings();

    let goalAchived = [] as Array<boolean[]>;

    // Show Categories
    const showColdSoak = settings.useShowColdSoak.value;
    const showFasting = settings.useShowFasting.value;
    const showWater = settings.useShowWaterIntake.value;
    const showWeight = settings.useShowWeight.value;


    // Logged Categories
    const loggedColdSoak = useColdSoak?.cold_soaked_today;
    const loggedFasting = useFasting?.today_complete;
    const loggedWater = useWater?.congrats;
    const loggedWeight = useWeight?.logged_today;

    showColdSoak !== false && goalAchived.push(loggedColdSoak);
    showFasting !== false && goalAchived.push(loggedFasting);
    showWater !== false && goalAchived.push(loggedWater);
    showWeight !== false && goalAchived.push(loggedWeight);

    // Tests enabled goals
    const goalsReached = goalAchived.every(goal => goal);

    try {
        await connectDB();

        return goalsReached;
        
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function fetchOverview() {
    const useBook = await booksByYear();
    const useColdSoak = await fetchAllColdSoakToday();
    const useFasting = await fetchFasting();
    const useWater = await fetchAllWaterForToday();
    const useWeight = await fetchWeightOverview();
    const useAchived = await fetchedAchived();

    const settings = await fetchSettings();


    // Show Categories
    const showBooks = settings.useShowBooks.value;
    const showColdSoak = settings.useShowColdSoak.value;
    const showFasting = settings.useShowFasting.value;
    const showWater = settings.useShowWaterIntake.value;
    const showWeight = settings.useShowWeight.value;

    try {
        await connectDB();

        return {
            bookOverview: useBook,
            coldSoakOverview: useColdSoak,
            fastingOverview: useFasting,
            waterOverview: useWater,
            weightOverview: useWeight,

            showBooks: showBooks,
            showColdSoak: showColdSoak,
            showFasting: showFasting,
            showWater: showWater,
            showWeight: showWeight,

            achivedGoals: useAchived
        }
    } catch (error) {
        console.log(error)
        return error
    }
};