<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Constants ---
const GOAL_MINUTES = 5; // Target soak duration in minutes
const GOAL_SECONDS = GOAL_MINUTES * 60; // Goal in seconds

// --- State ---
const timerInterval = ref<ReturnType<typeof setInterval> | null>(null);
const durationSeconds = ref(0); // Current duration in seconds
const isRunning = ref(false);
const startTime = ref<string | null>(null); // ISO string of when the timer started

const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

// Formats seconds into MM:SS string
const formattedTime = computed(() => {
  const totalSeconds = durationSeconds.value;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(minutes)}:${pad(seconds)}`;
});

// Calculates progress percentage for the bar
const progressPercent = computed(() => {
  const percentage = (durationSeconds.value / GOAL_SECONDS) * 100;
  return Math.min(percentage, 100); // Cap at 100%
});

// Determines the color accent based on progress (Icy Blue/White)
const progressAccentClass = computed(() => {
  if (progressPercent.value < 50) return 'from-blue-600 to-cyan-500';
  if (progressPercent.value < 90) return 'from-blue-400 to-cyan-400';
  return 'from-white to-sky-300'; // Goal nearly reached or surpassed
});

// --- Actions ---

const startTimer = () => {
  if (isRunning.value) return;

  // Set the start time only if the timer is being started from 0
  if (durationSeconds.value === 0) {
    startTime.value = new Date().toISOString();
    saveMessage.value = 'Soak session started. Embrace the cold!';
    setTimeout(() => saveMessage.value = null, 3000);
  } else {
    // If resuming
    saveMessage.value = 'Soak resumed.';
    setTimeout(() => saveMessage.value = null, 3000);
  }

  isRunning.value = true;
  timerInterval.value = setInterval(() => {
    durationSeconds.value++;
  }, 1000);
};

const pauseTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
    timerInterval.value = null;
  }
  isRunning.value = false;
  saveMessage.value = 'Soak paused. Tap Start when ready.';
  setTimeout(() => saveMessage.value = null, 3000);
};

// Logs the final duration and resets the tracker
const logSoakSession = async () => {
  if (durationSeconds.value === 0) {
    saveMessage.value = 'Soak duration is zero. Start the timer first!';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  // Ensure timer is paused before logging
  pauseTimer();

  isSaving.value = true;
  saveMessage.value = `Logging cold soak session...`;

  const endTime = new Date().toISOString();

  const payload = {
    startTime: startTime.value,
    endTime: endTime,
    durationSeconds: durationSeconds.value,
    durationFormatted: formattedTime.value,
    loggedAt: endTime,
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-coldsoak endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    saveMessage.value = `Soak session of ${formattedTime.value} logged successfully! Tracker reset.`;

    // Reset state after successful log
    durationSeconds.value = 0;
    startTime.value = null;

  } catch (error) {
    console.error('Failed to log soak:', error);
    saveMessage.value = 'Error saving data. Please try again.';
  } finally {
    isSaving.value = false;
    setTimeout(() => saveMessage.value = null, 4000);
  }
};

// Resets the tracker without logging
const resetTracker = () => {
  if (!isSaving.value) {
    pauseTimer();
    durationSeconds.value = 0;
    startTime.value = null;
    saveMessage.value = 'Tracker reset.';
    setTimeout(() => saveMessage.value = null, 3000);
  }
};

// Clear interval on component destruction
onUnmounted(() => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
  }
});


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
  <!-- MODERN SIMPLISTIC DESIGN: Deep Dark Background & Clean Contrast (Icy Blue Theme) -->
  <div ref="trackerRef" class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans">
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div class="w-full max-w-lg rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
          <!-- Ice/Therapy Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-sky-400">
            <path d="M12 2v2" />
            <path d="m19.8 4.2-1.4 1.4" />
            <path d="M22 12h-2" />
            <path d="m19.8 19.8-1.4-1.4" />
            <path d="M12 22v-2" />
            <path d="m4.2 19.8 1.4-1.4" />
            <path d="M2 12h2" />
            <path d="m4.2 4.2 1.4 1.4" />
            <circle cx="12" cy="12" r="7" />
          </svg>
          Ascend Cold Soak Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Track your contrast therapy sessions and optimize recovery.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('successfully') || saveMessage.includes('Embrace the cold'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('duration is zero'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging') || saveMessage.includes('paused') || saveMessage.includes('resumed')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Current Duration Display -->
      <div class="text-center"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }">
        <p class="text-xl font-medium text-gray-400">Current Soak Time</p>
        <p class="text-7xl font-extrabold text-white mt-1 transition-colors duration-500"
          :class="{ 'text-sky-400': durationSeconds > 0, 'text-teal-400': progressPercent >= 100 }">
          {{ formattedTime }}
        </p>
        <p class="text-sm font-medium text-gray-500 mt-1">Goal: {{ GOAL_MINUTES }} minutes</p>
      </div>

      <!-- Progress Bar -->
      <div class="w-full h-3 rounded-full bg-gray-700 overflow-hidden shadow-inner shadow-black/30"
        v-motion="{ initial: { opacity: 0, x: -50 }, enter: { opacity: 1, x: 0, transition: { delay: 0.3 } } }">
        <div class="h-full rounded-full transition-all duration-1000 ease-out"
          :class="['bg-gradient-to-r', progressAccentClass]" :style="{ width: progressPercent + '%' }"></div>
      </div>

      <!-- Main Timer Controls -->
      <div class="flex justify-center space-x-4 pt-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }">
        <!-- Start / Pause Button -->
        <button @click="isRunning ? pauseTimer() : startTimer()" :disabled="isSaving" class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl 
                 hover:scale-[1.01] focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{
            'from-red-600 to-pink-700 shadow-red-700/30 hover:from-red-500 hover:to-pink-600 focus:ring-red-500/50': isRunning, // Red when running (to pause)
            'from-green-600 to-teal-700 shadow-green-700/30 hover:from-green-500 hover:to-teal-600 focus:ring-green-500/50': !isRunning, // Green when paused (to start)
          }">
          <span class="flex items-center justify-center">
            <svg v-if="isRunning" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {{ isRunning ? 'Pause Soak' : (durationSeconds > 0 ? 'Resume Soak' : 'Start Soak') }}
          </span>
        </button>
      </div>

      <!-- Log and Reset Buttons -->
      <div class="flex justify-between space-x-4 pt-4 border-t border-gray-800/50"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } }">
        <!-- Log Button -->
        <button @click="logSoakSession" :disabled="isSaving || durationSeconds === 0"
          class="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-sky-700/30 
                 hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="w-5 h-5 mr-2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Log Session ({{ formattedTime }})
          </span>
        </button>

        <!-- Reset Button -->
        <button @click="resetTracker" :disabled="isSaving || durationSeconds === 0"
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
