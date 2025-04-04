'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addWorkout } from "@/actions/workout";
import Link from 'next/link';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import workout_type from '@/lib/dropdown/workout_type.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function WorkoutForm() {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();
    const [selectedDate, setSelectedDate] = useState();


    const handleSubmit = async (formData: FormData) => {
        try {

            await addWorkout({
                type: formData.get("type"),
                description: formData.get("description"),
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
            <label htmlFor="type" className="block text-sm/6 font-medium text-gray-900">
                Workout Type
            </label>
            <div className="mt-2 grid grid-cols-1">
                <select
                    id="type"
                    name="type"
                    autoComplete="type"

                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                >
                    {workout_type.map((item) => (
                        <option key={`${item.type}`}>{item.type}</option>

                    ))}
                </select>
                <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
            </div>
        </div>
    );

    const workoutDescription = (
        <div className="col-span-full mt-4">
            <label htmlFor="notes" className="block text-sm/6 font-medium text-gray-900">
                Description
            </label>
            <div className="mt-2">
                <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    placeholder="Describe your workout"
                    defaultValue={''}
                />
            </div>
        </div>
    );

    const datePicker = (
        <div className="mt-4">
            <label className="block text-sm/6 font-medium text-gray-900">Workout Date</label>
            <DatePicker
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                required
            />
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Workout Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Insert your workout.</p>
                    <div className="mt-6">
                        {workoutInfo}
                        {workoutDescription}
                        {datePicker}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href={'/dashboard/body'}>
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Save
                </button>
                {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
            </div>
        </form>
    )
}
