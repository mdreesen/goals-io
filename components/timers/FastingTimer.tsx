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
    const [fastingEnded, setFastingEnded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>();
    const [duration, setDuration] = useState<number | null | undefined>();

    const time_hours = `${timeLeft?.hours}`;
    const time_minutes = `${timeLeft?.minutes}`;
    const time_seconds = `${timeLeft?.seconds}`;

    const total_duration_milliseconds = fastData.user?.duration * 60 * 60 * 1000;
    const time_left_milliseconds = (Number(time_hours) * 3600 + Number(time_minutes) * 60 + Number(time_seconds)) * 1000;

    const useTimedFasting = (time_left_milliseconds / total_duration_milliseconds) * 100;

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

        console.log('fastingEnded', fastingEnded)

        resetState();
        await editFasting({
            _id: fastData?.user?._id,
            start: false,
            ended: true,
            completed: fastingEnded
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
                completed: fastingEnded
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
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Start 16-Hour Fast
        </button>
    );

    const buttonEightteen = (
        <button
            onClick={() => handleStartFasting(18)}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Start 18-Hour Fast
        </button>
    );

    const buttonTwenty = (
        <button
            onClick={() => handleStartFasting(20)}
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Start 20-Hour Fast
        </button>
    );


    // const buttonTest = (
    //     <button
    //         onClick={() => handleStartFasting(.01)}
    //         className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //     >
    //         Test Button
    //     </button>
    // );

    const buttonEndFast = (
        <button
            onClick={handleEndFasting}
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            End Fast
        </button>
    );

    const ProgressBar = () => {

        const useEndFasting = fastingEnded || !startTime || !timeLeft;

        return !loading && (
            <div aria-hidden="true" className="mt-6">
                {timeLeft && (
                    <div className="flex justify-between">
                        <p className="text-sm font-medium flex gap-1">
                            <span>Time left:</span>
                            <span className='text-indigo-900 font-semibold'>{`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}</span></p>
                        <p className="text-sm font-medium">{`${fastData.user.duration} hours`}</p>
                    </div>
                )}
                <div className={`overflow-hidden rotate-180 rounded-full ${useEndFasting ? 'bg-gray-200' : 'bg-[#312E81]'}`}>
                    <div style={{ width: `${useEndFasting ? '100' : useTimedFasting}%` }} className={`${useEndFasting ? 'bg-green-500 animate-pulse' : 'bg-gray-200'} h-2`} />
                </div>
                {
                    useEndFasting && <span>You are done! Great fast!</span>
                }
                <div className="mt-6 hidden grid-cols-4 text-sm font-medium sm:grid">
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
                    {loading ? <LoadingScale /> : buttonTwenty}
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