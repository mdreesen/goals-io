<script setup lang="ts">
import { today, CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
import { timeZone } from '~/utils/date';
const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
});

const useToday = today(timeZone());

const modelValue = shallowRef();
const defaultValue = shallowRef(new CalendarDate(useToday.year, useToday.month, useToday.day))

// console.log(modelValue.value);

// const formattedDate = `${modelValue.value.year}-${modelValue.value.month}-${modelValue.value.day}`
// console.log(formattedDate);

// 1. Define the events the component can emit
const emit = defineEmits(['update:modelValue']);
emit('update:modelValue', modelValue.value);
console.log(modelValue.value)
</script>

<template>
  <UPopover>
    <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
      {{ modelValue ? defaultValue : 'Select a date' }}
    </UButton>

    <template #content>
      <UCalendar :default-value="defaultValue" v-model="modelValue" class="p-2" :year-controls="false" />
    </template>
  </UPopover>
</template>