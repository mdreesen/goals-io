import Link from "next/link";
import { fetchWaterIntakeToOz } from "@/actions/nutrition_water";

export default async function Page() {

  const useWaterIntake = await fetchWaterIntakeToOz();

  const water = (
    <div>
      <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Link href={`/dashboard/nutrition/water`}>
          <button
            type="button"
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add water
          </button>
        </Link>
      </div>

      <h4 className="sr-only">Water Intake</h4>
      <p className="text-sm font-medium text-gray-900">Water Intake</p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div style={{ width: '37.5%' }} className="h-2 rounded-full bg-[#c18d21]" />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className="text-gray-900">Getting started</div>
          <div className="text-center text-gray-900">Keep going</div>
          <div className="text-center">Almost there</div>
          <div className="text-right">Winner winner chicken dinner</div>
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
