<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants ---
// NOTE: These values would typically be fetched from user settings in a real app.
const GOAL_WEIGHT_LBS = 180;

// --- State ---
const currentWeightLbs = ref(205); // Mock current weight
const targetWeightLbs = ref(GOAL_WEIGHT_LBS); // The user's goal
const weightInput = ref(205); // Input field value
const isLogging = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

// Calculates progress percentage towards the goal (assuming weight loss for simplicity)
const progressPercent = computed(() => {
  // Assuming start weight was 220 for a clean progress bar demonstration
  const startingWeight = 220;

  if (currentWeightLbs.value <= targetWeightLbs.value) return 100; // Goal reached

  const totalDifference = startingWeight - targetWeightLbs.value;
  const currentDifference = startingWeight - currentWeightLbs.value;

  if (totalDifference <= 0) return 0; // Invalid goal set, or goal reached/passed start

  const percentage = (currentDifference / totalDifference) * 100;
  return Math.min(Math.max(percentage, 0), 100);
});

// Determines the color accent based on progress (Health & Precision Theme: Teal/Blue)
const progressAccentClass = computed(() => {
  if (progressPercent.value < 50) return 'from-red-500 to-orange-400';
  if (progressPercent.value < 90) return 'from-teal-500 to-cyan-500';
  return 'from-green-500 to-blue-500'; // Near or at goal
});

// Determines the status text
const statusText = computed(() => {
  if (currentWeightLbs.value <= targetWeightLbs.value) {
    return 'Goal Achieved! Maintaining strength.';
  }
  const difference = currentWeightLbs.value - targetWeightLbs.value;
  return `${difference.toFixed(1)} lbs to go. Keep Ascending!`;
});

// --- Actions ---

// Logs the new weight and updates the current state
const logWeight = async () => {
  if (weightInput.value <= 0) {
    saveMessage.value = 'Please enter a valid weight.';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isLogging.value = true;
  saveMessage.value = `Logging weight of ${weightInput.value} lbs...`;

  const loggedAt = new Date().toISOString();

  const payload = {
    currentWeightLbs: weightInput.value,
    targetWeightLbs: targetWeightLbs.value,
    loggedAt: loggedAt,
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-weight endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update client state after successful logging
    currentWeightLbs.value = weightInput.value;

    saveMessage.value = `Weight updated to ${currentWeightLbs.value} lbs! Progress saved.`;

  } catch (error) {
    console.error('Failed to log weight:', error);
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
  <!-- MODERN SIMPLISTIC DESIGN: Deep Dark Background & Clean Contrast (Weight Theme: Teal/Blue) -->
  <div ref="trackerRef" class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans">
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          <!-- Scale Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-teal-400">
            <path d="M12 3a7 7 0 0 0-7 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a7 7 0 0 0-7-7z" />
            <path d="M5 10l7 7 7-7" />
            <line x1="12" y1="17" x2="12" y2="20" />
          </svg>
          Ascend Weight Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Log your progress towards your target weight in pounds ($\text{lbs}$).
        </p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('successfully') || saveMessage.includes('Weight updated'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('valid weight'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Current Weight Display -->
      <div class="text-center"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }">
        <p class="text-xl font-medium text-gray-400">Current Weight</p>
        <p class="text-7xl font-extrabold text-white mt-1 transition-colors duration-500"
          :class="{ 'text-teal-400': currentWeightLbs <= targetWeightLbs }">
          {{ currentWeightLbs.toFixed(1) }}
          <span class="text-3xl font-semibold text-gray-500">lbs</span>
        </p>
        <p class="text-sm font-medium text-gray-500 mt-1">Target: {{ targetWeightLbs }} lbs</p>
        <p class="text-sm font-bold mt-2"
          :class="{ 'text-green-400': currentWeightLbs <= targetWeightLbs, 'text-yellow-400': currentWeightLbs > targetWeightLbs }">
          {{ statusText }}
        </p>
      </div>

      <!-- Progress Bar -->
      <div class="w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30"
        v-motion="{ initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } }">
        <div class="h-full rounded-full transition-all duration-1000 ease-out"
          :class="['bg-gradient-to-r', progressAccentClass]" :style="{ width: progressPercent + '%' }"></div>
      </div>

      <!-- Log Weight Form -->
      <form @submit.prevent="logWeight" class="flex space-x-4 pt-4 border-t border-gray-800/50"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }">
        <!-- Weight Input -->
        <div class="relative flex-grow">
          <input type="number" step="0.1" v-model.number="weightInput" min="1" placeholder="Enter today's weight"
            required
            class="w-full rounded-xl border border-gray-700 bg-gray-800/80 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isLogging" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">lbs</span>
        </div>

        <!-- Log Button -->
        <button type="submit" :disabled="isLogging || weightInput <= 0"
          class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 
                 hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            {{ isLogging ? 'Saving...' : 'Log Weight' }}
          </span>
        </button>
      </form>

      <!-- Reset Button (Could be used to reset weight locally or set goal) -->
      <div class="flex justify-end pt-2"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } }">
        <button @click="weightInput = currentWeightLbs" :disabled="isLogging"
          class="flex-shrink-0 px-4 py-2 rounded-full bg-gray-700 font-bold text-gray-300 text-sm transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 
                 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-4 h-4 mr-1">
              <path d="M3 2v6h6" />
              <path d="M21 22v-6h-6" />
              <path d="M21 8A10 10 0 0 0 4.5 4.5" />
              <path d="M3 16a10 10 0 0 0 16.5 3.5" />
            </svg>
            Undo Input
          </span>
        </button>
      </div>

    </div>
  </div>
</template>
