<script setup lang="ts">
import { defineProps } from 'vue'

const { label, onClick } = defineProps(['label', 'onClick'])
</script>

<template>
  <button class="moreButton" @click="onClick">
    {{ label }}
  </button>
</template>

<style scoped>
.moreButton {
  display: block;
  margin: 40px auto;
  padding: 5%;
  background-color: var(--primary-color);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 100;
  font-size: 16px;
  line-height: 20px;
  border: none;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .moreButton {
    width: auto;
    padding: 10px 12%;
  }
}
</style>
