'use client'
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editWaterIntake, createWaterIntake } from "@/actions/nutrition_water";
import Link from 'next/link';
import { formatDateAndTime } from "@/lib/formatters";
import { date_today } from "@/lib/date_time";

export default function WaterForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {

        // There there is no entry from today, create new entry
        // Otherwise, update the entry that has been made today
        if (data.create) {
            try {
                await createWaterIntake({
                    water_intake: formData.get("water"),
                    date: formatDateAndTime(date_today()),
                });
                router.refresh
                router.push(`/dashboard/nutrition`);
            } catch (error) {
                setError(error as string)
                console.log(error);
            }
        } else {
            try {
                await editWaterIntake({
                    _id: data?._id,
                    water_intake: formData.get("water"),
                    date: formatDateAndTime(date_today()),
                });
                router.refresh
                router.push(`/dashboard/nutrition`);
            } catch (error) {
                setError(error as string)
                console.log(error);
            }
        }
    };

    const personInfo = (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
                <label htmlFor="water" className="block text-sm/6 font-medium text-gray-900">
                    Water in oz.
                </label>
                <div className="flex items-center w-[100px] rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                    <input
                        id="water"
                        name="water"
                        type="text"
                        placeholder={data?.waterIntakeToday?.water_intake ?? '0'}
                        defaultValue={data?.waterIntakeToday?.water_intake ?? '0'}
                        className="block min-w-0 grow py-1.5 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    />
                    <div className="shrink-0 px-2 select-none text-base text-gray-500 sm:text-sm/6">oz.</div>
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Water Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Insert your water intake.</p>

                    {personInfo}
                </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6 justify-end">
                <div className="flex gap-x-6 items-center">
                    <Link href={'/dashboard/nutrition'}>
                        <button type="button" className="text-sm/6 font-semibold text-gray-900 justify-end">
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
            </div>
            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}

