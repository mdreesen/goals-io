<script setup lang="ts">
import { ref, computed } from 'vue'
import { BookOpen, CheckCircle, MoreHorizontal, ChevronRight, Bookmark } from 'lucide-vue-next'

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
    required: true
  },
});

console.log('book data here', props.data)

// --- Types ---
type BookStatus = 'reading' | 'read' | 'tbr'
type Book = {
  id: string;
  title: string;
  author: string;
  status: BookStatus;
  totalPages: number;
  currentPage: number;
  coverGradient: string; // CSS Gradients for abstract covers
}

// --- Mock Data ---
const books = ref<Book[]>([
  {
    id: 'b1',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    status: 'reading',
    totalPages: 432,
    currentPage: 210,
    coverGradient: 'bg-gradient-to-br from-stone-300 via-stone-400 to-stone-600'
  },
  {
    id: 'b2',
    title: 'Dune',
    author: 'Frank Herbert',
    status: 'reading',
    totalPages: 896,
    currentPage: 145,
    coverGradient: 'bg-gradient-to-br from-orange-400 via-amber-600 to-amber-900'
  },
  {
    id: 'b3',
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'read',
    totalPages: 320,
    currentPage: 320,
    coverGradient: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600'
  },
  {
    id: 'b4',
    title: 'Deep Work',
    author: 'Cal Newport',
    status: 'read',
    totalPages: 304,
    currentPage: 304,
    coverGradient: 'bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400'
  },
  {
    id: 'b5',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    status: 'tbr',
    totalPages: 496,
    currentPage: 0,
    coverGradient: 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600'
  }
])

// --- State ---
const selectedBookId = ref(books.value[0].id)

// --- Computeds ---
const activeBook = computed(() => books.value.find(b => b.id === selectedBookId.value) || books.value[0])

const progressPercent = computed(() => {
  return Math.round((activeBook.value.currentPage / activeBook.value.totalPages) * 100)
})

const isCompleted = computed(() => activeBook.value.status === 'read')

// Visual Segments for Progress Bar
const progressSegments = computed(() => {
  const total = 30
  const active = Math.round((progressPercent.value / 100) * total)
  return { total, active }
})

// --- Actions ---
const selectBook = (id: string) => {
  selectedBookId.value = id
}

const updateProgress = (amount: number) => {
  const book = books.value.find(b => b.id === selectedBookId.value)
  if (book && book.status === 'reading') {
    const newPage = Math.min(book.totalPages, Math.max(0, book.currentPage + amount))
    book.currentPage = newPage
    if (newPage === book.totalPages) book.status = 'read'
  }
}
</script>

