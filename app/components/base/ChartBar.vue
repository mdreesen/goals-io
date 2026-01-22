<script lang="ts" setup>

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },

  barName: {
    type: String,
    required: true
  },

  barLabel: {
    type: String,
    required: true
  },

  dataYears: {
    type: Array,
    default: () => [],
  }
});

type ItemData = {
  month: string
  start_date?: number,
  date?: number
}

const useData: ItemData[] = props.data as Array<ItemData>;

const categories = computed(() => ({
  [props.barName]: {
    name: `${props.barLabel}`,
    color: '#60a5fa',
  },
}))

const xFormatter = (i: number): string => `${useData[i]?.month}`
const yFormatter = (tick: number) => tick.toString()
</script>

<template>
  <div>
    <baseButtonYear :data="dataYears" />
    <BarChart :data="useData" :height="300" :categories="categories" :y-axis="[props.barName as any]" :x-num-ticks="6"
      :radius="4" :y-grid-line="true" :x-formatter="xFormatter" :y-formatter="yFormatter"
      :legend-position="LegendPosition.Top" :hide-legend="false" />
  </div>
</template>