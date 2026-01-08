// stores/itemStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBooks = defineStore('bookStore', () => {
  let items = ref([]);
  const isInitialized = ref(false);

  // Action to fetch data from the Nuxt API endpoint
  async function fetchItems() {
    if (!isInitialized.value) { // Optional: only fetch once
      const response = await $fetch('/api/user/books');
      console.log('response', response)
      items.value = response;
      isInitialized.value = true;
    }
  }

  return { items, fetchItems };
});