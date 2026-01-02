<script setup lang="ts">

const props = defineProps({
  text: {
    type: String,
    required: false
  },
  color: {
    type: String,
    default: '',
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
        <baseIcon v-if="props.icon" :iconName="props.icon" styles="text-green-400" />
      </div>
    </template>

    <div>
      <div class="flex flex-col justify-center items-center font-extrabold text-white">
        <p>{{ text }}</p>
      </div>
    </div>

    <template #footer>
      <div class="flex h-full flex-col justify-center items-center opacity-40">
        <baseIcon v-if="props.iconNav" :iconName="props.iconNav" />
      </div>
    </template>
  </UCard>
</template>