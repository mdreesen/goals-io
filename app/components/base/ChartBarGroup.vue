<script lang="ts" setup>

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true,
  },

  barOneName: {
    type: String,
    required: true
  },

  barTwoName: {
    type: String,
    required: true
  },

  barOneLabel: {
    type: String,
    required: true
  },

  barTwoLabel: {
    type: String,
    required: true
  }
});

type ItemData = {
  month: string
  start_date?: number
  end_date?: number,
  barOneName: number
}

const useData: ItemData[] = props.data as Array<ItemData>;

const categories = {
  [props.barOneName]: { name: props.barOneLabel, color: '#60a5fa' },
  [props.barTwoName]: { name: props.barTwoLabel, color: '#0070fa' },
};

const xFormatter = (i: number): string => `${useData[i]?.month}`
const yFormatter = (tick: number) => tick.toString()
</script>

<template>
  <BarChart :data="useData" :height="300" :categories="categories" :y-axis="[props.barOneName as any, props.barTwoName as any]"
    :group-padding="0" :bar-padding="0.2" :x-num-ticks="6" :radius="4" :x-formatter="xFormatter"
    :y-formatter="yFormatter" :legend-position="LegendPosition.Top" :hide-legend="false" :y-grid-line="true" />
</template>