'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Feather, Smile, CloudDrizzle, Sun, Heart, Frown, Angry, ChevronRight } from 'lucide-react'; // Icons for journal entries, moods
import { itemVariants } from "@/lib/variants";

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

const getMoodIcon = (mood: string) => {
    switch (mood) {
        case 'happy':
            return <Smile size={20} className="text-yellow-400" />;
            break
        case 'grateful':
            return <Heart size={20} className="text-pink-400" />;
            break
        case 'calm':
            return <Sun size={20} className="text-blue-400" />;
            break
        case 'anxious':
            return <CloudDrizzle size={20} className="text-gray-400" />;
            break
        case 'sad':
            return <Frown size={20} className="text-gray-400" />;
            break
        case 'angry':
            return <Angry size={20} className="text-red-400" />;
            break

        default:
            return <Feather size={20} className="text-gray-400" />;
    }
};

export default function JournalList({ list }: any) {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <AnimatePresence>
                {list.map((entry: any, index: number) => (
                    <motion.div
                        key={entry._id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Link href={`/dashboard/spirit/journal/edit/${entry._id}`}>
                            <Card
                                className={cn(
                                    "bg-gray-800 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                                    "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                                    "cursor-pointer" // Indicate clickable
                                )}
                            >
                                <CardContent className="p-6 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        {/* Icon with background circle */}
                                        <div className={cn(
                                            "p-3 rounded-full",
                                            entry.mood === 'happy' && 'bg-yellow-500/20',
                                            entry.mood === 'grateful' && 'bg-pink-500/20',
                                            entry.mood === 'calm' && 'bg-blue-500/20',
                                            entry.mood === 'anxious' && 'bg-gray-500/20',
                                            entry.mood === 'sad' && 'bg-gray-500/20',
                                            entry.mood === 'angry' && 'bg-red-500/20',
                                        )}>
                                            {getMoodIcon(entry.mood)}
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-100">{entry.title}</CardTitle>
                                            <CardDescription className="text-gray-400 text-sm mt-1">
                                                {entry.date}
                                            </CardDescription>
                                            {/* <p className="text-gray-300 text-sm mt-2">{entry.entry}</p> */}
                                        </div>
                                    </div>
                                    <Button variant="ghost" className="text-gray-400 hover:text-blue-400">
                                        <ChevronRight size={24} />
                                    </Button>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};