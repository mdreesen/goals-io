<script setup lang="ts">
import { computed } from 'vue';
import { monthStartEnd, monthStart, filterYear } from '~/utils/formatters/months';
import { useYear } from '~/stores/useYear';

definePageMeta({
    layout: 'authenticated',
});

const yearStore = useYear();
await useFetch('/api/charts/books', { key: 'chart_book', lazy: true });
await useFetch('/api/charts/water', { key: 'chart_hydration', lazy: true });
await useFetch('/api/charts/weight', { key: 'chart_weight', lazy: true });
await useFetch('/api/charts/workouts', { key: 'chart_workout', lazy: true });
await useFetch('/api/user/profile/setting', { key: 'setting', lazy: true });

const { data: data_chart_book } = useNuxtData('chart_book');
const { data: data_chart_hydration } = useNuxtData('chart_hydration');
const { data: data_chart_weight } = useNuxtData('chart_weight');
const { data: data_chart_workout } = useNuxtData('chart_workout');
const { data: data_setting } = useNuxtData('setting');

const useBookChart = computed(() => monthStartEnd({ data: data_chart_book.value?.data, startLabel: 'book_start_date', endLabel: 'book_end_date', year: yearStore.year.toString() }));
const useHydrationChart = computed(() => filterYear({ data: data_chart_hydration.value?.data, year: yearStore.year.toString() }));
const useWeightChart = computed(() => filterYear({ data: data_chart_weight.value?.data, year: yearStore.year.toString() }));
const useWorkoutChart = computed(() => monthStart({ data: data_chart_workout.value?.data, startLabel: 'date', year: yearStore.year.toString() }));

</script>

<template>
    <div>
        <section>
            <appWelcome />
        </section>
        <section>
            <baseHeader text="Your Overview" />

            <div class="container-cards">
                <baseCardOverview v-if="data_setting.bookSetting.value" text="Books"
                    color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" collection="books" />
                <baseCardOverview v-if="data_setting.fastingSetting.value" text="Fasting"
                    color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" collection="fasting" />
                <baseCardOverview v-if="data_setting.waterSetting.value" text="Daily Water"
                    color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" collection="dailyWater" />
                <baseCardOverview v-if="data_setting.weightSetting.value" text="Weight"
                    color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" collection="weight" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader text="Your Progress Charts" />

            <!-- Book Tracking -->
            <LazyUContainer hydrate-on-visible v-if="data_setting.bookSetting.value">
                <baseSectionHeader text="Books" />
                <baseChartBarGroup :data="useBookChart" barOneName="start_date" barTwoName="end_date"
                    barOneLabel="Start Date" barTwoLabel="End Date" :dataYears="data_chart_book.years" />
            </LazyUContainer>

            <!-- Water Tracking -->
            <LazyUContainer hydrate-on-visible v-if="data_setting.waterSetting.value">
                <baseSectionHeader text="Water Intake" />
                <baseChartLine :data="useHydrationChart" lineName="water_intake" lineLabel="Water total"
                    :dataYears="data_chart_hydration.years" />
            </LazyUContainer>

            <!-- Weight Tracking -->
            <LazyUContainer hydrate-on-visible v-if="data_setting.weightSetting.value">
                <baseSectionHeader text="Weight" />
                <baseChartLine :data="useWeightChart" lineName="weight" lineLabel="Weight"
                    :dataYears="data_chart_weight.years" />
            </LazyUContainer>

            <!-- Workout Tracking -->
            <LazyUContainer hydrate-on-visible v-if="data_setting.workoutSetting.value">
                <baseSectionHeader text="Workouts" />
                <baseChartBar :data="useWorkoutChart" barName="date" barLabel="Total"
                    :dataYears="data_chart_workout.years" />
            </LazyUContainer>
        </section>
    </div>
</template>