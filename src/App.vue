<script setup lang="ts">
import { RouterView } from 'vue-router'

import { Footer, Header } from './components'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
