'use client';
import { useRouter } from "next/navigation";
import { deleteWorkout } from '@/actions/sections/body/workout';
import { motion } from 'framer-motion';
import { itemVariants } from '@/lib/variants';

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
        <motion.button
            type="button"
            className="w-full max-w-lg rounded-md bg-gradient-to-r from-red-500 to-red-600 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
        >
            Delete
        </motion.button>
    );
};