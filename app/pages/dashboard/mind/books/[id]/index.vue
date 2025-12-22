<script setup lang="ts">
import { ref, computed } from 'vue';
import { selection_book_kinds, selection_save } from '~/utils/dropdowns/selections';

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch(`/api/user/books/${route.params.id}`, { lazy: true });

const isLoading = ref(false);
let errorMessage = ref('');

const { fetch: refreshSession } = useUserSession()

const input = reactive({
    book_title: data.value?.book_title,
    kind_of_book: data.value?.kind_of_book,
    book_author: data.value?.book_author,
    book_start_date: data.value?.book_start_date,
    book_end_date: data.value?.book_end_date,
    notes: data.value?.notes,
    booklist: data.value?.booklist,
});

async function log() {
    isLoading.value = true;
    $fetch('/api/user/books/books', {
        method: 'POST',
        body: input
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
};
</script>
<template>
    <div class="relative flex flex-col w-full max-w-3xl p-3 mx-auto overflow-hidden">

        <transition name="slide-up" mode="out-in">

            <!-- <div>
            <NuxtImg class="object-cover w-40 h-60" :src="item?.book_image" />
        </div> -->
            <form v-if="!pending_data" @submit.prevent="log" class="space-y-6">
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
                    <baseDatePicker v-model="input.book_start_date" />
                </div>

                <baseButtonSubmit text="Save" :isLoading="isLoading" />
            </form>
        </transition>
    </div>
</template>