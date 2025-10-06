<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface AffirmationEntry {
  id: number;
  statement: string; // The core affirmation statement
  loggedAt: string;
}

const entryList = ref<AffirmationEntry[]>([
  { id: 1, statement: 'I am capable of achieving my most ambitious goals.', loggedAt: '2025-10-02' },
  { id: 2, statement: 'I choose peace and clarity in every situation.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newAffirmation = ref(''); // State for the affirmation text
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logAffirmation = async () => {
  if (!newAffirmation.value.trim()) {
    saveMessage.value = 'Please enter your affirmation statement.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging new affirmation...`;
  
  const payload = {
    statement: newAffirmation.value.trim(), 
    loggedAt: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-affirmation endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
        id: nextId++,
        statement: newAffirmation.value.trim(),
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Affirmation logged successfully!`;
    newAffirmation.value = '';
    
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
  <div ref="trackerRef" 
    class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center font-sans"
  >
    <!-- Main Tracker Card (Minimalist & Elevated) -->
    <div
      class="w-full max-w-3xl rounded-2xl bg-gray-900 p-7 sm:p-10 shadow-xl shadow-gray-900/60 space-y-8 
             transition-all duration-500 border border-gray-800"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
          <!-- Star Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-purple-400">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          Ascend Affirmations
        </h1>
        <p class="mt-2 text-base text-gray-400">Set your daily intention and reinforce positive beliefs.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please enter'),
            'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form 
        @submit.prevent="logAffirmation"
        class="space-y-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Statement</h2>
        
        <!-- Affirmation Textarea (Primary Focus) -->
        <div>
            <label for="affirmation-statement" class="block text-sm font-medium text-gray-400 mb-2">Affirmation Statement</label>
            <textarea
                id="affirmation-statement"
                v-model="newAffirmation"
                rows="3"
                placeholder="Example: I trust my journey and celebrate my growth."
                class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"
                :disabled="isSaving"
            ></textarea>
        </div>

        <!-- Log Button (Sleek and Intentional) -->
        <div class="flex justify-end pt-2">
            <button
                type="submit"
                :disabled="isSaving || !newAffirmation.trim()"
                class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 
                       hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Shield/Check Icon for action -->
                <span class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    Affirm & Seal
                </span>
            </button>
        </div>
      </form>
      
      <!-- History List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Intentions</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-3">
            <li 
                v-for="(item, index) in entryList" 
                :key="item.id"
                class="flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
                v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }"
            >
                <div class="flex items-start justify-between">
                    <!-- Icon & Statement -->
                    <div class="flex items-center flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-indigo-400">
                           <path d="M20 11.08V8l-6-6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7"/>
                           <path d="M14 2v6h6"/>
                           <path d="m17 19-2 2h4l-2-2Z"/>
                        </svg>
                        <p class="text-lg font-medium text-gray-200 italic leading-tight">"{{ item.statement }}"</p>
                    </div>

                    <p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">
                        {{ item.loggedAt }}
                    </p>
                </div>
            </li>
            <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
                No affirmations yet. Set your intention!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>