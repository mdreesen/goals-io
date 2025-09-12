'use client';

import { useState, useEffect, useRef } from 'react';
import { addFasting, editFasting } from "@/actions/sections/body/nutrition_fasting";
import LoadingScale from '../loaders/LoadingScale';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
            duration: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function FastingTimer({ fastData }: any) {
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [error, setError] = useState<string>();
    const [fastingEnded, setFastingEnded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>();
    const [duration, setDuration] = useState<number | null | undefined>();

    const time_hours = `${timeLeft?.hours}`;
    const time_minutes = `${timeLeft?.minutes}`;
    const time_seconds = `${timeLeft?.seconds}`;

    const total_duration_milliseconds = fastData.user?.duration * 60 * 60 * 1000;
    const time_left_milliseconds = (Number(time_hours) * 3600 + Number(time_minutes) * 60 + Number(time_seconds)) * 1000;

    const useTimedFasting = (time_left_milliseconds / total_duration_milliseconds) * 100;

    const useEndFasting = fastingEnded || !startTime || !timeLeft;

    useEffect(() => {
        const storedStartTime = fastData.user?.start_date;
        const storedEndTime = fastData.user?.end_date;

        if (storedStartTime && storedEndTime) {
            const parsedStartTime = new Date(fastData.user?.start_date);
            const parsedEndTime = new Date(fastData.user?.end_date);

            setStartTime(parsedStartTime);
            setEndTime(parsedEndTime);

            if (parsedEndTime.getTime() > Date.now()) {
                startTimer(parsedEndTime);
            }
        }
    }, []);

    const startTimer = (targetEndTime: Date) => {
        setLoading(true)

        clearInterval(intervalRef.current as any);

        intervalRef.current = setInterval(() => {
            const now = Date.now();
            const difference = targetEndTime.getTime() - now;

            if (difference <= 0) {

                setFastingEnded(true);
                clearInterval(intervalRef.current as any);
                return;
            }

            setTimeLeft(calculateTimeLeft(difference));
            setLoading(false)

        }, 1000);
    };

    const handleEndFasting = async () => {
        clearInterval(intervalRef?.current as any);

        resetState();
        await editFasting({
            _id: fastData?.user?._id,
            start: false,
            ended: true,
            completed: useEndFasting
        });
    };

    const resetState = () => {
        setFastingEnded(false);
        setTimeLeft(null);
        setStartTime(null);
        setEndTime(null);
    };

    const calculateTimeLeft = (difference: number): TimeLeft => {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const formatTime = (time: number): string => {
        return time < 10 ? "0" + time.toString() : time.toString();
    };

    const handleFasting = async (duration: number) => {
        setLoading(true);
        setDuration(duration);

        const now = new Date();
        const targetEndTime = new Date(now.getTime() + duration * 60 * 60 * 1000);

        setStartTime(now);
        setEndTime(targetEndTime);

        if (fastData?.ended || !fastData?.start) {
            try {
                await addFasting({
                    start: true,
                    start_date: now.toISOString(),
                    end_date: targetEndTime.toISOString(),
                    duration: duration,
                    ended: false,
                });
                setLoading(false);
            } catch (error) {
                setError(error as string)
                console.log(error);
                setLoading(false);
            }

            startTimer(targetEndTime);
        }
    };

    return (
        <div className="flex w-full items-center justify-center">
            <motion.div
                className="flex w-full max-w-lg flex-col items-center space-y-8 rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <p className="mt-2 text-center text-sm text-gray-400">Your Fasting Tracker</p>
                </motion.div>

                <motion.div
                    className="relative h-64 w-64 rounded-full bg-gray-700 shadow-inner"
                    variants={itemVariants}
                >
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `conic-gradient(transparent ${useTimedFasting}%, #3B82F6 ${useTimedFasting}%)`,
                            transform: 'rotate(-90deg)',
                        }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <h2 className="text-5xl font-bold">{`${formatTime(timeLeft?.hours ?? 0)}:${formatTime(timeLeft?.minutes ?? 0)}:${formatTime(timeLeft?.seconds ?? 0)}`}</h2>
                        <p className="text-sm uppercase tracking-wide text-gray-400">
                            Time Elapsed
                            {duration && <p className="text-sm uppercase tracking-wide text-gray-400">of {duration} hours</p>}
                        </p>
                    </div>
                </motion.div>

                {!startTime && (
                    <motion.select
                        className="w-full rounded-md border border-gray-600 bg-gray-700 py-3 text-center text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        value={duration || ''}
                        variants={itemVariants}
                    >
                        <option value="" disabled>Select a fast duration</option>
                        <option value="12">12 Hours</option>
                        <option value="16">16 Hours</option>
                        <option value="18">18 Hours</option>
                        <option value="20">20 Hours</option>
                        <option value="24">24 Hours</option>
                        <option value="36">36 Hours</option>
                    </motion.select>
                )}

                <div className="flex w-full max-w-sm flex-col space-y-4">
                    {!startTime ? (
                        <motion.button
                            type="button"
                            className={`w-full rounded-md bg-gradient-to-r ${duration ? 'from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' : 'from-gray-400 to-gray-600'} py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
                            onClick={() => handleFasting(Number(duration))}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={!duration}
                        >
                            {duration ? 'Start Fast' : 'Select fasting duration'}
                        </motion.button>
                    ) : (
                        <form onSubmit={handleEndFasting} className="w-full flex justify-center">
                            <motion.button
                                type="submit"
                                className="w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'End and Save Fast'}
                            </motion.button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
};