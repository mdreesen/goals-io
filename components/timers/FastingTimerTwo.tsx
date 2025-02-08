// components/FastingTimer.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function FastingTimer() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const storedStartTime = localStorage.getItem('fastingStartTime');
    const storedEndTime = localStorage.getItem('fastingEndTime');

    if (storedStartTime && storedEndTime) {
      const parsedStartTime = new Date(storedStartTime);
      const parsedEndTime = new Date(storedEndTime);

      setStartTime(parsedStartTime);
      setEndTime(parsedEndTime);

      if (parsedEndTime.getTime() > Date.now()) {
        startTimer(parsedEndTime);
      } else {
        localStorage.removeItem('fastingStartTime');
        localStorage.removeItem('fastingEndTime');
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
        clearInterval(intervalRef.current as any);
        localStorage.removeItem('fastingStartTime');
        localStorage.removeItem('fastingEndTime');
        resetState();
        return;
      }

      setTimeLeft(calculateTimeLeft(difference));
    }, 1000);
  };

  const handleStartFasting = (duration: number) => {
    const now = new Date();
    const targetEndTime = new Date(now.getTime() + duration * 60 * 60 * 1000);

    setStartTime(now);
    setEndTime(targetEndTime);
    localStorage.setItem('fastingStartTime', now.toISOString());
    localStorage.setItem('fastingEndTime', targetEndTime.toISOString());

    startTimer(targetEndTime);
  };

  const handleEndFasting = () => {
    clearInterval(intervalRef?.current as any);
    localStorage.removeItem('fastingStartTime');
    localStorage.removeItem('fastingEndTime');
    resetState();
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

  return (
    <div>
      {!startTime ? (
        <div>
          <button onClick={() => handleStartFasting(16)}>Start 16-Hour Fast</button>
          <button onClick={() => handleStartFasting(18)}>Start 18-Hour Fast</button>
        </div>
      ) : (
        <div>
          {timeLeft ? (
            <p>
              Time Left: {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </p>
          ) : (
            <p>Fasting Completed!</p>
          )}
          <button onClick={handleEndFasting}>End Fast</button>
        </div>
      )}
    </div>
  );
}

export default FastingTimer;