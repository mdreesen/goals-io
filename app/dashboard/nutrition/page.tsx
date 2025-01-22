import { Suspense } from "react";
import NutritionWater from "@/ui/NutritionWater";
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<LoadingScale />}>
        <NutritionWater />
      </Suspense>
    </div>
  )
}
