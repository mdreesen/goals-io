import { fetchWorkout } from "@/actions/workout";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { formatDateAndTime } from '@/lib/formatters'

export default async function Workout() {

    const useWorkout = await fetchWorkout() ?? [];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h2 className="text-3xl font-semibold text-gray-900">Workout</h2>
                </div>
            </div>

            <div className="flex gap-4 w-full justify-between">
                <ButtonGoTo title='See all workouts' path={'/dashboard/body/workout/all'} />
                <ButtonGoTo title='Add workout' path={'/dashboard/body/workout/create'} />
            </div>

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="px-4 sm:px-2 lg:px-4">
                            <Results data={useWorkout.totalWorkouts} />
                        </div>
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Type
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Workout
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Date
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">Edit</th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {useWorkout?.limited?.length > 0 ? useWorkout?.limited.map((item: any, index: number) => (
                                    <tr key={`${item.type}-${index}`}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {item.type}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.description}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDateAndTime(item.date)}</td>

                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href={`/dashboard/body/workout/edit/${item._id}`} className="text-gray-900 hover:text-gray-900">
                                                edit<span className="sr-only">, {item.type}</span>
                                            </a>
                                        </td>
                                    </tr>
                                )) : <tr className="py-2">No workouts recorded</tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
