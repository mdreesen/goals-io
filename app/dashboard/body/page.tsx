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
    const { useShowNutrition, useShowWeight } = useSettings;

    const useFasting = useShowNutrition?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Fasting />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    const useWater = useShowNutrition?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <NutritionWater />
            </Suspense>
            <div className="border-t border-black/20"></div>
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
