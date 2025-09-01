'use client';
import { Trash } from 'lucide-react';
import { useRouter } from "next/navigation";
import { deleteColdSoak } from '@/actions/sections/body/coldSoak';

export default function ButtonDeleteColdSoak({ data }: any) {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await deleteColdSoak({ id: data._id });
            router.refresh
            router.push(`/dashboard/body`);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <button type="submit" onClick={handleSubmit}>
            <Trash size={20} className="text-red-400" />
        </button>
    )
}