<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { ChevronDown } from 'lucide-vue-next';
import { useYear } from '~/stores/useYear';

// --- Props ---
const props = defineProps({
    data: { type: Array, default: () => [] },
    modelValue: { type: Number, required: true },
    startYear: { type: Number, default: 2020 },
    endYear: { type: Number, default: new Date().getFullYear() + 2 }
})

const emit = defineEmits(['update:modelValue'])

// --- State ---
const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null);

// --- Computed Years ---
// const years = computed(() => {
//   const list = []
//   // Descending order (Newest first)
//   for (let y = props.endYear; y >= props.startYear; y--) {
//     list.push(y)
//   }
//   return list
// })

// --- Actions ---
const toggle = async () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        await nextTick()
        scrollToActive()
    }
}

const select = (year: number) => {
    emit('update:modelValue', year);
    useYear().set(year);
    isOpen.value = false
}

// Auto-scroll to the currently selected year when opening
const scrollToActive = () => {
    if (!listRef.value) return
    const activeEl = listRef.value.querySelector('[data-active="true"]')
    if (activeEl) {
        activeEl.scrollIntoView({ block: 'center', behavior: 'auto' })
    }
}

// Click Outside Handler
const closeOnClickOutside = (e: MouseEvent) => {
    if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
        isOpen.value = false
    }
}

onMounted(() => document.addEventListener('click', closeOnClickOutside))
onUnmounted(() => document.removeEventListener('click', closeOnClickOutside))
</script>

<template>
    <div ref="containerRef" class="relative inline-block text-left font-sans select-none z-50">

        <button @click="toggle"
            class="group flex items-center gap-2 pl-4 pr-3 py-2 backdrop-blur-sm border rounded-full transition-all duration-300 hover:bg-zinc-800"
            :class="{ 'bg-zinc-800 border-white/20': isOpen }">
            <span class="text-sm font-medium transition-colors tabular-nums">
                {{ new Date().getFullYear() }}
            </span>
            <ChevronDown class="w-4 h-4 transition-transform duration-300"
                :class="{ '-rotate-180': isOpen }" />
        </button>

        <Transition enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0 -translate-y-2"
            enter-to-class="transform scale-100 opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform scale-100 opacity-100 translate-y-0"
            leave-to-class="transform scale-95 opacity-0 -translate-y-2">
            <div v-if="isOpen"
                class="absolute top-full left-0 mt-2 w-32 max-h-60 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col">
                <div ref="listRef" class="overflow-y-auto scrollbar-hide py-1">
                    <button v-for="year in props.data" :key="year" :data-active="year === modelValue" @click="select(year)"
                        class="w-full text-left px-4 py-2.5 text-sm transition-colors relative flex items-center justify-between group"
                        :class="year === modelValue ? 'text-white bg-white/5' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'">
                        <span class="font-medium">{{ year }}</span>

                        <span v-if="year === modelValue"
                            class="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
                    </button>
                </div>
            </div>
        </Transition>

    </div>
</template>

<style scoped>
/* Hide Scrollbar but allow scrolling */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>