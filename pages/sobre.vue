<template>
  <main>
    <section>
      <h2>Boas-vindas ao Ludos Globi!</h2>
      <p>Boas-vindas ao Ludus Globi, onde a geografia encontra desafios divertidos e aprendizado interativo! Embarque em uma jornada emocionante pelo mundo enquanto testa seus conhecimentos sobre o globo.</p>
      <p>O Ludus Globi tem como objetivo proporcionar uma experiência de jogo acessível, porém desafiadora, para todos os níveis de conhecimento, esteja você competindo com amigos ou explorando geografia na sala de aula.</p>
      <p>🏗️ Este projeto ainda está em desenvolvimento, mas você pode acompanhar o progresso no <a href="https://github.com/andremourasantos/ludus-globi">GitHub</a>.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
  useHead({
    title: 'Sobre'
  })
</script>

<style scoped>
  main {
    display: grid;
    place-items: center;
    height: calc(100dvh - 80px - 80px);
  }

  h2 {
    margin: auto;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
    max-width: 400px
  }
</style>