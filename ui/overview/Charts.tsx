'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend,
} from 'recharts';
import { sectionVariants, cardVariants } from "@/lib/variants";


// shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming you have shadcn's Card

// Sample Data for Charts (replace with real data from your backend)
const dailyCompletionData = [
    { name: 'Mon', habits: 5 },
    { name: 'Tue', habits: 7 },
    { name: 'Wed', habits: 6 },
    { name: 'Thu', habits: 8 },
    { name: 'Fri', habits: 7 },
    { name: 'Sat', habits: 9 },
    { name: 'Sun', habits: 6 },
];

const streakHistoryData = [
    { name: 'Week 1', streak: 7 },
    { name: 'Week 2', streak: 14 },
    { name: 'Week 3', streak: 10 },
    { name: 'Week 4', streak: 21 },
    { name: 'Week 5', streak: 28 },
];

export default function Charts() {

    return (
        <motion.section
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold mb-8">Your Progress Charts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Daily Habit Completion Chart */}
                <motion.div variants={cardVariants}>
                    <Card className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 text-white">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-100">Daily Habit Completion</CardTitle>
                            <CardDescription className="text-gray-400">Habits completed over the last 7 days.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={dailyCompletionData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#374151',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#E5E7EB',
                                        }}
                                        itemStyle={{ color: '#E5E7EB' }}
                                    />
                                    <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="habits"
                                        stroke="#8884d8"
                                        strokeWidth={3}
                                        dot={{ stroke: '#8884d8', strokeWidth: 2, r: 4 }}
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Streak History Chart */}
                <motion.div variants={cardVariants}>
                    <Card className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 text-white">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-100">Streak History (Weeks)</CardTitle>
                            <CardDescription className="text-gray-400">Your longest streaks over time.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={streakHistoryData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                                    <XAxis dataKey="name" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#374151',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#E5E7EB',
                                        }}
                                        itemStyle={{ color: '#E5E7EB' }}
                                    />
                                    <Legend wrapperStyle={{ color: '#E5E7EB' }} />
                                    <Bar
                                        dataKey="streak"
                                        fill="#82ca9d"
                                        radius={[10, 10, 0, 0]} // Rounded top corners
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.section>
    );
};