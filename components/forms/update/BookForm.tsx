'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { editBook } from "@/actions/sections/mind/book";
import book_type from '@/lib/dropdown/book_type.json';
import decision from '@/lib/dropdown/status.json'
import { TypeBook } from '@/types/forms';
import { formVariants, itemVariants } from '@/lib/variants';
import ButtonDeleteBook from "@/components/buttons/ButtonDeleteBible";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function WorkoutForm({ data }: any) {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [bookData, setBookData] = useState<TypeBook>({ ...data });
    const [selectedStartDate, setSelectedStartDate] = useState(data?.book_start_date);
    const [selectedEndDate, setSelectedEndDate] = useState(data?.book_end_date);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setBookData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            await editBook({ ...bookData, book_start_date: selectedStartDate.toString(), book_end_date: selectedEndDate.toString() });

            router.refresh
            router.push(`/dashboard/mind`);
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
                <label htmlFor="kind_of_book" className="block text-sm font-medium">
                    Book Type
                </label>
                <div className="relative">
                    <select
                        id="kind_of_book"
                        name="kind_of_book"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={bookData.kind_of_book}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a type of book</option>
                        {book_type.map((item: any, index: number) => <option key={`${item.type}-${index}`} value={item.type}>{item.type}</option>)}

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="booklist" className="block text-sm font-medium">
                    Add to saved books list?
                </label>
                <div className="relative">
                    <select
                        id="booklist"
                        name="booklist"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={bookData.booklist}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Save to booklist?</option>
                        {decision.yes_no.map((item: any, index: number) => <option key={`${item.decision}-${index}`} value={item.decision}>{item.decision}</option>)}

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="book_title" className="block text-sm font-medium">
                    Title
                </label>
                <input
                    id="book_title"
                    name="book_title"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Title of book..."
                    value={bookData.book_title}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="book_author" className="block text-sm font-medium">
                    Author
                </label>
                <input
                    id="book_author"
                    name="book_author"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Author of book..."
                    value={bookData.book_author}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="notes" className="block text-sm font-medium">
                    Notes
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Book notes..."
                    value={bookData.book_author}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </motion.div>

            {bookData.booklist !== 'Yes' && (
                <>
                    <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                        <label htmlFor="book_start_date" className="block text-sm font-medium">
                            Start date
                        </label>
                        <DatePicker
                            id="date"
                            className="w-[100%] rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            selected={selectedStartDate}
                            onChange={(date) => setSelectedStartDate(date)}
                            dateFormat="MM/dd/yyyy" // Specify the desired display format
                        />
                    </motion.div>

                    <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                        <label htmlFor="book_end_date" className="block text-sm font-medium">
                            End date
                        </label>
                        <DatePicker
                            id="date"
                            className="w-[100%] rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            selected={selectedEndDate}
                            onChange={(date) => setSelectedEndDate(date)}
                            dateFormat="MM/dd/yyyy" // Specify the desired display format
                        />
                    </motion.div>
                </>
            )}

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
                    <Link href={'/dashboard/mind'} className="block w-full">
                        Cancel
                    </Link>
                </motion.button>
            </div>

            <div className="flex w-full max-w-lg space-x-4">
                <ButtonDeleteBook data={bookData} />
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </motion.form>
    );
}
