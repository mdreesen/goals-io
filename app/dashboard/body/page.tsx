import { Suspense } from "react";
import Weight from '@/ui/Weight';
import NutritionWater from "@/ui/NutritionWater";
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div className="flex flex-col gap-[4rem]">
            <Suspense fallback={<LoadingScale />}>
                <NutritionWater />
            </Suspense>
            <div className="border-t border-black/20"></div>
            <Suspense fallback={<LoadingScale />}>
                <Weight />
            </Suspense>
        </div>
    )
}
