<script setup lang="ts">
import { GameData } from '../../utils/interfaces/deals'

defineProps<{ deal: GameData; dealId: any }>()
</script>

<template>
  <div class="card">
    <img
      v-if="deal.gameInfo.thumb"
      :src="deal.gameInfo.thumb"
      :alt="`Thumb do jogo ${deal.gameInfo.name}`"
    />
    <img
      v-if="!deal.gameInfo.thumb"
      src="/imgs/sem-imagem.jpg"
      :alt="`Thumb do jogo ${deal.gameInfo.name}`"
    />
    <div class="infoWrapper">
      <h2 class="title">{{ deal.gameInfo.name }}</h2>

      <div class="info">
        <div class="priceInfo">
          <p class="savingsButton">
            Rating: {{ deal.gameInfo.steamRatingPercent }}%
          </p>
          <div>
            <p class="normalPrice">$ {{ deal.gameInfo.retailPrice }}</p>
            <p class="salePrice">$ {{ deal.gameInfo.salePrice }}</p>
          </div>
        </div>
      </div>
      <a
        :href="`https://www.cheapshark.com/redirect?dealID=${dealId}`"
        target="_blank"
      >
        <p class="detailsButton">Ver Oferta</p>
      </a>
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
  height: 120px;
}

.title {
  font-size: 1.4rem;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 22px;
}

.infoWrapper {
  padding: 10px;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
}

.priceInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.normalPrice {
  font-size: 1rem;
  line-height: 18px;
  text-align: right;
  font-weight: 100;
  text-decoration: line-through;
}

.salePrice {
  font-size: 1.5rem;
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
  background-color: var(--tertiary-color);
  padding: 5px 15px;
  font-size: 18px;
  display: inline;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
}
</style>
