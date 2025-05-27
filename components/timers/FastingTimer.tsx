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

    const buttonSixteen = (
        <Button
            onClick={() => handleFasting(16)}
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            16-Hour
        </Button>
    );

    const buttonEightteen = (
        <Button
            onClick={() => handleFasting(18)}
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            18-Hour
        </Button>
    );

    const buttonTwenty = (
        <Button
            onClick={() => handleFasting(20)}
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            20-Hour
        </Button>
    );

    const buttonEndFast = (
        <Button
            onClick={handleEndFasting}
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            End Fast
        </Button>
    );

    const fastingStatus = useEndFasting && (
        <motion.div
            className='h-[24px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            Fasting Complete!
        </motion.div>
    );

    const currentFastingTime = timeLeft && (
        <motion.div
            className="flex justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-sm font-medium flex gap-1">
                <span>Time left:</span>
                <span className='text-indigo-900 font-semibold'>{`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}</span></p>
            <p className="text-sm font-medium">{`${fastData.user.duration} hours`}</p>
        </motion.div>
    );

    const progressBar = !loading && (
        <div aria-hidden="true" className="mt-6">
            {currentFastingTime}
            <div className={`overflow-hidden rotate-180 rounded-full ${useEndFasting ? 'bg-gray-200' : 'bg-[#312E81]'}`}>
                <div style={{ width: `${useEndFasting ? '100' : useTimedFasting}%` }} className={`${useEndFasting ? 'bg-green-500 animate-pulse' : 'bg-gray-200'} h-2`} />
            </div>
            <div className='h-[24px]'>{fastingStatus}</div>
        </div>
    );

    const startTimerButtons = !startTime && (
        <div>
            <div className='flex items-center justify-center gap-x-6'>Choose your fasting time</div>

            <motion.div
                className="mt-6 flex items-center justify-center gap-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {loading ? <LoadingScale /> : buttonSixteen}
                {loading ? <LoadingScale /> : buttonEightteen}
                {loading ? <LoadingScale /> : buttonTwenty}
            </motion.div>
        </div>
    );

    const endTimerButtons = startTime && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {loading ? <LoadingScale /> : progressBar}
            <div className="mt-6 flex items-center justify-end gap-x-6 transition delay-150 duration-300 ease-in-out">
                {loading ? <LoadingScale /> : buttonEndFast}
            </div>

        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {startTimerButtons}
            {endTimerButtons}
        </motion.div>
    );
};