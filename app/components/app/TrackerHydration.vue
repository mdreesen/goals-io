<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Global Constants (Ounce-Focused) ---
const OZ_FACTOR_TO_ML = 29.57; // Conversion factor: 1 US fluid oz to ml
const DAILY_GOAL_OZ = 100; // New Goal set explicitly in Ounces (approx 2957 ml)

// Internal state tracks everything in Milliliters (ML) for data accuracy
const dailyGoalML = DAILY_GOAL_OZ * OZ_FACTOR_TO_ML; 
const currentIntakeML = ref(0); 

// --- State for Input ---
// Input is exclusively in Ounces (oz)
const manualAmountOZ = ref(8); 

// --- State for API & UI Feedback ---
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Progress ---
const progressPercent = computed<number>(() => {
  const percent = (currentIntakeML.value / dailyGoalML) * 100;
  return Math.min(100, percent); // Cap at 100%
});

// Computed class for progress bar color change
const progressColor = computed<string>(() => {
  if (progressPercent.value < 50) return 'bg-blue-500';
  if (progressPercent.value < 100) return 'bg-yellow-500';
  return 'bg-green-500'; // Goal reached
});

// --- Actions ---
const addWater = (): void => {
  const amount = manualAmountOZ.value > 0 ? manualAmountOZ.value : 0;
  if (amount === 0) return;

  // Calculate total milliliters based on the Ounce input
  const totalMl = amount * OZ_FACTOR_TO_ML;
  currentIntakeML.value += totalMl;
  
  // Reset manual amount back to default 8oz
  manualAmountOZ.value = 8; 
};

const resetIntake = (): void => { // Function to only reset the counter
  currentIntakeML.value = 0;
};

const logDailyIntake = async () => {
  if (currentIntakeML.value === 0) {
    saveMessage.value = 'Intake is zero, nothing to save.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Saving intake...';

  const payload = {
    date: new Date().toISOString(),
    // Log in ML as the standard unit for the backend
    intakeML: currentIntakeML.value, 
    goalML: dailyGoalML,
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-hydration endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    saveMessage.value = `Intake of ${(currentIntakeML.value / OZ_FACTOR_TO_ML).toFixed(1)}oz logged successfully!`;
    resetIntake(); // Reset the count after successful log
  } catch (error) {
    console.error('Failed to save hydration data:', error);
    saveMessage.value = 'Error saving data. Please try again.';
  } finally {
    isSaving.value = false;
    setTimeout(() => saveMessage.value = null, 4000);
  }
};


// --- Motion setup for fade-in effect ---
const hydrationRef = ref();
useMotion(hydrationRef, {
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
  <!-- Custom Gradient Background -->
  <div ref="hydrationRef" 
    class="p-4 sm:p-8 text-white flex items-center justify-center"
  >
    <!-- Main Tracker Card -->
    <div
      class="w-full max-w-xl rounded-3xl bg-gray-900/80 p-6 sm:p-10 shadow-2xl backdrop-blur-md space-y-8 transition-all duration-500"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <p class="mt-2 text-gray-400">Track your water intake towards your daily goal of {{ DAILY_GOAL_OZ }}oz.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error'),
            'bg-blue-600/30 text-blue-400 border border-blue-600': saveMessage.includes('Saving') || saveMessage.includes('zero')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Progress Display -->
      <div 
        class="space-y-4 text-center"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }"
      >
        <div class="text-7xl font-extrabold text-white" style="text-shadow: 0 0 10px rgba(76, 29, 149, 0.5);">
          <!-- Convert current intake from ML back to OZ for display -->
          {{ (currentIntakeML / OZ_FACTOR_TO_ML).toFixed(1) }}
          <span class="text-3xl text-gray-400">/ {{ DAILY_GOAL_OZ }} oz</span>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50">
          <div
            :style="{ width: progressPercent + '%' }"
            :class="[progressColor]"
            class="h-4 rounded-full transition-all duration-700 ease-out"
          ></div>
        </div>
        
        <p class="text-sm text-gray-400 font-medium pt-2">
          {{ progressPercent.toFixed(0) }}% Complete
          <span v-if="progressPercent >= 100" class="text-green-400 font-bold"> - Goal Reached!</span>
        </p>
      </div>

      <!-- Dynamic Add Water Input (Simplified to OZ only) -->
      <div
        class="flex flex-col sm:flex-row gap-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.3 } } }"
      >
        <!-- Amount Input -->
        <input
          type="number"
          v-model.number="manualAmountOZ"
          min="1"
          placeholder="Amount in Ounces"
          class="flex-1 p-3 rounded-xl bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
        >

        <!-- Unit Display (Replacing Dropdown) -->
        <div class="flex-1 p-3 rounded-xl bg-gray-700/50 border border-gray-600 flex items-center justify-center 
                    font-semibold text-lg shadow-xl">
            Ounces (oz)
        </div>
        
        <!-- Add Button -->
        <button
          @click="addWater"
          :disabled="manualAmountOZ <= 0 || isSaving"
          class="sm:w-auto p-3 rounded-xl font-semibold transition duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          :class="[
            manualAmountOZ <= 0 || isSaving 
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          ]"
        >
          <!-- Plus Icon for Add Water -->
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            <span class="ml-2 hidden sm:inline">Add Water</span>
          </span>
        </button>
      </div>
      
      <!-- Action Buttons -->
      <div 
        class="flex justify-between pt-4 gap-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.7 } } }"
      >
        <button
          @click="logDailyIntake"
          :disabled="isSaving"
          class="flex-1 px-6 py-3 bg-green-600 rounded-lg font-semibold text-white transition duration-300 transform active:scale-[0.98]
                 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <!-- Log/Save Icon -->
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
            {{ isSaving ? 'Logging...' : 'Log Daily Intake' }}
          </span>
        </button>

        <button
          @click="resetIntake"
          :disabled="isSaving"
          class="px-4 py-3 bg-red-600 rounded-lg font-semibold text-white hover:bg-red-700 transition duration-300 transform active:scale-[0.98]
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <!-- Reset Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.75L3 16"/>
            <path d="M3 3v4h4"/>
            <path d="M3 16V9h4"/>
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>