<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';
import { mood } from "~/utils/dropdowns/selections";

const { data } = useNuxtData('journal');

const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');
const open = ref(false)

const input = reactive({
  mood: "",
  title: "",
  entry: "",
});

async function log() {
  isLoading.value = true;
  $fetch(`/api/user/journal/journal`, {
    method: 'POST',
    body: {
      ...input,
      date: formatDate()
    }
  })
    .then(async () => {
      await refreshSession();
      await refreshNuxtData();
      open.value = false;
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
      <template v-for="item in data.reverse()">
        <transition name="slide-up" mode="out-in">
          <nuxt-link class="flex flex-col justify-center w-full items-center" :to="`/dashboard/spirit/${[item._id]}/journal`">
            <baseCard :text="item.title" icon="material-symbols:book-5-outline-rounded" iconColor="bg-green-500/60"
              iconNav="material-symbols:arrow-forward-ios-rounded" />
          </nuxt-link>
        </transition>
      </template>
    </div>
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

      <div class="w-full relative mb-4 flex justify-center">

        <transition name="slide-up" mode="out-in">

          <UDrawer title="Log a new journal entry" v-model:open="open">
            <UButton label="Add entry" color="neutral" variant="subtle" trailing-icon="material-symbols:book-5" />

            <template #body>
              <form @submit.prevent="log" class="space-y-6">

                <div v-motion="{ ...inputVarient() }">
                  <select id="status-select" v-model="input.mood" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected hidden>Choose mood</option>
                    <option v-for="item in mood" :value="item.value" :key="item.label">
                      {{ item.label }}
                    </option>
                  </select>
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Title" />
                  <input id="text" type="text" v-model="input.title" placeholder="Title" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Entry" />
                  <textarea id="text" type="text" v-model="input.entry" placeholder="Entry" required
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