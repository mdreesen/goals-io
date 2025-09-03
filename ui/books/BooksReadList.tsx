'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmblaCarousel from '@/components/carousels/BookEmblaCarousel';
import BookCard from './BookCard';

export default function BooksReadList({ books, format }: any) {

    const useCarousel = format === 'carousel' && (
        <EmblaCarousel slides={books} />
    );

    const useList = format === 'list' && books.map((book: any, index: number) => (
        <BookCard
            key={`book-${index}`}
            data={{ bookData: book, index: index }}
        />
    ))

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <AnimatePresence>
                {useCarousel}
                {useList}
            </AnimatePresence>
        </motion.div>
    );
};