'use client';
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, Brain, Upload, PersonStanding } from 'lucide-react'; // Icons for affirmations, favorites, dates
import { itemVariants } from "@/lib/variants";

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function AffirmationsList({ affirmations }: any) {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <AnimatePresence>
                {affirmations.map((affirmation: any, index: number) => (
                    <motion.div
                        key={`${affirmation?._id}-${index}`}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Link href={`/dashboard/mind/affirmations/edit/${affirmation._id}`}>

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
                                            affirmation.status === 'favorite' && 'bg-pink-500/20',
                                            affirmation.status === 'regular' && 'bg-blue-500/20',
                                        )}>
                                            {affirmation.kind === 'Growth' && <Upload size={20} className="text-pink-400" />}
                                            {affirmation.kind === 'Mindfulness' && <Brain size={20} className="text-pink-400" />}
                                            {affirmation.kind === 'Positivity' && <Sparkles size={20} className="text-pink-400" />}
                                            {affirmation.kind === 'Self Worth' && <PersonStanding size={20} className="text-pink-400" />}

                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-100">{affirmation.affirmation}</CardTitle>
                                            {affirmation.kind && (
                                                <CardDescription className="text-gray-400 text-sm mt-1">
                                                    Category: {affirmation?.kind}
                                                </CardDescription>
                                            )}
                                            <p className={cn(
                                                "text-xs font-medium mt-2",
                                                affirmation.status === 'favorite' && 'text-pink-300',
                                                affirmation.status === 'regular' && 'text-blue-300',
                                            )}>
                                                {/* Status: {affirmation.status.charAt(0).toUpperCase() + affirmation.status.slice(1)} | Last Viewed: {affirmation.lastViewedDate} */}
                                            </p>
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