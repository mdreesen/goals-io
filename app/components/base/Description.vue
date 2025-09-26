<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <p class="text-xl font-bold px-[2rem] my-8 flex justify-center">{{ props.text }}</p>
</template>