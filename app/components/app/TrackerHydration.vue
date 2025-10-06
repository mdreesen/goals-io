<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants ---
const GOAL_OZ = 100; // Daily hydration goal in ounces
const ML_PER_OZ = 29.57; // Conversion factor: 1 US fluid ounce = 29.57 ml
const GOAL_ML = GOAL_OZ * ML_PER_OZ; // Goal in milliliters (for internal math/DB logging)

// --- State ---
const currentIntakeML = ref(0); // Current water intake, stored internally in ML
const manualAmountOz = ref(8); // Amount of water to add, defaulting to 8 oz
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

// Converts internal ML count back to ounces for display
const currentIntakeOz = computed(() => {
  return (currentIntakeML.value / ML_PER_OZ).toFixed(0);
});

// Calculates progress percentage for the bar
const progressPercent = computed(() => {
  const percentage = (currentIntakeML.value / GOAL_ML) * 100;
  return Math.min(percentage, 100); // Cap at 100%
});

// Determines the color accent based on progress
const progressAccentClass = computed(() => {
  if (progressPercent.value < 50) return 'from-teal-600 to-teal-700';
  if (progressPercent.value < 90) return 'from-blue-500 to-indigo-600';
  return 'from-green-500 to-teal-500'; // Goal nearly reached or surpassed
});

// --- Actions ---

// Adds the user-specified amount (in oz) to the total intake
const addWater = () => {
  if (manualAmountOz.value <= 0) return;

  // Convert OZ input to ML
  const mlToAdd = manualAmountOz.value * ML_PER_OZ;

  // Update internal state
  currentIntakeML.value += mlToAdd;

  // Optional: Reset input amount after adding
  // manualAmountOz.value = 8;
};

// Logs the final daily intake and resets the tracker
const logDailyIntake = async () => {
  if (currentIntakeML.value === 0) {
    saveMessage.value = 'Intake is zero. Log some water before saving!';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging daily intake...`;

  const payload = {
    intakeML: currentIntakeML.value,
    goalML: GOAL_ML,
    intakeOz: Number(currentIntakeOz.value),
    goalOz: GOAL_OZ,
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-hydration endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    saveMessage.value = `Daily intake of ${currentIntakeOz.value} oz logged successfully! Tracker reset.`;
    currentIntakeML.value = 0; // Reset intake after successful log

  } catch (error) {
    console.error('Failed to log intake:', error);
    saveMessage.value = 'Error saving data. Please try again.';
  } finally {
    isSaving.value = false;
    setTimeout(() => saveMessage.value = null, 4000);
  }
};

// Resets the tracker without logging
const resetTracker = () => {
  if (!isSaving.value) {
    currentIntakeML.value = 0;
    saveMessage.value = 'Tracker reset to 0 oz.';
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
    <div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
          <!-- Water Droplet Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-teal-400">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          Ascend Hydration Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Achieve your daily $\text{100 oz}$ goal for optimal performance.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('successfully') || saveMessage.includes('reset'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Intake is zero'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Current Intake Display -->
      <div class="text-center"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }">
        <p class="text-xl font-medium text-gray-400">Current Intake</p>
        <p class="text-7xl font-extrabold text-white mt-1 transition-colors duration-500"
          :class="{ 'text-green-400': progressPercent >= 100 }">
          {{ currentIntakeOz }}
          <span class="text-3xl font-semibold text-gray-500">oz</span>
        </p>
        <p class="text-sm font-medium text-gray-500 mt-1">Goal: {{ GOAL_OZ }} oz</p>
      </div>

      <!-- Progress Bar -->
      <div class="w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30"
        v-motion="{ initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } }">
        <div class="h-full rounded-full transition-all duration-1000 ease-out"
          :class="['bg-gradient-to-r', progressAccentClass]" :style="{ width: progressPercent + '%' }"></div>
      </div>

      <!-- Add Water Form -->
      <form @submit.prevent="addWater" class="flex space-x-4 pt-4 border-t border-gray-800/50"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }">
        <!-- Amount Input (Ounces Only) -->
        <div class="relative flex-grow">
          <input type="number" v-model.number="manualAmountOz" min="1" placeholder="8" required
            class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 pl-4 pr-12 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isSaving" />
          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-bold">oz</span>
        </div>

        <!-- Add Button -->
        <button type="submit" :disabled="isSaving || manualAmountOz <= 0"
          class="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-lg shadow-teal-700/30 
                 hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
        </button>
      </form>

      <!-- Action Buttons (Log and Reset) -->
      <div class="flex justify-between space-x-4 pt-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } }">
        <!-- Log Button -->
        <button @click="logDailyIntake" :disabled="isSaving || currentIntakeML === 0"
          class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 
                 hover:from-indigo-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Log Daily Intake
          </span>
        </button>

        <!-- Reset Button -->
        <button @click="resetTracker" :disabled="isSaving || currentIntakeML === 0"
          class="flex-shrink-0 px-5 py-3 rounded-full bg-gray-700 font-bold text-gray-300 transition duration-300 transform active:scale-[0.98] shadow-lg shadow-gray-700/20 
                 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
            <path d="M3 2v6h6" />
            <path d="M21 22v-6h-6" />
            <path d="M21 8A10 10 0 0 0 4.5 4.5" />
            <path d="M3 16a10 10 0 0 0 16.5 3.5" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>