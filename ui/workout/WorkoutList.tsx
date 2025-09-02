'use client'
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Footprints, Scale, Minus, BicepsFlexed, Cross, Bike, PersonStanding, Sailboat, WavesLadder, Clock, CheckCircle, XCircle, ChevronRight } from 'lucide-react'; // Icons for workouts, status

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateAndTime } from '@/lib/formatters';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
    return inputs.filter(Boolean).join(' ');
};

export default function WorkoutsList({ workout }: any) {
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
            className="space-y-6 pb-[2rem]"
        >
            <AnimatePresence>
                {workout.map((workout: any, index: number) => (
                    <motion.div
                        key={workout._id}
                        variants={itemVariants}
                        custom={index} // For staggered animation
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: index * 0.1 }} // Staggered entry
                    >
                        <Link href={`/dashboard/body/workout/edit/${workout._id}`}>
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
                                            workout.type && 'bg-green-500/20',
                                            // workout.status === 'scheduled' && 'bg-blue-500/20',
                                            // workout.status === 'missed' && 'bg-red-500/20',
                                        )}>
                                            {workout.type === 'Balance' && <Scale size={20} className="text-green-400" />}
                                            {workout.type === 'Barre' && <Minus size={20} className="text-green-400" />}
                                            {workout.type === 'Cardio' && <Footprints size={20} className="text-green-400" />}
                                            {workout.type === 'Calisthenics' && <BicepsFlexed size={20} className="text-green-400" />}
                                            {workout.type === 'Cross-training' && <Cross size={20} className="text-green-400" />}
                                            {workout.type === 'Cycling' && <Bike size={20} className="text-green-400" />}
                                            {workout.type === 'Dance' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Dance' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Flexibility Training' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Pilates' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Pilates' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Rowing' && <Sailboat size={20} className="text-green-400" />}
                                            {workout.type === 'Strength Training' && <Dumbbell size={20} className="text-green-400" />}
                                            {workout.type === 'Stretching' && <PersonStanding size={20} className="text-green-400" />}
                                            {workout.type === 'Swimming' && <WavesLadder size={20} className="text-green-400" />}
                                            {workout.type === 'Walking' && <Footprints size={20} className="text-green-400" />}
                                            {workout.type === 'Yoga' && <PersonStanding size={20} className="text-green-400" />}
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-100">{workout.type}</CardTitle>
                                            <CardDescription className="text-gray-400 text-sm mt-1">{workout.description}</CardDescription>
                                            <p className={cn(
                                                "text-xs font-medium mt-2",
                                                workout.type && 'text-green-300',
                                                // workout.status === 'scheduled' && 'text-blue-300',
                                                // workout.status === 'missed' && 'text-red-300',
                                            )}>
                                                Status: {workout.sets !== '' && 'Complete'} | Date: {formatDateAndTime(workout.date)}
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
