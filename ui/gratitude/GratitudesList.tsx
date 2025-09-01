'use client';
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, Brain, Upload, PersonStanding } from 'lucide-react'; // Icons for affirmations, favorites, dates

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function GratitudesList({ list }: any) {

    // Animation variants for individual list items
    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.3, ease: "easeIn" } },
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <AnimatePresence>
                {list?.map((item: any, index: number) => (
                    <motion.div
                        key={item?._id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Link href={`/dashboard/mind/gratitude/edit/${item._id}`}>

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
                                        )}>
                                            {item.gratitude && <Sparkles size={20} className="text-green-400" />}

                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-100">{item.gratitude}</CardTitle>
                                            {item.kind && (
                                                <CardDescription className="text-gray-400 text-sm mt-1">
                                                    Category: {item?.kind}
                                                </CardDescription>
                                            )}
                                            <p className={cn(
                                                "text-xs font-medium mt-2",
                                                item.gratitude && 'text-blue-300',
                                            )}>
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

                {list.length === 0 && (
                    <div className='flex justify-center'>
                        <h3>Add your Gratitudes!</h3>
                    </div>
                )}

            </AnimatePresence>
        </motion.div>
    );
};