<script setup lang="ts">
import { defineProps } from 'vue'

const { label, handleChange, value } = defineProps([
  'label',
  'handleChange',
  'value',
])
</script>

<template>
  <div class="selectWrapper">
    <label v-if="label">{{ label }}:</label>
    <select @change="handleChange" :value="value" name="select-order">
      <option value="0" selected disabled>Selecione...</option>
      <slot></slot>
    </select>
  </div>
</template>

<style scoped>
.selectWrapper {
  text-align: center;
}

.selectWrapper label {
  font-size: 16px;
  line-height: 20px;
  color: white;
  width: 100%;
}

select {
  background-color: var(--primary-color);
  border-radius: 8px;
  border: none;
  color: #fff;
  height: 40px;
  font-weight: 100;
  padding: 10px;
  font-size: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
}

@media (min-width: 768px) {
  .selectWrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }
}
</style>
