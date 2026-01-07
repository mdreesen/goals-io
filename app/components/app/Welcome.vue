<script setup lang="ts">

const { loggedIn } = useUserSession();

const props = defineProps({
    data: {
        type: Object,
        default: () => { },
        required: true
    },
});

</script>

<template>
    <div v-if="loggedIn">
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
            Welcome,
        </h2>
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
            {{ props.data.first_name }}!
        </h2>
        <baseDescription :text="props.data.username ?? ''" />
    </div>
    <div v-else>
        <h2
            class="text-5xl text-center md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 mt-2">
            Log in or sign up to get started!
        </h2>
    </div>
</template>