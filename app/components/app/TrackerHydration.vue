<script setup lang="ts">
  import { ref, computed, nextTick } from 'vue';
  import { Plus, Minus, Check, Keyboard, X, ArrowRight } from 'lucide-vue-next';
  
  // --- Props ---
  interface Props {
    goal?: number; // Daily goal in oz
  }
  const props = withDefaults(defineProps<Props>(), {
    goal: 100,
  });
  
  // --- State ---
  const currentOz = ref(0);
  const showCustomInput = ref(false);
  const customAmount = ref<number | null>(null);
  const inputRef = ref<HTMLInputElement | null>(null);
  
  // --- Computed ---
  const percentage = computed(() => {
    return Math.min((currentOz.value / props.goal) * 100, 100);
  });
  
  // Calculate wave position (inverted for CSS 'top')
  const wavePosition = computed(() => 100 - percentage.value);
  const isComplete = computed(() => percentage.value >= 100);
  
  // --- Actions ---
  const adjustWater = (amount: number) => {
    const newVal = currentOz.value + amount;
    currentOz.value = Math.max(0, Math.min(newVal, props.goal + 50)); 
  };
  
  // Switch to Custom Input Mode
  const toggleCustom = async () => {
    showCustomInput.value = !showCustomInput.value;
    if (showCustomInput.value) {
      // Wait for DOM update then focus input
      await nextTick();
      inputRef.value?.focus();
    } else {
      customAmount.value = null;
    }
  };
  
  // Submit Custom Amount
  const submitCustom = () => {
    if (customAmount.value && customAmount.value > 0) {
      adjustWater(customAmount.value);
      showCustomInput.value = false;
      customAmount.value = null;
    }
  };
  </script>
  
  <template>
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8">
  
      <div 
        class="relative w-64 h-64 group cursor-pointer select-none" 
        @click="!showCustomInput && adjustWater(8)"
      >
        
        <div 
          class="absolute inset-0 rounded-full border border-neutral-800 transition-colors duration-500"
          :class="{ 'border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)]': isComplete }"
        />
  
        <div class="absolute inset-2 rounded-full overflow-hidden bg-neutral-900 border-4 border-neutral-900 shadow-inner isolation-isolate transform transition-transform active:scale-95 duration-200">
          
          <div class="absolute inset-0 flex flex-col items-center justify-center z-10 mix-blend-difference pointer-events-none">
             <span class="text-6xl font-bold text-white tabular-nums tracking-tighter">
               {{ Math.round(currentOz) }}
             </span>
             <span class="text-sm font-medium text-neutral-400 mt-1">
               / {{ props.goal }} oz
             </span>
          </div>
  
          <div 
            class="absolute left-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
            :style="{ top: `${wavePosition}%` }"
          >
            <div class="wave absolute left-1/2 -top-[160%] w-[200%] h-[200%] -ml-[100%] rounded-[40%] bg-white opacity-10 animate-spin-slow" />
            <div class="wave absolute left-1/2 -top-[165%] w-[200%] h-[200%] -ml-[100%] rounded-[45%] bg-blue-500 animate-spin-medium" />
          </div>
  
          <transition name="fade">
            <div v-if="isComplete" class="absolute inset-0 z-20 flex items-center justify-center bg-emerald-500/20 backdrop-blur-[2px]">
              <div class="bg-emerald-500 text-black p-3 rounded-full shadow-lg animate-pop">
                <Check class="w-8 h-8 stroke-[3]" />
              </div>
            </div>
          </transition>
  
        </div>
      </div>
  
      <div class="mt-12 w-full h-20 relative">
        
        <Transition mode="out-in" name="slide-up">
          
          <div v-if="!showCustomInput" class="flex items-center justify-center gap-8 w-full absolute top-0 left-0">
            
            <button 
              @click.stop="adjustWater(-8)"
              class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors focus:outline-none"
              aria-label="Remove water"
            >
              <Minus class="w-5 h-5" />
            </button>
  
            <div class="flex flex-col items-center gap-2">
              <button 
                @click.stop="adjustWater(8)"
                class="w-16 h-16 rounded-2xl bg-white text-black hover:bg-neutral-200 active:scale-90 transition-all duration-200 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Plus class="w-8 h-8" />
              </button>
              <span class="text-[10px] text-neutral-500 font-medium">+8oz</span>
            </div>
  
            <button 
              @click="toggleCustom"
              class="w-12 h-12 rounded-full flex items-center justify-center border border-neutral-800 text-neutral-500 hover:text-blue-400 hover:border-blue-500/30 transition-colors focus:outline-none"
              aria-label="Custom Amount"
            >
              <Keyboard class="w-5 h-5" />
            </button>
          </div>
  
          <div v-else class="flex items-center justify-center gap-4 w-full absolute top-0 left-0 px-4">
            
            <button 
              @click="toggleCustom"
              class="p-3 rounded-full text-neutral-500 hover:bg-neutral-800 hover:text-white transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
  
            <div class="flex-1 relative group">
              <input 
                ref="inputRef"
                v-model="customAmount"
                type="number" 
                placeholder="0" 
                @keydown.enter="submitCustom"
                class="w-full bg-transparent border-b-2 border-neutral-700 text-center text-3xl font-bold text-white py-2 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-neutral-700 appearance-none"
              />
              <span class="absolute right-2 bottom-3 text-neutral-500 text-sm font-medium">oz</span>
            </div>
  
            <button 
              @click="submitCustom"
              :disabled="!customAmount"
              class="p-3 rounded-full bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
            >
              <ArrowRight class="w-5 h-5" />
            </button>
  
          </div>
        </Transition>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Wave Animation Mechanics */
  .animate-spin-slow { animation: spin 8s infinite linear; }
  .animate-spin-medium { animation: spin 6s infinite linear; }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Slide Up Transition for Controls */
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
  
  .slide-up-enter-to,
  .slide-up-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Completion Pop Animation */
  .animate-pop { animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  
  @keyframes pop {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  /* Fade Transition */
  .fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
  .fade-enter-from, .fade-leave-to { opacity: 0; }
  
  .isolation-isolate { isolation: isolate; }
  
  /* Hide Input Number Arrows (Chrome, Safari, Edge, Opera) */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Hide Input Number Arrows (Firefox) */
  input[type=number] {
    -moz-appearance: textfield;
    appearance: auto;
  }
  </style>