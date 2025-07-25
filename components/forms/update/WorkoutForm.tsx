'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editWorkout } from "@/actions/sections/body/workout";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import workout_type from '@/lib/dropdown/workout_type.json';
import ButtonDeleteWorkout from "@/components/buttons/ButtonDeleteWorkout";
import ButtonCancel from "@/components/buttons/ButtonCancel";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditWorkoutForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();
    const [selectedDate, setSelectedDate] = useState(data?.workoutData?.date);


    const handleSubmit = async (formData: FormData) => {
        try {

            await editWorkout({
                _id: data?.workoutData?._id,
                type: formData.get("type"),
                description: formData.get("description"),
                sets: formData.get("sets"),
                date: selectedDate,
            });

            router.refresh
            router.push(`/dashboard/body`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    const workoutInfo = (
        <div className="sm:col-span-3">
            <label htmlFor="type" className="block text-sm/6 font-medium">
                Workout Type
            </label>
            <div className="mt-2 grid grid-cols-1">
                <select
                    id="type"
                    name="type"
                    autoComplete="type"
                    defaultValue={data?.workoutData?.type ?? ''}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                >
                    {workout_type.map((item) => (
                        <option key={`${item.type}`}>{item.type}</option>

                    ))}
                </select>
                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                />
            </div>
        </div>
    );

    const workoutDescription = (
        <div className="col-span-full mt-4">
            <label htmlFor="notes" className="block text-sm/6 font-medium">
                Description
            </label>
            <div className="mt-2">
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    placeholder="Describe your workout"
                    defaultValue={data?.workoutData?.description ?? ''}
                />
            </div>
        </div>
    );

    const workoutSets = (
        <div className="col-span-full mt-4">
            <label htmlFor="sets" className="block text-sm/6 font-medium">
                sets
            </label>
            <div className="mt-2">
                <textarea
                    id="sets"
                    name="sets"
                    rows={3}
                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    placeholder="Workout sets"
                    defaultValue={data?.workoutData?.sets ?? ''}
                />
            </div>
        </div>
    );

    const datePicker = (
        <div className="mt-4">
            <label className="block text-sm/6 font-medium">Workout Date</label>
            <DatePicker
                className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                required
            />
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12 px-[2rem]">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Workout Information</h2>
                    <p className="mt-1 text-sm/6">Update your workout.</p>
                    <div className="mt-6">
                        {workoutInfo}
                        {workoutDescription}
                        {workoutSets}
                        {datePicker}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6 justify-between px-[2rem]">
                <div><ButtonDeleteWorkout data={data?.workoutData} /></div>

                <div className="flex gap-x-6 items-center">

                    <ButtonCancel path={'/dashboard/body'} />

                    <button
                        type="submit"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
                {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
            </div>
        </form>
    )
}
