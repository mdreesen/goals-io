'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, XCircle, ChevronRight, Repeat, Calendar } from 'lucide-react'; // Icons for habits, status, frequency

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

// Sample Data for the list of habits (replace with real data from your app)
const sampleHabits = [
    {
        id: 'h1',
        name: 'Drink 8 Glasses of Water',
        frequency: 'Daily',
        lastCompletedDate: 'Today',
        status: 'completed', // 'completed', 'due_today', 'missed', 'upcoming'
        icon: <CheckCircle size={20} className="text-green-400" />,
        color: 'from-green-600 to-green-700',
    },
    {
        id: 'h2',
        name: 'Meditate for 15 mins',
        frequency: 'Daily',
        lastCompletedDate: 'Today',
        status: 'due_today',
        icon: <Clock size={20} className="text-blue-400" />,
        color: 'from-blue-600 to-blue-700',
    },
    {
        id: 'h3',
        name: 'Read 30 pages of a book',
        frequency: '3x a week',
        lastCompletedDate: 'Yesterday',
        status: 'missed',
        icon: <XCircle size={20} className="text-red-400" />,
        color: 'from-red-600 to-red-700',
    },
    {
        id: 'h4',
        name: 'Go for a 30-minute run',
        frequency: '4x a week',
        lastCompletedDate: '2024-07-22',
        status: 'completed',
        icon: <CheckCircle size={20} className="text-purple-400" />,
        color: 'from-purple-600 to-purple-700',
    },
    {
        id: 'h5',
        name: 'Journal for 10 minutes',
        frequency: 'Daily',
        lastCompletedDate: 'Today',
        status: 'due_today',
        icon: <Clock size={20} className="text-yellow-400" />,
        color: 'from-yellow-600 to-yellow-700',
    },
    {
        id: 'h6',
        name: 'Learn a new language',
        frequency: '5x a week',
        lastCompletedDate: '2024-07-20',
        status: 'upcoming',
        icon: <Calendar size={20} className="text-gray-400" />,
        color: 'from-gray-600 to-gray-700',
    },
];

const HabitsList = () => {
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
                {sampleHabits.map((habit, index) => (
                    <motion.div
                        key={habit.id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
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
                                        habit.status === 'completed' && 'bg-green-500/20',
                                        habit.status === 'due_today' && 'bg-blue-500/20',
                                        habit.status === 'missed' && 'bg-red-500/20',
                                        habit.status === 'upcoming' && 'bg-gray-500/20',
                                    )}>
                                        {habit.icon}
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-semibold text-gray-100">{habit.name}</CardTitle>
                                        <CardDescription className="text-gray-400 text-sm mt-1">
                                            Frequency: {habit.frequency}
                                        </CardDescription>
                                        <p className={cn(
                                            "text-xs font-medium mt-2",
                                            habit.status === 'completed' && 'text-green-300',
                                            habit.status === 'due_today' && 'text-blue-300',
                                            habit.status === 'missed' && 'text-red-300',
                                            habit.status === 'upcoming' && 'text-gray-300',
                                        )}>
                                            Status: {habit.status.replace('_', ' ').charAt(0).toUpperCase() + habit.status.replace('_', ' ').slice(1)} | Last Logged: {habit.lastCompletedDate}
                                        </p>
                                    </div>
                                </div>
                                <Button variant="ghost" className="text-gray-400 hover:text-blue-400">
                                    <ChevronRight size={24} />
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default HabitsList;
