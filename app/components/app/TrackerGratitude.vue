<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface GratitudeEntry {
  id: number;
  entry: string; // The gratitude statement
  loggedAt: string;
}

// Initial mock data
const entryList = ref<GratitudeEntry[]>([
  { id: 1, entry: 'I am grateful for the clean, cold water after my morning workout.', loggedAt: '2025-10-02' },
  { id: 2, entry: 'I appreciate the quiet time I had to read 50 pages of my book today.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newEntry = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logEntry = async () => {
  if (!newEntry.value.trim()) {
    saveMessage.value = 'Your gratitude entry cannot be empty. What are you thankful for?';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging gratitude...`;

  const payload = {
    entry: newEntry.value.trim(),
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-gratitude endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
      id: nextId++,
      entry: newEntry.value.trim().substring(0, 75) + (newEntry.value.length > 75 ? '...' : ''), // Keep list summary short
      loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Gratitude logged successfully!`;
    newEntry.value = '';

  } catch (error) {
    console.error('Failed to save entry:', error);
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
  <!-- MODERN SIMPLISTIC DESIGN: Deep Dark Background & Clean Contrast -->
  <div ref="trackerRef" class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans">
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800">

      <!-- Header -->
      <header class="text-center"
        v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
          <!-- Heart/Star Icon for Gratitude -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-amber-400">
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          Ascend Gratitude Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Focus on the positive and log what you are truly grateful for today.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('cannot be empty'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form @submit.prevent="logEntry" class="space-y-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }">
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log Today's Gratitude</h2>

        <!-- Gratitude Textarea (Primary Focus) -->
        <div>
          <label for="gratitude-entry" class="block text-sm font-medium text-gray-400 mb-2">What made today
            special?</label>
          <textarea id="gratitude-entry" v-model="newEntry" rows="5" placeholder="I am grateful for..."
            class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner shadow-black/20"
            :disabled="isSaving"></textarea>
        </div>

        <!-- Log Button (Sleek and Intentional) -->
        <div class="flex justify-end pt-2">
          <button type="submit" :disabled="isSaving || !newEntry.trim()"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-yellow-700 font-bold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-amber-700/30 
                       hover:from-amber-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
            <!-- Star Icon for logging -->
            <span class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-5 h-5 mr-2">
                <path
                  d="M12 1.5l3.24 6.54L22 9l-5 4.87 1.18 6.88-6.18-3.25L5.82 20.75 7 15.87 2 11.5l6.76-0.96L12 1.5z" />
              </svg>
              Log Gratitude
            </span>
          </button>
        </div>
      </form>

      <!-- History List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Gratitude History</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-4">
          <li v-for="(item, index) in entryList" :key="item.id"
            class="flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-amber-600/50"
            v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }">
            <div class="flex items-start justify-between">
              <!-- Icon & Entry Summary -->
              <div class="flex items-start flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-amber-400">
                  <path d="M20 7v10h-6V7h6z" />
                  <path d="M4 7v10h-6V7h6z" />
                  <path d="M12 20s-8 4-8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <div class="flex flex-col">
                  <p class="text-lg text-gray-200 leading-tight italic">{{ item.entry }}</p>
                </div>
              </div>

              <p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">
                {{ item.loggedAt }}
              </p>
            </div>
          </li>
          <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
            Nothing yet? Find something small to be grateful for!
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>