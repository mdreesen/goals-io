<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';
import { mood } from "~/utils/dropdowns/selections";


const route = useRoute();

const { data: data, pending: pending_data } = await useFetch(`/api/user/journal/${route.params.id}`);
const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
    mood: "",
    title: "",
    entry: "",
});

if (data.value) {
    input.mood = data.value.mood;
    input.title = data.value.title;
    input.entry = data.value.entry;
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/journal/${route.params.id}`, {
        method: 'PUT',
        body: {
            ...input,
            date: formatDate()
        }
    })
        .then(async () => {
            await refreshSession();
            await navigateTo('/dashboard/spirit');

            isLoading.value = false;
        })
        .catch(async (error) => {
            console.log(error);
            errorMessage.value = error.statusMessage;
            isLoading.value = false;
        });
};

async function delete_log() {
    isLoading.value = true;
    $fetch(`/api/user/journal/${route.params.id}`, {
        method: 'DELETE',
        body: input
    })
        .then(async () => {
            await refreshSession();

            isLoading.value = false;
            await navigateTo('/dashboard/spirit');

        })
        .catch(async (error) => {
            console.log(error);
            errorMessage.value = error.statusMessage;
            isLoading.value = false;
        });
};
</script>
<template>
    <div v-if="!pending_data" class="relative flex flex-col w-full max-w-3xl p-3 mx-auto overflow-hidden">

        <transition name="slide-up" mode="out-in">
            <form @submit.prevent="log" class="space-y-6">
                <div v-motion="{ ...inputVarient() }">
                    <select id="status-select" v-model="input.mood" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected hidden>Choose mood</option>
                        <option v-for="item in mood" :value="item.value" :key="item.label">
                            {{ item.label }}
                        </option>
                    </select>
                </div>

                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Title" />
                    <input id="text" type="text" v-model="input.title" placeholder="Title" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Entry" />
                    <textarea id="text" type="text" v-model="input.entry" placeholder="Entry" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex flex-col gap-8 pb-4">
                    <baseButtonSubmit text="Save" :isLoading="isLoading" />
                    <baseButtonCancel text="Cancel" path="/dashboard/spirit" :isLoading="isLoading" />
                    <baseButtonDelete @click="delete_log" text="Delete" :isLoading="isLoading" />
                </div>
            </form>
        </transition>
    </div>
</template>