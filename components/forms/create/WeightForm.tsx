'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addWeight } from "@/actions/weight";
import { formatDateAndTime } from "@/lib/formatters";
import Link from 'next/link';

export default function WeightForm({ data }: any) {
    // User data checks
    const useStartingWeight = data?.weight?.length === 0;

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();


    const handleSubmit = async (formData: FormData) => {
        try {

            await addWeight({
                weight: formData.get("weight"),
                weight_date: formatDateAndTime(new Date()),
                starting_weight: useStartingWeight
            });

            router.refresh
            router.push(`/dashboard/weight`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    // Expense name and expense value
    const personInfo = (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    Weight {useStartingWeight && ' - Please enter your starting weight'}
                </label>
                <div className="flex items-center w-[100px] rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                    <input
                        id="weight"
                        name="weight"
                        type="text"
                        placeholder="155"
                        className="block min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                    <div className="shrink-0 px-2 select-none text-base text-gray-500 sm:text-sm/6">lbs</div>
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Weight Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Insert your weight.</p>
                    {personInfo}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link href={'/dashboard/weight'}>
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
                {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
            </div>
        </form>
    )
}
