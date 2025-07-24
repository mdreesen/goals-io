'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Target, CalendarDays, Book, Clock, GlassWater, Scale } from 'lucide-react';
import AnimatedCounter from '@/components/animations/AnimatedCounter';


// Utility function for Tailwind CSS class concatenation
// This is typically from your lib/utils.ts if using shadcn/ui
const cn = (...inputs: string[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function Stats({ stats }: any) {

    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        },
    };

    // Animation variants for individual cards/items
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const books = stats.showBooks && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className={cn(
                "flex flex-col items-center text-center space-y-3",
                "transform hover:scale-105 transition-transform duration-300 ease-out",
                `bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl shadow-xl` // Apply dynamic gradient and base styling
            )}
        >
            <Book size={24} className="text-green-400" />
            <p className="text-lg font-medium text-gray-200">Books</p>
            <p className="text-4xl font-extrabold text-white">{`Started ${stats.bookOverview?.booksStartedToYear}`}</p>
            <p className="text-4xl font-extrabold text-white">{`Finished ${stats.bookOverview?.booksEndedToYear}`}</p>
        </motion.div>
    );

    const fasting = stats.showFasting && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className={cn(
                "flex flex-col items-center text-center space-y-3",
                "transform hover:scale-105 transition-transform duration-300 ease-out",
                `bg-gradient-to-br from-yellow-600 to-yellow-700 p-6 rounded-xl shadow-xl` // Apply dynamic gradient and base styling
            )}
        >
            <Clock size={24} className={`text-yellow-400 ${stats?.fastingOverview?.currently_fasting ? 'animate-bounce' : ''}`} />
            <p className="text-lg font-medium text-gray-200">Fasting</p>
            <p className="text-4xl font-extrabold text-white">{stats?.fastingOverview?.status}</p>
        </motion.div>
    );

    const water = stats.showWater && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className={cn(
                "flex flex-col items-center text-center space-y-3",
                "transform hover:scale-105 transition-transform duration-300 ease-out",
                `bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-xl` // Apply dynamic gradient and base styling
            )}
        >
            <GlassWater size={24} className={`text-blue-400`} />
            <p className="text-lg font-medium text-gray-200">Daily Water</p>
            <p className="text-4xl font-extrabold text-white">{`${stats.waterOverview.waterIntakeToday?.water_intake} oz.`}</p>
        </motion.div>
    );

    const weight = stats.showWeight && (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className={cn(
                "flex flex-col items-center text-center space-y-3",
                "transform hover:scale-105 transition-transform duration-300 ease-out",
                `bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-xl shadow-xl` // Apply dynamic gradient and base styling
            )}
        >
            <Scale size={24} className={`text-purple-400`} />
            <p className="text-lg font-medium text-gray-200">Weight</p>
            <p className="text-4xl font-extrabold text-white">{stats?.weightOverview.dataToDate?.weight ? `${stats?.weightOverview.dataToDate?.weight} lbs.` : 'No recorded weight'}</p>
        </motion.div>
    );

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold mb-8">Your Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {books}
                {fasting}
                {water}
                {weight}
            </div>
        </motion.section>
    );
};