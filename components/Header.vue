<template>
  <header>
    <section>
      <nuxt-link to="/" class="logo_container" title="Navegar para página inicial">
        <img src="/favicon.png" alt="Ícone do globo." height="36">
        <h1>Ludos Globi</h1>
      </nuxt-link>
    </section>

    <nav>
      <ul class="no_show_mobile">
        <li><nuxt-link to="/">Página Inicial</nuxt-link></li>
        <li><nuxt-link to="/sobre">Sobre</nuxt-link></li>
      </ul>
      <PhList class="show_mobile_only"/>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { PhList } from '@phosphor-icons/vue';
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: var(--default_padding);
    background-color: white;
  }

  .logo_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  nav ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    list-style-type: none;
  }

  nav a {
    padding: 8px;
  }

  nav a:hover:not(.router-link-exact-active) {
    border-radius: 8px;
    background-color: var(--darker_background);
  }

  nav a.router-link-exact-active {
    font-weight: bold;
  }
</style>