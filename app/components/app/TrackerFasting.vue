<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { format, differenceInSeconds, addHours } from 'date-fns'
import { Flame, Droplets, Zap, Sparkles, Play, Square } from 'lucide-vue-next'

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

const { fetch: refreshSession } = useUserSession();

// --- State ---
const isFasting = ref(props.data?.start || false);
const endedFasting = ref(props.data?.ended || true)
const startTime = ref<Date | null>(props.data?.start_date || null);
const endTime = ref<Date | null>(props.data?.end_date || null)
const currentTime = ref(new Date())
const goalHours = ref(props.data?.duration || 16) // Default 16:8 Intermittent Fasting
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
// console.log(isFasting.value)
// --- Actions ---
const toggleFast = () => {
  isLoading.value = true;

  // End Fast
  $fetch('/api/user/fasting/fasting', {
    method: 'POST',
    body: {
      start_date: startTime.value,
      end_date: endTime.value,
      start: isFasting.value,
      ended: endedFasting.value,
      duration: 16,
      time_fasted: formattedTime
    }
  })
    .then(async () => {
      await refreshSession();

      isLoading.value = false;
    })
    .catch(async (error) => {
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });


  if (timerInterval.value) clearInterval(timerInterval.value);

  // if (isFasting.value) {
  //   // End Fast
  //   $fetch('/api/user/fasting/fasting', {
  //     method: 'POST',
  //     body: {
  //       start_date: null,
  //       end_date: new Date(),
  //       start: false,
  //       ended: true,
  //       duration: 16,
  //       time_fasted: formattedTime
  //     }
  //   })
  //     .then(async () => {
  //       await refreshSession();

  //       isLoading.value = false;
  //     })
  //     .catch(async (error) => {
  //       console.log(error);
  //       errorMessage.value = error.statusMessage;
  //       isLoading.value = false;
  //     });


  //   if (timerInterval.value) clearInterval(timerInterval.value);
  // } else {
  //   // Start Fast
  //   $fetch('/api/user/fasting/fasting', {
  //     method: 'POST',
  //     body: {
  //       start_date: new Date(),
  //       start: true,
  //       ended: false,
  //       duration: 16,
  //       time_fasted: null
  //     }
  //   })
  //     .then(async () => {
  //       await refreshSession();
  //       isLoading.value = false;
  //     })
  //     .catch(async (error) => {
  //       console.log(error);
  //       errorMessage.value = error.statusMessage;
  //       isLoading.value = false;
  //     });
  // }
};

onBeforeMount(() => {
  // Start Fast
  startTime.value = props.data?.start_date
  isFasting.value = props.data?.start
  timerInterval.value = setInterval(() => {
    currentTime.value = new Date();
  }, 1000)
});

// Cleanup
// onUnmounted(() => {
//   if (timerInterval.value) clearInterval(timerInterval.value)
// })
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[500px] p-6 rounded-3xl relative overflow-hidden">

    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"></div>

    <div class="relative w-[300px] h-[300px] flex items-center justify-center mb-8">
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
        <div v-if="!isFasting" class="text-center animate-in fade-in zoom-in duration-500">

          <button @click="toggleFast"
            class="group relative flex items-center justify-center w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            <Play class="w-6 h-6 text-black fill-black ml-1 group-hover:text-indigo-600 transition-colors" />
          </button>
        </div>

        <div v-else class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-2">
            <component :is="currentStage.icon" class="w-4 h-4 animate-pulse" :class="currentStage.color" />
            <span class="text-xs font-bold uppercase tracking-widest text-zinc-400">{{ currentStage.name }}</span>
          </div>
          <h1 class="text-5xl font-medium text-white tracking-tighter tabular-nums drop-shadow-lg">
            {{ formattedTime }}
          </h1>
          <p class="text-zinc-500 text-xs mt-2">{{ currentStage.desc }}</p>
        </div>
      </div>
    </div>

    <div v-if="isFasting" class="w-full max-w-[280px] z-10">
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

      <button @click="toggleFast"
        class="w-full py-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all text-sm font-semibold flex items-center justify-center gap-2">
        <Square class="w-4 h-4 fill-current" />
        End Fast
      </button>
    </div>

  </div>
</template>

<style scoped>
/* Optional: Add custom fonts in your tailwind config/CSS */
</style>