<template>
  <div
    class="relative flex flex-col w-full max-w-3xl mx-auto rounded-[40px] overflow-hidden">

    <baseCarousel :data="props.data?.latestData" />
    <!-- <div
      class="absolute top-0 inset-x-0 h-[500px] opacity-20 blur-[120px] pointer-events-none transition-colors duration-1000 ease-in-out"
      :class="activeBook.coverGradient"></div>

    <div class="relative z-10 px-8 pt-8 pb-4 flex justify-between items-center">
      <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Ascend Library</span>
      <button class="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
        <MoreHorizontal class="w-4 h-4 text-zinc-400" />
      </button>
    </div> -->

    <!-- <div class="relative z-10 pl-8 mb-8">
      <div class="flex gap-4 overflow-x-auto pb-8 pt-4 pr-8 snap-x scrollbar-hide">
        <div v-for="book in books" :key="book.id" @click="selectBook(book.id)"
          class="flex-shrink-0 snap-center group cursor-pointer">
          <div class="w-20 h-28 rounded-lg shadow-lg mb-3 relative transition-all duration-300 transform" :class="[
            book.coverGradient,
            selectedBookId === book.id ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-zinc-950 -translate-y-2' : 'opacity-60 hover:opacity-100'
          ]">
            <div class="absolute left-1 top-0 bottom-0 w-[1px] bg-black/10"></div>

            <div v-if="book.status === 'read'"
              class="absolute -top-2 -right-2 bg-black rounded-full border border-zinc-800 p-1">
              <CheckCircle class="w-3 h-3 text-emerald-500" />
            </div>
          </div>

          <div class="w-20 text-center transition-opacity duration-300"
            :class="selectedBookId === book.id ? 'opacity-100' : 'opacity-0'">
            <p class="text-[10px] font-bold text-white truncate">{{ book.title }}</p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="flex-1 relative z-10 flex flex-col items-center px-8">

      <div class="perspective-1000 mb-8">
        <div
          class="w-40 h-60 rounded-r-2xl rounded-l-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform rotate-y-12 transition-all duration-700 ease-out border-l-2 border-white/10 flex flex-col justify-end p-4 relative overflow-hidden"
          :class="activeBook.coverGradient">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <h2 class="text-white font-bold text-lg leading-tight relative z-10">{{ activeBook.title }}</h2>
          <p class="text-white/80 text-xs font-medium relative z-10">{{ activeBook.author }}</p>

          <div v-if="isCompleted"
            class="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md p-2 rounded-full border border-emerald-500/50">
            <CheckCircle class="w-5 h-5 text-emerald-200" />
          </div>
        </div>
      </div>

      <div class="w-full space-y-6">

        <div class="grid grid-cols-3 gap-4 border-y border-white/5 py-6">
          <div class="text-center">
            <span class="block text-xl font-mono font-bold text-white">{{ activeBook.currentPage }}</span>
            <span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Current</span>
          </div>
          <div class="text-center border-x border-white/5">
            <span class="block text-xl font-mono font-bold text-white">{{ progressPercent }}%</span>
            <span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Absorbed</span>
          </div>
          <div class="text-center">
            <span class="block text-xl font-mono font-bold text-white">{{ activeBook.totalPages }}</span>
            <span class="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Total</span>
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex gap-[2px] h-2 w-full opacity-80">
            <div v-for="i in progressSegments.total" :key="i" class="flex-1 rounded-full transition-colors duration-300"
              :class="i <= progressSegments.active ? 'bg-white' : 'bg-zinc-800'"></div>
          </div>
          <div class="flex justify-between text-[10px] text-zinc-500 font-bold uppercase">
            <span>Start</span>
            <span>Finish</span>
          </div>
        </div>

      </div>
    </div> -->

    <!-- <div class="p-6 relative z-20">
      <div v-if="activeBook.status === 'reading'" class="flex gap-4">
        <button @click="updateProgress(10)"
          class="flex-1 h-14 bg-zinc-800 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors group">
          <BookOpen class="w-4 h-4 text-zinc-400 group-hover:text-white" />
          <span class="text-zinc-300 font-bold text-sm group-hover:text-white">Read 10 Pages</span>
        </button>

        <button
          class="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
          <ChevronRight class="w-6 h-6 text-black" />
        </button>
      </div>

      <div v-else-if="activeBook.status === 'read'"
        class="w-full h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center gap-2">
        <CheckCircle class="w-5 h-5 text-emerald-400" />
        <span class="text-emerald-400 font-bold text-sm uppercase tracking-wide">Completed</span>
      </div>

      <div v-else
        class="w-full h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center gap-2 group cursor-pointer hover:bg-indigo-500/20 transition-colors">
        <Bookmark class="w-5 h-5 text-indigo-400" />
        <span class="text-indigo-400 font-bold text-sm uppercase tracking-wide">Start Reading</span>
      </div>
    </div> -->

  </div>
</template>

<style scoped>
/* Utility to hide scrollbars but keep functionality */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Simple 3D Perspective for the Book Cover */
.perspective-1000 {
  perspective: 1000px;
}

.rotate-y-12 {
  transform: rotateY(-12deg) rotateX(5deg);
}
</style>