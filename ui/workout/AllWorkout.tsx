import { fetchWorkout } from "@/actions/sections/body/workout";
import { formatDateAndTime, parse } from '@/lib/formatters';
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import WorkoutList from "@/ui/workout/WorkoutList";
import NoDataText from "@/components/text/NoDataText";

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

            {useWorkout.limited.length > 0 ? <WorkoutList workout={parse(useWorkout.data)} /> : <NoDataText text="Log your workouts!" />}

        </div>
    )
}
