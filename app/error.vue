<script setup lang="ts">
import type { NuxtError } from '~/types/error'

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
    <div>
        <baseHeader :text="props.error.status.toString()" />
        <NuxtLink to="/login" class="text-blue-400 hover:underline transition-colors">Go back to login</NuxtLink>
    </div>
</template>