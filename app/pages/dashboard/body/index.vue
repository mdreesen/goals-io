<script setup lang="ts">

definePageMeta({
    layout: 'authenticated',
});

await useFetch('/api/user/profile/setting', { key: 'setting' });
const { data: data_setting } = useNuxtData('setting');

</script>

<template>
    <div class="container-categories">
        <div v-if="data_setting.waterSetting.value">
            <baseHeader text="Hydration" />
            <appTrackerHydration />
        </div>

        <!-- <div>
            <baseHeader text="Cold Soak" />
            <appTrackerColdSoak />
        </div> -->

        <div v-if="data_setting.fastingSetting.value">
            <baseHeader text="Fasting" />
            <appTrackerFasting />
        </div>

        <div v-if="data_setting.weightSetting.value">
            <baseHeader text="Weight" />
            <appTrackerWeight />
        </div>

        <div v-if="data_setting.workoutSetting.value">
            <baseHeader text="Workout" />
            <appTrackerWorkout />
        </div>
    </div>
</template>