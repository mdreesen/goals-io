<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface BookEntry {
  id: number;
  title: string;
  author: string;
  pagesRead: number;
  loggedAt: string;
}

// Initial mock data
const entryList = ref<BookEntry[]>([
  { id: 1, title: 'The Evolving Self', author: 'Mihaly Csikszentmihalyi', pagesRead: 35, loggedAt: '2025-10-02' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport', pagesRead: 50, loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newTitle = ref('');
const newAuthor = ref('');
const newPagesRead = ref<number | null>(null);
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logEntry = async () => {
  if (!newTitle.value.trim() || !newAuthor.value.trim() || newPagesRead.value === null || newPagesRead.value <= 0) {
    saveMessage.value = 'Please provide the title, author, and a valid number of pages read.';
    setTimeout(() => saveMessage.value = null, 4000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging reading session...`;

  const payload = {
    title: newTitle.value.trim(),
    author: newAuthor.value.trim(),
    pagesRead: newPagesRead.value,
    loggedAt: new Date().toISOString(),
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-reading endpoint.
    // ----------------------------------------------------------------------

    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
      id: nextId++,
      title: newTitle.value.trim(),
      author: newAuthor.value.trim(),
      pagesRead: newPagesRead.value,
      loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Reading session logged successfully!`;
    newTitle.value = '';
    newAuthor.value = '';
    newPagesRead.value = null;

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
          class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
          <!-- Book Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="w-8 h-8 mr-3 text-yellow-400">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V5H6.5A2.5 2.5 0 0 0 4 7.5v12Z" />
          </svg>
          Ascend Reading Tracker
        </h1>
        <p class="mt-2 text-base text-gray-400">Log your progress and keep track of your literary journey.</p>
      </header>

      <!-- API Message Area -->
      <div v-if="saveMessage" class="text-center p-3 rounded-xl font-medium transition-all duration-300" :class="{
        'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
        'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please provide'),
        'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
      }" v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }">
        {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form @submit.prevent="logEntry" class="space-y-6"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }">
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log Reading Session</h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Book Title -->
          <div class="sm:col-span-2">
            <label for="book-title" class="block text-sm font-medium text-gray-400 mb-2">Book Title</label>
            <input id="book-title" type="text" v-model="newTitle" placeholder="e.g., The Midnight Library" required
              class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner shadow-black/20"
              :disabled="isSaving" />
          </div>

          <!-- Pages Read -->
          <div class="sm:col-span-1">
            <label for="pages-read" class="block text-sm font-medium text-gray-400 mb-2">Pages Read Today</label>
            <div class="relative">
              <input id="pages-read" type="number" v-model.number="newPagesRead" placeholder="50" min="1" required
                class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 pl-4 pr-12 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner shadow-black/20"
                :disabled="isSaving" />
              <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">PAGES</span>
            </div>
          </div>
        </div>

        <!-- Author Input -->
        <div>
          <label for="author" class="block text-sm font-medium text-gray-400 mb-2">Author</label>
          <input id="author" type="text" v-model="newAuthor" placeholder="e.g., Matt Haig" required
            class="w-full rounded-xl border border-gray-700 bg-gray-800 py-3 px-4 text-base text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner shadow-black/20"
            :disabled="isSaving" />
        </div>

        <!-- Log Button (Sleek and Intentional) -->
        <div class="flex justify-end pt-2">
          <button type="submit"
            :disabled="isSaving || !newTitle.trim() || !newAuthor.trim() || !newPagesRead || newPagesRead <= 0"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-yellow-700 font-bold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-amber-700/30 
                       hover:from-amber-500 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed">
            <!-- Checkmark Icon for logging -->
            <span class="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-5 h-5 mr-2">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Log Reading
            </span>
          </button>
        </div>
      </form>

      <!-- History List -->
      <div class="pt-8 space-y-5">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Reading History</h2>

        <ul class="max-h-96 overflow-y-auto pr-3 space-y-4">
          <li v-for="(item, index) in entryList" :key="item.id"
            class="flex flex-col p-4 border border-gray-800/80 bg-gray-800 rounded-lg transition duration-200 hover:bg-gray-800/50 hover:border-amber-600/50"
            v-motion="{ initial: { opacity: 0, x: -10 }, enter: { opacity: 1, x: 0, transition: { delay: 0.05 * index } } }">
            <div class="flex items-start justify-between">
              <!-- Icon & Entry Details -->
              <div class="flex items-start flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-amber-400">
                  <path d="M12 2v20" />
                  <path d="M17 18H5" />
                  <path d="M19 6H5" />
                </svg>
                <div class="flex flex-col">
                  <p class="text-lg font-bold text-gray-200 leading-tight">{{ item.title }}</p>
                  <p class="text-sm text-gray-400 italic mt-0.5">by {{ item.author }}</p>
                  <span class="text-xs font-semibold text-amber-400 mt-1">{{ item.pagesRead }} PAGES READ</span>
                </div>
              </div>

              <p class="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">
                {{ item.loggedAt }}
              </p>
            </div>
          </li>
          <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
            Your library is empty. Log your first book!
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>
