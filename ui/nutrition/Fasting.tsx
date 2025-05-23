import Timer from '@/components/timers/FastingTimer';
import { fetchFasting } from '@/actions/sections/body/nutrition_fasting';
import { parse } from '@/lib/formatters';
import Title from '@/components/text/Title';

export default async function Fasting() {

  const userFasting = await fetchFasting();

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <Title text="Fasting"/>
      <Timer fastData={parse(userFasting)}/>
    </div>
  )
}
