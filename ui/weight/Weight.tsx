import { fetchWeight } from "@/actions/weight"
import { formatDateAndTime } from "@/lib/formatters";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Title from "@/components/text/Title";

export default async function Weight() {

  const useWeight = await fetchWeight() ?? [];

  const notables = (
    <div>
      {useWeight.startingWeight && (
        <span className="py-2 text-left text-sm font-bold sm:pl-0">
          Notables
        </span>
      )}
      {useWeight.startingWeight && (
        <p className="py-1 text-left text-sm font-semibold sm:pl-0">
          {`Starting weight ${useWeight.startingWeight.weight} lbs`}
        </p>
      )}
      {useWeight.highestWeight !== '0' && (
        <p className="py-1 text-left text-sm font-semibold sm:pl-0">
          {`Highest weight ${useWeight.highestWeight} lbs`}
        </p>
      )}
      {useWeight.averageWeight !== '0' && (
        <p className="py-1 text-left text-sm font-semibold sm:pl-0">
          {`Average weight ${useWeight.averageWeight} lbs`}
        </p>
      )}
      {useWeight.lossOrGain !== 'Lost 0 lbs' && (
        <p className="py-1 text-left text-sm font-semibold sm:pl-0">
          {`${useWeight.lossOrGain}`}
        </p>
      )}

    </div>
  );

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Title text="Weight" />
        </div>
        <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex gap-4 w-full justify-between">
            <ButtonGoTo title='See all weight' path={'/dashboard/body/weight/all'} />
            <ButtonGoTo title='Add weight' path={'/dashboard/body/weight/create'} />
          </div>
        </div>
      </div>

      <Table>
        <TableCaption><Results data={useWeight.totalWeight} /> of your recent tracked weight.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Weight</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-right">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useWeight.limited.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{`${item.weight} lbs`}</TableCell>
              <TableCell className="text-center">{formatDateAndTime(item.weight_date)}{item.starting_weight ? ' - Starting Date' : ''}</TableCell>
              <TableCell className="flex justify-end"><ButtonGoTo className="text-right" title={'Edit'} path={`/dashboard/body/weight/edit/${item._id}`} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
