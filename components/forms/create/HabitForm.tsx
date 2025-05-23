'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addHabit } from "@/actions/sections/mind/habits";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export default function HabitForm() {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        try {
            await addHabit({
                title: formData.get("title"),
                description: formData.get("description"),
                kind: formData.get("kind"),
                status: formData.get("status"),
            });
            router.refresh
            router.push(`/dashboard/mind`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    const information = (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-4">
                <label htmlFor="title" className="block text-sm/6 font-medium">
                    Title
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Habit Title"
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base focus:outline focus:outline-0 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-full">
                <label htmlFor="description" className="block text-sm/6 font-medium">
                    description
                </label>
                <div className="mt-2">
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                        placeholder="About your habit"
                        defaultValue={''}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="kind" className="block text-sm/6 font-medium">
                    Kind of habit
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="kind"
                        name="kind"
                        autoComplete="kind-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Community</option>
                        <option>Family</option>
                        <option>Marriage</option>
                        <option>Personal</option>
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="status" className="block text-sm/6 font-medium">
                    Status
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="status"
                        name="status"
                        autoComplete="status-name"
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Not Started</option>
                        <option>Active</option>
                        <option>Done</option>
                        <option>Did Not Finish</option>
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                    />
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Habit information</h2>
                    <p className="mt-1 text-sm/6">Name and details of habit.</p>

                    {information}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href={'/dashboard/mind'}>
                    <button type="button" className="text-sm/6 font-semibold">
                        Cancel
                    </button>
                </Link>
                <button
                    type="submit"
                    className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
