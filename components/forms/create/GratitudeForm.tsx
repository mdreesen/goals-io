'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addGratitudes } from "@/actions/sections/mind/gratitudes";
import Link from 'next/link';

export default function GratitudeForm() {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {

        try {
            await addGratitudes({
                gratitude: formData.get("gratitude"),
                date: new Date(),
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
                <label htmlFor="gratitude" className="block text-sm/6 font-medium">
                    Gratitude
                </label>
                <div className="mt-2">
                    <textarea
                        id="gratitude"
                        name="gratitude"
                        rows={3}
                        className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                        placeholder="I am grateful for..."
                        defaultValue={''}
                    />
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12 px-[2rem]">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Gratitude information</h2>
                    <p className="mt-1 text-sm/6">Name and details of Gratitude.</p>

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
