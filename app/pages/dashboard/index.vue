<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: data_chart_book } = useNuxtData('chart_book');
const { data: data_chart_hydration } = useNuxtData('chart_hydration');
const { data: data_chart_weight } = useNuxtData('chart_weight');
const { data: data_chart_workout } = useNuxtData('chart_workout');

</script>

<template>
    <div>
        <section>
            <appWelcome />
        </section>
        <section>
            <baseHeader text="Your Overview" />

            <div class="container-cards">
                <baseCardOverview text="Books" color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" collection="books" />
                <baseCardOverview text="Fasting" color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" collection="fasting" />
                <baseCardOverview text="Daily Water" color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" collection="dailyWater" />
                <baseCardOverview text="Weight" color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" collection="weight" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader text="Your Progress Charts" />

            <!-- Book Tracking -->
            <UContainer>
                <baseSectionHeader text="Books" />
                <baseChartBarGroup :data="data_chart_book.chartData" barOneName="start_date" barTwoName="end_date"
                    barOneLabel="Start Date" barTwoLabel="End Date" />
            </UContainer>

            <!-- Water Tracking -->
            <UContainer>
                <baseSectionHeader text="Water Intake" />
                <baseChartLine :data="data_chart_hydration" lineName="water_intake" lineLabel="Water total" />
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer>
                <baseSectionHeader text="Weight" />
                <baseChartLine :data="data_chart_weight" lineName="weight" lineLabel="Weight" />
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer>
                <baseSectionHeader text="Workouts" />
                <baseChartBar :data="data_chart_workout" barName="date" barLabel="Total" />
            </UContainer>
        </section>
    </div>
</template>