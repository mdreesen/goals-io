<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { data: latestHydrationData, pending: pending_hydration } = await useFetch('/api/user/water/water', { lazy: true });
const { data: latestFastingData, pending: pending_fasting } = await useFetch('/api/user/fasting/fasting', { lazy: true });
const { data: latestWeightData, pending: pending_weight } = await useFetch('/api/user/weight/weight', { lazy: true });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Hydration" />
            <appTrackerHydration v-if="!pending_hydration" :data="latestHydrationData" />
        </div>

        <div>
            <baseHeader text="Cold Soak" />
            <appTrackerColdSoak />
        </div>

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
            <appTrackerWorkout />
        </div>
    </div>
</template>