import Timer from '@/components/timers/FastingTimer';
import { fetchFasting } from '@/actions/nutrition_fasting';
import { parse } from '@/lib/formatters';

export default async function Fasting() {

  const userFasting = await fetchFasting();

  const timer = (
    <div>
      <Timer fastData={parse(userFasting)}/>
    </div>
  );

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <h2 className="text-3xl font-semibold text-gray-900">Fasting</h2>
      {timer}
    </div>
  )
}
