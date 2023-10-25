<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { GameDeal } from './utils/interfaces/deals';

let Deals = ref<GameDeal[]>([]);

const store = useStore();
const router = useRouter();
const currentQuery = { ...router.currentRoute.value.query };

onMounted(async () => {
  await store.dispatch('deals/fetchData', {});
  Deals.value = store.state.deals.data;
});

watch(() => router.currentRoute.value.query, async (newParams) => {
  await store.dispatch('deals/fetchData', newParams);
  Deals.value = store.state.deals.data;
});

const handlePage = (page: string) => {
  currentQuery.page = page;
  router.push({ query: currentQuery });
}

const handleTitle = (title: string) => {
  currentQuery.title = title;
  router.push({ query: currentQuery });
}

const handleSortBy = (sortBy: string) => {
  currentQuery.sortBy = sortBy;
  router.push({ query: currentQuery });
}

</script>

<template>
  <button @click="handlePage('2')">Teste 1</button>
  <button @click="handleTitle('Farm')">Teste 2</button>
  <button @click="handleSortBy('Farm')">Teste 3</button>
</template>

<style scoped></style>
