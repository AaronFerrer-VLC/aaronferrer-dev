<template>
  <header class="navbar">
    <div class="navbar__logo">
      <RouterLink to="/">AF</RouterLink>
    </div>

    <button class="navbar__toggle" @click="isOpen = !isOpen" aria-label="Abrir menú">
      ☰
    </button>

    <nav :class="['navbar__links', { 'navbar__links--open': isOpen }]">
      <RouterLink to="/" @click="close">Home</RouterLink>
      <RouterLink to="/projects" @click="close">Proyectos</RouterLink>
      <RouterLink to="/about" @click="close">Sobre mí</RouterLink>
      <RouterLink to="/contact" @click="close">Contacto</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);
const close = () => (isOpen.value = false);
</script>

