'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { addWorkout } from "@/actions/sections/body/workout";
import workout_type from '@/lib/dropdown/workout_type.json';
import { TypeWorkout } from '@/types/forms';
import { formVariants, itemVariants } from '@/lib/variants';

export default function WorkoutForm() {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [workoutData, setWorkoutData] = useState<TypeWorkout>({
        type: '',
        description: '',
        date: '',
        sets: '',
        duration: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setWorkoutData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {

            await addWorkout({ ...data });

            router.refresh
            router.push(`/dashboard/body`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    const handleReset = () => {
        setWorkoutData({
            type: '',
            description: '',
            date: '',
            sets: '',
            duration: '',
        });
    };

    return (
        <motion.form
            className="flex w-full bg-transparent flex-col items-center justify-center space-y-6 p-8"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={formVariants}
        >

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="type" className="block text-sm font-medium">
                    Workout Type
                </label>
                <div className="relative">
                    <select
                        id="type"
                        name="type"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={workoutData.type ?? 'Select a workout type'}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a workout type</option>
                        {workout_type.map((item: any, index: number) => <option key={`${item.type}-${index}`} value={item.type}>{item.type}</option>)}

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="date" className="block text-sm font-medium">
                    Date
                </label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={workoutData.date}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="duration" className="block text-sm font-medium">
                    Duration (in minutes)
                </label>
                <input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., 60"
                    value={workoutData.duration}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="sets" className="block text-sm font-medium">
                    Sets
                </label>
                <textarea
                    id="sets"
                    name="sets"
                    rows={3}
                    placeholder="Your workout sets..."
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </motion.div>

            <div className="flex w-full max-w-lg space-x-4">
                <motion.button
                    type="button"
                    onClick={handleReset}
                    className="w-full max-w-lg rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Reset
                </motion.button>
            </div>

            <motion.button
                type="submit"
                className="w-full max-w-lg rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Save
            </motion.button>

            <div className="flex w-full max-w-lg space-x-4">
                <motion.button
                    type="button"
                    className="w-full max-w-lg rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href={'/dashboard/body'} className="block w-full">
                        Cancel
                    </Link>
                </motion.button>
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </motion.form>
    );
}
