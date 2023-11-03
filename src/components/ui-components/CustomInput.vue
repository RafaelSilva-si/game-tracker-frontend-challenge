<script setup lang="ts">
import { defineProps } from 'vue'

const { label, onChange, value } = defineProps(['label', 'onChange', 'value'])
</script>

<template>
  <div class="search-input">
    <input
      name="search-input"
      :placeholder="label"
      @keydown.enter="onChange"
      @blur="onChange"
      :value="value"
    />
    <div class="search-icon">
      <img src="/imgs/search_24px_outlined.svg" alt="Search Icon" />
    </div>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  position: relative;
}

input {
  background-color: var(--primary-color);
  border-radius: 8px;
  border: none;
  color: #fff;
  height: 40px;
  font-weight: 100;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-left: 40px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 54%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
}
</style>
