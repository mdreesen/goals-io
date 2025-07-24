import { fetchWeight, fetchWeightOverview } from "@/actions/sections/body/weight"
import { formatDateAndTime, parse } from "@/lib/formatters";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Title from "@/components/text/Title";
import WeightList from '@/ui/weight/WeightList';
import WeightNotables from '@/ui/weight/WeightNotables';

export default async function Weight() {

  const useWeight = await fetchWeight() ?? [];
  const useWeightNotables = await fetchWeightOverview() ?? [];

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <div className="sm:flex-auto">
        <Title text="Weight" />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex gap-4 w-full justify-between">
            <ButtonGoTo title='See all weight' path={'/dashboard/body/weight/all'} />

            <div className="flex flex-col gap-4">
              <ButtonGoTo title='Add weight' path={'/dashboard/body/weight/create'} />
              <ButtonGoTo title='Add goal weight' path={'/dashboard/body/weight/goal/create'} />
            </div>

          </div>
        </div>
      </div>

      <div>
        <WeightNotables notables={parse(useWeightNotables)} />
      </div>

      <div className="pt-[2rem] pb-2">
        <Results data={useWeight.totalWeight} />
      </div>

      <WeightList weight={parse(useWeight)} />
    </div>
  )
}
