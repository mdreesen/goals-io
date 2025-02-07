'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editHabit } from "@/actions/habits";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import ButtonCancel from "@/components/buttons/ButtonCancel";

export default function HabitForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        try {
            await editHabit({
                _id: data?._id,
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
                <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                    Title
                </label>
                <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                        <input
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Habit title"
                            defaultValue={data?.title ?? ''}
                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        />
                    </div>
                </div>
            </div>

            <div className="col-span-full">
                <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                    description
                </label>
                <div className="mt-2">
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                        placeholder="About your habit"
                        defaultValue={data?.description ?? ''}
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="kind" className="block text-sm/6 font-medium text-gray-900">
                    Kind of habit
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="kind"
                        name="kind"
                        autoComplete="kind-name"
                        defaultValue={data?.kind ?? ''}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Community</option>
                        <option>Family</option>
                        <option>Marriage</option>
                        <option>Personal</option>
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="status" className="block text-sm/6 font-medium text-gray-900">
                    Status
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="status"
                        name="status"
                        autoComplete="status-name"
                        defaultValue={data?.status ?? ''}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Not Started</option>
                        <option>Active</option>
                        <option>Done</option>
                        <option>Did Not Finish</option>
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Habit information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Name and details of habit.</p>

                    {information}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonCancel path={'/dashboard/mind'} />
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Save
                </button>
            </div>
            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}
