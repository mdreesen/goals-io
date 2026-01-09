<script setup lang="ts">
import { ref } from 'vue';
import type { WeightType } from '~/types/weight';

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch<WeightType>(`/api/user/weight/${route.params.id}`);
const { fetch: refreshSession } = useUserSession();
const toast = useToast();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
    weight: '',
});

if (data.value) {
    input.weight = data.value?.weight;
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/weight/${route.params.id}`, {
        method: 'PUT',
        body: {
            ...input,
            date: data.value.date
        }
    })
        .then(async () => {
            await refreshSession();
            await refreshNuxtData();
            await navigateTo('/dashboard/body');
            isLoading.value = false;
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
    $fetch(`/api/user/weight/${route.params.id}`, {
        method: 'DELETE',
        body: input
    })
        .then(async () => {
            await refreshSession();
            await refreshNuxtData();
            await navigateTo('/dashboard/body');
            isLoading.value = false;
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

        <div class="py-8">
            <baseHeader text="Edit weight entry" />
        </div>

        <transition name="slide-up" mode="out-in">
            <form @submit.prevent="log" class="space-y-6">
                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Weight" />
                    <input id="text" type="text" v-model="input.weight" placeholder="Example: 180.5" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>


                <div class="flex flex-col gap-8 pb-4">
                    <baseButtonSubmit text="Save" :isLoading="isLoading" />
                    <baseButtonCancel text="Cancel" path="/dashboard/body" :isLoading="isLoading" />
                    <baseButtonDelete @click="delete_log" text="Delete" :isLoading="isLoading" />
                </div>
            </form>
        </transition>
    </div>
</template>