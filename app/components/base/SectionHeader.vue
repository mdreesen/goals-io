<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h3 class="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400 my-8 flex justify-center">{{ props.text }}</h3>
</template>