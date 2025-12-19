<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

const { data: bookData, pending: pending_books } = await useFetch('/api/user/books/books', { lazy: true });

</script>

<template>
    <div class="container-categories">
        <!-- <div>
            <baseHeader text="Affirmations" />
            <appTrackerAffirmation />
        </div> -->

        <div>
            <baseHeader text="Books" />
            <appTrackerBook v-if="!pending_books" :data="bookData"/>
        </div>

        <!-- <div>
            <baseHeader text="Gratitudes" />
            <appTrackerGratitude />
        </div> -->

        <!-- <div>
            <baseHeader text="Habits" />
            <appTrackerHabit />
        </div> -->
    </div>
</template>