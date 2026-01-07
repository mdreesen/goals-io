<script setup lang="ts">
import { ref } from 'vue';
import packageJson from '../../../package.json'
import { formatDate } from '~/utils/date';
import { timeZone } from '~/utils/date';

definePageMeta({
    layout: 'authenticated',
});

const props = defineProps({
    data: {
        type: Object,
        default: () => { },
        required: true
    },
});

console.log(props.data)

const { fetch: refreshSession } = useUserSession();

let errorMessage = ref('');
const isLoading = ref(false);

const { clear: clearSession } = useUserSession();

const input = reactive({
    username: "",
    first_name: "",
    last_name: ""
});

if (props.data) {
    input.username = props.data.username;
    input.first_name = props.data.first_name;
    input.last_name = props.data.last_name;
};

async function logout() {

    await clearSession();
    await navigateTo('/login');
};

const toggleSetting = (item: any) => {
    // This below line must be there to ensure inital changes
    item.value = !item.value;

    isLoading.value = true

    $fetch(`/api/user/profile/settings`, {
        method: 'PUT',
        body: {
            title: item?.title,
            setting: item?.setting,
            value: item.value,
            _id: item?._id,
        }
    })
        .then(async () => {
            await refreshSession();
            isLoading.value = false

        })
        .catch(async (error) => {
            console.log(error);
            errorMessage.value = error.statusMessage;
            isLoading.value = false
        });
};

async function log() {
    isLoading.value = true;
    $fetch(`/api/user/profile`, {
        method: 'PUT',
        body: input,
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
    <!-- Removed ref="pageRef" -->
    <div class="min-h-screen bg-gray-900 p-4 sm:p-8 text-white">
        <div class="max-w-4xl mx-auto py-10 flex flex-col gap-8">

            <!-- Header -->
            <header class="pb-8 border-b border-gray-700">
                <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400">
                    Settings
                </h1>
                <p class="mt-2 text-gray-400">Manage your profile, preferences, and privacy settings.</p>
            </header>

            <!-- Body Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Update your user profile
                </h2>

                <div
                    class="flex justify-center items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col gap-5">
                        <span>Update your user profile info</span>

                        <div class="w-full relative mb-4 flex justify-center">

                            <transition name="slide-up" mode="out-in">

                                <UDrawer title="Update user profile">
                                    <UButton label="Update profile" color="neutral" variant="subtle"
                                        trailing-icon="material-symbols:person-edit" />

                                    <template #body>
                                        <form @submit.prevent="log" class="space-y-6">

                                            <div v-motion="{ ...inputVarient() }">
                                                <baseLabel text="Who are you called to be?" />
                                                <input id="text" type="text" v-model="input.username"
                                                    placeholder="Leader, hard worker, etc..."
                                                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>

                                            <div v-motion="{ ...inputVarient() }">
                                                <baseLabel text="First Name" />
                                                <input id="text" type="text" v-model="input.first_name"
                                                    placeholder="First name"
                                                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>

                                            <div v-motion="{ ...inputVarient() }">
                                                <baseLabel text="Last name" />
                                                <input id="text" type="text" v-model="input.last_name"
                                                    placeholder="Last name"
                                                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                            </div>

                                            <div class="flex flex-col gap-8 pb-4">
                                                <baseButtonSubmit text="Save" :isLoading="isLoading" />
                                            </div>
                                        </form>
                                    </template>
                                </UDrawer>
                            </transition>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Body Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Body preferences
                </h2>

                <div
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col gap-5">
                        <div v-for="item in props.data.bodySettings">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ item.title }}</span>
                            <USwitch @click="toggleSetting(item)" unchecked-icon="i-lucide-x"
                                checked-icon="i-lucide-check" color="primary" v-model="item.value"
                                :loading="isLoading" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mind Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Mind preferences
                </h2>

                <div
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col gap-5">
                        <div v-for="item in props.data.mindSettings">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ item.title }}</span>
                            <USwitch @click="toggleSetting(item)" unchecked-icon="i-lucide-x"
                                checked-icon="i-lucide-check" color="info" v-model="item.value" :loading="isLoading" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Spirit Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Spirit preferences
                </h2>

                <div
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col gap-5">
                        <div v-for="item in props.data.spiritSettings">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ item.title }}</span>
                            <USwitch @click="toggleSetting(item)" unchecked-icon="i-lucide-x"
                                checked-icon="i-lucide-check" color="neutral" v-model="item.value"
                                :loading="isLoading" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Action Button Example -->
            <div class="flex flex-col mt-4 pt-8 border-t border-gray-700 text-gray-400">
                <span>Date: {{ formatDate() }}</span>
                <span>Time zone: {{ timeZone() }}</span>
                <span>Version: {{ packageJson.version }}</span>
            </div>

            <!-- Action Button Example -->
            <div class="flex flex-col gap-8 mt-10 pt-8 border-t border-gray-700">
                <button @click="logout"
                    class="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                    Sign Out
                </button>

                <appDeleteProfile />
            </div>

        </div>
    </div>
</template>