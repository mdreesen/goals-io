'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { editWaterIntake, createWaterIntake } from "@/actions/sections/body/nutrition_water";
import { Droplet, Plus, Minus, Target, CheckCircle } from 'lucide-react';

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: string[]) => {
  return inputs.filter(Boolean).join(' ');
};

export default function WaterIntakeLogger({ water }: any) {
  const [logAmount, setLogAmount] = useState<string>('18'); // Default log amount
  const [logUnit, setLogUnit] = useState<string>('oz'); // Default unit for logging
  const [dailyGoal, setDailyGoal] = useState<number>(water?.total_water); // Default daily goal in oz
  const [currentDayIntake, setCurrentDayIntake] = useState<number>(water?.waterIntakeToday?.water_intake); // Today's total intake in oz
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | '' }>({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  // Load state from localStorage on mount
  useEffect(() => {

    if (typeof window !== 'undefined') {
      try {
        const savedGoal = water?.total_water;
        if (savedGoal) {
          setDailyGoal(parseFloat(savedGoal));
          setCurrentDayIntake(water?.waterIntakeToday?.water_intake)
        }
      } catch (error) {
        console.error("Failed to load water intake state:", error);
      }
    }
  }, []);

  // Handle message display timeout
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogWater = async (amountToAdd: number) => {
    setLoading(true);
    setMessage({ text: '', type: '' });

    const newTotalIntake = Number(currentDayIntake) + amountToAdd;

    // Otherwise, update the entry that has been made today
    if (water.create) {
      try {
        await createWaterIntake({
          water_intake: newTotalIntake.toString(),
          date: water?.useDateToday,
        });
        setMessage({ text: `Logged ${amountToAdd} ${logUnit}!`, type: 'success' });
      } catch (error) {
        setError(error as string)
        console.log(error);
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    } else {

      try {
        await editWaterIntake({
          _id: water?.waterIntakeToday?._id,
          water_intake: newTotalIntake.toString(),
          date: water?.useDateToday,
        });
        setMessage({ text: `Updated ${amountToAdd} ${logUnit}!`, type: 'success' });

      } catch (error) {
        setError(error as string)
        console.log(error);
        setMessage({ text: 'Failed to log water. Please try again.', type: 'error' });
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    }
  };

  const handleManualLog = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(logAmount);
    setLoading(true);

    if (isNaN(amount) || amount <= 0) {
      setMessage({ text: 'Please enter a valid positive amount.', type: 'error' });
      setLoading(false);
      return;
    }

    await handleLogWater(amount);

    if (water.create) {
      try {
        await createWaterIntake({
          water_intake: amount.toString(),
          date: water?.useDateToday,
        });

        setMessage({ text: `Logged to ${amount.toString()} ${logUnit}!`, type: 'success' });
      } catch (error) {
        setError(error as string)
        console.log(error);
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    } else {

      try {
        await editWaterIntake({
          _id: water?.waterIntakeToday?._id,
          water_intake: amount.toString(),
          date: water?.useDateToday,
        });

        setMessage({ text: `Updated to ${amount.toString()} ${logUnit}!`, type: 'success' });

      } catch (error) {
        setError(error as string)
        console.log(error);
        setMessage({ text: 'Failed to log water. Please try again.', type: 'error' });
        setLoading(false);
      }
      finally {
        setLoading(false);
      }
    }
  };

  const progressionPercentage = (water.current_progress / dailyGoal) * 100;
  const displayGoal = `${dailyGoal} ${logUnit}`;
  const displayCurrent = `${water.waterIntakeToday?.water_intake} ${logUnit}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gray-800 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 space-y-8 text-center"
    >
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
          Hydration Tracker
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Drink up! Your body will thank you.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 space-y-6">
        {/* Current Intake & Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <Droplet size={48} className="text-blue-400" />
          <p className="text-xl text-gray-300 font-medium">Today's Intake:</p>
          <p className="text-5xl font-extrabold text-blue-300">{displayCurrent}</p>
          <p className="text-lg text-gray-400 flex items-center gap-2">
            <Target size={20} className="text-purple-400" /> Goal: {displayGoal}
          </p>
        </motion.div>

        {/* Progression Bar */}
        <div className="w-full bg-gray-700 rounded-full h-4 mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, progressionPercentage)}%` }} // Cap at 100%
            transition={{ duration: 1, ease: "linear" }}
            className={cn(
              "h-full rounded-full",
              progressionPercentage >= 100 ? "bg-gradient-to-r from-green-500 to-green-700" : "bg-gradient-to-r from-blue-500 to-blue-700"
            )}
          ></motion.div>
        </div>
        <p className="text-gray-400 text-sm mt-2">
          {Math.round(progressionPercentage)}% of goal
          {progressionPercentage >= 100 && <span className="ml-2 text-green-400 font-semibold"> (Goal Reached!)</span>}
        </p>

        {/* Quick Log Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-gray-700/50">
          {[12, 16, 18, 24].map((amount, idx) => (
            <motion.div key={amount} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleLogWater(amount)}
                disabled={loading}
                className="px-4 py-2 rounded-full font-semibold text-base
                             bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-200"
              >
                +{amount} {logUnit}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Manual Log Input */}
        <form onSubmit={handleManualLog} className="flex flex-col sm:flex-row gap-3 items-center pt-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex-grow w-full sm:w-auto"
          >
            <label className="text-gray-300 text-sm font-medium mb-2 block">Set Custom Amount (in oz)</label>
            <Input
              type="number"
              placeholder="Custom amount"
              value={logAmount}
              onChange={(e) => setLogAmount(e.target.value)}
              className="w-full pl-3 pr-2 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              step="10"
              disabled={loading}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" disabled={loading} className="w-full sm:w-auto px-5 py-2 rounded-full font-semibold text-base
                         bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
              Log
            </Button>
          </motion.div>
        </form>

        {/* Message Display */}
        <div className='mt-4 h[20px] flex justify-center'>
        <AnimatePresence>
          {message.text && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "text-sm text-center absolute flex justify-center",
                message.type === 'success' ? 'text-green-400' : 'text-red-400'
              )}
            >
              {message.text}
            </motion.p>
          )}
        </AnimatePresence>
        </div>
      </CardContent>
    </motion.div>
  );
};