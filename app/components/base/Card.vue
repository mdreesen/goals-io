<script setup lang="ts">

const props = defineProps({
  label: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  date: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: 'text-green-400',
  },
  icon: {
    type: String,
    default: '',
  },

  iconNav: {
    type: String,
    default: '',
  }
});


</script>

<template>
  <UCard variant="subtle" :class="`w-full flex justify-between max-w-lg px-5 divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex h-full flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" :styles="props.iconColor" />
      </div>
    </template>

    <div v-if="label">
      <div class="flex flex-col justify-center items-center font-extrabold">
        <p>{{ label }}</p>
      </div>
    </div>

    <div v-if="text">
      <div class="flex flex-col justify-center items-center font-light">
        <p>{{ text }}</p>
      </div>
    </div>

    <div v-if="date">
      <div class="flex flex-col justify-center items-center font-light">
        <p>{{ date }}</p>
      </div>
    </div>

    <template #footer>
      <div class="flex h-full flex-col justify-center items-center opacity-40">
        <baseIcon v-if="props.iconNav" :iconName="props.iconNav" />
      </div>
    </template>
  </UCard>
</template>