import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCharts = defineStore('charts', () => {
    const chartData = ref(null);
    const isLoading = ref(false);

    async function fetchCharts(category: string) {
        isLoading.value = true;
        try {
            // Use $fetch for a universal, SSR-safe API call within the store
            const data = await $fetch(`/api/charts/${category}`);
            chartData.value = data;
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            isLoading.value = false;
        }
    };
    return { chartData, isLoading, fetchCharts };
});