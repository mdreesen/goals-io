<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface GratitudeEntry {
  id: number;
  text: string;
  loggedAt: string;
}

const gratitudeList = ref<GratitudeEntry[]>([
  { id: 1, text: 'I am grateful for the sunny weather and fresh air today.', loggedAt: '2025-10-01' },
  { id: 2, text: 'Grateful for a successful, peaceful workday.', loggedAt: '2025-09-30' },
  { id: 3, text: 'Thankful for my supportive friends and family.', loggedAt: '2025-09-29' },
]);
let nextId = 4; // Counter for new mock entries

// --- State ---
const newEntry = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction) ---
const logGratitude = async () => {
  if (!newEntry.value.trim()) {
    saveMessage.value = 'Please write something you are grateful for.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging gratitude entry...';
  
  const gratitudeText = newEntry.value.trim();
  
  const payload = {
    text: gratitudeText, 
    logTime: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-gratitude endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear input on success (Mocking DB save)
    gratitudeList.value.unshift({
        id: nextId++,
        text: gratitudeText,
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Gratitude logged successfully!`;
    newEntry.value = ''; // Clear the input field
    
  } catch (error) {
    console.error('Failed to save gratitude:', error);
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
  <!-- Custom Warm Gradient Background (Sunset Colors for Gratitude) -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-pink-400/20 ring-4 ring-pink-600/20 transition-all duration-500 hover:ring-pink-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-pink-400">
          <!-- Heart Icon (Gratitude, Love) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-orange-300">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          Gratitude Journal
        </h1>
        <p class="mt-2 text-gray-300">Log something positive every day to shift your perspective.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('grateful for'),
            'bg-purple-600/30 text-purple-400 border border-purple-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Gratitude Input Form -->
      <form 
        @submit.prevent="logGratitude"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <label for="gratitude-input" class="block text-xl font-bold text-gray-200">
          What are you grateful for right now?
        </label>
        <div class="flex space-x-4">
            <!-- Text Input -->
            <input
                id="gratitude-input"
                type="text"
                v-model="newEntry"
                placeholder="e.g., The sound of rain outside my window."
                class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                :disabled="isSaving"
            />
            
            <!-- Log Button -->
            <button
                type="submit"
                :disabled="isSaving || !newEntry.trim()"
                class="px-6 py-3 rounded-xl bg-orange-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-orange-700/50 
                       hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Plus Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
            </button>
        </div>
      </form>
      
      <!-- Gratitude History List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Entries</h2>

        <ul class="max-h-60 overflow-y-auto pr-2">
            <li 
                v-for="(item, index) in gratitudeList" 
                :key="item.id"
                class="flex items-start p-3 border-b border-gray-700 last:border-b-0"
                v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } }"
            >
                <!-- Sun Icon (Warmth, Brightness) -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mt-1 mr-3 text-orange-400 flex-shrink-0">
                    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
                
                <div class="flex-grow">
                    <p class="text-lg font-medium text-gray-100">{{ item.text }}</p>
                    <p class="text-xs text-gray-400 mt-1">Logged: {{ item.loggedAt }}</p>
                </div>
            </li>
            <li v-if="gratitudeList.length === 0" class="text-center text-gray-500 py-4">
                The best time to start is now! Log your first moment of gratitude.
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>