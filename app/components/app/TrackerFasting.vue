<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { format, differenceInSeconds, addHours } from 'date-fns'
import { Flame, Droplets, Zap, Sparkles, Square } from 'lucide-vue-next'

const { fetch: refreshSession } = useUserSession();
const toast = useToast();

const { data } = useNuxtData('fasting');

// --- State ---
const isFasting = ref(data.value.latestData?.start)
const startTime = ref<Date | null>(data.value.latestData?.start_date)
const currentTime = ref(new Date())
const goalHours = ref(16) // Default 16:8 Intermittent Fasting
const timerInterval = ref<NodeJS.Timeout | null>(null)
const isLoading = ref(false);
let errorMessage = ref('');

// --- Fasting Stages Logic ---
const stages = [
  { name: 'Stable', threshold: 0, icon: Droplets, color: 'text-blue-400', desc: 'Blood Sugar Stabilizing' },
  { name: 'Burning', threshold: 12, icon: Flame, color: 'text-orange-400', desc: 'Fat Burning (Ketosis)' },
  { name: 'Repair', threshold: 18, icon: Sparkles, color: 'text-purple-400', desc: 'Autophagy' },
  { name: 'Ascended', threshold: 24, icon: Zap, color: 'text-yellow-400', desc: 'Peak Mental Clarity' },
]

// --- Computeds ---
const elapsedTime = computed(() => {
  if (!startTime.value) return 0
  return differenceInSeconds(currentTime.value, startTime.value)
})

const useIsFasting = computed(() => data.value.latestData?.start);

const progressPercentage = computed(() => {
  const totalSeconds = goalHours.value * 3600
  const pct = (elapsedTime.value / totalSeconds) * 100
  return Math.min(pct, 100)
})

const currentStage = computed(() => {
  const hours = elapsedTime.value / 3600
  // Find the highest threshold passed
  return stages.slice().reverse().find(s => hours >= s.threshold) || stages[0]
})

const formattedTime = computed(() => {
  const h = Math.floor(elapsedTime.value / 3600).toString().padStart(2, '0')
  const m = Math.floor((elapsedTime.value % 3600) / 60).toString().padStart(2, '0')
  const s = (elapsedTime.value % 60).toString().padStart(2, '0')
  return `${h}:${m}:${s}`
})

// --- SVG Arc Math ---
const radius = 120
const circumference = 2 * Math.PI * radius
const dashOffset = computed(() => {
  return circumference - (progressPercentage.value / 100) * circumference
})

// --- Actions ---
const toggleFast = () => {
  isLoading.value = true;

  if (data.value.latestData.start) {
    // End Fast

    $fetch('/api/user/fasting/fasting', {
      method: 'POST',
      body: {
        _id: data.value.latestData?._id,
        start_date: null,
        start: false,
        ended: true,
        duration: goalHours.value,
        time_fasted: formattedTime.value,
        completed: false
      }
    })
      .then(async () => {
        isFasting.value = false
        await refreshSession();
        await refreshNuxtData('fasting');
        timerInterval.value = null;
        isLoading.value = false;
      })
      .catch(async (error) => {
        toast.error("Failed to update", 'Try again');
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });

    if (timerInterval.value) clearInterval(timerInterval.value)
  } else {
    // Start Fast

    isLoading.value = true;
    $fetch('/api/user/fasting/fasting', {
      method: 'POST',
      body: {
        _id: null,
        start_date: new Date(),
        start: true,
        ended: false,
        duration: goalHours.value,
        time_fasted: null,
        completed: false
      }
    })
      .then(async () => {
        isFasting.value = true
        await refreshSession();
        await refreshNuxtData('fasting');
        isLoading.value = false;
      })
      .catch(async (error) => {
        toast.error("Failed to create", 'Try again');
        console.log(error);
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
      });
  }
}

onMounted(() => {
  startTime.value = computed(() => data.value?.latestData?.start_date).value
  isFasting.value = computed(() => true).value
  timerInterval.value = setInterval(() => {
    currentTime.value = computed(() => new Date()).value
  }, 1000);
})

// Cleanup
onUnmounted(() => {
  if (timerInterval.value) clearInterval(timerInterval.value)
});

</script>

<template>
  <ClientOnly>

    <div class="flex flex-col items-center justify-center min-h-125 p-6 rounded-3xl relative overflow-hidden">

      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"></div>

      <div class="relative w-75 h-75 flex items-center justify-center mb-8">
        <svg class="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <circle cx="150" cy="150" :r="radius" stroke="currentColor" stroke-width="6" fill="transparent"
            class="text-zinc-800" />
          <circle cx="150" cy="150" :r="radius" stroke="url(#gradient)" stroke-width="8" fill="transparent"
            stroke-linecap="round" class="transition-all duration-1000 ease-out"
            :style="{ strokeDasharray: circumference, strokeDashoffset: dashOffset }" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#818cf8" />
              <stop offset="100%" stop-color="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>

        <div class="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div v-if="!useIsFasting" class="text-center animate-in fade-in zoom-in duration-500">

          </div>

          <div v-else class="text-center">
            <div class="flex items-center justify-center space-x-2 mb-2">
              <component :is="currentStage.icon" class="w-4 h-4 animate-pulse" :class="currentStage.color" />
              <span class="text-xs font-bold uppercase tracking-widest text-zinc-400">{{ currentStage.name }}</span>
            </div>
            <h1 class="text-5xl font-medium tracking-tighter tabular-nums drop-shadow-lg">
              {{ formattedTime }}
            </h1>
            <p class="text-zinc-500 text-xs mt-2">{{ currentStage.desc }}</p>
          </div>
        </div>
      </div>

      <div v-if="useIsFasting" class="w-full max-w-70 z-10">
        <div
          class="flex justify-between items-center mb-4 px-4 py-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/5">
          <div class="text-left">
            <p class="text-[10px] text-zinc-500 uppercase font-bold">Goal</p>
            <p class="text-zinc-200 font-medium">{{ goalHours }} Hours</p>
          </div>
          <div class="text-right">
            <p class="text-[10px] text-zinc-500 uppercase font-bold">End Time</p>
            <p class="text-zinc-200 font-medium">
              {{ startTime ? format(addHours(startTime, goalHours), 'h:mm a') : '--:--' }}
            </p>
          </div>
        </div>

        <!-- <button v-if="!isLoading" @click="toggleFast"
        class="w-full py-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all text-sm font-semibold flex items-center justify-center gap-2">
        <Square class="w-4 h-4 fill-current" />
        End Fast
      </button> -->
      </div>

      <button v-if="!isLoading" @click="toggleFast"
        :class="`w-full max-w-70 py-4 rounded-xl border ${useIsFasting ? 'border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300' : 'border-green-500/20 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:text-green-300'} transition-all text-sm font-semibold flex items-center justify-center gap-2`">
        <Square class="w-4 h-4 fill-current" />
        {{ !useIsFasting ? 'Start Fast' : 'End Fast' }}
      </button>

    </div>
  </ClientOnly>
</template>

<style scoped>
/* Optional: Add custom fonts in your tailwind config/CSS */
</style>