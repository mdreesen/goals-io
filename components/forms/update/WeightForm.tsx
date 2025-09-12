'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { editWeight } from "@/actions/sections/body/weight";
import { TypeWeight } from '@/types/forms';
import { formVariants, itemVariants } from '@/lib/variants';
import ButtonDeleteWeight from "@/components/buttons/ButtonDeleteWeight";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function WeightForm({ data }: any) {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [weightData, setWeightData] = useState<TypeWeight>({ ...data.weightData });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setWeightData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            await editWeight({ ...weightData, weight_date: weightData.weight_date });

            router.refresh
            router.push(`/dashboard/body`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    return (
        <motion.form
            className="flex w-full bg-transparent flex-col items-center justify-center space-y-6 p-8"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={formVariants}
        >

            {/* <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="date" className="block text-sm font-medium">
                    Date
                </label>
                <DatePicker
                    id="date"
                    className="w-[100%] rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="mm/dd/yyyy"
                    dateFormat="MM/dd/yyyy" // Specify the desired display format
                />
            </motion.div> */}

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="weight" className="block text-sm font-medium">
                    Weight (lbs)
                </label>
                <input
                    id="weight"
                    name="weight"
                    type="number"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your weight..."
                    value={weightData.weight}
                    onChange={handleChange}
                />
            </motion.div>

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

            <div className="flex w-full max-w-lg space-x-4">
                <ButtonDeleteWeight data={weightData} />
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </motion.form>
    );
}
