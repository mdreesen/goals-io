<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

const { pending: pending_hydration } = await useFetch('/api/user/water/water', { key: 'hydration'});
const { pending: pending_fasting } = await useFetch('/api/user/fasting/fasting', { key: 'fasting' });
const { pending: pending_weight } = await useFetch('/api/user/weight/weight', { key: 'weight'});
const { pending: pending_workout } = await useFetch('/api/user/workout/workout', { key: 'workout' });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Hydration" />
            <appTrackerHydration />
        </div>

        <!-- <div>
            <baseHeader text="Cold Soak" />
            <appTrackerColdSoak />
        </div> -->

        <div>
            <baseHeader text="Fasting" />
            <appTrackerFasting />
        </div>

        <div>
            <baseHeader text="Weight" />
            <appTrackerWeight />
        </div>

        <div>
            <baseHeader text="Workout" />
            <appTrackerWorkout />
        </div>
    </div>
</template>