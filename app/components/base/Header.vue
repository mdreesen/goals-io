<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <h2 class="text-3xl font-bold my-8 flex justify-center">{{ props.title }}</h2>
</template>