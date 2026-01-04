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

const books = {
  start: props.data?.lastestBooks?.bookCurrentStartedYear,
  end: props.data?.lastestBooks?.bookCurrentEndedYear
};

const coldSoak = {
  date: props.data?.latestColdSoak?.date,
};

const fasting = {
  duration: props.data?.latestFasting?.duration,
  isFasting: props.data?.latestFasting?.start
};

const dailyWater = {
  water: props.data?.latestWater?.water_intake,
  date: props.data?.latestWater?.date,
};

const weight = {
  weight: props.data?.latestWeight?.weight,
  date: props.data?.latestWeight?.date,
};
</script>

<template>
  <UCard variant="subtle" :class="`w-full max-w-lg divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" />
        <span>{{ props.text }}</span>
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