<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State (Simulating data fetched from MongoDB) ---
interface SpiritualEntry {
  id: number;
  type: 'Sermon' | 'Devotional';
  topic: string;
  reflection: string;
  loggedAt: string;
}

const entryList = ref<SpiritualEntry[]>([
  { id: 1, type: 'Sermon', topic: 'The Power of Forgiveness', reflection: 'True forgiveness means releasing the expectation of an apology.', loggedAt: '2025-10-02' },
  { id: 2, type: 'Devotional', topic: 'Psalm 23', reflection: 'Focused on recognizing the comfort of God’s presence in times of scarcity.', loggedAt: '2025-10-01' },
]);
let nextId = 3; // Counter for new mock entries

// --- State ---
const newEntryType = ref<'Sermon' | 'Devotional'>('Sermon');
const newTopic = ref('');
const newReflection = ref('');
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Logging Function (Simulates MongoDB interaction for entry creation) ---
const logSpiritualEntry = async () => {
  if (!newTopic.value.trim() || !newReflection.value.trim()) {
    saveMessage.value = 'Please fill in the Topic and Notes/Reflection fields.';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = `Logging ${newEntryType.value.toLowerCase()} notes...`;
  
  const payload = {
    type: newEntryType.value,
    topic: newTopic.value.trim(), 
    reflection: newReflection.value.trim(),
    loggedAt: new Date().toISOString(), 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/log-spiritual-entry endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update the local list and clear inputs on success (Mocking DB save)
    entryList.value.unshift({
        id: nextId++,
        type: newEntryType.value,
        topic: newTopic.value.trim(),
        reflection: newReflection.value.trim(),
        loggedAt: new Date().toISOString().substring(0, 10),
    });

    saveMessage.value = `${newEntryType.value} notes logged successfully!`;
    newTopic.value = '';
    newReflection.value = '';
    
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

// Helper for icon
const getEntryIcon = (type: 'Sermon' | 'Devotional') => {
    return type === 'Sermon' ? 'M7 7h10l-2 7h-6l-2-7Z' : 'M12 2v20M17 5H7M17 19H7';
}

const getIconColor = (type: 'Sermon' | 'Devotional') => {
    return type === 'Sermon' ? 'text-indigo-400' : 'text-yellow-400';
}
</script>

<template>
  <!-- Custom Spiritual Gradient Background (Deep Navy/Gold for Reflection) -->
  <div ref="trackerRef" 
    class="min-h-screen p-4 sm:p-8 text-white flex flex-col items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-3xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-yellow-400/20 ring-4 ring-yellow-600/20 transition-all duration-500 hover:ring-yellow-500/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-indigo-400">
          <!-- Book/Reflection Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-yellow-300">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          Sermon & Devotional Note Taker
        </h1>
        <p class="mt-2 text-gray-300">Capture your detailed notes and key spiritual insights for future reference.</p>
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
        @submit.prevent="logSpiritualEntry"
        class="space-y-4"
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.2 } } }"
      >
        <h2 class="text-xl font-bold text-gray-200 border-b border-gray-700 pb-2">Log New Notes</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            
            <!-- Entry Type Dropdown -->
            <div class="md:col-span-1">
                <label for="entry-type" class="block text-sm font-bold text-gray-300 mb-1">Type</label>
                <select
                    id="entry-type"
                    v-model="newEntryType"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    :disabled="isSaving"
                >
                    <option value="Sermon">Sermon</option>
                    <option value="Devotional">Devotional</option>
                </select>
            </div>

            <!-- Topic Input -->
            <div class="md:col-span-3">
                <label for="entry-topic" class="block text-sm font-bold text-gray-300 mb-1">Topic / Title</label>
                <input
                    id="entry-topic"
                    type="text"
                    v-model="newTopic"
                    placeholder="e.g., Hope in the Midst of Trials"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    :disabled="isSaving"
                />
            </div>
        </div>

        <!-- Reflection Textarea -->
        <div>
            <label for="entry-reflection" class="block text-sm font-bold text-gray-300 mb-1">Key Takeaway / Notes</label>
            <textarea
                id="entry-reflection"
                v-model="newReflection"
                rows="3"
                placeholder="What was the main point and how will you apply it this week? (Your detailed notes go here)"
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                :disabled="isSaving"
            ></textarea>
        </div>

        <!-- Log Button -->
        <div class="flex justify-end">
            <button
                type="submit"
                :disabled="isSaving || !newTopic.trim() || !newReflection.trim()"
                class="px-8 py-3 rounded-xl bg-yellow-600 font-semibold text-gray-900 transition duration-300 transform active:scale-[0.98] shadow-xl shadow-yellow-700/50 
                       hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <!-- Pen Icon -->
                <span class="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M12 20h9"/><path d="M16.5 3.5l4 4L7.5 18 4 18l.5-3.5L16.5 3.5Z"/></svg>
                    Log Notes
                </span>
            </button>
        </div>
      </form>
      
      <!-- History List -->
      <div class="pt-6 space-y-3">
        <h2 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Recent Notes</h2>

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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-3 flex-shrink-0" :class="getIconColor(item.type)">
                            <path :d="getEntryIcon(item.type)"/>
                        </svg>
                        <p class="text-lg font-bold" :class="getIconColor(item.type)">{{ item.type }}</p>
                    </div>

                    <p class="text-xs text-gray-500 flex-shrink-0">Logged: {{ item.loggedAt }}</p>
                </div>

                <h3 class="text-xl font-medium text-gray-100 mt-1 pl-8">{{ item.topic }}</h3>
                <p class="text-sm text-gray-400 mt-1 pl-8 italic">"{{ item.reflection }}"</p>
            </li>
            <li v-if="entryList.length === 0" class="text-center text-gray-500 py-4">
                No entries yet. Log your first sermon or devotional!
            </li>
        </ul>
      </div>

    </div>
  </div>
</template>