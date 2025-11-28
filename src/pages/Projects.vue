<template>
  <section>
    <header class="projects-header">
      <h1>Proyectos</h1>
      <p>
        Una selección de proyectos donde aplico arquitectura limpia, buenas prácticas
        y foco en resultados de negocio.
      </p>
    </header>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";

const projects = [
  {
    slug: "petconnect",
    title: "PetConnect (Backend)",
    status: "Proyecto TFG",
    description:
      "Backend del sistema de reservas para cuidadores de mascotas. API REST con FastAPI, MongoDB, WebSockets para chat en tiempo real, sistema de pagos y autenticación JWT. Incluye rate limiting y arquitectura escalable.",
    stack: ["Python", "FastAPI", "MongoDB", "WebSockets", "JWT", "Pytest"],
    githubUrl: "https://github.com/AaronFerrer-VLC/PetConnect",
    demoUrl: "",
  },
  {
    slug: "petconnect-web",
    title: "PetConnect (Frontend)",
    status: "Proyecto TFG",
    description:
      "Frontend del sistema PetConnect desarrollado con React. Incluye búsqueda de cuidadores, sistema de reservas, chat en tiempo real y dashboard de pagos. Conecta con el backend mediante API REST y WebSockets.",
    stack: ["React", "React Router", "Tailwind CSS", "WebSocket"],
    githubUrl: "https://github.com/AaronFerrer-VLC/PetConnect_Web",
    demoUrl: "",
  },
  {
    slug: "casapin-fullstack",
    title: "CasaPin Fullstack",
    status: "Desplegado",
    description:
      "Plataforma full-stack para gestión de lugares turísticos. Frontend con React + Vite + Tailwind y mapa interactivo con Leaflet. Backend Node.js + Express + MongoDB. Desplegado en Netlify y Fly.io.",
    stack: ["React", "Vite", "Tailwind CSS", "Leaflet", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/AaronFerrer-VLC/CasaPin-Fullstack",
    demoUrl: "",
  },
  {
    slug: "meteosmart",
    title: "MeteoSmart",
    status: "Proyecto personal",
    description:
      "Aplicación inteligente para consulta y análisis de datos meteorológicos. Procesamiento de datos climáticos con visualización interactiva.",
    stack: ["Python", "FastAPI", "Data Processing"],
    githubUrl: "https://github.com/AaronFerrer-VLC/MeteoSmart",
    demoUrl: "",
  },
  {
    slug: "final-project-backend",
    title: "Final Project (Backend)",
    status: "Proyecto final",
    description:
      "Backend API REST para sistema de comunidades y reseñas. Arquitectura MVC con Node.js y Express, incluye autenticación, gestión de usuarios, comunidades y reviews. Desplegado en Fly.io con Docker.",
    stack: ["Node.js", "Express", "MongoDB", "Docker", "JWT"],
    githubUrl: "https://github.com/AaronFerrer-VLC/server-final-project",
    demoUrl: "",
  },
  {
    slug: "final-project-frontend",
    title: "Final Project (Frontend)",
    status: "Proyecto final",
    description:
      "Frontend del sistema de comunidades y reseñas desarrollado con React y Vite. Interfaz para gestión de comunidades, creación de reseñas y autenticación de usuarios.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    githubUrl: "https://github.com/AaronFerrer-VLC/client-final-project",
    demoUrl: "",
  },
];
</script>

<style scoped>
.projects-header {
  margin-bottom: 1.75rem;
}

.projects-header h1 {
  margin-bottom: 0.5rem;
}

.projects-header p {
  color: #9ca3af;
  max-width: 36rem;
}

.projects-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

