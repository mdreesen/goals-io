<script setup lang="ts">

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  collection: {
    type: String,
    default: '',
  },
  data: {
    required: true,
  }
});
</script>

<template>
  <UCard variant="subtle" :class="`w-full max-w-lg divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" />
        <span>{{ props.text }}</span>
      </div>
    </template>

    <div>
      <div class="flex flex-col justify-center items-center font-extrabold text-white">

      </div>
    </div>

    <template #footer></template>
  </UCard>
</template>