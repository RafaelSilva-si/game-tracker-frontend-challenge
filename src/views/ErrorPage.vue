<script setup lang="ts"></script>

<template>
  <main>
    <h1>500 <span>Server Error</span></h1>
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
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

h1 {
  color: white;
  font-size: 4rem;
  font-weight: 300;
}

h1 span {
  color: var(--primary-color);
  font-weight: 500;
  font-size: 2rem;
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
