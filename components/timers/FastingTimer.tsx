'use client';
import { useEffect, useState } from "react";

export default function FastingTimer() {
    const [ hours, setHours ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ seconds, setSeconds ] = useState(0);
    const [fastingTime, setFastingTime] = useState(false)

    useEffect(() => {
        const getTarget = new Date("12/31/2026 23:59:59");

        setInterval(() => {
            const now = new Date();
            const difference = getTarget.getTime() - now.getTime();

            // const timeNow = now.toLocaleTimeString();

            const newDate = new Date();
            const setNewDate = newDate.setHours(newDate.getHours() + 16);

            const timeHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const timeMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const timeSeconds = Math.floor((difference % (1000 * 60)) / 1000);

            setHours(timeHours);
            setMinutes(timeMinutes);
            setSeconds(timeSeconds);

            if (timeHours <= 0 && timeMinutes <= 0 && timeSeconds <= 0) {
                setFastingTime(true)
            };
        }, 1000)
    }, []);

    return (
        <div className="flex flex-col">
            <div>Hours {hours}</div>
            <div>Minutes {minutes}</div>
            <div>Seconds {seconds}</div>

            {fastingTime && <h2>Your fasting time is done</h2>}
        </div>
    )

}