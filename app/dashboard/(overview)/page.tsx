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
import Title from "@/components/text/Title";

export default async function Page() {

    // Chart Data
    const booksPerMonth = await booksByMonth();
    const waterPerDay = await waterByday();
    const weightPerMonth = await weightByMonth();
    const workoutPerMonth = await workoutsByMonth();
    const useSettings = await fetchSettings();


    // Conditionals
    const showBooks = useSettings.useShowBooks?.value && booksPerMonth.length > 0;
    const showWater = useSettings.useShowWaterIntake?.value && waterPerDay.length > 0;
    const showWeight = useSettings.useShowWeight?.value && weightPerMonth.length > 0;
    const showWorkout = useSettings.useShowWorkout?.value && workoutPerMonth.length > 0;

    const showProgressSection = showBooks || showWater || showWeight || showWorkout;

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
            <Suspense fallback={<ChartSkeleton />}>
                <UseWorkoutPerMonthChart data={parse(workoutPerMonth)} />
            </Suspense>
        </div>
    );

    return (
        <div>
            <div>
                <Title text="Overview" />
                <Overview />

                <div>
                    <div className="mx-auto mt-[3rem]">

                        {showProgressSection ? <Title text="Progress" /> : <div className="mt-2 max-w-lg text-pretty text-2xl text-center font-semibold tracking-tight sm:text-5xl mb-6">Start tracking your progress to see charts</div>}

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
