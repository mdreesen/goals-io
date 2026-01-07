<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Open'
    },
    data: {
        type: Array,
        default: () => []
    }
});

const items = ref(props.data);

const selected = ref();

</script>

<template>
    <UDropdownMenu :emit="selected" @change="selected" class="w-full" :items="items" :content="{ align: 'start' }"
        :ui="{ content: 'w-full' }">
        <UButton class="w-full h-[54px]" :label="props.label" color="neutral" variant="outline" icon="i-lucide-menu" />
    </UDropdownMenu>

    <p>Selected: {{ selected ? selected.label : 'None' }}</p>
</template>