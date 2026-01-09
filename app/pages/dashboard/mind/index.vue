<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

const { data: data_setting } = useNuxtData('setting');

</script>

<template>
    <div class="container-categories">
        <!-- <div>
            <baseHeader text="Affirmations" />
            <appTrackerAffirmation v-if="!pending_affirmations" :data="affirmationData" />
        </div> -->

        <div v-if="data_setting.bookSetting.value">
            <baseHeader text="Books" />
            <appTrackerBook/>
        </div>

        <div v-if="data_setting.gratitudeSetting.value">
            <baseHeader text="Gratitudes" />
            <appTrackerGratitude />
        </div>

        <!-- <div>
            <baseHeader text="Habits" />
            <appTrackerHabit />
        </div> -->
    </div>
</template>