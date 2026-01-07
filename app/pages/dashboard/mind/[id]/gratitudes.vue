<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch(`/api/user/gratitudes/${route.params.id}`);
const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
    gratitude: "",
});

if (data.value) {
    input.gratitude = data.value.gratitude;
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/gratitudes/${route.params.id}`, {
        method: 'PUT',
        body: {
            ...input,
            date: formatDate()
        }
    })
        .then(async () => {
            await refreshSession();
            await navigateTo('/dashboard/mind');

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
    $fetch(`/api/user/gratitudes/${route.params.id}`, {
        method: 'DELETE',
        body: input
    })
        .then(async () => {
            await refreshSession();

            isLoading.value = false;
            await navigateTo('/dashboard/mind');

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

        <div class="py-8">
            <baseHeader text="Edit gratitiude entry" />
        </div>

        <transition name="slide-up" mode="out-in">
            <form @submit.prevent="log" class="space-y-6">

                <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Description" />
                    <textarea id="text" type="text" v-model="input.gratitude" placeholder="Gratitude" required
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