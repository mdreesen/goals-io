<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants ---
const WORKOUT_TYPES = ['Strength Training', 'Cardio', 'Yoga', 'HIIT', 'Running'];

// --- State ---
const workoutType = ref(WORKOUT_TYPES[0]); // Default to first type
const durationMinutes = ref(30); // Input field for duration
const caloriesBurned = ref(300); // Input field for calories
const isLogging = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

// Calculates a mock intensity/effort score based on the inputs for display
const effortScore = computed(() => {
  const intensity = (durationMinutes.value * caloriesBurned.value) / 10000;
  if (intensity < 1) return 'Low Intensity';
  if (intensity < 5) return 'Moderate Effort';
  if (intensity < 10) return 'High Intensity';
  return 'Ascended Effort!';
});

// Determines the color accent based on perceived effort
const effortAccentClass = computed(() => {
  const intensity = (durationMinutes.value * caloriesBurned.value) / 10000;
  if (intensity < 1) return 'from-gray-500 to-gray-700';
  if (intensity < 5) return 'from-yellow-500 to-orange-400';
  if (intensity < 10) return 'from-teal-500 to-cyan-500';
  return 'from-green-500 to-blue-500';
});


// --- Actions ---

// Logs the workout session
const logWorkout = async () => {
  if (durationMinutes.value <= 0 || caloriesBurned.value <= 0) {
    saveMessage.value = 'Please enter valid duration and calories.';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isLogging.value = true;
  saveMessage.value = `Logging ${workoutType.value} session...`;

  const loggedAt = new Date().toISOString();

  const payload = {
    workoutType: workoutType.value,
    durationMinutes: durationMinutes.value,
    caloriesBurned: caloriesBurned.value,
    effortScore: effortScore.value,
    loggedAt: loggedAt,
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-workout endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    saveMessage.value = `Workout logged successfully: ${durationMinutes.value} minutes of ${workoutType.value}!`;

    // Reset state after successful logging
    durationMinutes.value = 30;
    caloriesBurned.value = 300;

  } catch (error) {
    console.error('Failed to log workout:', error);
    saveMessage.value = 'Error saving data. Please try again.';
  } finally {
    isLogging.value = false;
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
</script>

<template>
  <!-- MODERN SIMPLISTIC DESIGN: Deep Dark Background & Clean Contrast (Workout Theme: Teal/Blue) -->
  <div ref="trackerRef" class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans">
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          <!-- Biceps/Strength Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-teal-400">
            <path d="M14 2c4 0 5 1 5 5s-1 5-5 5-5-1-5-5 1-5 5-5z" />
            <path d="M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
            <path d="M17 21h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3" />
          </svg>
          Ascend Workout Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Log your training sessions, duration, and energy expenditure.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('successfully') || saveMessage.includes('Workout logged'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('valid'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Current Effort Display (New Feature) -->
      <div class="text-center bg-gray-800/50 p-4 rounded-xl border border-gray-700"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }">
        <p class="text-xl font-medium text-gray-400">Estimated Effort Level</p>
        <p class="text-4xl font-extrabold mt-1 bg-clip-text text-transparent transition-colors duration-500"
          :class="['bg-gradient-to-r', effortAccentClass]">
          {{ effortScore }}
        </p>
      </div>

      <!-- Progress Bar (Representing effort progress toward an ideal zone) -->
      <div class="w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30"
        v-motion="{ initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } }">
        <div class="h-full rounded-full transition-all duration-1000 ease-out"
          :class="['bg-gradient-to-r', effortAccentClass]"
          :style="{ width: Math.min(((durationMinutes.valueOf() * caloriesBurned.valueOf()) / 5000) * 100, 100) + '%' }">
        </div>
      </div>

      <!-- Log Workout Form -->
      <form @submit.prevent="logWorkout" class="space-y-4 pt-4 border-t border-gray-800/50"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }">

        <!-- Workout Type Dropdown -->
        <div class="relative">
          <label for="workoutType" class="block text-sm font-medium text-gray-300 mb-1">Workout Type</label>
          <div class="relative">
            <select id="workoutType" v-model="workoutType" required
              class="appearance-none w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
              :disabled="isLogging">
              <option v-for="type in WORKOUT_TYPES" :key="type" :value="type">{{ type }}</option>
            </select>
            <!-- Custom Dropdown Icon -->
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        <!-- Duration Input -->
        <div class="relative">
          <label for="duration" class="block text-sm font-medium text-gray-300 mb-1">Duration</label>
          <input id="duration" type="number" step="1" v-model.number="durationMinutes" min="1" placeholder="Minutes"
            required
            class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isLogging" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold mt-3.5">min</span>
        </div>

        <!-- Calories Input -->
        <div class="relative">
          <label for="calories" class="block text-sm font-medium text-gray-300 mb-1">Calories Burned</label>
          <input id="calories" type="number" step="1" v-model.number="caloriesBurned" min="1" placeholder="Calories"
            required
            class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isLogging" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold mt-3.5">kcal</span>
        </div>

        <!-- Log Button -->
        <button type="submit" :disabled="isLogging || durationMinutes <= 0 || caloriesBurned <= 0"
          class="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 
                 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed mt-6">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            {{ isLogging ? 'Saving...' : 'Log Workout' }}
          </span>
        </button>
      </form>
    </div>
  </div>
</template>