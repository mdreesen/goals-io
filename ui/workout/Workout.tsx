import { fetchWorkout } from "@/actions/workout";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { formatDateAndTime } from '@/lib/formatters';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Title from "@/components/text/Title";

export default async function Workout() {

    const useWorkout = await fetchWorkout() ?? [];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <Title title="Workout" />
                </div>
            </div>

            <div className="flex gap-4 w-full justify-between">
                <ButtonGoTo title='See all workouts' path={'/dashboard/body/workout/all'} />
                <ButtonGoTo title='Add workout' path={'/dashboard/body/workout/create'} />
            </div>

            <Table>
                <TableCaption><Results data={useWorkout.totalWorkouts} /> of your recent tracked workouts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="text-right">Edit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {useWorkout.limited.map((item: any) => (
                        <TableRow key={item._id}>
                            <TableCell className="font-medium"><div className="flex flex-col gap-2"><span>{item?.type}</span><span>{item?.description}</span></div></TableCell>
                            <TableCell className="text-center">{formatDateAndTime(item?.date)}</TableCell>
                            <TableCell className="flex justify-end"><ButtonGoTo className="text-right" title={'Edit'} path={`/dashboard/body/weight/edit/${item._id}`} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
