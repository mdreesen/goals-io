<script setup lang="ts">
    import { ref, computed, onMounted, onUnmounted } from 'vue'
    import { Calendar, ChevronDown, TrendingUp, BarChart3 } from 'lucide-vue-next'
    
    // --- Types ---
    type YearData = {
      year: number
    }
    
    // --- Props (Optional) ---
    const emit = defineEmits(['update:year'])
    
    // --- Mock Data ---
    const availableYears: YearData[] = [
      { year: 2025 },
      { year: 2024 }, // Peak
      { year: 2023 },
      { year: 2022 },
    ];
    const props = defineProps({
        data: {
            type: Array,
            default: () => []
        }
    });
    
    // --- State ---
    const isOpen = ref(false)
    const selectedYear = ref<YearData>(availableYears[0])
    const dropdownRef = ref<HTMLElement | null>(null)
    
    // --- Actions ---
    const toggle = () => isOpen.value = !isOpen.value
    
    const select = (year: YearData) => {
      selectedYear.value = year
      isOpen.value = false
      emit('update:year', year.year)
    }
    
    // Click Outside Logic
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
        isOpen.value = false
      }
    }
    
    onMounted(() => document.addEventListener('click', handleClickOutside))
    onUnmounted(() => document.removeEventListener('click', handleClickOutside))
    </script>
    
    <template>
      <div ref="dropdownRef" class="relative w-50 font-sans select-none z-50">
        
        <button 
          @click="toggle"
          class="w-full h-14 bg-zinc-900/50 backdrop-blur-md border rounded-2xl flex items-center justify-between px-4 transition-all duration-300 group hover:border-white/20"
          :class="isOpen ? 'border-white/20 bg-zinc-900' : 'border-white/5'"
        >
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/50 transition-colors">
              <Calendar class="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            </div>
            
            <div class="text-left">
              <span class="block text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Year</span>
              <span class="block text-lg font-bold text-white leading-none">{{ selectedYear.year }}</span>
            </div>
          </div>
    
          <ChevronDown 
            class="w-5 h-5 text-zinc-500 transition-transform duration-300"
            :class="isOpen ? 'rotate-180 text-white' : ''" 
          />
        </button>
    
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0 -translate-y-2"
          enter-to-class="transform scale-100 opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform scale-100 opacity-100 translate-y-0"
          leave-to-class="transform scale-95 opacity-0 -translate-y-2"
        >
          <div 
            v-if="isOpen"
            class="absolute top-full left-0 right-0 mt-2 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2"
          >
            <div class="space-y-1">
              <div 
                v-for="item in availableYears" 
                :key="item.year"
                @click="select(item)"
                class="relative group w-full p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:bg-white/5"
                :class="selectedYear.year === item.year ? 'bg-white/5' : ''"
              >
                <div 
                  v-if="selectedYear.year === item.year"
                  class="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20"
                ></div>
    
                <div class="relative flex items-center gap-3 z-10">
                  <div>
                    <span 
                      class="block text-lg font-medium transition-colors"
                      :class="selectedYear.year === item.year ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'"
                    >
                      {{ item.year }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
    
      </div>
    </template>
    
    <style scoped>
    /* Optional: specific scrollbar styling if the list gets long */
    </style>