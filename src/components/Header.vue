<script setup lang="ts"></script>

<template>
  <header>
    <div class="container">
      <RouterLink to="/">
        <img src="../assets/imgs/logo.png" alt="Logo Game Tracker" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.7rem 0px;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 860px;
    & > * {
      display: flex;
      justify-content: start;
    }
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1080px;
    & > * {
      display: flex;
      justify-content: start;
    }
  }
}
</style>
