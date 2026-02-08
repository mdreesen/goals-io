<script setup lang="ts">
import { ref } from 'vue';
import { selection_book_kinds, selection_status_book } from '~/utils/dropdowns/selections';
import type { BookType } from '~/types/books';

definePageMeta({
    layout: 'authenticated',
});

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch<BookType>(`/api/user/books/${route.params.id}`);
const toast = useToast();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
    book_author: "",
    book_image: "",
    book_start_date: "",
    status: "",
    book_title: "",
    booklist: false,
    kind_of_book: "",
    notes: ""
});

if (data.value) {
    input.book_author = data.value.book_author;
    input.book_start_date = data.value.book_start_date;
    input.book_image = data.value.book_image;
    input.book_title = data.value.book_title;
    input.booklist = data.value.booklist === 'true';
    input.kind_of_book = data.value.kind_of_book;
    input.notes = data.value.notes;
    input.status = data.value.status
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/books/${route.params.id}/books`, {
        method: 'PUT',
        body: input
    })
        .then(async () => {
            await refreshNuxtData(['books', 'chart_book']);
            await navigateTo('/dashboard/mind');
        })
        .catch(async (error) => {
            toast.error("Failed to update", 'Try again');
            console.log(error);
            errorMessage.value = error.statusMessage;
            isLoading.value = false;
        });
};

async function delete_log() {
    isLoading.value = true;
    $fetch(`/api/user/books/${route.params.id}`, {
        method: 'DELETE',
        body: input
    })
        .then(async () => {
            await refreshNuxtData(['books', 'chart_book']);
            await navigateTo('/dashboard/mind');
        })
        .catch(async (error) => {
            toast.error("Failed to delete", 'Try again');
            console.log(error);
            errorMessage.value = error.statusMessage;
            isLoading.value = false;
        });
};
</script>
<template>
    <div v-if="!pending_data" class="relative flex flex-col w-full max-w-3xl p-3 mx-auto overflow-hidden">

        <div class="flex justify-center py-4">
            <NuxtImg class="object-cover h-60" :src="data?.book_image" format="webp" preload loading="eager"
                fetch-priority="high" />
        </div>

        <transition name="slide-up" mode="out-in">
            <form @submit.prevent="log" class="space-y-6">
                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Kind of book" />

                    <select id="status-select" v-model="input.kind_of_book" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option disabled value="">Kind of book</option>
                        <option v-for="kind in selection_book_kinds" :value="kind.value" :key="kind.label">
                            {{ kind.label }}
                        </option>
                    </select>
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Status" />
                  <select id="status-select" v-model="input.status" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option :value="data.status" disabled hidden>{{ data.status ? "Completed" : "Currently reading"}}</option>
                    <option v-for="status in selection_status_book" :value="status.value" :key="status.label">
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

                <div class="flex flex-col gap-8 pb-4">
                    <baseButtonSubmit text="Save" :isLoading="isLoading" />
                    <baseButtonCancel text="Cancel" path="/dashboard/mind" :isLoading="isLoading" />
                    <baseButtonDelete @click="delete_log" text="Delete" :isLoading="isLoading" />
                </div>
            </form>
        </transition>
    </div>
</template>