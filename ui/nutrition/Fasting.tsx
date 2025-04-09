import Timer from '@/components/timers/FastingTimer';
import { fetchFasting } from '@/actions/nutrition_fasting';
import { parse } from '@/lib/formatters';

export default async function Fasting() {

  const userFasting = await fetchFasting();

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Fasting</h2>
      <Timer fastData={parse(userFasting)}/>
    </div>
  )
}
