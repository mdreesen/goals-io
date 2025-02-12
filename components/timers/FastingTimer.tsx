// components/FastingTimer.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { addFasting, editFasting } from "@/actions/nutrition_fasting";
import LoadingScale from '../loaders/LoadingScale';

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
    const [fastingEnded, setFastingEnded] = useState<boolean>(fastData?.user?.ended);
    const [loading, setLoading] = useState<boolean>();
    const [duration, setDuration] = useState<number | null | undefined>();

    const time_hours = `${timeLeft?.hours}`;
    const time_minutes = `${timeLeft?.minutes}`;
    const time_seconds = `${timeLeft?.seconds}`;

    const total_duration_milliseconds = fastData.user.duration * 60 * 60 * 1000;
    const time_left_milliseconds = (Number(time_hours) * 3600 + Number(time_minutes) * 60 + Number(time_seconds)) * 1000;

    useEffect(() => {
        setLoading(true);
        const storedStartTime = fastData.user.start_date;
        const storedEndTime = fastData.user.end_date;

        if (storedStartTime && storedEndTime) {
            const parsedStartTime = new Date(fastData.user.start_date);
            const parsedEndTime = new Date(fastData.user.end_date);

            setStartTime(parsedStartTime);
            setEndTime(parsedEndTime);

            // Placing here to get rid of loading forever error
            setLoading(false);
    
            if (parsedEndTime.getTime() > Date.now()) {
                startTimer(parsedEndTime);
             }
        } else {
            setLoading(false)
        }

    }, []);

    const startTimer = (targetEndTime: Date) => {
        clearInterval(intervalRef.current as any);

        intervalRef.current = setInterval(() => {
            const now = Date.now();
            const difference = targetEndTime.getTime() - now;

            if (difference <= 0) {
                setFastingEnded(true)
                clearInterval(intervalRef.current as any);
                resetState();
                return;
            }

            setTimeLeft(calculateTimeLeft(difference));
        }, 1000);
    };

    const handleEndFasting = async () => {
        setFastingEnded(true)
        clearInterval(intervalRef?.current as any);

        resetState();
        await editFasting({
            _id: fastData?.user?._id,
            start: false,
            ended: true,
        });
        setLoading(false);
    };

    const resetState = () => {
        setTimeLeft(null);
        setStartTime(null);
        setEndTime(null);
    };

    const calculateTimeLeft = (difference: number): TimeLeft => {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setLoading(false)

        return { days, hours, minutes, seconds };
    };

    const formatTime = (time: number): string => {
        return time < 10 ? "0" + time.toString() : time.toString();
    };

    const handleStartFasting = async (duration: number) => {
        setLoading(true);
        setDuration(duration);

        const now = new Date();
        const targetEndTime = new Date(now.getTime() + duration * 60 * 60 * 1000);

        setStartTime(now);
        setEndTime(targetEndTime);

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
    };

    const buttonSixteen = (
        <button
            onClick={() => handleStartFasting(16)}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Start 16-Hour Fast
        </button>
    );

    const buttonEightteen = (
        <button
            onClick={() => handleStartFasting(18)}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Start 18-Hour Fast
        </button>
    );

    const buttonEndFast = (
        <button
            onClick={handleEndFasting}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            End Fast
        </button>
    );

    const ProgressBar = () => {
        const doneFasting = Number.isNaN(time_left_milliseconds) || time_left_milliseconds >= total_duration_milliseconds;

        return (
            <div aria-hidden="true" className="mt-6">
                {timeLeft && (
                    <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">{`Time left ${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}</p>
                        <p className="text-sm font-medium text-gray-900">{`${fastData.user.duration} hours`}</p>
                    </div>
                )}
                <div className={`overflow-hidden rotate-180 rounded-full ${doneFasting ? 'bg-gray-200' : 'bg-[#c18d21]'}`}>
                    <div style={{ width: `${(time_left_milliseconds / total_duration_milliseconds) * 100}%` }} className={`${doneFasting && 'bg-green-500 animate-pulse'} h-2 bg-gray-200`} />
                </div>
                {
                    doneFasting && <span>You are done! Great fast!</span>
                }
                <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                    <div>Getting started</div>
                    <div className="text-center">Keep going</div>
                    <div className="text-center">Almost there</div>
                    <div className="text-right flex justify-end">
                        <span className='flex flex-col w-[62px] justify-center text-center'>Nice job!</span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {!startTime ? (
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {loading ? <LoadingScale /> : buttonSixteen}
                    {loading ? <LoadingScale /> : buttonEightteen}
                </div>
            ) : (
                <div>
                    {loading ? <LoadingScale /> : <ProgressBar />}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        {loading ? <LoadingScale /> : buttonEndFast}
                    </div>

                </div>
            )}
        </div>
    );
};