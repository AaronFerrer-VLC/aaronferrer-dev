<template>
  <section class="contact">
    <header>
      <h1>Contacto</h1>
      <p class="contact__intro">
        ¿Te interesa colaborar, tienes una oferta o simplemente quieres charlar sobre tecnología?
        Escríbeme y te respondo lo antes posible.
      </p>
    </header>

    <section class="contact__info">
      <h2>Información directa</h2>
      <ul>
        <li>
          <strong>Email:</strong>
          <a href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener">
            linkedin.com/in/tu-linkedin
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/AaronFerrer-VLC" target="_blank" rel="noopener">
            github.com/AaronFerrer-VLC
          </a>
        </li>
      </ul>
    </section>

    <section class="contact__form">
      <h2>Formulario de contacto</h2>
      <form @submit.prevent>
        <div class="field">
          <label for="name">Nombre</label>
          <input id="name" type="text" placeholder="Tu nombre" />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="tu@email.com" />
        </div>

        <div class="field">
          <label for="message">Mensaje</label>
          <textarea id="message" rows="4" placeholder="Cuéntame en qué puedo ayudarte"></textarea>
        </div>

        <button type="submit" class="btn btn--primary" disabled>
          Enviar (próximamente)
        </button>
      </form>
      <p class="contact__note">
        De momento el formulario es solo UI. Puedes escribirme directamente por email o LinkedIn.
      </p>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.contact__intro {
  color: #9ca3af;
  max-width: 40rem;
}

.contact__info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact__info li {
  margin-bottom: 0.5rem;
}

.contact__info a {
  color: #a5b4fc;
}

.contact__form {
  margin-top: 2rem;
}

form {
  display: grid;
  gap: 0.9rem;
  max-width: 480px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label {
  font-size: 0.85rem;
  color: #e5e7eb;
}

input,
textarea {
  background: #020617;
  border-radius: 0.5rem;
  border: 1px solid #1f2937;
  padding: 0.55rem 0.7rem;
  color: #e5e7eb;
  font-family: inherit;
}

input:focus,
textarea:focus {
  outline: 1px solid #22c55e;
  border-color: #22c55e;
}

.contact__note {
  color: #9ca3af;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
</style>

