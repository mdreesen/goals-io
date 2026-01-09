<script setup lang="ts">
import { ref, watch } from 'vue';
import { selection_book_kinds, selection_save } from '~/utils/dropdowns/selections';
import { getLocalTimeZone, CalendarDate } from '@internationalized/date'
import { useFormatDate, yearMonthDayFormat } from '~/utils/date';
import type { BookType } from '~/types/books';

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch<BookType>(`/api/user/books/${route.params.id}`);
const { fetch: refreshSession } = useUserSession();
const toast = useToast();

const isLoading = ref(false);
let errorMessage = ref('');
const dateStart = ref(new CalendarDate(yearMonthDayFormat(data.value.book_start_date).year, yearMonthDayFormat(data.value.book_start_date).month, yearMonthDayFormat(data.value.book_start_date).day)) as any;
const dateEnd = ref(data.value.book_end_date || data.value.book_end_date === '' ? new CalendarDate(yearMonthDayFormat(data.value.book_end_date).year, yearMonthDayFormat(data.value.book_end_date).month, yearMonthDayFormat(data.value.book_end_date).day) : '') as any;
const useEndDate = ref();
const formattedStartDate = ref();
const formattedEndDate = ref('');

const input = reactive({
    book_author: "",
    book_image: "",
    book_start_date: formattedStartDate.value,
    book_end_date: formattedEndDate.value,
    book_title: "",
    booklist: false,
    kind_of_book: "",
    notes: ""
});


watch(dateEnd, () => {
    if (dateEnd.value?.year && dateEnd.value?.month && dateEnd.value?.day) {
        useEndDate.value = new CalendarDate(dateEnd.value?.year, dateEnd.value?.month, dateEnd.value?.day)
        formattedEndDate.value = useFormatDate(useEndDate.value.toDate(getLocalTimeZone())) ?? '';
        input.book_end_date = formattedEndDate.value;
    }
}, { immediate: true });

watch(dateStart, () => {
    formattedStartDate.value = useFormatDate(dateStart.value.toDate(getLocalTimeZone())) ?? '';
    input.book_start_date = formattedStartDate.value;
}, { immediate: true });

if (data.value) {
    input.book_author = data.value.book_author;
    input.book_start_date = formattedStartDate.value;
    input.book_end_date = formattedEndDate.value;
    input.book_image = data.value.book_image;
    input.book_title = data.value.book_title;
    input.booklist = data.value.booklist === 'true';
    input.kind_of_book = data.value.kind_of_book;
    input.notes = data.value.notes;
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/books/${route.params.id}/books`, {
        method: 'PUT',
        body: input
    })
        .then(async () => {
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
            <NuxtImg class="object-cover h-60" :src="data?.book_image" />
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
                    <UInputDate v-model="dateStart" icon="i-lucide-calendar" />
                </div>

                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="End" />
                    <UInputDate v-model="dateEnd" icon="i-lucide-calendar" />
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