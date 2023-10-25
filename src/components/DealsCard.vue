<script setup lang="ts">
import { GameDeal } from '../utils/interfaces/deals'

defineProps<{ deal: GameDeal }>()
</script>

<template>
  <div class="card">
    <img
      v-if="deal.thumb"
      :src="deal.thumb"
      :alt="`Thumb do jogo ${deal.title}`"
    />
    <img
      v-if="!deal.thumb"
      src="../assets/imgs/logo.png"
      :alt="`Thumb do jogo ${deal.title}`"
    />
    <div class="infoWrapper">
      <h2 class="title">{{ deal.title }}</h2>
      <div class="info">
        <RouterLink to="/">
          <p class="detailsButton">Detalhes</p>
        </RouterLink>
        <div class="priceInfo">
          <div>
            <p class="normalPrice">$ {{ deal.normalPrice }}</p>
            <p class="salePrice">$ {{ deal.salePrice }}</p>
          </div>
          <p class="savingsButton">-12%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--primary-color);
  overflow: hidden;
}

img {
  height: 100px;
}

.title {
  font-size: 1.4rem;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.infoWrapper {
  padding: 10px;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.priceInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.normalPrice {
  font-size: 0.7rem;
  line-height: 14px;
  text-align: right;
  font-weight: 100;
  text-decoration: line-through;
}

.salePrice {
  font-size: 1rem;
  line-height: 21px;
  font-weight: 700;
  text-align: right;
}

.detailsButton {
  background-color: rgba(199, 1, 96, 1);
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
}

.savingsButton {
  background-color: rgba(22, 133, 123, 1);
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
}
</style>
