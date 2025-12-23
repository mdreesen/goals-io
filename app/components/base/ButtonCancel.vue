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
    },
    path: {
        type: String,
        default: "/"
    }
})
</script>

<template>
    <NuxtLink :to="path" class="flex items-center text-2xl font-extrabold h-[40px]">

        <button v-motion="{ ...inputVarient() }" type="submit" :disabled="isLoading"
            :class="`${isLoading ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`">
            {{ isLoading ? 'Deleting...' : text }}
        </button>
    </NuxtLink>
</template>