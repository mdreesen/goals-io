<script setup lang="ts">
import { ref, computed } from 'vue';
import packageJson from '../../../package.json'
import { useAuth } from '~/store/useAuth';
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

const { fetch: refreshSession } = useUserSession();

let errorMessage = ref('');

// --- Reactive State for User Preferences (Simulates database data) ---
const settings = ref({
    showFasting: true,
    showWater: true,
    showWeight: true,
    showWorkout: true,
    showBooks: true,
    showGratitudes: true,
    showBible: true,
    showJournal: true
});

const { clear: clearSession } = useUserSession();
async function logout() {
    const authStore = useAuth()

    authStore.clearAuth();

    await clearSession();
    await navigateTo('/login');
};

const toggleSetting = ({ key, _id, title }) => {
    settings.value[key] = !settings.value[key];
    console.log(`Setting '${key}' updated to: ${settings.value[key]}, _id is ${_id}`);

    $fetch(`/api/user/profile`, {
        method: 'PUT',
        body: {
            title: title,
            setting: key,
            value: settings.value[key],
            _id: _id,
        }
    })
        .then(async () => {
            await refreshSession();

        })
        .catch(async (error) => {
            console.log(error);
            errorMessage.value = error.statusMessage;
        });
};

// --- Sub-Component for the Toggle Switch ---
// This uses computed properties and a simple structure for the toggle animation.
const ToggleSwitch = (key: keyof typeof settings.value, _id: string, title: string) => {
    const isActive = computed(() => settings.value[key]);

    return {
        key,
        isActive,
        toggle: () => toggleSetting({ key: key, _id: _id, title: title }),
    };
};

const bodyToggles = props.data?.bodySettings.map((item) => {
    return {
        title: item?.title,
        toggles: [
            ToggleSwitch(item?.setting, item?._id, item?.title),
        ]
    };
});

const mindToggles = props.data?.mindSettings.map((item) => {
    return {
        title: item?.title,
        toggles: [
            ToggleSwitch(item?.setting, item._id, item?.title),
        ]
    };
});

const spiritToggles = props.data?.spiritSettings.map((item) => {
    return {
        title: item?.title,
        toggles: [
            ToggleSwitch(item?.setting, item._id, item?.title),
        ]
    };
});

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
                    Body preferences
                </h2>

                <div v-for="(item, index) in bodyToggles" :key="index"
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col">
                        <span class="text-xl font-medium">{{ item.title }}</span>
                        <div v-for="toggle in item.toggles">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ toggle.description }}</span>
                            <USwitch @click="toggle.toggle" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check"
                                default-value />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mind Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Mind preferences
                </h2>

                <div v-for="(item, index) in mindToggles" :key="index"
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col">
                        <span class="text-xl font-medium">{{ item.title }}</span>
                        <div v-for="toggle in item.toggles">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ toggle.description }}</span>
                            <USwitch @click="toggle.toggle" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check"
                                default-value />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Spirit Section -->
            <section class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-200 mb-6">
                    Spirit preferences
                </h2>

                <div v-for="(item, index) in spiritToggles" :key="index"
                    class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
                    <div class="flex flex-col">
                        <span class="text-xl font-medium">{{ item.title }}</span>
                        <div v-for="toggle in item.toggles">
                            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ toggle.description }}</span>
                            <USwitch @click="toggle.toggle" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check"
                                default-value />

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
            <div class="mt-10 pt-8 border-t border-gray-700">
                <button @click="logout"
                    class="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
                    Sign Out
                </button>
            </div>

        </div>
    </div>
</template>