<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { GameData } from '../utils/interfaces/deals.ts'
import DealsScreen from '../components/ui-components/DealsScreen.vue'

const store = useStore()
const router = useRouter()
const currentQuery = { ...router.currentRoute.value.query }

let Deal = ref<GameData>()

onMounted(async () => {
  await store.dispatch('deals/fetchDataById', { dealsID: currentQuery.dealsID })
  Deal.value = store.state.deals.deal
})
</script>

<template>
  <main>
    <section class="container">
      <DealsScreen :deal="Deal" :deal-id="currentQuery.dealsID" v-if="Deal" />
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1020px;
  height: 50vh;
  display: flex;
  align-items: center;
}
</style>
