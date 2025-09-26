<script setup lang="ts">
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'authenticated',
});

// --- Reactive State for User Preferences (Simulates database data) ---
const settings = ref({
  darkMode: true,
  emailNotifications: false,
  shareProgress: true,
});

const { clear: clearSession } = useUserSession();
async function logout() {
  await clearSession()
  await navigateTo('/login')
};

const toggleSetting = (key: keyof typeof settings.value) => {
  settings.value[key] = !settings.value[key];
  console.log(`Setting '${key}' updated to: ${settings.value[key]}`);
  // In a real app, you would call a Nuxt Server API route here to save the change to MongoDB.
};

// --- Sub-Component for the Toggle Switch ---
// This uses computed properties and a simple structure for the toggle animation.
const ToggleSwitch = (key: keyof typeof settings.value, label: string, description: string) => {
  const isActive = computed(() => settings.value[key]);

  return {
    key,
    label,
    description,
    isActive,
    toggle: () => toggleSetting(key),
  };
};

const toggleItems = [
  ToggleSwitch('darkMode', 'Dark Mode', 'Automatically switch the app appearance to dark mode.'),
  ToggleSwitch('emailNotifications', 'Email Notifications', 'Receive updates, summaries, and tips directly to your inbox.'),
  ToggleSwitch('shareProgress', 'Share Progress', 'Allow anonymous sharing of workout stats for community leaderboards.'),
];
</script>

<template>
  <!-- Removed ref="pageRef" -->
  <div class="min-h-screen bg-gray-900 p-4 sm:p-8 text-white">
    <div class="max-w-4xl mx-auto py-10">

      <!-- Header -->
      <header class="pb-8 mb-8 border-b border-gray-700">
        <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Settings
        </h1>
        <p class="mt-2 text-gray-400">Manage your profile, preferences, and privacy settings.</p>
      </header>

      <!-- Settings Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray-200 mb-6">
          Preferences
        </h2>

        <!-- Loop through Toggles -->
        <div v-for="(item, index) in toggleItems" :key="item.key"
          class="flex justify-between items-center bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-700 transition duration-300">
          <div class="flex flex-col">
            <span class="text-xl font-medium">{{ item.label }}</span>
            <span class="text-sm text-gray-400 mt-1 max-w-lg">{{ item.description }}</span>
          </div>

          <USwitch @click="item.toggle" unchecked-icon="i-lucide-x" checked-icon="i-lucide-check" default-value />
        </div>
      </section>

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
