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
            <LazyappTrackerBibleDevotional hydrate-on-visible />
        </div>

        <div v-if="data_setting.bibleSetting.value">
            <baseHeader text="Sermons" />
            <LazyappTrackerBibleSermon hydrate-on-visible />
        </div>

        <div v-if="data_setting.journalSetting.value">
            <baseHeader text="Journal" />
            <LazyappTrackerJournal hydrate-on-visible />
        </div>
    </div>
</template>