<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface SpiritualEntry {
  id: number;
  type: 'Sermon' | 'Devotional';
  topic: string;
  notes: string;
  loggedAt: string;
}

const entryList = ref<SpiritualEntry[]>([
  { id: 1, type: 'Sermon', topic: 'The Power of Forgiveness', notes: 'Key verse John 3:16. Focus on release, not holding onto bitterness.', loggedAt: '2025-10-02' },
  { id: 2, type: 'Devotional', topic: 'Daily Gratitude', notes: 'Spent 15 mins reflecting on 3 things I am thankful for today.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newType = ref<'Sermon' | 'Devotional'>('Sermon');
const newTopic = ref('');
const newNotes = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logEntry = async () => {
  if (!newTopic.value.trim() || !newNotes.value.trim()) {
    saveMessage.value = 'Please fill out both the Topic and Notes sections.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Saving spiritual entry...`;

  const payload = {
    type: newType.value,
    topic: newTopic.value.trim(),
    notes: newNotes.value.trim(),
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-entry endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
      id: nextId++,
      type: newType.value,
      topic: newTopic.value.trim(),
      notes: newNotes.value.trim().substring(0, 50) + (newNotes.value.length > 50 ? '...' : ''), // Keep list summary short
      loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Entry logged successfully!`;
    newTopic.value = '';
    newNotes.value = '';

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
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
          <!-- Book/Note Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-purple-400">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20h-4.5" />
            <path d="M18 10h-8" />
            <path d="M18 14h-8" />
          </svg>
          Sermon & Devotional Notes
        </h1>
        <p class="mt-2 text-base text-gray-400">Capture your spiritual insights and reflections.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please fill'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Saving')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form @submit.prevent="logEntry" class="space-y-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }">
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Entry</h2>

        <!-- Type Dropdown and Topic Input -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Type Dropdown -->
          <div class="sm:col-span-1">
            <label for="entry-type" class="block text-sm font-medium text-gray-400 mb-2">Entry Type</label>
            <select id="entry-type" v-model="newType"
              class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"
              :disabled="isSaving">
              <option value="Sermon">Sermon</option>
              <option value="Devotional">Devotional</option>
            </select>
          </div>

          <!-- Topic Input -->
          <div class="sm:col-span-2">
            <label for="entry-topic" class="block text-sm font-medium text-gray-400 mb-2">Topic / Title</label>
            <input id="entry-topic" type="text" v-model="newTopic" placeholder="e.g., Joy in Suffering"
              class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"
              :disabled="isSaving" />
          </div>
        </div>

        <!-- Notes Textarea -->
        <div>
          <label for="entry-notes" class="block text-sm font-medium text-gray-400 mb-2">Notes & Key Takeaways</label>
          <textarea id="entry-notes" v-model="newNotes" rows="5"
            placeholder="Write your reflection, key scriptures, and application steps here."
            class="w-full rounded-xl border border-gray-700 bg-gray-800 py-4 px-5 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner shadow-black/20"
            :disabled="isSaving"></textarea>
        </div>

        <!-- Log Button (Sleek and Intentional) -->
        <div class="flex justify-end pt-2">
          <button type="submit" :disabled="isSaving || !newTopic.trim() || !newNotes.trim()"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 font-bold text-white transition duration-300 transform active:scale-[0.98] shadow-xl shadow-indigo-700/30 
                       hover:from-indigo-500 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
            <!-- Feather/Quill Icon for writing -->
            <span class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-5 h-5 mr-2">
                <path d="M12 20h9" />
                <path d="M12 20a6 6 0 0 0-8-8 6 6 0 0 0-4 4 6 6 0 0 0 8 8Z" />
                <path d="M16 4v16" />
                <path d="M18 16L12 10 4 18" />
              </svg>
              Save Reflection
            </span>
          </button>
        </div>
      </form>

      <!-- History List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Reflections</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-4">
          <li v-for="(item, index) in entryList" :key="item.id"
            class="flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-indigo-600/50"
            v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }">
            <div class="flex items-start justify-between">
              <!-- Icon & Topic/Type -->
              <div class="flex items-start flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-purple-400">
                  <path
                    d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5S16 3.67 16 4.5v5c0 .83-.67 1.5-1.5 1.5z" />
                  <path d="M20 7v10h-6V7h6z" />
                  <path d="M4 7v10h-6V7h6z" />
                  <path d="M12 20s-8 4-8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <div class="flex flex-col">
                  <span class="text-xs font-semibold uppercase text-indigo-400">{{ item.type }}</span>
                  <p class="text-lg font-bold text-gray-200 leading-tight mt-0.5">{{ item.topic }}</p>
                  <p class="text-sm text-gray-400 italic mt-1">{{ item.notes }}</p>
                </div>
              </div>

              <p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">
                {{ item.loggedAt }}
              </p>
            </div>
          </li>
          <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
            No reflections yet. Capture your first note!
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
