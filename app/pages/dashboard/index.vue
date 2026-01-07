<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});
const { data: profile, pending: pending_profile } = await useFetch('/api/user/profile', { lazy: true });

const { data: books, pending: pending_books } = await useFetch('/api/charts/books', { lazy: true });
// const { data: cold_soaks, pending: pending_cold_soaks } = await useFetch('/api/charts/coldsoaks', { lazy: true });
const { data: water_intake, pending: pending_water } = await useFetch('/api/charts/water', { lazy: true });
const { data: weight, pending: pending_weight } = await useFetch('/api/charts/weight', { lazy: true });
const { data: workouts, pending: pending_workouts } = await useFetch('/api/charts/workouts', { lazy: true });

const { data: setting, pending: pending_settings } = await useFetch('/api/user/profile/setting', { lazy: true });

const { data: stats, pending: pending_stats } = await useFetch('/api/stats', { lazy: true });
</script>

<template>
    <div>
        <section v-if="!pending_profile">
            <appWelcome :data="profile" />
        </section>
        <section>
            <baseHeader text="Your Overview" />

            <div class="container-cards" v-if="!pending_stats">
                <baseCardOverview v-if="setting.bookSetting.value" text="Books"
                    color="bg-gradient-to-br from-green-600 to-green-700"
                    icon="material-symbols:book-ribbon-outline-rounded" collection="books" :data="stats" />
                <!-- <baseCardOverview text="Cold Soak" color="bg-gradient-to-br from-blue-300 to-blue-500"
                    icon="material-symbols:snowing-heavy" collection="coldSoak" :data="stats" /> -->
                <baseCardOverview v-if="setting.fastingSetting.value" text="Fasting"
                    color="bg-gradient-to-br from-yellow-600 to-yellow-700"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" collection="fasting"
                    :data="stats" />
                <baseCardOverview v-if="setting.waterSetting.value" text="Daily Water"
                    color="bg-gradient-to-br from-blue-600 to-blue-700"
                    icon="material-symbols:water-medium-outline-rounded" collection="dailyWater" :data="stats" />
                <baseCardOverview v-if="setting.weightSetting.value" text="Weight"
                    color="bg-gradient-to-br from-purple-600 to-purple-700"
                    icon="material-symbols:monitor-weight-outline" collection="weight" :data="stats" />
            </div>
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <baseHeader text="Your Progress Charts" />

            <!-- Book Tracking -->
            <UContainer v-if="!pending_books && !pending_settings">
                <section v-if="setting.bookSetting.value">
                    <baseSectionHeader text="Books" />
                    <appChartBarGroup :data="books.chartData" barOneName="start_date" barTwoName="end_date"
                        barOneLabel="Start Date" barTwoLabel="End Date" />
                </section>
            </UContainer>

            <!-- Cold Soak Tracking -->
            <!-- <UContainer>
                <baseSectionHeader text="Cold Soaks" />
                <appChartBar v-if="!pending_cold_soaks" :data="cold_soaks" barName="date" barLabel="Total" />
            </UContainer> -->

            <!-- Water Tracking -->
            <UContainer v-if="!pending_water && !pending_settings">
                <section v-if="setting.waterSetting.value">
                    <baseSectionHeader text="Water Intake" />
                <appChartLine v-if="!pending_water" :data="water_intake" lineName="water_intake"
                    lineLabel="Water total" />
                </section>
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer v-if="!pending_weight && !pending_settings">
                <section v-if="setting.weightSetting.value">
                    <baseSectionHeader text="Weight" />
                    <appChartLine v-if="!pending_weight" :data="weight" lineName="weight" lineLabel="Weight" />
                </section>
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer v-if="!pending_workouts && !pending_settings">
                <section v-if="setting.workoutSetting.value">
                    <baseSectionHeader text="Workouts" />
                    <appChartBar v-if="!pending_workouts" :data="workouts" barName="date" barLabel="Total" />
                </section>
            </UContainer>
        </section>
    </div>
</template>