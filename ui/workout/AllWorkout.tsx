import { fetchWorkout } from "@/actions/sections/body/workout";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDateAndTime } from "@/lib/formatters";

export default async function Workout() {

    const useWorkout = await fetchWorkout() ?? [];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Workout</h2>
                </div>
            </div>

            <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <div className="flex flex-col gap-4">
                    <ButtonGoTo title='Add workout' path={'/dashboard/body/workout/create'} />
                    <ButtonBack path={'/dashboard/body'} />
                </div>
            </div>

            <Table>
                <TableCaption>All results of your recent tracked workouts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="text-right">Edit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {useWorkout.data.map((item: any) => (
                        <TableRow key={item._id}>
                            <TableCell className="font-medium"><div className="flex flex-col gap-2"><span>{item?.type}</span><span>{item?.description}</span></div></TableCell>
                            <TableCell className="text-center">{formatDateAndTime(item?.date)}</TableCell>
                            <TableCell className="flex justify-end"><ButtonGoTo className="text-right" title={'Edit'} path={`/dashboard/body/workout/edit/${item._id}`} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
