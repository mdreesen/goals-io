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
    }
});
</script>

<template>
    <Icon :class="props.styles" :name="props.iconName" size="24" />
</template>