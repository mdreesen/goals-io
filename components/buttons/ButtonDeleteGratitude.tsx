'use client';
import { useRouter } from "next/navigation";
import { deleteGratitudes } from '@/actions/sections/mind/gratitudes';

export default function ButtonDeleteGratitude({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteGratitudes({ id: data });
            router.refresh
            router.push(`/dashboard/mind`);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <button type="submit" onClick={handleSubmit} className="block px-3 py-1 text-sm/6 data-[focus]:bg-gray-50 data-[focus]:outline-none">
            Delete
        </button>
    )
}