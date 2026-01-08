<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';

const { data } = useNuxtData('gratitudes');

const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
  gratitude: "",
});

async function log() {
  isLoading.value = true;
  $fetch(`/api/user/gratitudes/gratitudes`, {
    method: 'POST',
    body: {
      ...input,
      date: formatDate()
    }
  })
    .then(async () => {
      await refreshSession();
      await refreshNuxtData();

      isLoading.value = false;
    })
    .catch(async (error) => {
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });
};

</script>

<template>
  <div>
    <div class="container-cards">
      <template v-for="item in data">
        <transition name="slide-up" mode="out-in">
          <nuxt-link class="flex flex-col justify-center w-full items-center" :to="`/dashboard/mind/${[item._id]}/gratitudes`">
            <baseCard :text="item.description" icon="material-symbols:bolt-outline-rounded"
              iconNav="material-symbols:arrow-forward-ios-rounded" />
          </nuxt-link>
        </transition>
      </template>
    </div>
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

      <div class="w-full relative mb-4 flex justify-center">

        <transition name="slide-up" mode="out-in">

          <UDrawer title="Log a new gratitude">
            <UButton label="Add Gratitude" color="neutral" variant="subtle"
              trailing-icon="material-symbols:bolt-rounded" />

            <template #body>
              <form @submit.prevent="log" class="space-y-6">

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Description" />
                  <textarea id="text" type="text" v-model="input.gratitude" placeholder="Gratitude" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div class="flex flex-col gap-8 pb-4">
                  <baseButtonSubmit text="Save" :isLoading="isLoading" />
                </div>
              </form>
            </template>
          </UDrawer>
        </transition>
      </div>
    </div>
  </div>
</template>