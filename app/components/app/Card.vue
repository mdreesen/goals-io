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
})

const books = {
  start: props.data?.lastestBooks?.bookCurrentStartedYear,
  end: props.data?.lastestBooks?.bookCurrentEndedYear
};

const coldSoak = {
  date: props.data?.latestColdSoak?.date,
};

const fasting = {
  duration: props.data?.latestFasting?.duration
};

const dailyWater = {
  water: props.data?.latestWater?.water_intake,
  date: props.data?.latestWater?.date,
};

const weight = {
  weight: props.data?.latestWeight?.weight,
  date: props.data?.latestWeight?.weight_date,
}

</script>

<template>
  <UCard variant="subtle" :class="`w-[300px] divide-none ${props.color && props.color}`">
    <template #header>
      <div class="flex flex-col justify-center items-center">
        <baseIcon v-if="props.icon" :iconName="props.icon" />
        <span>{{ props.text }}</span>
      </div>
    </template>

    <div v-if="collection === 'books'">
      <div class="flex flex-col justify-center items-center">
        <span>Started {{ books.start }} books</span>
        <span>Finished {{ books.end }} books</span>
      </div>
    </div>

    <div v-if="collection === 'coldSoak'">
      <div class="flex flex-col justify-center items-center">
        <span>Started {{ books.start }}</span>
        <span>Finished {{ books.end }}</span>
        <span>{{ coldSoak?.date }}</span>
      </div>
    </div>

    <div v-if="collection === 'fasting'">
      <div class="flex flex-col justify-center items-center">
        <span>Duration {{ fasting?.duration }} hours</span>
      </div>
    </div>

    <div v-if="collection === 'dailyWater'">
      <div class="flex flex-col justify-center items-center">
        <span>{{ dailyWater?.water }} oz.</span>
      </div>
    </div>

    <div v-if="collection === 'weight'">
      <div class="flex flex-col justify-center items-center">
        <span>{{ weight?.weight }} lbs</span>
        <span>{{ weight?.date }}</span>
      </div>
    </div>

    <template #footer></template>
  </UCard>
</template>