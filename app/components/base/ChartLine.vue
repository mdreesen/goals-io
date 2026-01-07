<script lang="ts" setup>

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true
  },

  lineName: {
    type: String,
    required: true
  },

  lineLabel: {
    type: String,
    required: true
  },
});

type ItemData = {
  month?: string
  date?: string
  water_intake?: string,
};

const useData: ItemData[] = props.data as Array<ItemData>;

const categories: Record<string, BulletLegendItemInterface> = {
  [props.lineName]: { name: `${props.lineLabel}`, color: '#60a5fa' },
}

const xFormatter = (tick: number, _i?: number, _ticks?: number[]): string => {
  return useData[tick]?.date ?? ''
}
</script>

<template>
  <LineChart :data="useData" :height="300" x-label="Date" :y-label="`${props.lineLabel}`" :categories="categories"
    :y-num-ticks="4" :x-num-ticks="7" :x-formatter="xFormatter" :curve-type="CurveType.Basis"
    :legend-position="LegendPosition.Top" :hide-legend="false" :y-grid-line="true" />
</template>