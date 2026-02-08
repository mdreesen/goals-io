<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

useHead({
    title: 'Ascend | Body',
    meta: [
        { name: 'description', content: 'Ascend Body Dashboard.' },
    ],
});

const { data: data_setting } = useNuxtData('setting');

</script>

<template>
    <div class="container-categories">
        <div v-if="data_setting?.waterSetting.value">
            <baseHeader text="Hydration" />
            <appTrackerHydration />
        </div>

        <div v-if="data_setting?.fastingSetting.value">
            <baseHeader text="Fasting" />
            <appTrackerFasting />
        </div>

        <div v-if="data_setting?.weightSetting.value">
            <baseHeader text="Weight" />
            <appTrackerWeight />
        </div>

        <div v-if="data_setting?.workoutSetting.value">
            <baseHeader text="Workout" />
            <appTrackerWorkout />
        </div>
    </div>
</template>