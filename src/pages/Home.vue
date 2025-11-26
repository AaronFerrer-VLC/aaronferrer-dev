<template>
  <section class="home">
    <div class="home__avatar">
      <img src="/photo-perfil.webp" alt="Foto de Aarón Ferrer" />
    </div>

    <p class="home__eyebrow">Disponible para colaborar</p>

    <h1 class="home__title">Aarón Ferrer — Junior Backend / Full-Stack Developer</h1>

    <p class="home__tagline">
      Construyo aplicaciones web rápidas y escalables con foco en backend robusto,
      buenas prácticas y visualización de datos. Me gusta estar cerca del negocio
      para entregar valor real y medible.
    </p>

    <div class="home__actions">
      <RouterLink to="/projects" class="btn btn--primary">Ver proyectos</RouterLink>
      <a href="/cv-aaron-ferrer.pdf" class="btn btn--ghost" download>Descargar CV</a>
    </div>

    <ul class="home__tech">
      <li>Java</li>
      <li>Spring</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.home {
  text-align: center;
}

.home__avatar img {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  object-fit: cover;
  border: 3px solid #22c55e;
  margin-bottom: 1rem;
}

.home__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  color: #a5b4fc;
}

.home__title {
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 0.75rem 0;
}

.home__tagline {
  max-width: 40rem;
  margin: 0 auto 1.75rem;
  color: #9ca3af;
}

.home__actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.btn {
  border-radius: 999px;
  padding: 0.6rem 1.3rem;
  font-size: 0.9rem;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn--primary {
  background: #22c55e;
  color: #022c22;
}

.btn--ghost {
  background: transparent;
  border-color: #4b5563;
  color: #e5e7eb;
}

.home__tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  color: #9ca3af;
}
</style>

