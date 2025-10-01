<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants (LBS) ---
const START_WEIGHT_LBS = 210; // Mock start weight for progress calculation
const TARGET_WEIGHT_LBS = 180; // User's desired weight goal

// --- State ---
const currentWeight = ref<number | null>(null); // The weight the user enters now
const lastLoggedWeight = ref<number>(205.5); // Mock of the last weight saved to the database

// --- UI & API State ---
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

// Calculates the percentage progress from the start weight toward the target weight
const progressPercent = computed<number>(() => {
  if (!currentWeight.value) return 0;
  
  // Assuming a weight loss goal (START > TARGET)
  const totalRange = START_WEIGHT_LBS - TARGET_WEIGHT_LBS;
  if (totalRange <= 0) return 0; // Avoid division by zero or errors for gain goals
  
  const progressMade = START_WEIGHT_LBS - currentWeight.value;
  
  // Clamp the result between 0% and 100%
  const percent = (progressMade / totalRange) * 100;
  return Math.max(0, Math.min(100, percent));
});

// Calculate the difference between the current weight and the target
const weightToGoal = computed<number>(() => {
  if (!currentWeight.value) return TARGET_WEIGHT_LBS - lastLoggedWeight.value;
  return TARGET_WEIGHT_LBS - currentWeight.value;
});

// Calculate the difference from the last recorded weight
const weightDifference = computed<number>(() => {
  if (!currentWeight.value) return 0;
  return currentWeight.value - lastLoggedWeight.value;
});

const isGoalReached = computed(() => (currentWeight.value ?? 9999) <= TARGET_WEIGHT_LBS);


// --- Logging Function ---
const logWeight = async () => {
  if (!currentWeight.value || currentWeight.value <= 0) {
    saveMessage.value = 'Please enter a valid weight.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging weight...';
  
  const payload = {
    // Current date/time of logging
    logTime: new Date().toISOString(), 
    // The current weight entered by the user
    weightLbs: currentWeight.value, 
    // Target for context
    targetLbs: TARGET_WEIGHT_LBS, 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-weight endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the last logged weight and clear input
    lastLoggedWeight.value = currentWeight.value;
    saveMessage.value = `Weight of ${currentWeight.value.toFixed(1)} lbs logged successfully!`;
    currentWeight.value = null; // Clear the input field
    
  } catch (error) {
    console.error('Failed to save weight:', error);
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
</script>

<template>
  <!-- Custom Health Gradient Background (Blues and Greens for vitality) -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-green-400/20 ring-4 ring-green-500/20 transition-all duration-500 hover:ring-green-400/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400">
          <!-- Scale Icon (Weight) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300">
            <path d="M12 2a9 9 0 0 1 9 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11a9 9 0 0 1 9-9z"/><path d="M12 22V15"/><path d="M15 15H9"/>
          </svg>
          Weight Tracker
        </h1>
        <p class="mt-2 text-gray-300">Log your progress. Target: {{ TARGET_WEIGHT_LBS }} lbs.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('valid weight'),
            'bg-blue-600/30 text-blue-400 border border-blue-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Main Input Section -->
      <div 
        class="space-y-6"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }"
      >
        <label for="weight-input" class="block text-xl font-bold text-gray-200">
          Current Weight (lbs)
        </label>
        <div class="flex items-center space-x-4">
            <input
                id="weight-input"
                type="number"
                step="0.1"
                min="1"
                v-model.number="currentWeight"
                placeholder="0.0"
                class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-4 px-6 text-3xl text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
                :disabled="isSaving"
            />
            <button
                @click="logWeight"
                :disabled="isSaving || !currentWeight"
                class="px-8 py-4 rounded-xl bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 
                       hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Log Icon -->
                <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-2">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                    </svg>
                    Log Weight
                </span>
            </button>
        </div>
      </div>
      
      <!-- Progress Bar and Stats -->
      <div class="pt-6 space-y-4">
        <h2 class="text-2xl font-bold text-gray-200">Goal Progress</h2>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50">
          <div
            :style="{ width: progressPercent + '%' }"
            :class="[isGoalReached ? 'bg-yellow-400' : 'bg-teal-500']"
            class="h-4 rounded-full transition-all duration-700 ease-out"
            v-motion="{ initial: { width: 0 }, enter: { width: `${progressPercent}%` } }"
          ></div>
        </div>

        <p class="text-sm text-gray-400 font-medium pt-2">
          {{ progressPercent.toFixed(1) }}% towards Goal ({{ TARGET_WEIGHT_LBS }} lbs)
        </p>

        <!-- Stat Cards -->
        <div class="grid grid-cols-3 gap-4 text-center border-t border-gray-700 pt-4">
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
            >
                <p class="text-sm text-gray-400">Last Weight</p>
                <p class="text-xl font-bold text-teal-300">{{ lastLoggedWeight.toFixed(1) }} lbs</p>
            </div>
            
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
                :class="weightToGoal > 0 ? 'border-red-500/50' : 'border-green-500/50'"
            >
                <p class="text-sm text-gray-400">To Target</p>
                <p class="text-xl font-bold" :class="weightToGoal > 0 ? 'text-red-400' : 'text-green-400'">
                    {{ Math.abs(weightToGoal).toFixed(1) }} lbs
                </p>
            </div>
            
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
                :class="weightDifference > 0 ? 'border-red-500/50' : 'border-green-500/50'"
            >
                <p class="text-sm text-gray-400">From Last</p>
                <p class="text-xl font-bold" :class="weightDifference > 0 ? 'text-red-400' : 'text-green-400'">
                    {{ weightDifference.toFixed(1) }} lbs
                </p>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>
