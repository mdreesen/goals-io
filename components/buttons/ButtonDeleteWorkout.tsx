'use client';
import { useRouter } from "next/navigation";
import { deleteWorkout } from '@/actions/sections/body/workout';

export default function ButtonDeleteWorkout({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteWorkout({ id: data._id });
            router.refresh
            router.push(`/dashboard/body`);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <button type="submit" onClick={handleSubmit} className="rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2">
            Delete
        </button>
    )
}