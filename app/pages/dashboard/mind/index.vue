<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

// const { pending: pending_books } = await useFetch('/api/user/books/books', { key: 'books' });
// const { pending: pending_gratitude } = await useFetch('/api/user/gratitudes/gratitudes', { key: 'gratitudes' });
</script>

<template>
    <div class="container-categories">
        <!-- <div>
            <baseHeader text="Affirmations" />
            <appTrackerAffirmation v-if="!pending_affirmations" :data="affirmationData" />
        </div> -->

        <div>
            <baseHeader text="Books" />
            <appTrackerBook/>
        </div>

        <div>
            <baseHeader text="Gratitudes" />
            <appTrackerGratitude />
        </div>

        <!-- <div>
            <baseHeader text="Habits" />
            <appTrackerHabit />
        </div> -->
    </div>
</template>