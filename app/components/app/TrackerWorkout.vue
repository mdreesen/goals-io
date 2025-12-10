<script setup lang="ts">
  import { ref, computed, nextTick } from 'vue';
  import { 
    Plus, X, Dumbbell, Activity, Zap, 
    Clock, Flame, ArrowRight, Trash2, Check 
  } from 'lucide-vue-next';
  
  // --- Types ---
  type WorkoutType = 'strength' | 'cardio' | 'mobility';
  
  interface Workout {
    id: string;
    title: string;
    duration: string;
    type: WorkoutType;
    intensity: number; // 1 (Low) to 3 (High)
    completed: boolean;
  }
  
  // --- State: Data ---
  const workouts = ref<Workout[]>([
    { id: '1', title: 'Heavy Push Day', duration: '60m', type: 'strength', intensity: 3, completed: false },
    { id: '2', title: 'Zone 2 Jog', duration: '30m', type: 'cardio', intensity: 2, completed: true },
  ]);
  
  // --- State: UI ---
  const isAdding = ref(false);
  const activePressId = ref<string | null>(null);
  const pressProgress = ref(0);
  let animationFrame: number;
  
  // --- State: New Entry Form ---
  const newTitle = ref('');
  const newDuration = ref('');
  const newType = ref<WorkoutType>('strength');
  const newIntensity = ref(2);
  const titleInput = ref<HTMLInputElement | null>(null);
  
  // --- Computed ---
  const completedCount = computed(() => workouts.value.filter(w => w.completed).length);
  const progressWidth = computed(() => (workouts.value.length ? (completedCount.value / workouts.value.length) * 100 : 0));
  
  // --- Actions: Interaction ---
  const startAdding = async () => {
    isAdding.value = true;
    newTitle.value = '';
    newDuration.value = '';
    newType.value = 'strength';
    newIntensity.value = 2;
    await nextTick();
    titleInput.value?.focus();
  };
  
  const saveWorkout = () => {
    if (!newTitle.value) return;
    
    workouts.value.push({
      id: Date.now().toString(),
      title: newTitle.value,
      duration: newDuration.value || 'N/A',
      type: newType.value,
      intensity: newIntensity.value,
      completed: false
    });
    isAdding.value = false;
  };
  
  const removeWorkout = (id: string) => {
    workouts.value = workouts.value.filter(w => w.id !== id);
  };
  
  // --- Actions: Long Press Logic ---
  const startPress = (id: string) => {
    const w = workouts.value.find(item => item.id === id);
    if (!w || w.completed) return;
  
    activePressId.value = id;
    pressProgress.value = 0;
  
    const animate = () => {
      if (activePressId.value !== id) return;
      pressProgress.value += 2; // Speed of fill
      
      if (pressProgress.value >= 100) {
        w.completed = true;
        activePressId.value = null;
      } else {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
  };
  
  const cancelPress = () => {
    activePressId.value = null;
    pressProgress.value = 0;
    cancelAnimationFrame(animationFrame);
  };
  
  // --- Helpers ---
  const getTypeColor = (type: WorkoutType) => {
    switch (type) {
      case 'strength': return 'text-orange-400 border-orange-500/30';
      case 'cardio': return 'text-blue-400 border-blue-500/30';
      case 'mobility': return 'text-emerald-400 border-emerald-500/30';
    }
  };
  </script>
  
  <template>
    <div class="relative flex flex-col items-center w-full max-w-sm mx-auto min-h-[600px] p-6 font-sans overflow-hidden bg-black/50 rounded-[40px] border border-neutral-900 shadow-2xl">
      
      <div class="w-full mb-8 z-10 transition-all duration-500" :class="{ 'opacity-20 blur-sm': isAdding }">
        <div class="flex justify-between items-end mb-4">
          <div>
            <h2 class="text-white text-2xl font-bold tracking-tight">Ascend</h2>
            <p class="text-neutral-500 text-xs font-medium uppercase tracking-widest mt-1">Daily Protocol</p>
          </div>
          <div class="text-3xl font-bold text-white/20 tabular-nums">
            {{ completedCount }}<span class="text-lg text-neutral-600">/{{ workouts.length }}</span>
          </div>
        </div>
        
        <div class="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            :style="{ width: `${progressWidth}%` }"
          />
        </div>
      </div>
  
      <div class="w-full flex-1 space-y-3 z-10 overflow-y-auto no-scrollbar transition-all duration-500" :class="{ 'opacity-20 blur-sm pointer-events-none': isAdding }">
        
        <div 
          v-for="item in workouts" 
          :key="item.id"
          class="relative group w-full h-20"
          @mousedown="startPress(item.id)"
          @mouseup="cancelPress"
          @mouseleave="cancelPress"
          @touchstart.prevent="startPress(item.id)"
          @touchend="cancelPress"
        >
          <button 
             @click.stop="removeWorkout(item.id)"
             class="absolute -right-12 top-0 h-full w-12 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 z-30 bg-neutral-900/80 rounded-r-2xl"
          >
            <Trash2 class="w-4 h-4" />
          </button>
  
          <div 
            class="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300"
            :class="{ 'border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]': item.completed }"
          >
            <div 
               v-if="activePressId === item.id"
               class="absolute top-0 left-0 h-full bg-neutral-800 transition-none"
               :style="{ width: `${pressProgress}%` }"
            />
  
            <div 
              class="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 transition-opacity duration-500"
              :class="{ 'opacity-100': item.completed }"
            />
  
            <div class="relative z-10 h-full px-5 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300"
                  :class="item.completed ? 'bg-white/20 border-white/20 text-white' : `bg-transparent ${getTypeColor(item.type)}`"
                >
                  <component :is="item.type === 'strength' ? Dumbbell : item.type === 'cardio' ? Activity : Zap" class="w-4 h-4" />
                </div>
                
                <div class="flex flex-col">
                  <span class="text-sm font-semibold transition-colors" :class="item.completed ? 'text-white' : 'text-neutral-200'">{{ item.title }}</span>
                  <span class="text-xs transition-colors" :class="item.completed ? 'text-white/80' : 'text-neutral-500'">{{ item.duration }} • Level {{ item.intensity }}</span>
                </div>
              </div>
  
              <div class="w-6 h-6 flex items-center justify-center">
                <transition name="pop">
                  <Check v-if="item.completed" class="w-5 h-5 text-white stroke-[3]" />
                </transition>
              </div>
            </div>
          </div>
        </div>
  
        <button 
          @click="startAdding"
          class="w-full py-5 rounded-2xl border border-dashed border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all flex items-center justify-center gap-2 group"
        >
          <Plus class="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span class="text-sm font-medium">Add New Protocol</span>
        </button>
  
      </div>
  
      <transition name="slide-up">
        <div v-if="isAdding" class="absolute inset-x-0 bottom-0 h-[85%] bg-[#0A0A0A] rounded-t-[30px] border-t border-neutral-800 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] z-40 p-6 flex flex-col">
          
          <div class="w-full flex justify-center mb-6" @click="isAdding = false">
             <div class="w-12 h-1 bg-neutral-800 rounded-full" />
          </div>
  
          <div class="flex-1 flex flex-col gap-8">
            
            <div class="space-y-2">
              <label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Protocol Name</label>
              <input 
                ref="titleInput"
                v-model="newTitle"
                type="text" 
                placeholder="e.g. Upper Body Push" 
                class="w-full bg-transparent text-2xl font-bold text-white placeholder:text-neutral-700 focus:outline-none focus:placeholder:text-neutral-800 transition-colors"
              />
            </div>
  
            <div class="space-y-3">
               <label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Focus Area</label>
               <div class="flex gap-3">
                 <button 
                   v-for="t in ['strength', 'cardio', 'mobility'] as WorkoutType[]" 
                   :key="t"
                   @click="newType = t"
                   class="flex-1 py-3 rounded-xl border flex flex-col items-center gap-2 transition-all duration-200"
                   :class="newType === t ? 'bg-neutral-800 border-white text-white' : 'bg-transparent border-neutral-800 text-neutral-600 hover:border-neutral-600'"
                 >
                   <component :is="t === 'strength' ? Dumbbell : t === 'cardio' ? Activity : Zap" class="w-5 h-5" />
                   <span class="text-[10px] uppercase font-bold">{{ t }}</span>
                 </button>
               </div>
            </div>
  
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Duration</label>
                <div class="flex items-center gap-2 border-b border-neutral-800 pb-2 focus-within:border-white transition-colors">
                   <Clock class="w-4 h-4 text-neutral-500" />
                   <input 
                     v-model="newDuration"
                     type="text" 
                     placeholder="45m" 
                     class="w-full bg-transparent text-white focus:outline-none"
                   />
                </div>
              </div>
  
              <div class="space-y-2">
                <label class="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Intensity</label>
                <div class="flex items-center justify-between pt-1">
                   <button 
                     v-for="i in 3" 
                     :key="i"
                     @click="newIntensity = i"
                     class="w-8 h-8 rounded-full flex items-center justify-center transition-all border"
                     :class="newIntensity === i ? 'bg-orange-500 border-orange-500 text-black shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'border-neutral-800 text-neutral-600 hover:border-neutral-600'"
                   >
                     <Flame class="w-3 h-3" :class="{ 'fill-black': newIntensity === i }" />
                   </button>
                </div>
              </div>
            </div>
  
          </div>
  
          <div class="mt-auto flex items-center gap-4">
            <button 
              @click="isAdding = false" 
              class="p-4 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X class="w-6 h-6" />
            </button>
            
            <button 
              @click="saveWorkout"
              :disabled="!newTitle"
              class="flex-1 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span>Create Protocol</span>
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>
  
        </div>
      </transition>
  
      <transition name="fade">
        <div v-if="isAdding" class="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-30 pointer-events-none" />
      </transition>
  
    </div>
  </template>
  
  <style scoped>
  /* Nuxt Transitions */
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
  }
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .pop-enter-active {
    animation: pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  @keyframes pop {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>