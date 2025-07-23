'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, TrendingUp } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card'; // Assuming you have shadcn's Card

export default function RecentActivity() {
    // Animation variants for sections
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold text-gray-200 mb-8">Recent Activity</h2>
            <Card className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 text-white">
                <CardContent className="p-6"> {/* Added padding to CardContent */}
                    <ul className="space-y-4">
                        <motion.li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle size={20} className="text-green-500" />
                            Completed "Drink Water" habit - 1 hour ago
                        </motion.li>
                        <motion.li className="flex items-center gap-3 text-gray-300">
                            <TrendingUp size={20} className="text-blue-500" />
                            Reached a 21-day streak on "Meditate" - 3 hours ago
                        </motion.li>
                        <motion.li className="flex items-center gap-3 text-gray-300">
                            <Target size={20} className="text-purple-500" />
                            Achieved "Read 1 Book" goal - yesterday
                        </motion.li>
                    </ul>
                </CardContent>
            </Card>
        </motion.section>
    );
};