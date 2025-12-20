<script setup lang="ts">
  import { today, CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
  import { timeZone } from '~/utils/date';
  const df = new DateFormatter('en-US', {
    dateStyle: 'medium'
  });

  const useToday = today(timeZone());

  const modelValue = shallowRef(new CalendarDate(useToday.year, useToday.month, useToday.day));

  console.log(modelValue.value);

  const formattedDate = `${modelValue.value.year}-${modelValue.value.month}-${modelValue.value.day}`
console.log(formattedDate)
  </script>
  
  <template>
    <UPopover>
      <UButton color="neutral" variant="subtle" icon="i-lucide-calendar">
        {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : 'Select a date' }}
      </UButton>
  
      <template #content>
        <UCalendar v-model="modelValue" class="p-2" />
      </template>
    </UPopover>
  </template>