<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

await useFetch('/api/user/bible/devotional/all', { key: 'all_devotionals', lazy: true });
const { data } = useNuxtData('all_devotionals');
</script>

<template>
    <div class="flex flex-col gap-4">
        <template v-for="item in data">
            <transition name="slide-up" mode="out-in">
                <nuxt-link class="flex flex-col justify-center w-full items-center"
                    :to="`/dashboard/spirit/${[item._id]}/devotional`">
                    <baseCard :label="item.book_title"
                        :text="`${item?.chapter ? `Chapter ${item?.chapter} •` : ''} Verse ${item?.verses ? item?.verses : ''}`"
                        :date="item?.date" icon="material-symbols:shield-outline-rounded" iconColor="bg-gray-500/60"
                        iconNav="material-symbols:arrow-forward-ios-rounded" />
                </nuxt-link>
            </transition>
        </template>
    </div>
</template>