<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

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