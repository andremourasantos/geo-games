<template>
  <main>
    <div>
      <h2>Em breve,</h2>
      <img src="/assets/ilustrations/mobile-pc-mockup.png">
      <h2>divirta-se com jogos de trivia sobre os países ao redor do mundo!</h2>
    </div>
  </main>
</template>

<script setup lang="ts">
  useHead({
    title: 'Boas-vindas'
  })
</script>

<style scoped>
  main {
    display: grid;
    place-items: center;
    height: calc(100dvh - 80px - 80px);
  }

  div {
    display: grid;
    place-items: center;
    text-align: center;
  }

  img {
    aspect-ratio: 16/9;
    width: 100%;
    max-width: 960px;
  }
</style>