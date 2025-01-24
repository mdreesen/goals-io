import { Suspense } from "react";
import Weight from '@/ui/Weight';
import NutritionWater from "@/ui/NutritionWater";
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowNutrition, useShowWeight } = useSettings;

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
            {useWater}
            {useWeight}
        </div>
    )
}
