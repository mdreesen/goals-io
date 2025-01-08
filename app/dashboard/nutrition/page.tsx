import Link from "next/link";
import { fetchWaterIntakeToday, fetchAllWaterForToday } from "@/actions/nutrition_water";

export default async function Page() {

  const useWaterIntakeToday = await fetchWaterIntakeToday();
  const useAllWaterForToday = await fetchAllWaterForToday() as any;

  // Conditionals
  const formatWaterIntakeToday = useWaterIntakeToday.water_intake !== '0' ? `${useWaterIntakeToday.water_intake}oz.` : '0 oz';
  const formatTotalWaterIntake = useAllWaterForToday.total_water ? `${useAllWaterForToday.total_water}oz.` : '';
  const buttonName = useWaterIntakeToday.water_intake !== '0' ? 'Update water' : 'Add water';

  const water = (
    <div>
      <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link href={`/dashboard/nutrition/water`}>
          <button
            type="button"
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {buttonName}
          </button>
        </Link>
      </div>

      <h4 className="sr-only">Water Intake</h4>
      <p className="text-sm font-medium text-gray-900">Water Intake</p>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-gray-900">{formatWaterIntakeToday}</p>
        <p className="text-sm font-medium text-gray-900">{formatTotalWaterIntake}</p>
      </div>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: `${useAllWaterForToday.current_progress}%` }} className="h-2 rounded-full bg-[#c18d21]" />
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
    <div>
      {water}
    </div>
  )
}
