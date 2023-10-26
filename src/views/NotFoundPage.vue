<script setup lang="ts"></script>

<template>
  <main>
    <img src="/imgs/page-not-found.png" alt="Page Not Found" />
    <h2>Opss, página não foi encontrada</h2>
    <p>A página que você está tentando acessar não foi encontrada.</p>
  </main>
</template>

<style scoped>
main {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
}

img {
  width: 300px;
  height: 300px;
}

h2 {
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

p {
  color: white;
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  margin-top: 20px;
}
</style>
