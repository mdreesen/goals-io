<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

const { data: data_setting } = useNuxtData('setting');

</script>

<template>
    <div class="container-categories">
        <div v-if="data_setting.bibleSetting.value">
            <baseHeader text="Devotionals" />
            <appTrackerBibleDevotional />
        </div>

        <div v-if="data_setting.bibleSetting.value">
            <baseHeader text="Sermons" />
            <appTrackerBibleSermon />
        </div>

        <div v-if="data_setting.journalSetting.value">
            <baseHeader text="Journal" />
            <appTrackerJournal />
        </div>
    </div>
</template>