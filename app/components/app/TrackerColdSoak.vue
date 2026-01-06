<script setup lang="ts">
  import { ref, computed, onUnmounted } from 'vue'
  import { Snowflake, Play, Square, Plus, Minus, Trophy } from 'lucide-vue-next'
  
  // --- Configuration ---
  const BUFFER_TIME = 10 // Seconds to enter water
  const DEFAULT_GOAL = 180 // 3 minutes reference goal
  
  // --- State ---
  const status = ref<'idle' | 'buffer' | 'active' | 'completed'>('idle')
  const sessionDuration = ref(0) // Counts UP
  const bufferLeft = ref(BUFFER_TIME) // Counts DOWN
  const targetGoal = ref(DEFAULT_GOAL) // Reference for the visual ring
  const timerInterval = ref<NodeJS.Timeout | null>(null)
  
  // --- Logic ---
  
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(1, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }
  
  const startSequence = () => {
    status.value = 'buffer'
    bufferLeft.value = BUFFER_TIME
    sessionDuration.value = 0
    
    if (timerInterval.value) clearInterval(timerInterval.value)
    
    timerInterval.value = setInterval(() => {
      tick()
    }, 1000)
  }
  
  const tick = () => {
    // 1. Buffer Phase (Countdown)
    if (status.value === 'buffer') {
      if (bufferLeft.value > 0) {
        bufferLeft.value--
      } else {
        // Switch to Active
        status.value = 'active'
      }
      return
    }
  
    // 2. Active Phase (Count Up)
    if (status.value === 'active') {
      sessionDuration.value++
    }
  }
  
  const endSession = () => {
    status.value = 'completed'
    if (timerInterval.value) clearInterval(timerInterval.value)
  }
  
  const reset = () => {
    status.value = 'idle'
    sessionDuration.value = 0
    bufferLeft.value = BUFFER_TIME
    if (timerInterval.value) clearInterval(timerInterval.value)
  }
  
  const adjustGoal = (seconds: number) => {
    const newGoal = targetGoal.value + seconds
    if (newGoal >= 60 && newGoal <= 600) {
      targetGoal.value = newGoal
    }
  }
  
  // --- Visual Math (SVG Ring) ---
  const radius = 120
  const circumference = 2 * Math.PI * radius
  
  const progressOffset = computed(() => {
    if (status.value === 'buffer') return 0 // Full ring
    
    // Calculate percentage of goal reached
    const progress = Math.min(sessionDuration.value / targetGoal.value, 1)
    return circumference - (progress * circumference)
  })
  
  const isGoalMet = computed(() => {
    return sessionDuration.value >= targetGoal.value
  })
  
  onUnmounted(() => {
    if (timerInterval.value) clearInterval(timerInterval.value)
  })
  </script>
  
  <template>
    <div class="relative flex flex-col items-center justify-center min-h-150 w-full max-w-md mx-auto rounded-[3rem] p-8 overflow-hidden select-none">
      
      <div class="absolute inset-0 transition-all duration-1000 pointer-events-none"
        :class="status === 'active' ? 'bg-cyan-950/20' : 'bg-transparent'"
      ></div>
  
      <div class="z-10 w-full flex justify-between items-center mb-6">
        <div class="flex items-center gap-2">
          <Snowflake class="w-5 h-5 transition-colors duration-500" :class="isGoalMet ? 'text-yellow-400' : 'text-cyan-400'" />
          <span class="text-sm font-bold tracking-widest text-zinc-500 uppercase">Ascend Cold</span>
        </div>
        
        <div class="px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
          <span class="text-xs font-bold" :class="{
            'text-zinc-400': status === 'idle',
            'text-orange-400': status === 'buffer',
            'text-cyan-400': status === 'active' && !isGoalMet,
            'text-yellow-400': status === 'active' && isGoalMet,
          }">{{ status === 'idle' ? 'STANDBY' : status.toUpperCase() }}</span>
        </div>
      </div>
  
      <div class="relative z-10 mb-12">
        <svg class="w-75 h-75 transform -rotate-90 filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <circle cx="150" cy="150" :r="radius" stroke="currentColor" stroke-width="4" fill="transparent" class="text-zinc-800/50" />
          
          <circle 
            v-if="status === 'active' || status === 'completed'"
            cx="150" cy="150" :r="radius" 
            :stroke="isGoalMet ? '#facc15' : '#22d3ee'" 
            stroke-width="12" 
            fill="transparent"
            stroke-linecap="round"
            class="transition-all duration-1000 ease-linear"
            :style="{ strokeDasharray: circumference, strokeDashoffset: progressOffset }"
          />
  
          <circle 
            v-if="status === 'buffer'"
            cx="150" cy="150" :r="radius" 
            stroke="#fb923c" 
            stroke-width="8" 
            fill="transparent"
            class="animate-pulse"
            :style="{ strokeDasharray: circumference, strokeDashoffset: 0 }"
          />
        </svg>
  
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          
          <div v-if="status === 'buffer'" class="text-center animate-in zoom-in duration-300">
            <span class="text-orange-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 block">Enter Water</span>
            <span class="text-8xl font-black text-white tabular-nums tracking-tighter">{{ bufferLeft }}</span>
          </div>
  
          <div v-else-if="status === 'active' || status === 'completed'" class="text-center">
            <div v-if="isGoalMet" class="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">
               <Trophy class="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
            </div>
  
            <h1 class="text-7xl font-medium text-white tracking-tighter tabular-nums drop-shadow-2xl">
              {{ formatTime(sessionDuration) }}
            </h1>
            <p class="text-zinc-500 text-xs mt-4 font-medium tracking-widest uppercase">
              {{ isGoalMet ? 'Goal Surpassed' : 'Current Time' }}
            </p>
          </div>
  
          <div v-else class="flex flex-col items-center gap-6">
            <div class="text-center">
               <span class="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Target Goal</span>
               <div class="flex items-center justify-center gap-4 mt-2">
                  <button @click="adjustGoal(-30)" class="p-2 hover:bg-white/10 rounded-full text-zinc-500 hover:text-white transition-colors"><Minus class="w-5 h-5" /></button>
                  <span class="text-5xl text-white tracking-tight">{{ formatTime(targetGoal) }}</span>
                  <button @click="adjustGoal(30)" class="p-2 hover:bg-white/10 rounded-full text-zinc-500 hover:text-white transition-colors"><Plus class="w-5 h-5" /></button>
               </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="w-full max-w-70 z-20">
        
        <button 
          v-if="status === 'idle' || status === 'completed'"
          @click="status === 'completed' ? reset() : startSequence()"
          class="group relative w-full h-16 bg-white rounded-2xl flex items-center justify-center gap-3 overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
        >
          <span class="text-zinc-900 font-bold text-lg uppercase tracking-wide">
            {{ status === 'completed' ? 'Reset Tracker' : 'Start Session' }}
          </span>
          <Play v-if="status !== 'completed'" class="w-5 h-5 text-zinc-900 fill-zinc-900" />
        </button>
  
        <div v-else class="w-full">
           <button 
            @click="endSession"
            class="w-full h-16 rounded-2xl bg-zinc-800 border border-zinc-700 text-white font-bold flex items-center justify-center gap-2 hover:bg-zinc-700 active:scale-[0.98] transition-all"
          >
            <Square class="w-5 h-5 fill-current" />
            <span>Finish Soak</span>
          </button>
          <p v-if="status === 'buffer'" class="mt-4 text-center text-zinc-500 text-xs animate-pulse">
             Prepare to submerge...
          </p>
        </div>
  
      </div>
    </div>
  </template>