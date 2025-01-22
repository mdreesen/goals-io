import { Suspense } from "react";
import NutritionWater from "@/ui/NutritionWater";
import LoaderPropagate from "@/components/loaders/LoaderPropagate";

export default async function Page() {

  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={<LoaderPropagate />}>
        <NutritionWater />
      </Suspense>
    </div>
  )
}
