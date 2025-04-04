import { Suspense } from "react";
import { booksByMonth, weightByMonth, waterByday, workoutsByMonth } from "@/actions/charts";
import { ChartSkeleton } from '@/components/loaders/Skeletons';
import { parse } from '@/lib/formatters';

// Charts
import { UseBooksPerMonthChart } from "@/components/charts/UseBooksPerMonthChart";
import { UseWaterPerDayChart } from "@/components/charts/UseWaterPerDayChart";
import { UseWeightPerDayChart } from "@/components/charts/UseWeightPerDayChart";
import { UseWorkoutPerMonthChart } from "@/components/charts/UseWorkoutPerMonthChart";
import { fetchSettings } from '@/actions/settings';

// Components
import Overview from "@/ui/Overview";

export default async function Page() {

    // Chart Data
    const booksPerMonth = await booksByMonth();
    const waterPerDay = await waterByday();
    const weightPerMonth = await weightByMonth();
    const workoutPerMonth = await workoutsByMonth();
    const useSettings = await fetchSettings();


    // Conditionals
    const showBooks = useSettings.useShowBooks?.value;
    const showWater = useSettings.useShowWaterIntake?.value && waterPerDay.length > 0;
    const showWeight = useSettings.useShowWeight?.value && weightPerMonth.length > 0;
    const showWorkout = useSettings.useShowWorkout?.value;

    const bookSection = showBooks && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Books Per Month</h2>
            <Suspense fallback={<ChartSkeleton />}>
                <UseBooksPerMonthChart data={parse(booksPerMonth)} />
            </Suspense>
        </div>
    );

    const waterSection = showWater && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Water Per Day</h2>
            <Suspense fallback={<ChartSkeleton />}>
                <UseWaterPerDayChart data={parse(waterPerDay)} />
            </Suspense>
        </div>
    );

    const weightSection = showWeight && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Weight Per Day</h2>
            <Suspense fallback={<ChartSkeleton />}>
                <UseWeightPerDayChart data={parse(weightPerMonth)} />
            </Suspense>
        </div>
    );

    const workoutSection = showWorkout && (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Workouts Per Month</h2>
            <Suspense fallback={<ChartSkeleton />}>
                <UseWorkoutPerMonthChart data={parse(workoutPerMonth)} />
            </Suspense>
        </div>
    );

    return (
        <div className="bg-white py-12 sm:py-12">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>
                <Overview />
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {bookSection}
                    {waterSection}
                    {weightSection}
                    {workoutSection}
                </div>
            </div>
        </div>
    )
}
