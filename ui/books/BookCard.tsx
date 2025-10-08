'use client'
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CalendarDays, CheckCircle, Clock, XCircle, ChevronRight, Save } from 'lucide-react'; // Icons for books, calendar, status
import { itemVariants } from "@/lib/variants";

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateAndTime } from '@/lib/formatters';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function BookCard(bookData: any) {
    const book = bookData?.data?.bookData;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 mx-[5px]"
        >
            <AnimatePresence>
                <motion.div
                    variants={itemVariants}
                    custom={bookData?.index} // For staggered animation
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full justify-items-center"
                    transition={{ delay: bookData?.index * 0.1 }} // Staggered entry
                >

                    <Card
                        className={cn(
                            "bg-gray-800 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                            "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                            "cursor-pointer py-4 w-[280px] sm:w-[350px] h-[400px]" // Indicate clickable
                        )}
                    >
                        <Link className="w-full" href={`/dashboard/mind/books/edit/${book?._id}`}>

                            <div className='flex justify-center'>
                                {book.book_image && book.book_image !== 'false' ? (
                                    <Image
                                        alt={`${book.book_title} of ${bookData?.index}`}
                                        src={`${book.book_image ?? ''}`}
                                        className="h-[9rem] w-[6rem] object-fill flex-none bg-gray-50 scale-75"
                                        height={200}
                                        width={400}
                                    />
                                ) : (
                                    <Image
                                        alt={`Book image not available`}
                                        src={`/assets/thumbnail_none.png`}
                                        className="h-[9rem] w-[6rem] object-fill flex-none bg-gray-50 scale-75"
                                        height={200}
                                        width={400}
                                    />
                                )}
                            </div>
                            <CardContent className="px-3 py-6 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Icon with background circle */}
                                    <div className={cn(
                                        "p-3 rounded-full",
                                        book.book_start_date && book.book_end_date && 'bg-green-500/20',
                                        book.book_start_date && 'bg-blue-500/20',
                                        book.booklist === 'Yes' && 'bg-yellow-500/20'
                                        // book.status === 'abandoned' && 'bg-red-500/20',
                                    )}>
                                        {book.book_start_date && book.book_end_date ? <BookOpen size={20} className="text-green-400" /> : ''}
                                        {book.book_start_date && !book.book_end_date ? <Clock size={20} className="text-blue-400" /> : ''}
                                        {book.booklist === 'Yes' ? <Save size={20} className="text-yellow-400" /> : ''}

                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-semibold text-gray-100">{book.book_title}</CardTitle>
                                        <CardDescription className="text-gray-400 text-sm mt-1">by {book.book_author}</CardDescription>
                                        <p className={cn(
                                            "text-xs font-medium mt-2",
                                            book.book_start_date && book.book_end_date && 'text-green-300',
                                            book.book_start_date && 'text-blue-300',
                                            book.booklist === 'Yes' && 'text-yellow-300'
                                            // book.status === 'abandoned' && 'text-red-300',
                                        )}>
                                            Status: {book.book_start_date && formatDateAndTime(book.book_start_date)}{book.book_end_date && ` | ${formatDateAndTime(book.book_end_date)}`}{!book.book_start_date && !book.book_end_date && 'Saved'}
                                        </p>
                                    </div>
                                </div>
                                <div>

                                </div>
                                <Button variant="ghost" className="text-gray-400 hover:text-blue-400">
                                    <ChevronRight size={24} />
                                </Button>
                            </CardContent>
                        </Link>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};