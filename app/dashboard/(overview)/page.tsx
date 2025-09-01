import { Suspense } from "react";
import { ChartSkeleton } from '@/components/loaders/Skeletons';
import Welcome from '@/ui/overview/Welcome';
import Stats from '@/ui/overview/Stats';

import { parse } from '@/lib/formatters';
import { fetchUserOverview } from "@/actions/user";
import { fetchOverview } from '@/actions/overview';
import { booksByMonth } from "@/actions/charts/bookChart";
import { dataPerMonth } from '@/actions/charts/coldSoakChart';
import { weightByMonth } from "@/actions/charts/weightChart";
import { waterByday } from "@/actions/charts/waterIntakeChart";
import { workoutsByMonth } from "@/actions/charts/workoutChart";
import { fetchSettings } from "@/actions/settings";

import { UseBooksPerMonthChart } from "@/components/charts/UseBooksPerMonthChart";
import { UseColdSoakPerMonthChart } from "@/components/charts/UseColdSoakPerMonthChart";
import { UseWaterPerDayChart } from "@/components/charts/UseWaterPerDayChart";
import { UseWeightPerDayChart } from "@/components/charts/UseWeightPerDayChart";
import { UseWorkoutPerMonthChart } from "@/components/charts/UseWorkoutPerMonthChart";

export default async function Page() {

    const useUser = await fetchUserOverview();
    const stats = await fetchOverview();
    const booksPerMonth = await booksByMonth();
    const coldSoaksPerMonth = await dataPerMonth();
    const waterPerDay = await waterByday();
    const weightPerMonth = await weightByMonth();
    const workoutPerMonth = await workoutsByMonth();
    const userSettings = await fetchSettings();

    const progressionSection = (
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Your Progress Charts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {userSettings.useShowBooks.value && (
                    <Suspense fallback={<ChartSkeleton />}>
                        <UseBooksPerMonthChart data={parse(booksPerMonth)} />
                    </Suspense>
                )}

                {userSettings.useShowColdSoak.value && (
                    <Suspense fallback={<ChartSkeleton />}>
                        <UseColdSoakPerMonthChart data={parse(coldSoaksPerMonth)} />
                    </Suspense>
                )}

                {userSettings.useShowWaterIntake.value && (
                    <Suspense fallback={<ChartSkeleton />}>
                        <UseWaterPerDayChart data={parse(waterPerDay)} />
                    </Suspense>
                )}

                {userSettings.useShowWeight.value && (
                    <Suspense fallback={<ChartSkeleton />}>
                        <UseWeightPerDayChart data={parse(weightPerMonth)} />
                    </Suspense>
                )}

                {userSettings.useShowWorkout.value && (
                    <Suspense fallback={<ChartSkeleton />}>
                        <UseWorkoutPerMonthChart data={parse(workoutPerMonth)} />
                    </Suspense>
                )}
            </div>
        </div>
    );

    return (
        <div className="font-inter p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Welcome user={parse(useUser)} />
                <Stats stats={parse(stats)} />
                {progressionSection}
                {/* <RecentActivity /> */}
            </div>
        </div>
    );
};