<script setup lang="ts"></script>

<template>
  <main>
    <img src="/imgs/internal-error.png" alt="Internal server error" />
    <h2>Opss, algo de errado aconteceu!</h2>
    <p>
      Desculpe-nos, ocorreu um erro interno no servidor. Nossa equipe técnica já
      foi notificada e está trabalhando para resolver o problema. Por favor,
      tente novamente mais tarde. Agradecemos sua compreensão.
    </p>
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
