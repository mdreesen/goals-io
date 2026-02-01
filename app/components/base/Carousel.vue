<script setup lang="ts">
import type { BookType } from '~/types/books';
import { iconsBook } from '~/utils/formatters/useIcons';

const props = defineProps({
    data: {
        type: Array<BookType>,
        default: () => [],
        required: true
    },
});

const useArrows = computed(() => props.data.length >= 3 ? true : false);
</script>

<template>
    <ClientOnly>
        <UCarousel v-slot="{ item }" loop :arrows="useArrows" :autoplay="{ delay: 5000 }" wheel-gestures
            :prev="{ variant: 'solid' }" :next="{ variant: 'solid' }" :items="props.data" :ui="{
                item: 'basis-1/2 ps-0 flex p-2 justify-center h-full lg:basis-1/4 md:basis-1/4 sm:basis-1/3',
                prev: 'sm:start-8',
                next: 'sm:end-8',
                container: `ms-0 items-center ${props.data.length === 1 ? 'justify-center' : ''}`
            }">
            <div class="h-full w-full flex gap-4">
                <NuxtLink :to="`/dashboard/mind/${[item?._id]}/books`"
                    class="flex items-center w-full h-full text-2xl font-extrabold -x-2">
                    <baseCardBook :kind="item?.kind_of_book" :title="item?.book_title" :author="item?.book_author"
                        :image="item?.book_image" :date="{ date: item?.book_start_date, date_two: item?.book_end_date }"
                        :icon="iconsBook(item?.kind_of_book)" />
                </NuxtLink>
            </div>
        </UCarousel>
    </ClientOnly>
</template>