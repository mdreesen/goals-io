<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: latestHydrationData, pending: pending_hydration } = await useFetch('/api/user/water/water', { lazy: true });
const { data: latestFastingData, pending: pending_fasting } = await useFetch('/api/user/fasting/fasting', { lazy: true });
const { data: latestWeightData, pending: pending_weight } = await useFetch('/api/user/weight/weight', { lazy: true });

</script>

<template>
    <div v-if="!pending_hydration">
        <baseHeader text="Hydration" />
        <appTrackerHydration :data="latestHydrationData" />
    </div>

    <div>
        <baseHeader text="Cold Soak" />
        <appTrackerColdSoak />
    </div>

    <div v-if="!pending_fasting">
        <baseHeader text="Fasting" />
        <appTrackerFasting :data="latestFastingData?.latestData" />
    </div>

    <div v-if="!pending_weight">
        <baseHeader text="Weight" />
        <appTrackerWeight :data="latestWeightData" />
    </div>

    <div>
        <baseHeader text="Workout" />
        <appTrackerWorkout />
    </div>
</template>