<script setup lang="ts">
const userData = ref()

const { data, pending, error } = await useFetch('/api/user/books');

userData.value = data
console.log(data, userData)

</script>

<template>
    <div>
        <appNavBar />
        <h1>Welcome to the Dashboard page</h1>
        <section>
            <UContainer>
                <appLineChart />
            </UContainer>
        </section>
    </div>
</template>