import { fetchAllWaterForToday } from "@/actions/sections/body/nutrition_water";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Title from "@/components/text/Title";
import { parse } from "@/lib/formatters";
import WaterIntakeLogger from "@/ui/nutrition/WaterIntakeLogger";

export default async function NutritionWater() {

  const useAllWaterForToday = await fetchAllWaterForToday() as any;

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-2 lg:px-4">
      <Title text="Nutrition" />
      <WaterIntakeLogger water={parse(useAllWaterForToday)} />
    </div>
  )
}
