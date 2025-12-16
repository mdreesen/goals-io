<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: latestFastingData, pending: pending_data } = await useFetch('/api/user/fasting/fasting', { lazy: true });
</script>

<template>
    <div>
        <baseHeader text="Hydration" />
        <appTrackerHydration />
    </div>

    <div>
        <baseHeader text="Cold Soak" />
        <appTrackerColdSoak />
    </div>

    <div v-if="!pending_data">
        <baseHeader text="Fasting" />
        <appTrackerFasting :data="latestFastingData?.latestData" />
    </div>

    <div>
        <baseHeader text="Weight" />
        <appTrackerWeight />
    </div>

    <div>
        <baseHeader text="Workout" />
        <appTrackerWorkout />
    </div>
</template>