<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface HabitEntry {
  id: number;
  name: string;
  targetFrequency: string; // e.g., Daily, 3 times a week
  streak: number; 
  lastCompleted: string | null; // Date of last completion
  loggedAt: string;
}

const habitList = ref<HabitEntry[]>([
  { id: 1, name: 'Meditate for 10 minutes', targetFrequency: 'Daily', streak: 5, lastCompleted: '2025-10-02', loggedAt: '2025-10-01' },
  { id: 2, name: 'Read 20 pages', targetFrequency: 'Daily', streak: 12, lastCompleted: '2025-10-02', loggedAt: '2025-10-01' },
  { id: 3, name: 'Go for a walk', targetFrequency: '3 times/week', streak: 2, lastCompleted: '2025-10-01', loggedAt: '2025-10-02' },
]);
let nextId = 4; // Counter for new mock entries

// --- State ---
const newHabitName = ref('');
const newHabitFrequency = ref('Daily');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for habit creation) ---
const createNewHabit = async () => {
  if (!newHabitName.value.trim()) {
    saveMessage.value = 'Please enter a habit name.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Creating new habit...';
  
  const payload = {
    name: newHabitName.value.trim(), 
    targetFrequency: newHabitFrequency.value,
    createdAt: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/create-habit endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    habitList.value.unshift({
        id: nextId++,
        name: newHabitName.value.trim(),
        targetFrequency: newHabitFrequency.value,
        streak: 0,
        lastCompleted: null,
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `${newHabitName.value.trim()} habit created!`;
    newHabitName.value = '';
    newHabitFrequency.value = 'Daily';
    
  } catch (error) {
    console.error('Failed to save habit:', error);
    saveMessage.value = 'Error saving data. Please try again.';
  } finally {
    isSaving.value = false;
    setTimeout(() => saveMessage.value = null, 4000);
  }
};


// --- Motion setup for fade-in effect ---
const trackerRef = ref();
useMotion(trackerRef, {
  initial: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
});

// --- Habit Completion Logic (Simulated) ---
const toggleCompletion = (habitId: number) => {
    const habit = habitList.value.find(h => h.id === habitId);
    if (!habit) return;

    const today = new Date().toISOString().substring(0, 10);
    
    if (habit.lastCompleted === today) {
        // --- Simulate undoing completion ---
        habit.lastCompleted = null;
        habit.streak = Math.max(0, habit.streak - 1);
        saveMessage.value = `Completion undone for ${habit.name}.`;
    } else {
        // --- Simulate logging completion ---
        habit.lastCompleted = today;
        habit.streak += 1;
        saveMessage.value = `Habit completed: ${habit.name}!`;
    }
    
    setTimeout(() => saveMessage.value = null, 3000);
    // In a real app, you would call a Server API here to update the completion status in MongoDB.
    console.log(`Simulating status update for habit ID ${habitId}`);
};

const isCompletedToday = (lastCompletedDate: string | null) => {
    if (!lastCompletedDate) return false;
    const today = new Date().toISOString().substring(0, 10);
    return lastCompletedDate === today;
};
</script>

<template>
  <!-- Custom Habit Gradient Background (Deep Blue/Purple for Structure and Growth) -->
  <div ref="trackerRef" 
    class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-indigo-400/20 ring-4 ring-indigo-600/20 transition-all duration-500 hover:ring-indigo-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-indigo-400">
          <!-- Target Icon (Focus, Goal) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0 0 20v-2a8 8 0 0 1 0-16V2Z"/>
          </svg>
          Ascend Habit Tracker
        </h1>
        <p class="mt-2 text-gray-300">Build unstoppable routines and track your progress daily.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('completed') || saveMessage.includes('created'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please enter'),
            'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Creating') || saveMessage.includes('undone')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Habit Creation Form -->
      <form 
        @submit.prevent="createNewHabit"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Create New Habit</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <!-- Habit Name Input -->
            <div class="md:col-span-2">
                <label for="habit-name" class="block text-sm font-bold text-gray-300 mb-1">Habit Name</label>
                <input
                    id="habit-name"
                    type="text"
                    v-model="newHabitName"
                    placeholder="e.g., Drink 8 glasses of water"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    :disabled="isSaving"
                />
            </div>
            
            <!-- Target Frequency Dropdown -->
            <div class="md:col-span-1">
                <label for="habit-frequency" class="block text-sm font-bold text-gray-300 mb-1">Frequency</label>
                <select
                    id="habit-frequency"
                    v-model="newHabitFrequency"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    :disabled="isSaving"
                >
                    <option value="Daily">Daily</option>
                    <option value="5 times/week">5 times/week</option>
                    <option value="3 times/week">3 times/week</option>
                    <option value="Weekly">Weekly</option>
                </select>
            </div>

            <!-- Create Button -->
            <div class="md:col-span-1">
                <button
                    type="submit"
                    :disabled="isSaving || !newHabitName.trim()"
                    class="w-full px-6 py-3 rounded-xl bg-indigo-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-indigo-700/50 
                           hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <!-- Target Icon -->
                    <span class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                        <span class="ml-2 hidden sm:inline">Create Habit</span>
                    </span>
                </button>
            </div>
        </div>
      </form>
      
      <!-- Habit List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Your Active Habits</h2>

        <ul class="max-h-72 overflow-y-auto pr-2 space-y-2">
            <li 
                v-for="(item, index) in habitList" 
                :key="item.id"
                class="flex items-center justify-between p-4 border-b border-gray-700 last:border-b-0 bg-gray-800/30 rounded-lg group transition duration-200"
                :class="{ 'border-l-4 border-l-green-500': isCompletedToday(item.lastCompleted) }"
                v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } }"
            >
                <!-- Habit Info & Streak -->
                <div class="flex-grow flex items-center">
                    <!-- Completion Checkmark/Circle -->
                    <button 
                        @click="toggleCompletion(item.id)" 
                        class="w-8 h-8 rounded-full flex items-center justify-center transition duration-300 flex-shrink-0"
                        :class="[isCompletedToday(item.lastCompleted) ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-700/50 border border-indigo-400/50 hover:bg-gray-700 text-indigo-400']"
                        aria-label="Toggle completion"
                    >
                        <svg v-if="isCompletedToday(item.lastCompleted)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                    </button>

                    <div class="ml-4">
                        <p class="text-lg font-medium text-gray-100">{{ item.name }}</p>
                        <p class="text-xs text-gray-400 mt-0.5">Target: {{ item.targetFrequency }}</p>
                    </div>
                </div>

                <!-- Streak Display -->
                <div class="flex items-center text-right pl-4 flex-shrink-0">
                    <p class="text-2xl font-extrabold mr-2" :class="item.streak > 0 ? 'text-teal-400' : 'text-gray-500'">
                        {{ item.streak }}
                    </p>
                    <p class="text-sm text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-red-500 inline-block">
                           <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                           <path d="M14 2v6h6"/>
                        </svg>
                        Day Streak
                    </p>
                </div>
            </li>
            <li v-if="habitList.length === 0" class="text-center text-gray-500 py-4">
                No habits defined yet. Start building your foundation!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>