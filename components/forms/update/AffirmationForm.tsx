'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editAffirmation } from "@/actions/affirmations";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { date_today } from "@/lib/date_time";
import Link from 'next/link';

export default function GoalForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        try {
            await editAffirmation({
                _id: data?._id,
                affirmation: formData.get("affirmation"),
                kind: formData.get("kind"),
                date: date_today(),
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

            <div className="col-span-full">
                <label htmlFor="affirmation" className="block text-sm/6 font-medium text-gray-900">
                    Affirmation
                </label>
                <div className="mt-2">
                    <textarea
                        id="affirmation"
                        name="affirmation"
                        rows={3}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                        placeholder="Your affirmation"
                        defaultValue={data?.affirmation ?? ''}
                        />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="kind" className="block text-sm/6 font-medium text-gray-900">
                    Kind of affirmation
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="kind"
                        name="kind"
                        autoComplete="kind-name"
                        defaultValue={data?.kind ?? ''}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Growth</option>
                        <option>Mindfulness</option>
                        <option>Positivity</option>
                        <option>Self Worth</option>
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
                    <h2 className="text-base/7 font-semibold text-gray-900">Affirmation information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Name and details of affirmation.</p>

                    {information}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href={'/dashboard/mind'}>
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">
                        Cancel
                    </button>
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
