<template>
  <Header />
  <NuxtPage />
  <Footer /> 
</template>

<script setup lang="ts">
  import { provide } from "vue";

  provide("color", "black");
  provide("size", 32);
  provide("weight", "light");
</script>

<style>
  body {
    background-image: url('/assets/ilustrations/background_map.svg');
    background-size: cover;
    background-blend-mode: darken;
  }
</style>