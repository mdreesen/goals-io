<script lang="ts" setup>
const props = defineProps({
    iconName: {
        type: String,
        default: '',
        required: false,
    },
    styles: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: '24'
    }
});
</script>

<template>
    <Icon :class="props.styles" :name="props.iconName" :size="props.size" />
</template>