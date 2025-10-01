<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMotion } from '@vueuse/motion';

// --- Mock State & Constants ---
// This mocks data that would typically come from your database
const MOCK_TOTAL_WORKOUTS = 42;
const lastLoggedWorkout = ref('Strength Training');
const lastLoggedDuration = ref(45); // Minutes

// --- State ---
const workoutName = ref('');
const durationMinutes = ref<number | null>(null);
const caloriesBurned = ref<number | null>(null); 

// --- UI & API State ---
const isSaving = ref(false);
const saveMessage = ref<string | null>(null);

// --- Computed Values ---

const currentCaloriesDisplay = computed(() => {
    return caloriesBurned.value !== null && caloriesBurned.value > 0 
        ? caloriesBurned.value.toFixed(0) : '—';
});

// A simplified metric: Progress towards a weekly goal (e.g., 5 sessions)
const weeklyGoal = 5;
const mockSessionsThisWeek = 3;
const weeklyProgressPercent = computed(() => (mockSessionsThisWeek / weeklyGoal) * 100);


// --- Logging Function ---
const logWorkout = async () => {
  if (!workoutName.value || !durationMinutes.value || durationMinutes.value <= 0) {
    saveMessage.value = 'Please enter a workout name and a valid duration (in minutes).';
    setTimeout(() => saveMessage.value = null, 3000);
    return;
  }

  isSaving.value = true;
  saveMessage.value = 'Logging workout session...';
  
  const payload = {
    // Current date/time of logging
    logTime: new Date().toISOString(), 
    // Workout details
    name: workoutName.value, 
    durationMinutes: durationMinutes.value, 
    caloriesBurned: caloriesBurned.value ?? 0, 
  };

  try {
    // ----------------------------------------------------------------------
    // NOTE: This simulates the call to your MongoDB backend via a Nuxt Server API route.
    // Replace with actual $fetch call to your /api/save-workout endpoint.
    // ----------------------------------------------------------------------
    
    // Simulate successful API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulating successful save to MongoDB with payload:', payload);

    // Update mock data and clear input on success
    lastLoggedWorkout.value = workoutName.value;
    lastLoggedDuration.value = durationMinutes.value;
    saveMessage.value = `${workoutName.value} logged successfully!`;
    
    // Clear input fields
    workoutName.value = '';
    durationMinutes.value = null;
    caloriesBurned.value = null;
    
  } catch (error) {
    console.error('Failed to save workout:', error);
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
  <!-- Custom Health Gradient Background (Blues and Greens for vitality) -->
  <div ref="trackerRef" 
    class="p-4 sm:p-8 text-white flex items-center justify-center"
  >
    <!-- Main Tracker Card (Glassmorphism Effect) -->
    <div
      class="w-full max-w-xl rounded-3xl bg-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-lg space-y-8 
             border border-green-400/20 ring-4 ring-green-500/20 transition-all duration-500 hover:ring-green-400/30"
    >
      
      <!-- Header -->
      <header class="text-center" v-motion="{ initial: { opacity: 0, y: -20 }, enter: { opacity: 1, y: 0, transition: { delay: 0.1 } } }">
        <h1 class="text-4xl font-extrabold flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-green-400">
          <!-- Dumbbell Icon (Workout) -->
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 mr-3 text-teal-300">
            <path d="M14.4 14.4 9 19.8"/><path d="M18 18.5a4 4 0 0 0-5.5-5.5L8 9.5l3.5-3.5 1.5 1.5c.3.3.6.4 1 .4s.7-.1 1-.4l1.5-1.5 3-3-1.5-1.5c-.3-.3-.4-.6-.4-1s.1-.7.4-1L21 2z"/>
          </svg>
          Workout Tracker
        </h1>
        <p class="mt-2 text-gray-300">Log your training session details to track consistency.</p>
      </header>
      
      <!-- API Message Area -->
      <div 
          v-if="saveMessage" 
          class="text-center p-3 rounded-xl font-medium transition-all duration-300"
          :class="{
            'bg-green-600/30 text-green-400 border border-green-600': saveMessage.includes('logged successfully'),
            'bg-red-600/30 text-red-400 border border-red-600': saveMessage.includes('Error') || saveMessage.includes('valid duration'),
            'bg-blue-600/30 text-blue-400 border border-blue-600': saveMessage.includes('Logging')
          }"
          v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1 } }"
      >
          {{ saveMessage }}
      </div>

      <!-- Main Input Section -->
      <div 
        class="space-y-6"
        v-motion="{ initial: { opacity: 0, scale: 0.9 }, enter: { opacity: 1, scale: 1, transition: { delay: 0.2 } } }"
      >
        <!-- Workout Name -->
        <label for="workout-name" class="block text-xl font-bold text-gray-200">
          Workout Name
        </label>
        <input
            id="workout-name"
            type="text"
            v-model="workoutName"
            placeholder="e.g., Upper Body Strength"
            class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            :disabled="isSaving"
        />

        <div class="grid grid-cols-2 gap-4">
            <!-- Duration -->
            <div>
                <label for="duration-input" class="block text-xl font-bold text-gray-200 mb-2">
                    Duration (mins)
                </label>
                <input
                    id="duration-input"
                    type="number"
                    step="5"
                    min="1"
                    v-model.number="durationMinutes"
                    placeholder="45"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    :disabled="isSaving"
                />
            </div>
            
            <!-- Calories Burned -->
            <div>
                <label for="calories-input" class="block text-xl font-bold text-gray-200 mb-2">
                    Calories Burned (Optional)
                </label>
                <input
                    id="calories-input"
                    type="number"
                    step="10"
                    min="0"
                    v-model.number="caloriesBurned"
                    placeholder="400"
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-6 text-xl text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    :disabled="isSaving"
                />
            </div>
        </div>
        
        <!-- Log Button -->
        <button
            @click="logWorkout"
            :disabled="isSaving || !workoutName || !durationMinutes"
            class="w-full mt-6 py-4 rounded-xl bg-green-600 font-semibold text-white transition duration-300 transform active:scale-[0.9] shadow-xl shadow-green-700/50 
                   hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <!-- Log Icon -->
            <span class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 mr-3">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v13a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                </svg>
                Log Workout
            </span>
        </button>
      </div>
      
      <!-- Quick Stats -->
      <div class="pt-6 space-y-4">
        <h2 class="text-2xl font-bold text-gray-200">Weekly Summary</h2>

        <!-- Progress Bar (Weekly Goal) -->
        <div class="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner shadow-black/50">
          <div
            :style="{ width: weeklyProgressPercent + '%' }"
            :class="[weeklyProgressPercent >= 100 ? 'bg-yellow-400' : 'bg-teal-500']"
            class="h-4 rounded-full transition-all duration-700 ease-out"
            v-motion="{ initial: { width: 0 }, enter: { width: `${weeklyProgressPercent}%` } }"
          ></div>
        </div>

        <p class="text-sm text-gray-400 font-medium pt-2">
          {{ mockSessionsThisWeek }} / {{ weeklyGoal }} sessions this week. ({{ weeklyProgressPercent.toFixed(1) }}%)
        </p>

        <!-- Stat Cards -->
        <div class="grid grid-cols-3 gap-4 text-center border-t border-gray-700 pt-4">
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.4 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
            >
                <p class="text-sm text-gray-400">Last Session</p>
                <p class="text-lg font-bold text-teal-300 truncate">{{ lastLoggedWorkout }}</p>
            </div>
            
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.5 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
            >
                <p class="text-sm text-gray-400">Duration</p>
                <p class="text-xl font-bold text-teal-300">
                    {{ lastLoggedDuration }} min
                </p>
            </div>
            
            <div 
                v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0, transition: { delay: 0.6 } } }"
                class="p-3 bg-gray-700/50 rounded-xl border border-gray-600"
            >
                <p class="text-sm text-gray-400">Total Logged</p>
                <p class="text-xl font-bold text-teal-300">
                    {{ MOCK_TOTAL_WORKOUTS }}
                </p>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>
