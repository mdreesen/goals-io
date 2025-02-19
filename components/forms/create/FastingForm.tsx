'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addFasting, editFasting } from "@/actions/nutrition_fasting";

export default function FastingForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async () => {
        try {
            if (!data?.user?.start || data?.user?.start === false) {
                await addFasting({
                    start: true,
                    start_date: data?.user?.start_date,
                    target_date: data?.date_now,
                    ended: false,
                });
            }
            else {
                await editFasting({
                    _id: data?.user?._id,
                    start: false,
                    start_date: data?.user?.start_date,
                    target_date: data?.user?.target_date,
                    ended: true,
                });
            }
            router.refresh
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    return (
        <form ref={ref} action={handleSubmit}>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                {data?.user?.start ? (
                    <button
                        type="submit"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Stop fasting
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Start fasting
                    </button>
                )}
            </div>
        </form>
    )
}
