'use client'
import { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import FastingForm from '../forms/create/FastingForm';

export default function Timer({ fastData }: any) {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    const done = timeRemaining?.hours === 0 && timeRemaining?.minutes === 0 && Math.trunc(timeRemaining.seconds) === 0;

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

        if (fastData?.user?.ended) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

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

    const timeIsDone = done && (
        <h2 className='text-green-500'>Fasting is done!</h2>
    )

    return (
        <div>
            {fastData?.user?.start ? (
                <>
                    {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {Math.trunc(timeRemaining.seconds)} seconds
                </>
            ) : (
                <div>Fast has not started</div>
            )}
            {timeIsDone}
            <FastingForm start_date={now} data={fastData} />
        </div>
    );
};