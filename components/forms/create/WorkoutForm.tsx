'use client';

import { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

import { addWorkout } from "@/actions/sections/body/workout";

// Define the shape of our form data for type safety
interface WorkoutData {
    type: string;
    description: string,
    date: string;
    sets: string,
    duration: string;
}

const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
            duration: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function WorkoutForm() {
    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();
    const [workoutData, setWorkoutData] = useState<WorkoutData>({
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

    const handleSubmit = async (formData: FormData) => {
        // e.preventDefault();
        console.log('Workout submitted:', workoutData);
        // In a real app, this would handle the form submission, e.g., via a Next.js Server Action
        // You could save this data to a database like Firestore here.

        try {

            await addWorkout({
                goal_weight: workoutData
            });

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
        console.log('Workout form reset.');
    };

    return (
        <motion.form
            className="flex w-full bg-transparent flex-col items-center justify-center space-y-6 p-8"
            action={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={formVariants}
        >
            <motion.div variants={itemVariants}>
                <h1 className="text-center text-4xl font-extrabold text-white">Ascend</h1>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Track your progress and reach new heights.
                </p>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="workoutType" className="block text-sm font-medium text-gray-300">
                    Workout Type
                </label>
                <div className="relative">
                    <select
                        id="workoutType"
                        name="workoutType"
                        required
                        className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={workoutData.type}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a workout type</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                    Date
                </label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    value={workoutData.date}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-300">
                    Duration (in minutes)
                </label>
                <input
                    id="duration"
                    name="duration"
                    type="number"
                    required
                    className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g., 60"
                    value={workoutData.duration}
                    onChange={handleChange}
                />
            </motion.div>

            <div className="flex w-full max-w-lg space-x-4">
                <motion.button
                    type="button"
                    onClick={handleReset}
                    className="w-full rounded-md bg-gray-700 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Reset
                </motion.button>
            </div>

            <motion.button
                type="submit"
                className="w-full max-w-lg rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Save Workout
            </motion.button>
        </motion.form>
    );
}
