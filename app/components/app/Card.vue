<script setup lang="ts">

const props = defineProps({
  title: {
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
  }
})

</script>

<template>
  <UCard variant="subtle" :class="`w-[300px] divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" />
        <span>{{ props.title }}</span>
      </div>
    </template>

    <span>BODY</span>

    <template #footer>
      <!-- <Placeholder class="h-8" /> -->
      <span>FOOTER</span>
    </template>
  </UCard>
</template>