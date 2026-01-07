<script setup lang="ts">
import { ref } from 'vue';
import { formatDate } from '~/utils/date';
import { book_of_bible } from "~/utils/dropdowns/selections";

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

const { fetch: refreshSession } = useUserSession();

const isLoading = ref(false);
let errorMessage = ref('');

const input = reactive({
  type: "Devotional",
  book: "",
  chapter: "",
  verses: "",
  notes: "",
});

async function log() {
  isLoading.value = true;
  $fetch(`/api/user/bible/devotional`, {
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
      <template v-for="item in props.data">
        <transition name="slide-up" mode="out-in">
          <nuxt-link class="flex flex-col justify-center w-full items-center"
            :to="`/dashboard/spirit/${[item._id]}/devotional`">
            <baseCard :label="item.book_title"
              :text="`${item?.chapter ? `Chapter ${item?.chapter} •` : ''} Verse ${item?.verses ? item?.verses : ''}`"
              :date="item?.date"
              icon="material-symbols:shield-outline-rounded" iconColor="bg-gray-500/60"
              iconNav="material-symbols:arrow-forward-ios-rounded" />
          </nuxt-link>
        </transition>
      </template>
    </div>
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

      <div class="w-full relative mb-4 flex justify-center">

        <transition name="slide-up" mode="out-in">

          <UDrawer title="Log a new devotional entry">
            <UButton label="Add devotional entry" color="neutral" variant="subtle"
              trailing-icon="material-symbols:shield-spark-rounded" />

            <template #body>
              <form @submit.prevent="log" class="space-y-6">

                <div v-motion="{ ...inputVarient() }">
                  <select id="status-select" v-model="input.book" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" disabled selected hidden>Choose book</option>
                    <option v-for="item in book_of_bible" :value="item.value" :key="item.label">
                      {{ item.label }}
                    </option>
                  </select>
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Chapter" />
                  <input id="text" type="text" v-model="input.chapter" placeholder="Chapter" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Verses" />
                  <input id="text" type="text" v-model="input.verses" placeholder="verses" required
                    class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div v-motion="{ ...inputVarient() }">
                  <baseLabel text="Notes" />
                  <textarea id="text" type="text" v-model="input.notes" placeholder="Entry" required
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