<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface BookEntry {
  id: number;
  title: string;
  author: string;
  progress: number; // Percentage read
  loggedAt: string;
}

const bookList = ref<BookEntry[]>([
  { id: 1, title: 'The Martian', author: 'Andy Weir', progress: 100, loggedAt: '2025-09-28' },
  { id: 2, title: 'Project Hail Mary', author: 'Andy Weir', progress: 50, loggedAt: '2025-10-01' },
  { id: 3, title: 'Dune', author: 'Frank Herbert', progress: 10, loggedAt: '2025-10-02' },
]);
let nextId = 4; // Counter for new mock entries

// --- State ---
const newTitle = ref('');
const newAuthor = ref('');
const newProgress = ref(0);
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction) ---
const logBook = async () => {
  if (!newTitle.value.trim() || !newAuthor.value.trim()) {
    saveMessage.value = 'Please enter a book title and author.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging book entry...';
  
  const payload = {
    title: newTitle.value.trim(), 
    author: newAuthor.value.trim(),
    progress: newProgress.value,
    logTime: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-book-entry endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    bookList.value.unshift({
        id: nextId++,
        title: newTitle.value.trim(),
        author: newAuthor.value.trim(),
        progress: newProgress.value,
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `${newTitle.value.trim()} logged successfully!`;
    newTitle.value = '';
    newAuthor.value = '';
    newProgress.value = 0;
    
  } catch (error) {
    console.error('Failed to save book entry:', error);
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

// Utility function to get progress color
const getProgressColor = (progress: number) => {
  if (progress === 100) return 'text-green-400';
  if (progress >= 50) return 'text-yellow-400';
  return 'text-red-400';
};
</script>

<template>
  <!-- Custom Reading Gradient Background (Deep Forest Green/Gold for Focus) -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-2xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-lime-400/20 ring-4 ring-lime-600/20 transition-all duration-500 hover:ring-lime-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-lime-400">
          <!-- Book Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          Ascend Book Tracker
        </h1>
        <p class="mt-2 text-gray-300">Log your current reads and track your progress.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('enter a book title'),
            'bg-lime-600/30 text-lime-400 border border-lime-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Book Input Form -->
      <form 
        @submit.prevent="logBook"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Book Title Input -->
            <div class="md:col-span-2">
                <label for="book-title" class="block text-sm font-bold text-gray-200 mb-1">Book Title</label>
                <input
                    id="book-title"
                    type="text"
                    v-model="newTitle"
                    placeholder="e.g., The Midnight Library"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    :disabled="isSaving"
                />
            </div>
            
            <!-- Author Input -->
            <div class="md:col-span-1">
                <label for="book-author" class="block text-sm font-bold text-gray-200 mb-1">Author</label>
                <input
                    id="book-author"
                    type="text"
                    v-model="newAuthor"
                    placeholder="e.g., Matt Haig"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    :disabled="isSaving"
                />
            </div>
        </div>

        <div class="flex items-center space-x-4">
             <!-- Progress Input (Slider) -->
            <div class="flex-grow">
                <label for="book-progress" class="block text-sm font-bold text-gray-200 mb-1">
                    Progress: <span :class="getProgressColor(newProgress)" class="font-extrabold">{{ newProgress }}%</span>
                </label>
                <input
                    id="book-progress"
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    v-model.number="newProgress"
                    class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer range-lg transition-all duration-300 [&::-webkit-slider-thumb]:bg-lime-500 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:bg-lime-500"
                    :disabled="isSaving"
                />
            </div>

            <!-- Log Button -->
            <button
                type="submit"
                :disabled="isSaving || !newTitle.trim() || !newAuthor.trim()"
                class="mt-6 px-6 py-3 rounded-xl bg-lime-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-lime-700/50 
                       hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Plus Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
            </button>
        </div>
      </form>
      
      <!-- Reading History List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Reading History</h2>

        <ul class="max-h-60 overflow-y-auto pr-2">
            <li 
                v-for="(item, index) in bookList" 
                :key="item.id"
                class="flex items-start justify-between p-3 border-b border-gray-700 last:border-b-0 group hover:bg-white/5 rounded-md transition duration-200"
                v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } }"
            >
                <!-- Book Info -->
                <div class="flex-grow">
                    <p class="text-lg font-medium text-gray-100 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-3 text-lime-400 flex-shrink-0">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        {{ item.title }}
                        <span v-if="item.progress === 100" class="ml-2 text-xs font-bold text-green-400 bg-green-900/50 px-2 py-0.5 rounded-full">DONE</span>
                    </p>
                    <p class="text-sm text-gray-400 mt-1 ml-8">by {{ item.author }}</p>
                </div>

                <!-- Progress & Date -->
                <div class="flex flex-col items-end pl-4">
                    <p class="text-lg font-bold" :class="getProgressColor(item.progress)">{{ item.progress }}%</p>
                    <p class="text-xs text-gray-500 mt-1">Updated: {{ item.loggedAt }}</p>
                </div>
            </li>
            <li v-if="bookList.length === 0" class="text-center text-gray-500 py-4">
                Your reading list is empty. Add a book to get started!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>
