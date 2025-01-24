import Link from 'next/link';
import { fetchUser } from '@/actions/user';
import { fetchSettings } from '@/actions/settings';
import ToggleWithIcon from '@/components/toggles/ToggleWithIcon';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Ascend",
};


export default async function Page() {
  const useUser = await fetchUser();
  const useSettings = await fetchSettings() ?? [];

  const { useShowAffirmations, useShowBible, useShowBooks, useShowHabits, useShowNutrition, useShowWeight } = useSettings;

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-gray-900">Profile Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6 text-gray-500">Personal details and settings.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Update Information</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><Link className='underline' href={`/dashboard/profile/edit/${useUser._id}`}>Update</Link></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Affirmations</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowAffirmations) ?? {}} /></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Bible</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowBible) ?? {}} /></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Books</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowBooks) ?? {}} /></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Habits</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowHabits) ?? {}} /></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Nutrition</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowNutrition) ?? {}} /></dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Weight</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(useShowWeight) ?? {}} /></dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
