import { Suspense } from "react";
import { booksByMonth } from "@/actions/charts/bookChart";
import { weightByMonth } from "@/actions/charts/weightChart";
import { waterByday } from "@/actions/charts/waterIntakeChart";
import { workoutsByMonth } from "@/actions/charts/workoutChart";
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

    // Books per month chart
    const chartOne = showBooks && (
        <div className="relative lg:col-span-3">
            <Suspense fallback={<ChartSkeleton />}>
                <UseBooksPerMonthChart data={parse(booksPerMonth)} />
            </Suspense>
        </div>
    );

    // Water per day chart
    const chartTwo = showWater && (
        <div className="relative lg:col-span-3">
            <Suspense fallback={<ChartSkeleton />}>
                <UseWaterPerDayChart data={parse(waterPerDay)} />
            </Suspense>
        </div>
    );

    // Weight per day chart
    const chartThree = showWeight && (
        <div className="relative lg:col-span-3">
            <Suspense fallback={<ChartSkeleton />}>
                <UseWeightPerDayChart data={parse(weightPerMonth)} />
            </Suspense>
        </div>
    );

    // Workout per day chart
    const chartFour = showWorkout && (
        <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white fill-black-500 drop-shadow-lg drop-shadow-black-500/50" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-4">
                <h2 className="text-base/7 font-semibold text-indigo-900">Workouts</h2>
                <Suspense fallback={<ChartSkeleton />}>
                    <UseWorkoutPerMonthChart data={parse(workoutPerMonth)} />
                </Suspense>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>
    );

    return (
        <div className="py-12 sm:py-12">
            <div>
                <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl mb-6">RECAPITULATION</h2>
                <Overview />

                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto">
                        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl text-center">
                            Progress
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                            {chartOne}
                            {chartTwo}
                            {chartThree}
                            {chartFour}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
