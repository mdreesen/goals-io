<script setup lang="ts">
    definePageMeta({
        layout: 'authenticated',
    });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Devotionals" />
            <appTrackerBibleDevotional />
        </div>

        <div>
            <baseHeader text="Sermons" />
            <appTrackerBibleSermon />
        </div>

        <div>
            <baseHeader text="Journal" />
            <appTrackerJournal />
        </div>
    </div>
</template>