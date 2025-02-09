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

    useEffect(() => {
        const storedStartTime = fastData.user.start_date;
        const storedEndTime = fastData.user.end_date;

        if (storedStartTime && storedEndTime) {
            const parsedStartTime = new Date(fastData.user.start_date);
            const parsedEndTime = new Date(fastData.user.end_date);

            setStartTime(parsedStartTime);
            setEndTime(parsedEndTime);

            if (parsedEndTime.getTime() > Date.now()) {
                startTimer(parsedEndTime);
            } else {
                resetState();
            }
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
        setLoading(true);
        setFastingEnded(true)
        clearInterval(intervalRef?.current as any);
        // localStorage.removeItem('fastingStartTime');
        // localStorage.removeItem('fastingEndTime');
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
            if (!fastData?.user?.start || fastData?.user?.start === false) {
                await addFasting({
                    start: true,
                    start_date: now.toISOString(),
                    end_date: targetEndTime.toISOString(),
                    ended: false,
                });
                setLoading(false)
            } else {
                await editFasting({
                    _id: fastData?.user?._id,
                    start: false,
                    start_date: now.toISOString(),
                    end_date: targetEndTime.toISOString(),
                    ended: true,
                });
                setLoading(false)
            }
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

    const fasting = timeLeft && (
        <p>
            Time Left: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </p>
    );

    // const progressBar = fastData?.user?.start && (
    //     <div aria-hidden="true" className="mt-6">
    //         <div className={`overflow-hidden ${fastingEnded ? 'bg-green-500 animate-pulse' : 'bg-[#c18d21]'} rotate-180 rounded-full`}>
    //             <div style={{ width: `${(duration / timeLeft.hours) * 100}%` }} className={`h-2 bg-gray-200`} />
    //         </div>
    //         <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
    //             <div>Getting started</div>
    //             <div className="text-center">Keep going</div>
    //             <div className="text-center">Almost there</div>
    //             <div className="text-right flex justify-end">
    //                 <span className='flex flex-col w-[62px] justify-center text-center'>Nice job!</span>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div>
            {!startTime ? (
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {loading ? <LoadingScale /> : buttonSixteen}
                    {loading ? <LoadingScale /> : buttonEightteen}
                </div>
            ) : (
                <div>
                    {loading ? <LoadingScale /> : fasting}

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        {loading ? <LoadingScale /> : buttonEndFast}
                    </div>

                </div>
            )}
        </div>
    );
};