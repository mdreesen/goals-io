<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

useHead({
    title: 'Ascend | All | Journal Entries',
    meta: [
        { name: 'description', content: 'Ascend All Journal Entries Dashboard.' },
    ],
});

await useFetch('/api/user/journal/all', { key: 'all_entries', lazy: true });
const { data } = useNuxtData('all_entries');
</script>

<template>
    <div class="container-cards">
        <template v-for="item in data">
            <transition name="slide-up" mode="out-in">
                <nuxt-link class="flex flex-col justify-center w-full items-center"
                    :to="`/dashboard/spirit/${[item._id]}/journal`">
                    <baseCard :text="item.title" icon="material-symbols:book-5-outline-rounded"
                        iconColor="bg-green-500/60" iconNav="material-symbols:arrow-forward-ios-rounded" />
                </nuxt-link>
            </transition>
        </template>
    </div>
</template>