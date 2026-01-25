<script setup lang="ts">
import { computed } from 'vue';

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
  }
});

const { data: data } = useNuxtData('stats');

const books = {
  start: data.value?.lastestBooks?.bookCurrentStartedYear,
  end: data.value?.lastestBooks?.bookCurrentEndedYear
};

const coldSoak = {
  date: data.value?.latestColdSoak?.date,
};

const fasting = {
  duration: data.value?.latestFasting?.duration,
  isFasting: data.value?.latestFasting?.start
};

const dailyWater = {
  water: data.value?.latestWater?.water_intake,
  date: data.value?.latestWater?.date,
};

const weight = {
  weight: data.value?.latestWeight?.weight,
  date: data.value?.latestWeight?.date,
};

const animateIcons = computed(() => {
  switch (true) {
    case props.collection === 'fasting' && fasting?.isFasting:
      return 'animate-bounce';
      break;
    default:
      return '';
  }
})
</script>

<template>
  <UCard variant="subtle" :class="`w-full max-w-lg divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" :styles="`text-white ${animateIcons}`" />
        <span class="text-white">{{ props.text }}</span>
      </div>
    </template>

    <div v-if="collection === 'books'">
      <div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white">
        <span>Started {{ books.start }} books</span>
        <span>Finished {{ books.end }} books</span>
      </div>
    </div>

    <div v-if="collection === 'coldSoak'">
      <div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white">
        <span>{{ coldSoak?.date }}</span>
      </div>
    </div>

    <div v-if="collection === 'fasting'">
      <div class="flex flex-col justify-center items-center text-2xl font-extrabold text-white">
        <span>Duration {{ fasting?.duration }} hours</span>
      </div>
    </div>

    <div v-if="collection === 'dailyWater'">
      <div class="flex flex-col justify-center items-center font-extrabold text-white">
        <span class="text-2xl">{{ dailyWater?.water }} oz.</span>
        <span class="text-lg">{{ dailyWater?.date }}</span>
      </div>
    </div>

    <div v-if="collection === 'weight'">
      <div class="flex flex-col justify-center items-center font-extrabold text-white">
        <span class="text-2xl">{{ weight?.weight }} lbs</span>
        <span class="text-lg">{{ weight?.date }}</span>
      </div>
    </div>

    <template #footer></template>
  </UCard>
</template>