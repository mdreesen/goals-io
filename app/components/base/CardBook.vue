<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  kind: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  date: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <UCard variant="subtle" :class="`w-full h-68 max-w-lg divide-none ${props.color && props.color}`">
    <template #header>
      <div class="relative flex min-h-0 h-24 flex-auto">
        <NuxtImg class="relative z-10 h-full w-full object-contain drop-shadow-md" :src="props.image" />
      </div>
    </template>

    <div>
      <div class="flex flex-col justify-center items-center font-extrabold gap-1">

        <div class="overflow-hidden text-ellipsis items-center content-center flex">
          <baseIcon :iconName="props.icon" size="14" />
          <span class="ml-1 overflow-hidden text-ellipsis text-sm capitalize">{{ props.kind }}</span>
        </div>

        <div>
          <span class="text-sm font-bold text-ellipsis leading-tight line-clamp-2">{{ props.title }}</span>
          <span class="m-0 text-xs leading-tight line-clamp-1">{{ props.author }}</span>
        </div>

        <div>
          <span v-if="props.date.date" class="m-0 text-xs leading-tight text-ellipsis line-clamp-1">Started {{props.date.date}}</span>
          <span v-if="props.date.date_two" class="m-0 text-xs leading-tight text-ellipsis line-clamp-1">Ended {{props.date.date_two}}</span>
        </div>

      </div>
    </div>

    <template #footer></template>
  </UCard>
</template>