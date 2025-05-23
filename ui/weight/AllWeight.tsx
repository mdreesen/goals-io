import { fetchWeight } from "@/actions/sections/body/weight"
import { formatDateAndTime } from "@/lib/formatters";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import ButtonBack from "@/components/buttons/ButtonBack";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default async function Weight() {

  const useWeight = await fetchWeight() ?? [];

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Weight</h2>
        </div>
        <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex flex-col gap-4">
            <ButtonGoTo title='Add weight' path={'/dashboard/body/weight/create'} />
            <ButtonBack path={'/dashboard/body/'} />
          </div>
        </div>
      </div>

      <Table>
        <TableCaption>All results of your recent tracked weight.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Weight</TableHead>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-right">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {useWeight.data.map((item: any) => (
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
