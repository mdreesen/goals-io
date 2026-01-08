<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: latestHydrationData, pending: pending_hydration } = await useFetch('/api/user/water/water', { key: 'hydration'});
const { data: latestFastingData, pending: pending_fasting } = await useFetch('/api/user/fasting/fasting', { key: 'fasting' });
const { data: latestWeightData, pending: pending_weight } = await useFetch('/api/user/weight/weight', { key: 'weight'});
const { data: latestWorkoutData, pending: pending_workout } = await useFetch('/api/user/workout/workout', { key: 'workout' });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Hydration" />
            <appTrackerHydration v-if="!pending_hydration" :data="latestHydrationData" />
        </div>

        <!-- <div>
            <baseHeader text="Cold Soak" />
            <appTrackerColdSoak />
        </div> -->

        <div>
            <baseHeader text="Fasting" />
            <appTrackerFasting v-if="!pending_fasting" :data="latestFastingData?.latestData" />
        </div>

        <div>
            <baseHeader text="Weight" />
            <appTrackerWeight v-if="!pending_weight" :data="latestWeightData" />
        </div>

        <div>
            <baseHeader text="Workout" />
            <appTrackerWorkout v-if="!pending_workout" :data="latestWorkoutData" />
        </div>
    </div>
</template>