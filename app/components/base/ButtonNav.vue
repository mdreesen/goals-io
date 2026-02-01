<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'View All'
    },
    path: {
        type: String,
        default: "/"
    }
})
</script>

<template>
    <NuxtLink :to="props.path">
        <UButton :label="props.text" color="neutral" variant="subtle"
            trailing-icon="" class="w-50 justify-center" />
    </NuxtLink>
</template>