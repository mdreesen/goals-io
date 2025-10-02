<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface Affirmation {
  id: number;
  text: string;
  loggedAt: string;
}

const affirmationsList = ref<Affirmation[]>([
  { id: 1, text: 'I embrace change and welcome new opportunities.', loggedAt: '2025-10-01' },
  { id: 2, text: 'My potential is limitless.', loggedAt: '2025-09-30' },
  { id: 3, text: 'I am capable of achieving my biggest goals.', loggedAt: '2025-09-29' },
]);
let nextId = 4; // Counter for new mock entries

// --- State ---
const newAffirmation = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction) ---
const logAffirmation = async () => {
  if (!newAffirmation.value.trim()) {
    saveMessage.value = 'Please write an affirmation to log.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging affirmation...';
  
  const affirmationText = newAffirmation.value.trim();
  
  const payload = {
    text: affirmationText, 
    logTime: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-affirmation endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear input on success (Mocking DB save)
    affirmationsList.value.unshift({
        id: nextId++,
        text: affirmationText,
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Affirmation logged successfully!`;
    newAffirmation.value = ''; // Clear the input field
    
  } catch (error) {
    console.error('Failed to save affirmation:', error);
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
  <!-- Custom Mindset Gradient Background (Deep Navy, Gold, and Magenta for Inspiration) -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-purple-400/20 ring-4 ring-purple-600/20 transition-all duration-500 hover:ring-purple-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-400">
          <!-- Feather Icon (Lightness, Growth, Mindset) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300">
            <path d="M20.25 15.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12.5 10.75 6 17.25l-2.75-2.75a2.5 2.5 0 0 1 0-3.535l6.5-6.5a2.5 2.5 0 0 1 3.535 0l2.75 2.75 4-4"/><path d="m15.5 13.5 2.75-2.75"/><path d="m11.5 9.5 3-3"/>
          </svg>
          Daily Affirmations
        </h1>
        <p class="mt-2 text-gray-300">Log your positive statements to anchor your mindset.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('write an affirmation'),
            'bg-purple-600/30 text-purple-400 border border-purple-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Affirmation Input Form -->
      <form 
        @submit.prevent="logAffirmation"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <label for="affirmation-input" class="block text-xl font-bold text-gray-200">
          What is your affirmation for today?
        </label>
        <div class="flex space-x-4">
            <!-- Text Input -->
            <input
                id="affirmation-input"
                type="text"
                v-model="newAffirmation"
                placeholder="e.g., I am deserving of success."
                class="flex-grow rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                :disabled="isSaving"
            />
            
            <!-- Log Button -->
            <button
                type="submit"
                :disabled="isSaving || !newAffirmation.trim()"
                class="px-6 py-3 rounded-xl bg-pink-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-pink-700/50 
                       hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Plus Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
            </button>
        </div>
      </form>
      
      <!-- Affirmation History List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent History</h2>

        <ul class="space-y-3 max-h-60 overflow-y-auto pr-2">
            <li 
                v-for="(item, index) in affirmationsList" 
                :key="item.id"
                class="flex items-start p-3 bg-gray-800/70 rounded-xl border border-gray-700 shadow-md"
                v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } }"
            >
                <!-- Checkmark/Sparkle Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mt-1 mr-3 text-yellow-400 flex-shrink-0">
                    <path d="M12 1.5l2.675 5.5h5.825l-4.75 4.125 1.625 5.25L12 16.5l-4.375 2.375 1.625-5.25-4.75-4.125h5.825L12 1.5z"/>
                </svg>
                
                <div class="flex-grow">
                    <p class="text-lg font-medium text-gray-100">{{ item.text }}</p>
                    <p class="text-xs text-gray-400 mt-1">Logged: {{ item.loggedAt }}</p>
                </div>
            </li>
            <li v-if="affirmationsList.length === 0" class="text-center text-gray-500 py-4">
                No affirmations logged yet. Start your positive habit!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>