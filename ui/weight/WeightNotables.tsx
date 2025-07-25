'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Target, TrendingUp, ArrowDown, ArrowUp, Star } from 'lucide-react';

// shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: string[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function WeightNotables({ notables }: any) {
    // Animation variants for individual notable cards
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const weightToDate = notables.dataToDate?.weight && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }} // Staggered entry
        >
            <Card
                className={cn(
                    "bg-gray-800/70 backdrop-blur-lg text-white overflow-hidden",
                    "transform hover:scale-105 transition-transform duration-300 ease-out",
                    `bg-gradient-to-br from-blue-600 to-blue-700` // Apply dynamic gradient
                )}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-gray-200">Current Weight</CardTitle>
                    <Scale size={24} className="text-blue-400" />
                </CardHeader>
                <CardContent>
                    <div className={cn(
                        "text-4xl font-bold",
                        notables.dataToDate.weight || 'text-white' // Use specific color or default to white
                    )}>
                        {notables.dataToDate.weight} lbs
                    </div>
                    <p className="text-xs text-gray-300 mt-1">As of {notables.dataToDate.weight_date}</p>
                </CardContent>
            </Card>
        </motion.div>
    );

    const goalWeight = notables?.goalWeight && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }} // Staggered entry
        >
            <Card
                className={cn(
                    "bg-gray-800/70 backdrop-blur-lg text-white overflow-hidden",
                    "transform hover:scale-105 transition-transform duration-300 ease-out",
                    `bg-gradient-to-br from-purple-600 to-purple-700` // Apply dynamic gradient
                )}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-gray-200">Goal Weight</CardTitle>
                    <Target size={24} className="text-purple-400" />
                </CardHeader>
                <CardContent>
                    <div className={cn(
                        "text-4xl font-bold",
                        'text-white' // Use specific color or default to white
                    )}>
                        {notables.goalWeight} lbs
                    </div>
                    <p className="text-xs text-gray-300 mt-1">Your target weight</p>
                </CardContent>
            </Card>
        </motion.div>
    );

    const weightChange = notables?.goalLostOrGained && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }} // Staggered entry
        >
            <Card
                className={cn(
                    "bg-gray-800/70 backdrop-blur-lg text-white overflow-hidden",
                    "transform hover:scale-105 transition-transform duration-300 ease-out",
                    `bg-gradient-to-br from-green-600 to-green-700` // Apply dynamic gradient
                )}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-gray-200">Goal Weight Change</CardTitle>
                    <ArrowDown size={24} className="text-green-400" />
                </CardHeader>
                <CardContent>
                    <div className={cn(
                        "text-4xl font-bold flex items-center gap-2",
                        'text-white' // Use specific color or default to white
                    )}>
                        {notables.goalLostOrGained} {notables.goalProgress && <Star size={40} className="text-green-400" />}
                    </div>
                    <p className="text-xs text-gray-300 mt-1">Progress with goal weight</p>
                </CardContent>
            </Card>
        </motion.div>
    );

    const weightChangeFromStarting = notables?.lossOrGain && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }} // Staggered entry
        >
            <Card
                className={cn(
                    "bg-gray-800/70 backdrop-blur-lg text-white overflow-hidden",
                    "transform hover:scale-105 transition-transform duration-300 ease-out",
                    `bg-gradient-to-br from-yellow-600 to-yellow-700` // Apply dynamic gradient
                )}
            >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-medium text-gray-200">Overall Progress</CardTitle>
                    <TrendingUp size={24} className="text-yellow-400" />
                </CardHeader>
                <CardContent>
                    <div className={cn(
                        "text-4xl font-bold",
                        'text-white' // Use specific color or default to white
                    )}>
                        {notables.lossOrGain}
                    </div>
                    <p className="text-xs text-gray-300 mt-1">Since starting</p>
                </CardContent>
            </Card>
        </motion.div>
    );

    return (
        <div className="p-4 md:p-8"> {/* Padding for the component itself */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto mb-12"
            >
                <h2 className="text-2xl font-extrabold text-center mb-10
                       bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Your Weight Journey
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {weightToDate}
                    {goalWeight}
                    {weightChange}
                    {weightChangeFromStarting}
                </div>
            </motion.div>
        </div>
    );
};