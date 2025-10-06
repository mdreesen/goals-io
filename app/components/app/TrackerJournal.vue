<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface JournalEntry {
  id: number;
  entry: string; // General journal entry text
  loggedAt: string;
}

const entryList = ref<JournalEntry[]>([
  { id: 1, entry: 'Felt very productive this morning after a cold soak. Need to keep this routine up.', loggedAt: '2025-10-02' },
  { id: 2, entry: 'Reflected on my fasting progress today. The 16-hour window is becoming much easier.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newEntry = ref(''); // State for the journal entry text
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logEntry = async () => {
  if (!newEntry.value.trim()) {
    saveMessage.value = 'Your journal entry cannot be empty. Write down a thought!';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Saving journal entry...`;

  const payload = {
    entry: newEntry.value.trim(),
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-journal endpoint.
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

    saveMessage.value = `Journal entry saved successfully!`;
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
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
          <!-- Journal/Feather Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-teal-400">
            <path d="M12 20h9" />
            <path d="M12 20a6 6 0 0 0-8-8 6 6 0 0 0-4 4 6 6 0 0 0 8 8Z" />
            <path d="M16 4v16" />
            <path d="M18 16L12 10 4 18" />
          </svg>
          Daily Reflection Journal
        </h1>
        <p class="mt-2 text-base text-gray-400">Capture your thoughts, progress, and daily insights.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('saved successfully'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('cannot be empty'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Saving')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form @submit.prevent="logEntry" class="space-y-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }">
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">What's on your mind?</h2>

        <!-- Notes Textarea (Primary Focus) -->
        <div>
          <label for="entry-notes" class="block text-sm font-medium text-gray-400 mb-2">Journal Entry (Today's Date: {{
            new Date().toLocaleDateString() }})</label>
          <textarea id="entry-notes" v-model="newEntry" rows="8"
            placeholder="Start writing... reflect on your day, your goals, or any key decisions."
            class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-inner shadow-black/20"
            :disabled="isSaving"></textarea>
        </div>

        <!-- Log Button (Sleek and Intentional) -->
        <div class="flex justify-end pt-2">
          <button type="submit" :disabled="isSaving || !newEntry.trim()"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-teal-600 to-indigo-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-teal-700/30 
                       hover:from-teal-500 hover:to-indigo-600 focus:outline-none focus:ring-4 focus:ring-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
            <!-- Lock/Save Icon for secure entry -->
            <span class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-5 h-5 mr-2">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Lock & Save Entry
            </span>
          </button>
        </div>
      </form>

      <!-- History List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Reflections</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-4">
          <li v-for="(item, index) in entryList" :key="item.id"
            class="flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-teal-600/50"
            v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }">
            <div class="flex items-start justify-between">
              <!-- Icon & Entry Summary -->
              <div class="flex items-start flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-teal-400">
                  <path d="M8 20l1.3-1.3c2.7-2.7 6.7-2.7 9.4 0L20 20" />
                  <path d="M10 18v2" />
                  <path d="M14 18v2" />
                  <path d="M4 18v2" />
                  <path d="M12 4v16" />
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
            The page is your canvas. Write your first entry!
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>