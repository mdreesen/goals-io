'use client';
import React, { useState, useEffect } from 'react';
import { addColdSoak } from "@/actions/sections/body/coldSoak";
import { Play, Pause, RefreshCcw, Droplets } from 'lucide-react';
import { formatDateSpecific } from '@/lib/formatters';

// The main application component for the cold soak tracker.
export default function ColdSoakTimer() {
  // State variables for the soak log, typed as an array of SoakLogEntry objects.
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSoaking, setIsSoaking] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  // State variables for the countdown timer.
  const initialCountdown: number = 10; // Default countdown time in seconds
  const [countdownSeconds, setCountdownSeconds] = useState<number>(initialCountdown);
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false);

  // useEffect hook to manage the countdown timer.
  useEffect(() => {
    let countdownInterval: NodeJS.Timeout | null = null;
    if (isCountingDown) {
      if (countdownSeconds > 0) {
        countdownInterval = setInterval(() => {
          setCountdownSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
      } else {
        // Countdown is over, start the main timer.
        setIsCountingDown(false);
        setIsRunning(true);
        setIsSoaking(true);
      }
    }
    // Cleanup function to clear the interval.
    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [isCountingDown, countdownSeconds]);

  // useEffect hook to manage the main soak timer.
  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setTimerSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    // Cleanup function to clear the interval.
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [isRunning]);

  // Function to start the countdown.
  const handleStart = (): void => {
    if (!isRunning && !isCountingDown) {
      setIsCountingDown(true);
    }
  };

  // Function to stop either the countdown or the main timer.
  const handleStop = async (): Promise<void> => {
    if (isCountingDown) {
      // If counting down, stop and reset the countdown.
      setIsCountingDown(false);
      setCountdownSeconds(initialCountdown);
    } else if (isRunning) {
      // If the main timer is running, stop it and log the session.
      setIsRunning(false);
      setIsSoaking(false);

      try {
        await addColdSoak({
          dateFormatted: formatDateSpecific(new Date()),
          date: new Date(),
          duration: timerSeconds,
        });
        // setLoading(false);
      } catch (error) {
        setError(error as string)
        console.log(error);
        // setLoading(false);
      }
    }
  };

  // Function to reset all timers and states.
  const handleReset = (): void => {
    setIsCountingDown(false);
    setCountdownSeconds(initialCountdown);
    setIsRunning(false);
    setIsSoaking(false);
    setTimerSeconds(0);
  };

  // Helper function to format the time from seconds to MM:SS.
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-start pb-6 md:pb-12 font-inter">

      {/* Main tracker card */}
      <div className="flex flex-col items-center bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl w-full max-w-sm md:max-w-md">

        {/* Timer display */}
        <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 mb-8">
          <Droplets size={100} className={`text-blue-400 opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${isSoaking ? 'opacity-50' : 'opacity-20'}`} />
          <h2 className={`
            text-6xl md:text-8xl font-extrabold drop-shadow-lg z-10 transition-colors duration-500
            ${isCountingDown ? 'text-yellow-400 animate-pulse' : 'text-blue-300'}
          `}>
            {isCountingDown ? countdownSeconds : formatTime(timerSeconds)}
          </h2>
        </div>

        {/* Control buttons */}
        <div className="flex space-x-4">
          <button
            onClick={isCountingDown || isRunning ? handleStop : handleStart}
            className={`
              p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4
              ${(isCountingDown || isRunning)
                ? 'bg-red-500 hover:bg-red-600 focus:ring-red-400'
                : 'bg-green-500 hover:bg-green-600 focus:ring-green-400'
              }
            `}
          >
            {(isCountingDown || isRunning) ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button
            onClick={handleReset}
            className="p-4 rounded-full bg-gray-700 text-gray-300 shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            <RefreshCcw size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};