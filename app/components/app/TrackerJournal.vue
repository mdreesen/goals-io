<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface JournalEntry {
  id: number;
  title: string;
  content: string;
  loggedAt: string;
}

const entryList = ref<JournalEntry[]>([
  { id: 1, title: 'Morning Reflection', content: 'Felt a great sense of peace during the sunrise. Must remember to prioritize this time.', loggedAt: '2025-10-02' },
  { id: 2, title: 'Goal Review', content: 'Reviewed my Q4 goals. Need to spend more focused time on the Nuxt project.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newEntryTitle = ref('');
const newEntryContent = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logJournalEntry = async () => {
  if (!newEntryTitle.value.trim() || !newEntryContent.value.trim()) {
    saveMessage.value = 'Please fill in both the Title and Content fields.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging new journal entry...`;
  
  const payload = {
    title: newEntryTitle.value.trim(), 
    content: newEntryContent.value.trim(),
    loggedAt: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-journal-entry endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
        id: nextId++,
        title: newEntryTitle.value.trim(),
        content: newEntryContent.value.trim(),
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `Journal entry "${newEntryTitle.value}" logged successfully!`;
    newEntryTitle.value = '';
    newEntryContent.value = '';
    
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
  <!-- Custom Journal Gradient Background (Calm Teal/Blue for Reflection) -->
  <div ref="trackerRef" 
    class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-teal-400/20 ring-4 ring-teal-600/20 transition-all duration-500 hover:ring-teal-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400">
          <!-- Feather/Pen Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300">
            <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
          </svg>
          Ascend Journal Taker
        </h1>
        <p class="mt-2 text-gray-300">Capture your daily thoughts, reflections, and progress.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('Please fill in'),
            'bg-indigo-600/30 text-indigo-400 border border-indigo-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Entry Creation Form -->
      <form 
        @submit.prevent="logJournalEntry"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">New Journal Entry</h2>
        
        <!-- Title Input -->
        <div>
            <label for="entry-title" class="block text-sm font-bold text-gray-300 mb-1">Title</label>
            <input
                id="entry-title"
                type="text"
                v-model="newEntryTitle"
                placeholder="e.g., A productive Tuesday"
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                :disabled="isSaving"
            />
        </div>

        <!-- Content Textarea -->
        <div>
            <label for="entry-content" class="block text-sm font-bold text-gray-300 mb-1">Journal Content</label>
            <textarea
                id="entry-content"
                v-model="newEntryContent"
                rows="5"
                placeholder="Write about your day, your thoughts, or your progress toward your goals..."
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                :disabled="isSaving"
            ></textarea>
        </div>

        <!-- Log Button -->
        <div class="flex justify-end">
            <button
                type="submit"
                :disabled="isSaving || !newEntryTitle.trim() || !newEntryContent.trim()"
                class="px-8 py-3 rounded-xl bg-teal-600 font-semibold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-teal-700/50 
                       hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Lock Icon -->
                <span class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Save Entry
                </span>
            </button>
        </div>
      </form>
      
      <!-- History List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Journal History</h2>

        <ul class="max-h-72 overflow-y-auto pr-2 space-y-2">
            <li 
                v-for="(item, index) in entryList" 
                :key="item.id"
                class="flex flex-col p-4 border-b border-gray-700 last:border-b-0 bg-gray-800/30 rounded-lg group transition duration-200 hover:bg-white/10"
                v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 1, x: 0, transition: { delay: 0.1 * index } } }"
            >
                <div class="flex items-center justify-between mb-2">
                    <!-- Icon & Type -->
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-3 flex-shrink-0 text-teal-400">
                           <path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>
                        </svg>
                        <p class="text-lg font-bold text-gray-100">{{ item.title }}</p>
                    </div>

                    <p class="text-xs text-gray-500 flex-shrink-0">Logged: {{ item.loggedAt }}</p>
                </div>

                <p class="text-sm text-gray-400 mt-1 pl-8 italic">{{ item.content }}</p>
            </li>
            <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
                No entries yet. Start logging your thoughts!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>