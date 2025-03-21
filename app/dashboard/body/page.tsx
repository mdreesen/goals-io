import { Suspense } from "react";
import Weight from '@/ui/weight/Weight';
import NutritionWater from "@/ui/nutrition/NutritionWater";
import Fasting from "@/ui/nutrition/Fasting";
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowWaterIntake, useShowWeight, useShowFasting } = useSettings;

    const dividerOne = useShowWaterIntake?.value || useShowWeight?.value;
    const dividerTwo = useShowWeight?.value;

    const useFasting = useShowFasting?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Fasting />
            </Suspense>
            {dividerOne && <div className="border-t border-black/20"></div>}
        </>
    );

    const useWater = useShowWaterIntake?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <NutritionWater />
            </Suspense>
            {dividerTwo && <div className="border-t border-black/20"></div>}
        </>
    );

    const useWeight = useShowWeight?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Weight />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useFasting}
            {useWater}
            {useWeight}
        </div>
    )
}
