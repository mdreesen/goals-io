<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h2 class="font-sans text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400 flex justify-center mb-2">{{ props.text }}</h2>
</template>