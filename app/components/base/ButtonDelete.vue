<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
        default: 'Delete'
    },
    isLoading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button v-motion="{ ...inputVarient() }" type="submit" :disabled="isLoading"
        :class="`${isLoading ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`">
        {{ isLoading ? 'Deleting...' : text }}
    </button>
</template>