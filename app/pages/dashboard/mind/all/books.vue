<script setup lang="ts">
import { iconsBook } from '~/utils/formatters/useIcons';

definePageMeta({
    layout: 'authenticated',
});

await useFetch('/api/user/books/all', { key: 'all_books' });
const { data } = useNuxtData('all_books');
</script>

<template>
    <div class="flex flex-col gap-4">
        <template v-for="item in data">
            <transition name="slide-up" mode="out-in">
                <NuxtLink :to="`/dashboard/mind/${[item?._id]}/books`"
                    class="flex items-center justify-center w-full h-full text-2xl font-extrabold -x-2">
                    <baseCardBook :kind="item?.kind_of_book" :title="item?.book_title" :author="item?.book_author"
                        :image="item?.book_image" :date="{ date: item?.book_start_date, date_two: item?.book_end_date }"
                        :icon="iconsBook(item?.kind_of_book)" />
                </NuxtLink>
            </transition>
        </template>
    </div>
</template>