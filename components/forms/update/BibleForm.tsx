'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { editBible } from "@/actions/sections/soul/bible";
import bible_type from '@/lib/dropdown/bible_type.json'
import bible_books from '@/lib/dropdown/bible_books.json';
import { TypeBible } from '@/types/forms';
import { formVariants, itemVariants } from '@/lib/variants';
import ButtonDeleteBible from "@/components/buttons/ButtonDeleteBible";

export default function BibleForm({ data }: any) {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [bibleData, setBibleData] = useState<TypeBible>({ ...data.bookData });

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setBibleData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            await editBible({ ...bibleData });

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
                <label htmlFor="type" className="block text-sm font-medium">
                    Bible note type
                </label>
                <div className="relative">
                    <select
                        id="type"
                        name="type"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={bibleData.type}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a type of note</option>
                        {bible_type.map((item: any, index: number) => <option key={`${item.type}-${index}`} value={item.type}>{item.type}</option>)}

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
                    Book of the bible
                </label>
                <div className="relative">
                    <select
                        id="book_title"
                        name="book_title"
                        required
                        className="w-full rounded-md border border-gray-600 px-4 py-2 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        value={bibleData.book_title}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select a book of the bible</option>
                        {bible_books.map((item: any, index: number) => <option key={`${item.book}-${index}`} value={item.book}>{item.book}</option>)}

                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.5 4.5z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="chapter" className="block text-sm font-medium">
                    Chapter
                </label>
                <input
                    id="chapter"
                    name="chapter"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Chapter..."
                    value={bibleData.chapter}
                    onChange={handleChange}
                />
            </motion.div>

            <motion.div className="w-full max-w-lg space-y-4" variants={itemVariants}>
                <label htmlFor="verses" className="block text-sm font-medium">
                    Verse(s)
                </label>
                <input
                    id="verses"
                    name="verses"
                    required
                    className="w-full rounded-md border border-gray-600 px-4 py-2 placeholder-gray-500 transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Verse(s)..."
                    value={bibleData.verses}
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
                    placeholder="Your notes..."
                    value={bibleData.notes}
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
                <ButtonDeleteBible data={bibleData} />
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </motion.form>
    );
}
