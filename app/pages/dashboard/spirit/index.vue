<script setup lang="ts">
    definePageMeta({
        layout: 'authenticated',
    });

    const { pending: pending_journal } = await useFetch('/api/user/journal/journal', { key: 'journal' });
    const { pending: pending_devotional } = await useFetch('/api/user/bible/devotional', { key: 'devotional' });
    const { pending: pending_sermon } = await useFetch('/api/user/bible/sermon', { key: 'sermon' });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Devotionals" />
            <appTrackerBibleDevotional v-if="!pending_devotional" />
        </div>

        <div>
            <baseHeader text="Sermons" />
            <appTrackerBibleSermon v-if="!pending_sermon" />
        </div>

        <div>
            <baseHeader text="Journal" />
            <appTrackerJournal v-if="!pending_journal" />
        </div>
    </div>
</template>