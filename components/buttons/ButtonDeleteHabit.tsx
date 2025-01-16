'use client';
import { useRouter } from "next/navigation";
import { deleteHabit } from '@/actions/habits';

export default function ButtonDeleteHabit({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteHabit({ id: data });
            router.refresh
            router.push(`/dashboard/habits`);
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