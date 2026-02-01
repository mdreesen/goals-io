<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'View All'
    },
    icon: {
        type: String,
        default: "/"
    }
})
</script>

<template>
    <UButton :label="props.text" color="neutral" variant="subtle" :trailing-icon="props.icon"
        class="w-50 justify-center" />
</template>
