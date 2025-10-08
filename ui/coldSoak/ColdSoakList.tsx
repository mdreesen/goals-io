'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DropletIcon, DropletOff, Trash } from 'lucide-react'; // Icons for workouts, status
import { formatSecondsToHHMMSS } from '@/lib/formatters';
import ButtonDeleteColdSoak from '@/components/buttons/ButtonDeleteColdSoak';
import { itemVariants } from "@/lib/variants";

// shadcn/ui components
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function ColdSoakList({ list }: any) {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6 pb-[2rem] w-full max-w-sm md:max-w-md"
        >
            <AnimatePresence>
                {list.map((item: any, index: number) => (
                    <motion.div
                        key={item._id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Card
                            className={cn(
                                "bg-gray-800 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                                "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                                "cursor-pointer" // Indicate clickable
                            )}
                        >
                            <CardContent className="p-6 flex items-center justify-center">
                                <div className="flex flex-col items-center space-x-4 space-y-4">
                                    {/* Icon with background circle */}
                                    <div className='flex items-center space-x-4'>
                                        <div className={cn(
                                            "p-3 rounded-full",
                                            item.duration && 'bg-blue-500/20',
                                        )}>
                                            {item.duration && <DropletIcon size={20} className="text-blue-400" />}
                                        </div>
                                        <div>
                                            <CardTitle className="text-md font-semibold text-gray-100">{item.dateFormatted}</CardTitle>
                                            <CardDescription className="text-gray-400 text-sm mt-1">{item.duration && `Duration ${formatSecondsToHHMMSS(item.duration)}`}</CardDescription>
                                            <p className={cn(
                                                "text-xs font-medium mt-2",
                                                item.duration && 'text-blue-300',
                                            )}>
                                                Status: {item.duration !== '' && 'Logged'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center'>
                                        <ButtonDeleteColdSoak data={item} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};
