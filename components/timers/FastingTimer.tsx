'use client'
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import FastingForm from '@/components/forms/create/FastingForm';

export default function Timer({ fastData }: any) {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    const done = timeRemaining?.hours === 0 && timeRemaining?.minutes === 0 && Math.trunc(timeRemaining.seconds) === 0;

    const total_time = `${timeRemaining.hours}.${timeRemaining.minutes}`;

    const hasHour = timeRemaining.hours !== 0;

    // const total_fast_time = 16 - Math.trunc(Number(total_time));
    // console.log(total_fast_time, Number(total_time));

    const now = DateTime.now();

    useEffect(() => {
        function set() {
            const intervalId = setInterval(() => {
                setTimeRemaining(calculateTimeRemaining());
            }, 1000);

            return () => clearInterval(intervalId)
        }

        if (fastData?.user?.start) return set();
    }, [calculateTimeRemaining(), fastData?.user?.start]);

    function calculateTimeRemaining() {

        const now = DateTime.now();
        const futureDateTime = DateTime.fromISO(fastData?.user?.target_date);

        if (futureDateTime < now) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const diff = futureDateTime.diff(now, ['days', 'hours', 'minutes', 'seconds']);

        return {
            days: diff.days,
            hours: diff.hours,
            minutes: diff.minutes,
            seconds: diff.seconds,
        };
    };

    const progressBar = fastData?.user?.start && (
        <div aria-hidden="true" className="mt-6">
            <div className={`overflow-hidden ${done ? 'bg-green-500 animate-pulse' : 'bg-[#c18d21]'} rotate-180 rounded-full`}>
                <div style={{ width: `${(Number(total_time) / 16) * 100}%` }} className={`h-2 bg-gray-200`} />
            </div>
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

    const countDown = (
        <span className='text-sm font-medium text-gray-600'>
        {timeRemaining.hours !== 0 && `${timeRemaining.hours} hours remaining`} {timeRemaining.hours === 0 && `${timeRemaining.minutes} minutes`} {timeRemaining.hours === 0 && `${Math.trunc(timeRemaining.seconds)} seconds remaining`}
    </span>
    );

    return (
        <div>
            {progressBar}
            {fastData?.user?.start ? (
                <span className='text-sm font-medium text-gray-600'>
                    {countDown}
                </span>
            ) : (
                <div>Fast has not started</div>
            )}
            <FastingForm start_date={now} data={fastData} />
        </div>
    );
};