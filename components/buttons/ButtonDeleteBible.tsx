'use client';
import { useRouter } from "next/navigation";
import { deleteBible } from '@/actions/bible';

export default function ButtonDeleteBook({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteBible({ id: data._id });
            router.refresh
            router.push(`/dashboard/bible`);
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