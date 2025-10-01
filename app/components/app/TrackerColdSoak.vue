<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants ---
const SOAK_GOAL_SECONDS = 300; // 5 minutes (5 * 60)

// --- State ---
const isRunning = ref(false);
const startTime = ref<number>(0);
const elapsedTime = ref<number>(0); // Tracks current duration in milliseconds
let interval: NodeJS.Timeout | null = null;

// --- UI & API State ---
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Timer Functions ---
const startTimer = () => {
  if (isRunning.value) return;

  // If starting fresh, set the startTime
  if (elapsedTime.value === 0) {
    startTime.value = Date.now();
  } else {
    // If resuming from pause, adjust startTime backwards by elapsed time
    startTime.value = Date.now() - elapsedTime.value;
  }
  
  isRunning.value = true;

  // Set up the interval to update the timer every 100ms
  interval = setInterval(() => {
    elapsedTime.value = Date.now() - startTime.value;
  }, 100);
};

const pauseTimer = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    isRunning.value = false;
  }
};

const resetTimer = () => {
  pauseTimer();
  elapsedTime.value = 0;
  startTime.value = 0;
};

const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// --- Computed Values ---

const currentSoakTimeFormatted = computed(() => formatTime(elapsedTime.value));

const progressPercent = computed<number>(() => {
  const currentSeconds = elapsedTime.value / 1000;
  const percent = (currentSeconds / SOAK_GOAL_SECONDS) * 100;
  return Math.min(100, percent);
});

const isGoalReached = computed(() => elapsedTime.value >= SOAK_GOAL_SECONDS * 1000);


const logSoakSession = async () => {
  pauseTimer();
  if (elapsedTime.value < 1000) {
    saveMessage.value = 'Session too short. Must be at least 1 second.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging session...';
  
  const payload = {
    // Time the user started the session
    sessionStartTime: new Date(startTime.value).toISOString(), 
    // Time the user ended the session (now)
    sessionEndTime: new Date().toISOString(), 
    // Total duration of the soak in seconds
    durationSeconds: Math.floor(elapsedTime.value / 1000), 
    goalSeconds: SOAK_GOAL_SECONDS,
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-soak endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    saveMessage.value = `Soak of ${formatTime(elapsedTime.value)} logged successfully!`;
    resetTimer();
  } catch (error) {
    console.error('Failed to save soak session:', error);
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
  <!-- Custom Icy Gradient Background -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-blue-400/20 ring-4 ring-blue-500/20 transition-all duration-500 hover:ring-blue-400/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-400">
          <!-- Ice Cube Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-cyan-300">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M7 7h10M7 12h10M7 17h10"/>
          </svg>
          Cold Soak Tracker
        </h1>
        <p class="mt-2 text-gray-300">{{ SOAK_GOAL_SECONDS / 60 }} minutes.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('short'),
            'bg-blue-600/30 text-blue-400 border border-blue-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Timer Display -->
      <div 
        class="space-y-4 text-center"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }"
      >
        <div class="text-8xl font-extrabold text-white" style="text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);">
          {{ currentSoakTimeFormatted }}
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner shadow-black/50">
          <div
            :style="{ width: progressPercent + '%' }"
            :class="[isGoalReached ? 'bg-green-500' : 'bg-blue-400']"
            class="h-3 rounded-full transition-all duration-700 ease-out"
          ></div>
        </div>
        
        <p class="text-sm text-gray-400 font-medium pt-2">
          {{ progressPercent.toFixed(0) }}% towards 5 min Goal
          <span v-if="isGoalReached" class="text-green-400 font-bold"> - Goal Surpassed!</span>
        </p>
      </div>

      <!-- Control Buttons -->
      <div 
        class="flex justify-center pt-4 gap-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }"
      >
        <!-- Start / Pause Button -->
        <button
          @click="isRunning ? pauseTimer() : startTimer()"
          :disabled="isSaving"
          class="p-4 rounded-full font-semibold transition duration-300 transform active:scale-[0.9] shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-900"
          :class="[
            isRunning 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-yellow-500/40 focus:ring-yellow-500' 
              : 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/40 focus:ring-blue-500'
          ]"
        >
          <span v-if="isRunning">
            <!-- Pause Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4"/><rect width="4" height="16" x="14" y="4"/></svg>
          </span>
          <span v-else>
            <!-- Start/Play Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </span>
        </button>
        
        <!-- Log/Save Button -->
        <button
          @click="logSoakSession"
          :disabled="isSaving || elapsedTime === 0 || isRunning"
          class="p-4 rounded-full bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 
                 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'opacity-50': isSaving || elapsedTime === 0 || isRunning }"
        >
          <!-- Save Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        </button>

        <!-- Reset Button -->
        <button
          @click="resetTimer"
          :disabled="isSaving || isRunning"
          class="p-4 rounded-full bg-red-600 font-semibold text-white hover:bg-red-700 transition duration-300 transform active:scale-[0.9] shadow-xl shadow-red-700/50
                 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'opacity-50': isSaving || isRunning }"
        >
          <!-- Reset Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6"/><path d="M21 17a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.75L3 14"/>
            <path d="M3.5 22v-6h6"/>
          </svg>
        </button>
      </div>
      
      <div class="pt-4 text-center text-gray-500 text-sm" v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1, transition: { delay: 0.9 } } }">
        <p>Soak duration is logged in seconds for data analysis.</p>
      </div>

    </div>
  </div>
</template>
