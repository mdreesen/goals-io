<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

</script>

<template>
  <baseAccordion :data="props.data?.growth" />
</template>