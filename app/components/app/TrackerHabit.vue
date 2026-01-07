<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface HabitEntry {
  id: number;
  name: string; // Name of the habit
  streak: number; // Simulated streak count
  loggedDate: string;
  isCompleted: boolean;
}

// Initial mock data - Simulating a list of established habits with check-ins
const entryList = ref<HabitEntry[]>([
  { id: 1, name: 'Meditate for 10 minutes', streak: 5, loggedDate: '2025-10-05', isCompleted: true },
  { id: 2, name: 'Cold Soak session', streak: 2, loggedDate: '2025-10-04', isCompleted: false },
  { id: 3, name: 'Read 20 pages', streak: 10, loggedDate: '2025-10-03', isCompleted: true },
]);
let nextId = 4; // Counter for new mock entries

// --- State ---
const newHabitName = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for habit creation/check-in) ---

// 1. Function to create a new habit
const createNewHabit = async () => {
  if (!newHabitName.value.trim()) {
    saveMessage.value = 'Please enter a name for your new habit.';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Creating new habit...`;

  const payload = {
    name: newHabitName.value.trim(),
    initialStreak: 0,
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/create-habit endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful habit creation to MongoDB with payload:', payload);

    // Add the new habit to the list (Mocking DB save)
    entryList.value.unshift({
      id: nextId++,
      name: newHabitName.value.trim(),
      streak: 0,
      loggedDate: new Date().toISOString().substring(0, 10),
      isCompleted: false,
    });

    saveMessage.value = `Habit "${newHabitName.value}" created successfully!`;
    newHabitName.value = '';

  } catch (error) {
    console.error('Failed to create habit:', error);
    saveMessage.value = 'Error creating habit. Please try again.';
  } finally {
    isSaving.value = false;
    setTimeout(() => saveMessage.value = null, 4000);
  }
};

// 2. Function to toggle habit completion (simulates check-in/update to DB)
const toggleHabitCompletion = async (habit: HabitEntry) => {
  // Prevent actions while saving
  if (isSaving.value) return;

  // Simulate update to true or false
  const newStatus = !habit.isCompleted;

  // Update local state immediately for fast UI feedback
  habit.isCompleted = newStatus;

  // Set a temporary saving state message
  saveMessage.value = newStatus ? `Checking in on "${habit.name}"...` : `Undoing check-in...`;

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the API call to update the habit status/streak.
    // Replace with actual $fetch call to your /api/update-habit endpoint.
    // ----------------------------------------------------------------------
    await new Promise(resolve => setTimeout(resolve, 800));

    // Final success message
    saveMessage.value = newStatus ? 'Habit checked off! Streak updated.' : 'Check-in undone.';

  } catch (error) {
    console.error('Failed to update habit:', error);
    // Rollback local state on error
    habit.isCompleted = !newStatus;
    saveMessage.value = 'Error updating habit. Please try again.';
  } finally {
    setTimeout(() => saveMessage.value = null, 3000);
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
</script>

<template>
  <!-- MODERN SIMPLISTIC DESIGN: Deep Dark Background & Clean Contrast -->
  <div ref="trackerRef" class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans">
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
          <!-- Target Icon for Habit Tracking -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-teal-400">
            <path d="M12 2a10 10 0 0 0 10 10 10 10 0 0 0-10 10 10 10 0 0 0-10-10A10 10 0 0 0 12 2Z" />
            <path d="M12 7a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5Z" />
            <path d="M12 10a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2Z" />
          </svg>
          Ascend Habit Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Build momentum. Track your daily consistency and watch your habits
          ascend.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('successfully') || saveMessage.includes('checked off'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please enter'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Creating') || saveMessage.includes('Checking in') || saveMessage.includes('Undoing')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Habit Creation Form -->
      <form @submit.prevent="createNewHabit" class="space-y-4 border border-gray-700/50 p-6 rounded-xl bg-gray-800/30"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }">
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-5 h-5 mr-2 text-teal-400">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add New Habit
        </h2>

        <div class="flex space-x-4">
          <!-- Habit Name Input -->
          <input type="text" v-model="newHabitName" placeholder="e.g., Drink 100oz water" required
            class="flex-grow rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isSaving" />

          <!-- Create Button -->
          <button type="submit" :disabled="isSaving || !newHabitName.trim()"
            class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 
                       hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
            <span class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
        </div>
      </form>

      <!-- Habit List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Today's Habits</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-4">
          <li v-for="(item, index) in entryList" :key="item.id"
            class="flex items-center justify-between p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
            v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }">
            <!-- Habit Name and Streak -->
            <div class="flex items-center flex-1 min-w-0">
              <!-- Completion Toggle -->
              <button @click="toggleHabitCompletion(item)" :disabled="isSaving" :class="[
                item.isCompleted
                  ? 'bg-teal-600 hover:bg-teal-700'
                  : 'bg-gray-700 hover:bg-gray-600 border border-gray-600',
                'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-colors duration-200'
              ]">
                <!-- Checkmark Icon -->
                <svg v-if="item.isCompleted" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                  viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"
                  stroke-linejoin="round" class="w-4 h-4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <!-- Plus Icon (Placeholder when incomplete) -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-4 h-4 text-gray-400">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>

              <div class="flex flex-col overflow-hidden">
                <p class="text-lg font-medium truncate" :class="{ 'line-through text-gray-500': item.isCompleted }">
                  {{ item.name }}
                </p>
                <span class="text-sm font-semibold mt-1" :class="item.streak > 0 ? 'text-teal-400' : 'text-gray-500'">
                  🔥 {{ item.streak }} Day Streak
                </span>
              </div>
            </div>
          </li>
          <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
            No habits defined. Add your first goal above!
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
