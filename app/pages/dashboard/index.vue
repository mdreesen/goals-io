<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: data_chart_book } = useNuxtData('chart_book');
const { data: data_chart_hydration } = useNuxtData('chart_hydration');
const { data: data_chart_weight } = useNuxtData('chart_weight');
const { data: data_chart_workout } = useNuxtData('chart_workout');
const { data: data_setting } = useNuxtData('setting');

</script>

<template>
    <div>
        <section>
            <appWelcome />
        </section>
        <section>
            <baseHeader text="Your Overview" />

            <div class="container-cards">
                <baseCardOverview v-if="data_setting.bookSetting.value" text="Books" color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" collection="books" />
                <baseCardOverview v-if="data_setting.fastingSetting.value" text="Fasting" color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" collection="fasting" />
                <baseCardOverview v-if="data_setting.waterSetting.value" text="Daily Water" color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" collection="dailyWater" />
                <baseCardOverview v-if="data_setting.weightSetting.value" text="Weight" color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" collection="weight" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader text="Your Progress Charts" />

            <!-- Book Tracking -->
            <UContainer v-if="data_setting.bookSetting.value">
                <baseSectionHeader text="Books" />
                <baseChartBarGroup :data="data_chart_book.chartData" barOneName="start_date" barTwoName="end_date"
                    barOneLabel="Start Date" barTwoLabel="End Date" />
            </UContainer>

            <!-- Water Tracking -->
            <UContainer v-if="data_setting.waterSetting.value">
                <baseSectionHeader text="Water Intake" />
                <baseChartLine :data="data_chart_hydration" lineName="water_intake" lineLabel="Water total" />
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer v-if="data_setting.weightSetting.value">
                <baseSectionHeader text="Weight" />
                <baseChartLine :data="data_chart_weight" lineName="weight" lineLabel="Weight" />
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer v-if="data_setting.workoutSetting.value">
                <baseSectionHeader text="Workouts" />
                <baseChartBar :data="data_chart_workout" barName="date" barLabel="Total" />
            </UContainer>
        </section>
    </div>
</template>