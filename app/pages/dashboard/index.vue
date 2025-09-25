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
        <h1>Welcome to the Dashboard page</h1>

        <section class="sections">
            <appCard />
            <appCard />
            <appCard />
            <appCard />
        </section>

        <!-- Progress Chart Section -->
        <section class="sections">
            <!-- Book Tracking -->
            <UContainer>
                <appChartBarGroup 
                    v-if="!pending_books" 
                    :data="books" 
                    barOneName="start_date" 
                    barTwoName="end_date"
                    barOneLabel="Start Date" barTwoLabel="End Date" />
            </UContainer>

            <!-- Cold Soak Tracking -->
            <UContainer>
                <appChartBar
                    v-if="!pending_cold_soaks" 
                    :data="cold_soaks" 
                    barName="date" 
                    barLabel="Total" />
            </UContainer>

            <!-- Water Tracking -->
            <UContainer>
                <appChartLine
                    v-if="!pending_water" 
                    :data="water_intake" 
                    lineName="water_intake" 
                    lineLabel="Water total" 
                 />
            </UContainer>

            <!-- Weight Tracking -->
            <UContainer>
                <appChartLine
                    v-if="!pending_weight" 
                    :data="weight" 
                    lineName="weight" 
                    lineLabel="Weight" 
                />
            </UContainer>

            <!-- Workout Tracking -->
            <UContainer>
                <appChartBar
                    v-if="!pending_workouts" 
                    :data="workouts" 
                    barName="date" 
                    barLabel="Total" 
                 />
            </UContainer>
        </section>
    </div>
</template>