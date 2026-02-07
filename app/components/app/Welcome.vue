<script setup lang="ts">

const { loggedIn } = useUserSession();

const { data: data } = useNuxtData('profile');

</script>

<template>
    <div v-if="loggedIn">
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
            Welcome,
        </h2>
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
            {{ data?.first_name }}!
        </h2>
        <baseDescription :text="data?.username ?? ''" />
    </div>
    <div v-else>
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
            Log in or sign up to get started!
        </h2>
    </div>
</template>