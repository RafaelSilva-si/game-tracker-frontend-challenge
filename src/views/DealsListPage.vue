<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { GameDeal } from './utils/interfaces/deals'
import DealsCard from '../components/ui-components/DealsCard.vue'
import Button from '../components/ui-components/Button.vue'
import CustomInput from '../components/ui-components/CustomInput.vue'
import CustomSelect from '../components/ui-components/CustomSelect.vue'

let Deals = ref<GameDeal[]>([])

const store = useStore()
const router = useRouter()
const currentQuery = { ...router.currentRoute.value.query }

onMounted(async () => {
  await store.dispatch('deals/fetchData', {
    title: currentQuery.title,
    sortBy: currentQuery.sortBy,
  })
  Deals.value = store.state.deals.data
})

watch(
  () => router.currentRoute.value.query,
  async (newParams) => {
    await store.dispatch('deals/fetchData', newParams)
    Deals.value = store.state.deals.data
  },
)

const handlePage = () => {
  currentQuery.page = currentQuery.page ? currentQuery.page : 1
  currentQuery.page = parseInt(currentQuery.page) + 1
  router.push({ query: currentQuery })
}

const handleTitle = (title: string) => {
  currentQuery.title = title
  router.push(`?title=${title}`)
}

const handleSortBy = (sortBy: string) => {
  currentQuery.sortBy = sortBy
  router.push(`?sortBy=${sortBy}`)
}
</script>

<template>
  <main>
    <h1>Ofertas</h1>
    <nav>
      <CustomInput
        :onChange="(e: any) => handleTitle(e.target.value)"
        label="Pesquisar"
        :value="currentQuery.title || ''"
      />
      <CustomSelect
        :label="'Ordernar por'"
        :value="currentQuery.sortBy || ''"
        :handleChange="(e: any) => handleSortBy(e.target.value)"
      >
        <option value="savings">% de Desconto</option>
        <option value="higher-price">Maior preço</option>
        <option value="price">Menor preço</option>
        <option value="title">Título</option>
      </CustomSelect>
    </nav>
    <div class="list">
      <DealsCard v-for="deal in Deals" :key="deal.gameID" :deal="deal" />
    </div>
    <Button
      :label="'Carregar mais'"
      :onClick="handlePage"
      v-if="Deals.length >= 11"
    />
  </main>
</template>

<style scoped>
main {
  max-width: 960px;
  padding: 0.7rem;
}

h1 {
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
}

nav {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: end;
  margin: 0px 10px 20px 0px;
  gap: 20px;
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  main {
    width: 960px;
    max-width: 960px;
  }

  h1 {
    text-align: start;
    margin-top: 20px;
  }

  nav {
    gap: 40%;
    margin: 30px 0px;
  }

  .list {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
}

@media (min-width: 1024px) {
  main {
    width: 1080px;
    max-width: 1080px;
  }
}
</style>
