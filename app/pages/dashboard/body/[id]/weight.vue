<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';

const route = useRoute();

const { data: data, pending: pending_data } = await useFetch(`/api/user/gratitudes/${route.params.id}`);
const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
  weight: '',
});

if (data.value) {
    input.weight = data.value.weight;
};

async function log() {
    isLoading.value = true;
    $fetch('/api/user/weight/weight', {
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

        <transition name="slide-up" mode="out-in">
            <form @submit.prevent="log" class="space-y-6">
                <div v-motion="{ ...inputVarient() }">
                    <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Weight</label>
                    <input id="text" type="text" v-model="input.weight" placeholder="Example: 180.5" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <baseButtonSubmit text="Save" :isLoading="isLoading" />
            </form>
        </transition>
    </div>
</template>