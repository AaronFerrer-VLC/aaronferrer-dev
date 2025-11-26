<template>
  <section class="about">
    <header>
      <h1>Sobre mí</h1>
      <p class="about__intro">
        Soy Aarón Ferrer, desarrollador con foco en backend y experiencia liderando productos
        digitales cercanos al negocio.
      </p>
    </header>

    <section class="about__block">
      <h2>Historia</h2>
      <p>
        Cuento con experiencia en desarrollo Full Stack trabajando con tecnologías como
        JavaScript (ES6+), React, Node.js, MongoDB y Express, complementado con una fuerte
        orientación backend en Java y Spring. También he trabajado con Python y herramientas
        de análisis de datos como Pandas y SQL para construir soluciones de reporting y
        visualización.
      </p>
      <p>
        Además de la parte técnica, he ejercido como Product Owner / Digital Product Manager
        en entornos ágiles (Scrum y Kanban), gestionando el ciclo de vida completo de
        productos digitales: desde la discovery y definición de requisitos hasta la entrega
        y medición de resultados. Esto me permite ser un puente efectivo entre negocio y
        equipo técnico.
      </p>
      <p>
        Vengo del mundo de Recursos Humanos, algo que refuerza mi capacidad para comunicar,
        facilitar dinámicas de equipo y mantener el foco en las personas mientras construyo
        soluciones tecnológicas útiles, mantenibles y escalables.
      </p>
    </section>

    <section class="about__block">
      <h2>Habilidades</h2>

      <div class="skills-grid">
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java · Spring / Spring Boot</li>
            <li>REST APIs · JSON · JWT</li>
            <li>Node.js · Express</li>
            <li>Arquitectura limpia / hexagonal</li>
          </ul>
        </div>

        <div>
          <h3>Frontend</h3>
          <ul>
            <li>React · Vue 3</li>
            <li>HTML5 · CSS3 · Responsive</li>
            <li>TypeScript (en aprendizaje continuo)</li>
          </ul>
        </div>

        <div>
          <h3>Datos & DevOps</h3>
          <ul>
            <li>SQL · PostgreSQL · MySQL</li>
            <li>Python · Pandas</li>
            <li>Docker · Git · CI/CD básico</li>
          </ul>
        </div>

        <div>
          <h3>Producto & Agile</h3>
          <ul>
            <li>Product discovery & priorización</li>
            <li>Scrum · Kanban</li>
            <li>Comunicación con stakeholders</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="about__block">
      <h2>Cómo uso IA (Cursor) en mi flujo de trabajo</h2>
      <p>
        Uso herramientas de IA como <strong>Cursor</strong> para acelerar mi desarrollo,
        pero siempre manteniendo criterio técnico y revisión manual de lo que genero.
      </p>

      <ul class="about__ia-list">
        <li>
          <strong>Exploración de soluciones:</strong> cuando tengo un problema complejo,
          utilizo la IA para generar diferentes enfoques, comparar pros y contras y elegir
          la arquitectura que mejor encaja.
        </li>
        <li>
          <strong>Boilerplate y repetitivo:</strong> delego en la IA la generación de código
          repetitivo (DTOs, mapeos, tests básicos), manteniendo yo el diseño del dominio
          y las decisiones importantes.
        </li>
        <li>
          <strong>Refactor y legibilidad:</strong> uso la IA para proponer refactors,
          nombres más claros y pequeñas mejoras de performance, especialmente en código
          que llevo tiempo sin tocar.
        </li>
        <li>
          <strong>Documentación y comunicación:</strong> genero borradores de README,
          documentación técnica o tickets de Jira, que luego adapto con mi lenguaje y contexto.
        </li>
        <li>
          <strong>Aprendizaje continuo:</strong> combino documentación oficial con la IA
          para entender conceptos avanzados (por ejemplo, arquitectura hexagonal, patrones
          de diseño o prácticas de testing).
        </li>
      </ul>

      <p>
        En resumen, la IA es un <strong>acelerador</strong>, no un sustituto: yo defino
        el objetivo, la arquitectura y los estándares de calidad; la IA me ayuda a llegar
        más rápido y con menos fricción.
      </p>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.about__intro {
  color: #9ca3af;
  max-width: 40rem;
}

.about__block {
  margin-top: 2rem;
}

.skills-grid {
  display: grid;
  gap: 1.25rem;
}

.skills-grid h3 {
  margin-bottom: 0.3rem;
}

.skills-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: #e5e7eb;
}

.skills-grid li {
  margin-bottom: 0.25rem;
}

@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.about__ia-list {
  margin-top: 0.75rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.about__ia-list li {
  color: #e5e7eb;
  font-size: 0.9rem;
}
</style>

