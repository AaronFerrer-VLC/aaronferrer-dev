<template>
  <div class="app">
    <Navbar />

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      <p>© {{ new Date().getFullYear() }} Aarón Ferrer — Backend / Full-Stack Developer</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

