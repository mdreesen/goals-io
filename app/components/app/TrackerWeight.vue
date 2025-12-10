<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import { ChevronUp, ChevronDown, ArrowRight, X, TrendingDown, TrendingUp, Minus } from 'lucide-vue-next';

const { data: data, pending: pending_data } = await useFetch('/api/user/weight/weight', { lazy: true });
console.log(data.value?.data?.weight)

const props = defineProps({
  initialWeight: {
    type: Number,
    default: 185
  },
  targetWeight: {
    type: Number,
    default: 0
  }
});

// --- State ---
// We initialize "today's" weight with "yesterday's" for quick micro-adjustments
const currentWeight = ref(props.initialWeight);
const isCustomInput = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const hasSaved = ref(false);

// --- Computed ---
// Calculate the difference between now and previous
const delta = computed(() => {
  const diff = currentWeight.value - props.initialWeight;
  return Number(diff.toFixed(1)); // Keep it to 1 decimal
});

const isGain = computed(() => delta.value > 0);
const isLoss = computed(() => delta.value < 0);
const isStable = computed(() => delta.value === 0);

// Color coding based on movement towards target
// Assuming weight loss is the goal for this logic (can be flipped)
const trendColor = computed(() => {
  if (isStable.value) return 'text-neutral-500 bg-neutral-800';

  // If target is lower than current, loss is "good" (Emerald), gain is "bad" (Rose)
  // Simplified for Ascend: Green = Loss, Red = Gain
  return isLoss.value
    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    : 'text-rose-400 bg-rose-500/10 border-rose-500/20';
});

// --- Actions ---
const adjust = (amount: number) => {
  const newVal = currentWeight.value + amount;
  currentWeight.value = Number(newVal.toFixed(1));
  hasSaved.value = false;
};

const toggleInput = async () => {
  isCustomInput.value = !isCustomInput.value;
  if (isCustomInput.value) {
    await nextTick();
    inputRef.value?.focus();
  }
};

const saveEntry = () => {
  hasSaved.value = true;
  // In a real app, emit('save', currentWeight.value) here
  setTimeout(() => { hasSaved.value = false }, 2000); // Reset feedback
};
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

    <div class="relative w-full flex flex-col items-center justify-center mb-10 group">

      <div v-if="!isStable && !isCustomInput"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-neutral-800/50 select-none blur-[1px] transition-all duration-500"
        :class="isGain ? 'translate-y-[-60%]' : 'translate-y-[-40%]'">
        {{ props.initialWeight }}
      </div>

      <div class="relative z-10 flex items-baseline gap-1 cursor-pointer" @click="toggleInput">
        <template v-if="!isCustomInput">
          <span
            class="text-7xl font-bold text-white tracking-tighter tabular-nums transition-all duration-200 hover:scale-105 hover:text-indigo-200">
            {{ currentWeight.toFixed(1) }}
          </span>
          <span class="text-lg text-neutral-500 font-medium">lbs</span>
        </template>

        <div v-else class="relative w-48">
          <input ref="inputRef" v-model="currentWeight" type="number" step="0.1"
            class="w-full bg-transparent border-b-2 border-indigo-500 text-center text-6xl font-bold text-white focus:outline-none pb-2"
            @blur="isCustomInput = false" @keydown.enter="isCustomInput = false" />
        </div>
      </div>

      <div
        class="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-transparent transition-all duration-300"
        :class="trendColor">
        <TrendingDown v-if="isLoss" class="w-4 h-4" />
        <TrendingUp v-else-if="isGain" class="w-4 h-4" />
        <Minus v-else class="w-4 h-4" />

        <span class="text-sm font-bold tabular-nums">
          {{ isGain ? '+' : '' }}{{ delta }} lbs
        </span>
      </div>

    </div>

    <div class="w-full relative h-24">

      <transition name="slide-up" mode="out-in">

        <div v-if="!hasSaved" class="flex items-center justify-between px-4">

          <div class="flex flex-col gap-2">
            <button @click="adjust(-0.1)"
              class="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-700 active:scale-95 transition-all flex items-center justify-center">
              <ChevronDown class="w-6 h-6" />
            </button>
            <span class="text-[10px] text-center text-neutral-600">-0.1</span>
          </div>

          <button @click="saveEntry"
            class="w-20 h-20 rounded-full bg-indigo-600 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] active:scale-90 transition-all duration-300 flex items-center justify-center group">
            <ArrowRight class="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <div class="flex flex-col gap-2">
            <button @click="adjust(0.1)"
              class="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-700 active:scale-95 transition-all flex items-center justify-center">
              <ChevronUp class="w-6 h-6" />
            </button>
            <span class="text-[10px] text-center text-neutral-600">+0.1</span>
          </div>

        </div>

        <div v-else class="flex flex-col items-center justify-center w-full h-full">
          <div class="text-indigo-400 font-medium text-sm tracking-wide animate-pulse">
            LOGGED FOR TODAY
          </div>
          <button @click="hasSaved = false"
            class="text-neutral-600 text-xs mt-2 hover:text-white underline decoration-neutral-700 underline-offset-4">
            Undo
          </button>
        </div>

      </transition>
    </div>

  </div>
</template>

<style scoped>
/* Smooth Input Handling */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: auto;
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>