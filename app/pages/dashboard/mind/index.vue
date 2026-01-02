<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

// const { data: affirmationData, pending: pending_affirmations } = await useFetch('/api/user/affirmations/affirmations', { lazy: true });
const { data: bookData, pending: pending_books } = await useFetch('/api/user/books/books', { lazy: true });
const { data: gratitudeData, pending: pending_gratitude } = await useFetch('/api/user/gratitudes/gratitudes', { lazy: true });
console.log(gratitudeData)
</script>

<template>
    <div class="container-categories">
        <!-- <div>
            <baseHeader text="Affirmations" />
            <appTrackerAffirmation v-if="!pending_affirmations" :data="affirmationData" />
        </div> -->

        <div>
            <baseHeader text="Books" />
            <appTrackerBook v-if="!pending_books" :data="bookData"/>
        </div>

        <div>
            <baseHeader text="Gratitudes" />
            <appTrackerGratitude v-if="!pending_gratitude" :data="gratitudeData" />
        </div>

        <!-- <div>
            <baseHeader text="Habits" />
            <appTrackerHabit />
        </div> -->
    </div>
</template>