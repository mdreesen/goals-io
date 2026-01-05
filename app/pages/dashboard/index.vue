<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});
const { data: books, pending: pending_books } = await useFetch('/api/charts/books', { lazy: true });
// const { data: cold_soaks, pending: pending_cold_soaks } = await useFetch('/api/charts/coldsoaks', { lazy: true });
const { data: water_intake, pending: pending_water } = await useFetch('/api/charts/water', { lazy: true });
const { data: weight, pending: pending_weight } = await useFetch('/api/charts/weight', { lazy: true });
const { data: workouts, pending: pending_workouts } = await useFetch('/api/charts/workouts', { lazy: true });

const { data: stats, pending: pending_stats } = await useFetch('/api/stats', { lazy: true });
</script>

<template>
    <div>
        <section>
            <appWelcome />
        </section>
        <section>
            <baseHeader text="Your Overview" />

            <div class="container-cards" v-if="!pending_stats">
                <baseCardOverview text="Books" color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" collection="books" :data="stats" />
                <!-- <baseCardOverview text="Cold Soak" color="bg-gradient-to-br from-blue-300 to-blue-500"
                    icon="material-symbols:snowing-heavy" collection="coldSoak" :data="stats" /> -->
                <baseCardOverview text="Fasting" color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" collection="fasting"
                    :data="stats" />
                <baseCardOverview text="Daily Water" color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" collection="dailyWater" :data="stats" />
                <baseCardOverview text="Weight" color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" collection="weight" :data="stats" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader text="Your Progress Charts" />

            <!-- Book Tracking -->
            <UContainer>
                <baseSectionHeader text="Books" />
                <appChartBarGroup v-if="!pending_books" :data="books.chartData" barOneName="start_date"
                    barTwoName="end_date" barOneLabel="Start Date" barTwoLabel="End Date" />
            </UContainer>

            <!-- Cold Soak Tracking -->
            <!-- <UContainer>
                <baseSectionHeader text="Cold Soaks" />
                <appChartBar v-if="!pending_cold_soaks" :data="cold_soaks" barName="date" barLabel="Total" />
            </UContainer> -->

            <!-- Water Tracking -->
            <UContainer>
                <baseSectionHeader text="Water Intake" />
                <appChartLine v-if="!pending_water" :data="water_intake" lineName="water_intake"
                    lineLabel="Water total" />
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer>
                <baseSectionHeader text="Weight" />
                <appChartLine v-if="!pending_weight" :data="weight" lineName="weight" lineLabel="Weight" />
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer>
                <baseSectionHeader text="Workouts" />
                <appChartBar v-if="!pending_workouts" :data="workouts" barName="date" barLabel="Total" />
            </UContainer>
        </section>
    </div>
</template>