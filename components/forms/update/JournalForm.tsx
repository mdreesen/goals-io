'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { editEntry } from "@/actions/sections/soul/journal";
import mood_type from '@/lib/dropdown/journal_mood.json';
import { TypeJournal } from '@/types/forms';
import { formVariants, itemVariants } from '@/lib/variants';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ButtonDeleteJournal from "@/components/buttons/ButtonDeleteJournal";

export default function JournalForm({ data }: any) {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [journalData, setJournalData] = useState<TypeJournal>({ ...data });
    const [selectedDate, setSelectedDate] = useState(data?.date);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setJournalData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            await editEntry({ ...journalData });

            router.refresh
            router.push(`/dashboard/spirit`);
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

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="mood" className="block text-sm font-medium">
                     Mood
                </label>
                <div className="relative">
                    <select
                        id="mood"
                        name="mood"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={journalData.mood}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select mood</option>
                        {mood_type.map((item: any, index: number) => <option key={`${item.mood}-${index}`} value={item.mood}>{item.mood}</option>)}

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
                <DatePicker
                    id="date"
                    className="w-[100%] rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    placeholderText="mm/dd/yyyy"
                    dateFormat="MM/dd/yyyy" // Specify the desired display format
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="title" className="block text-sm font-medium">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your entry title..."
                    defaultValue={journalData.title}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="entry" className="block text-sm font-medium">
                    Journal Entry
                </label>
                <textarea
                    id="entry"
                    name="entry"
                    rows={3}
                    placeholder="Your journal entry..."
                    defaultValue={journalData.entry}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
                    <Link href={'/dashboard/spirit'} className="block w-full">
                        Cancel
                    </Link>
                </motion.button>
            </div>

            <div className="flex w-full max-w-lg space-x-4">
                <ButtonDeleteJournal data={journalData} />
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </motion.form>
    );
}
