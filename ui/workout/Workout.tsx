import { fetchWorkout } from "@/actions/sections/body/workout";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import { formatDateAndTime, parse } from '@/lib/formatters';
import Title from "@/components/text/Title";
import WorkoutList from "@/ui/workout/WorkoutList";

export default async function Workout() {

    const useWorkout = await fetchWorkout() ?? [];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <Title text="Workout" />
                </div>
            </div>

            <div className="flex gap-4 w-full justify-between">
                <ButtonGoTo title='See all workouts' path={'/dashboard/body/workout/all'} />
                <ButtonGoTo title='Add workout' path={'/dashboard/body/workout/create'} />
            </div>

            <div className="pt-[2rem] pb-2">
                <Results data={useWorkout.totalWorkouts} />
            </div>

            {useWorkout.limited.length > 0 ? <WorkoutList workout={parse(useWorkout)} /> : <h3>Log your workouts!</h3>}
        </div>
    )
}
