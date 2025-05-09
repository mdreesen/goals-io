import { fetchAllWaterForToday } from "@/actions/nutrition_water";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Title from "@/components/text/Title";
export default async function NutritionWater() {

  const useAllWaterForToday = await fetchAllWaterForToday() as any;

  // Conditionals
  const formatWaterIntakeToday = `${useAllWaterForToday.waterIntakeToday?.water_intake ?? '0'} oz.`;
  const formatTotalWaterIntake = `${useAllWaterForToday?.total_water}`;
  const buttonName = useAllWaterForToday.create ? 'Add water' : 'Update water';
  const congratulations = useAllWaterForToday?.congrats;

  const water = (
    <div>
      <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <ButtonGoTo title={buttonName} path={`/dashboard/body/nutrition/water`} />
      </div>

      <h4 className="sr-only">Water Intake</h4>
      <p className="text-sm font-medium text-gray-900">Water Intake</p>
      <div className="flex justify-between">
        <p className="text-sm text-indigo-900 font-semibold">{formatWaterIntakeToday}</p>
        <p className="text-sm font-medium text-gray-900">{formatTotalWaterIntake}</p>
      </div>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${useAllWaterForToday.current_progress === "NaN" ? '0' : useAllWaterForToday.current_progress}%` }} className={`h-2 rounded-full ${congratulations ? 'bg-green-500 animate-pulse' : 'bg-[#312E81]'}`} />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div>Getting started</div>
          <div className="text-center">Keep going</div>
          <div className="text-center">Almost there</div>
          <div className="text-right flex justify-end">
            <span className='flex flex-col w-[62px] justify-center text-center'>Nice job!</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <Title title="Nutrition" />
      {water}
    </div>
  )
}
