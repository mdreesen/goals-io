'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmblaCarousel from '@/components/carousels/BookEmblaCarousel';

export default function BooksReadList({ books }: any) {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <AnimatePresence>
                <EmblaCarousel slides={books} />
            </AnimatePresence>
        </motion.div>
    );
};