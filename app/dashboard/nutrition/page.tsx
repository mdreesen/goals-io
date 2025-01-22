import { Suspense } from "react";
import NutritionWater from "@/ui/NutritionWater";

export default async function Page() {

  return (
    <div className="flex flex-col gap-4">
      <NutritionWater />
    </div>
  )
}
