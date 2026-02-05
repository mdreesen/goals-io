<script setup lang="ts">
import { ref } from 'vue';
import { selection_book_kinds } from '~/utils/dropdowns/selections';
import { formatDate } from '~/utils/date';

await useFetch('/api/user/books/books', { key: 'books' });
const { data } = useNuxtData('books');
const toast = useToast();

const isLoading = ref(false);
let errorMessage = ref('');
const open = ref(false)

const { fetch: refreshSession } = useUserSession();

const input = reactive({
  book_title: '',
  kind_of_book: '',
  book_author: '',
  book_start_date: formatDate(),
  notes: '',
  booklist: false,
  status: false
});

async function log() {
  isLoading.value = true;
  $fetch('/api/user/books/books', {
    method: 'POST',
    body: input
  })
    .then(async () => {
      await refreshSession();
      await refreshNuxtData();
      open.value = false;
      isLoading.value = false;
    })
    .catch(async (error) => {
      toast.error("Failed to create", 'Try again');
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });
};
</script>

<template>
  <div class="relative flex flex-col w-full max-w-3xl mx-auto overflow-hidden">

    <section v-if="data?.current.length >= 1">
      <baseSectionHeader text="Currently Reading" />
      <baseCarousel :data="data?.current" />
    </section>

    <section v-if="data?.latestData.length >= 1">
      <baseSectionHeader text="Latest Reads" />
      <baseCarousel :data="data?.latestData.reverse()" />
    </section>

    <div class="flex flex-col items-center justify-center w-full   mx-auto p-8 font-sans">

      <div class="w-full relative mb-4 flex flex-col justify-center items-center gap-4">

        <transition name="slide-up" mode="out-in">

          <UDrawer title="Log a new book" v-model:open="open">

            <baseButtonDrawer text="Add book" icon="material-symbols:book-4-spark-rounded" />
            <baseButtonNav path="/dashboard/mind/all/books" />

            <template #body>
              <form @submit.prevent="log" class="space-y-6">
                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Kind of book" />

                  <select id="status-select" v-model="input.kind_of_book" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected hidden>Kind of book</option>
                    <option v-for="kind in selection_book_kinds" :value="kind.value" :key="kind.label">
                      {{ kind.label }}
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

                <div class="text-center">
                  <baseButtonSubmit text="Save" :isLoading="isLoading" />
                </div>
              </form>
            </template>
          </UDrawer>


        </transition>
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