import { Suspense } from "react";
import Weight from '@/ui/weight/Weight';
import NutritionWater from "@/ui/nutrition/NutritionWater";
import Fasting from "@/ui/nutrition/Fasting";
import Workout from "@/ui/workout/Workout";
import ColdSoak from '@/ui/coldSoak/ColdSoak';
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Body',
        default: 'Body',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowColdSoak, useShowWaterIntake, useShowWeight, useShowFasting, useShowWorkout } = useSettings;

    const dividerOne = useShowWaterIntake?.value || useShowWeight?.value || useShowWorkout?.value;
    const dividerTwo = useShowWeight?.value || useShowWorkout?.value;
    const dividerThree = useShowWorkout?.value;

    const useColdSoak = useShowColdSoak?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <ColdSoak />
            </Suspense>
            {dividerOne && <div className="border-t border-black/20"></div>}
        </>
    );

    const useFasting = useShowFasting?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Fasting />
            </Suspense>
            {dividerOne && <div className="border-t border-black/20"></div>}
        </>
    );

    const useWater = useShowWaterIntake?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <NutritionWater />
            </Suspense>
            {dividerTwo && <div className="border-t border-black/20"></div>}
        </>
    );

    const useWeight = useShowWeight?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Weight />
            </Suspense>
            {dividerThree && <div className="border-t border-black/20"></div>}
        </>
    );

    const useWorkout = useShowWorkout?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Workout />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem] px-[1rem]">
            {useColdSoak}
            {useFasting}
            {useWater}
            {useWeight}
            {useWorkout}
        </div>
    )
}
