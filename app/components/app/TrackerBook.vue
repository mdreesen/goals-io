<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { selection_book_kinds, selection_save } from '~/utils/dropdowns/selections';
import { getLocalTimeZone, today, CalendarDate } from '@internationalized/date'
import { useFormatDate } from '~/utils/date';

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

let addBook = ref(false)
const isLoading = ref(false);
let errorMessage = ref('');
const formattedDate = ref();

let date = ref(new CalendarDate(today(getLocalTimeZone()).year, today(getLocalTimeZone()).month, today(getLocalTimeZone()).day)) as any;

const { fetch: refreshSession } = useUserSession();

const input = reactive({
  book_title: '',
  kind_of_book: '',
  book_author: '',
  book_start_date: formattedDate.value,
  notes: '',
  booklist: false,
});

watch(date, () => {
  formattedDate.value = useFormatDate(date.value.toDate(getLocalTimeZone()));
  input.book_start_date = formattedDate.value
}, { immediate: true });

const useBookForm = () => {
  return addBook.value = true
};
const closeBookForm = () => {
  return addBook.value = false
}

async function log() {
  isLoading.value = true;
  $fetch('/api/user/books/books', {
    method: 'POST',
    body: input
  })
    .then(async () => {
      await refreshSession();
      await refreshNuxtData();

      isLoading.value = false;
    })
    .catch(async (error) => {
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });
};
</script>

<template>
  <div class="relative flex flex-col w-full max-w-3xl mx-auto overflow-hidden">

    <baseCarousel :data="props.data?.latestData" />

    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

      <div v-if="addBook" class="w-full relative mb-4">

        <transition name="slide-up" mode="out-in">

          <form @submit.prevent="log" class="space-y-6">
            <div v-motion="{ ...inputVarient() }">
              <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Kind of book</label>

              <select id="status-select" v-model="input.kind_of_book" required
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option disabled value="">Kind of book</option>
                <option v-for="kind in selection_book_kinds" :value="kind.value" :key="kind.label">
                  {{ kind.label }}
                </option>
              </select>
            </div>

            <div v-motion="{ ...inputVarient() }">
              <baseLabel text="Save for future reads" />
              <select id="status-select" v-model="input.booklist" required
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option disabled value="">No</option>
                <option v-for="status in selection_save" :value="status.value" :key="status.label">
                  {{ status.label }}
                </option>
              </select>
            </div>

            <div v-motion="{ ...inputVarient() }">
              <baseLabel text="Title" />
              <input id="text" type="text" v-model="input.book_title" placeholder="Title" required
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div v-motion="{ ...inputVarient() }">
              <baseLabel text="Author" />
              <input id="text" type="text" v-model="input.book_author" placeholder="Author" required
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div v-motion="{ ...inputVarient() }">
              <baseLabel text="Notes" />
              <textarea id="text" type="text" v-model="input.notes" placeholder="Book notes"
                class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div v-motion="{ ...inputVarient() }">
              <baseLabel text="Start" />
              <UInputDate v-model="date" icon="i-lucide-calendar" />
            </div>

            <baseButtonSubmit text="Save" :isLoading="isLoading" />
          </form>
        </transition>
      </div>

      <div>
        <button v-if="!addBook" class="h-4 w-full" @click="useBookForm()">
          <baseLabel text="Add Book" />
          <baseIcon iconName="material-symbols:book-4-spark-rounded" size="40" />
        </button>

        <button v-if="addBook" class="h-4 w-full" @click="closeBookForm()">
          <baseLabel text="Close" />
          <baseIcon iconName="material-symbols:arrow-circle-up-outline-rounded" size="40" />
        </button>
      </div>

    </div>
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