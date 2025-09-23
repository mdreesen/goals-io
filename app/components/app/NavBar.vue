<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav class="bg-gray-900 border-b border-gray-700 p-4 relative z-50">
    <div
      class="container mx-auto flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-3xl font-extrabold text-blue-500">
        Ascend
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-6">
        <NuxtLink
          to="/dashboard"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink
          to="/fasting"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Fasting
        </NuxtLink>
        <NuxtLink
          to="/workouts"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Workouts
        </NuxtLink>
        <NuxtLink
          to="/profile"
          class="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Profile
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-gray-300 focus:outline-none">
        <svg
          :class="{'hidden': isOpen, 'block': !isOpen}"
          class="w-8 h-8 transition-transform duration-300 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <svg
          :class="{'block': isOpen, 'hidden': !isOpen}"
          class="w-8 h-8 transition-transform duration-300 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    :class="{'translate-x-0': isOpen, 'translate-x-full': !isOpen}"
    class="fixed inset-0 top-[73px] bg-gray-800 bg-opacity-95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out md:hidden z-40 p-4"
  >
    <div class="flex flex-col items-center space-y-6 pt-10">
      <NuxtLink to="/dashboard" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" @click="toggleMenu">
        Dashboard
      </NuxtLink>
      <NuxtLink to="/fasting" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" @click="toggleMenu">
        Fasting
      </NuxtLink>
      <NuxtLink to="/workouts" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" @click="toggleMenu">
        Workouts
      </NuxtLink>
      <NuxtLink to="/profile" class="text-gray-300 text-3xl hover:text-white transition-colors duration-300" @click="toggleMenu">
        Profile
      </NuxtLink>
    </div>
  </div>
</template>
