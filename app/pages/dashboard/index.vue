<script setup lang="ts">

const { data: books, pending: pending_books } = await useFetch('/api/charts/books', { lazy: true });
const { data: cold_soaks, pending: pending_cold_soaks } = await useFetch('/api/charts/coldsoaks', { lazy: true });
const { data: water_intake, pending: pending_water } = await useFetch('/api/charts/water', { lazy: true });
const { data: weight, pending: pending_weight } = await useFetch('/api/charts/weight', { lazy: true });
const { data: workouts, pending: pending_workouts } = await useFetch('/api/charts/workouts', { lazy: true });

</script>

<template>
    <div>
        <appNavBar />

        <section>
            <baseHeader title="Your Overview" />

            <div class="container-cards">
                <appCard title="Books" color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" />
                <appCard title="Cold Soak" color="bg-gradient-to-br from-blue-300 to-blue-500"
                    icon="material-symbols:snowing-heavy" />
                <appCard title="Fasting" color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" />
                <appCard title="Daily Water" color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" />
                <appCard title="Weight" color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader title="Your Progress Charts" />

            <!-- Book Tracking -->
            <UContainer>
                <appChartBarGroup v-if="!pending_books" :data="books" barOneName="start_date" barTwoName="end_date"
                    barOneLabel="Start Date" barTwoLabel="End Date" />
            </UContainer>

            <!-- Cold Soak Tracking -->
            <UContainer>
                <appChartBar v-if="!pending_cold_soaks" :data="cold_soaks" barName="date" barLabel="Total" />
            </UContainer>

            <!-- Water Tracking -->
            <UContainer>
                <appChartLine v-if="!pending_water" :data="water_intake" lineName="water_intake"
                    lineLabel="Water total" />
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer>
                <appChartLine v-if="!pending_weight" :data="weight" lineName="weight" lineLabel="Weight" />
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer>
                <appChartBar v-if="!pending_workouts" :data="workouts" barName="date" barLabel="Total" />
            </UContainer>
        </section>
    </div>
</template>