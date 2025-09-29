<script setup lang="ts">
import type { User } from '~/types/auth';

const { user, loggedIn } = useUserSession();
const useUser = ref<User>(user?.value);
</script>

<template>
    <h2
        class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
        Welcome,
    </h2>
    <h2
    v-if="loggedIn"
        class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        {{ useUser.first_name }}!
    </h2>
    <baseDescription :text="useUser.username" />
</template>