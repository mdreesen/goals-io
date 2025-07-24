'use client'
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, CalendarDays, CheckCircle, XCircle, ChevronRight } from 'lucide-react'; // Icons for weight, calendar, status

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

// Sample Data for the list of weight entries (replace with real data from your app)
const sampleWeightEntries = [
    {
        id: 'wt1',
        weight: 75.2, // in kg
        unit: 'kg',
        status: 'logged', // 'logged', 'goal_reached', 'missed_log'
        date: 'Today',
        icon: <Scale size={20} className="text-blue-400" />,
        color: 'from-blue-600 to-blue-700',
    },
    {
        id: 'wt2',
        weight: 76.5,
        unit: 'kg',
        status: 'logged',
        date: 'Yesterday',
        icon: <Scale size={20} className="text-blue-400" />,
        color: 'from-blue-600 to-blue-700',
    },
    {
        id: 'wt3',
        weight: 74.0,
        unit: 'kg',
        status: 'goal_reached',
        date: '2024-07-20',
        icon: <CheckCircle size={20} className="text-green-400" />,
        color: 'from-green-600 to-green-700',
    },
    {
        id: 'wt4',
        weight: 168.5,
        unit: 'lbs',
        status: 'missed_log',
        date: '2024-07-19',
        icon: <XCircle size={20} className="text-red-400" />,
        color: 'from-red-600 to-red-700',
    },
    {
        id: 'wt5',
        weight: 73.8,
        unit: 'kg',
        status: 'logged',
        date: '2024-07-18',
        icon: <Scale size={20} className="text-blue-400" />,
        color: 'from-blue-600 to-blue-700',
    },
];

export default function WeightList({ weight }: any) {
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
                {weight.limited.map((entry: any, index: number) => (
                    <motion.div
                        key={entry._id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Link href={`/dashboard/body/weight/edit/${entry._id}`}>
                        <Card
                            className={cn(
                                "bg-gray-800/70 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                                "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                                "cursor-pointer" // Indicate clickable
                            )}
                        >
                            <CardContent className="p-6 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    {/* Icon with background circle */}
                                    <div className={cn(
                                        "p-3 rounded-full",
                                        entry.weight_date !== '' && 'bg-blue-500/20',
                                        entry.status === 'goal_reached' && 'bg-green-500/20',
                                        entry.status === 'missed_log' && 'bg-red-500/20',
                                    )}>
                                        {entry.weight_date !== '' && <Scale size={20} className="text-blue-400" />}
                                        {entry.icon}
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-semibold text-gray-100">{entry.weight} lbs</CardTitle>
                                        <CardDescription className="text-gray-400 text-sm mt-1">Logged on {entry.weight_date}</CardDescription>
                                        <p className={cn(
                                            "text-xs font-medium mt-2",
                                            entry.weight_date !== '' && 'text-blue-300',
                                            entry.status === 'goal_reached' && 'text-green-300',
                                            entry.status === 'missed_log' && 'text-red-300',
                                        )}>
                                            Status: Logged
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