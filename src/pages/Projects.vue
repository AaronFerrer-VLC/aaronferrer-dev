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
    slug: "microshop-platform",
    title: "microshop-platform",
    status: "En desarrollo",
    description:
      "Plataforma de e-commerce modular basada en microservicios para tiendas pequeñas, con catálogo, pagos y panel de administración.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Keycloak"],
    githubUrl: "https://github.com/tu-usuario/microshop-platform",
    demoUrl: "",
  },
  {
    slug: "booking-hexagonal",
    title: "booking-hexagonal",
    status: "MVP estable",
    description:
      "Sistema de reservas con arquitectura hexagonal, separación clara entre dominio, aplicación e infraestructura.",
    stack: ["Java", "Spring", "Hexagonal Architecture", "MySQL"],
    githubUrl: "https://github.com/tu-usuario/booking-hexagonal",
    demoUrl: "",
  },
  {
    slug: "data-insights",
    title: "data-insights",
    status: "En mejora continua",
    description:
      "Pipeline de analítica de datos para dashboards ejecutivos, desde ingesta hasta visualización.",
    stack: ["Python", "Pandas", "FastAPI", "PostgreSQL", "Power BI / Metabase"],
    githubUrl: "https://github.com/tu-usuario/data-insights",
    demoUrl: "",
  },
  {
    slug: "javafx-game",
    title: "javafx-game",
    status: "Proyecto personal",
    description:
      "Juego 2D desarrollado con JavaFX para practicar patrones de diseño, UI y estructura de proyecto en Java.",
    stack: ["Java", "JavaFX", "Maven"],
    githubUrl: "https://github.com/tu-usuario/javafx-game",
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

