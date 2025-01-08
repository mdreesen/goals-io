'use client';
import { useRouter } from "next/navigation";
import { deleteGoal } from '@/actions/goals';

export default function ButtonDeleteGoal({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteGoal({ id: data });
            router.refresh
            router.push(`/dashboard/goals`);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <button type="submit" onClick={handleSubmit} className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none">
            Delete
        </button>
    )
}