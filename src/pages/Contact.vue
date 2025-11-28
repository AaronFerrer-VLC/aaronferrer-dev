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
          <a href="mailto:aaronferrerbarbas@gmail.com"> 
            aaronferrerbarbas@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/aar%C3%B3n-jos%C3%A9-ferrer-barbas-474858150/" target="_blank" rel="noopener">
            linkedin.com/in/aarón-josé-ferrer-barbas
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
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label for="name">Nombre</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Tu nombre"
            required
            :disabled="isLoading"
          />
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="tu@email.com"
            required
            :disabled="isLoading"
          />
        </div>

        <div class="field">
          <label for="message">Mensaje</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            placeholder="Cuéntame en qué puedo ayudarte"
            required
            :disabled="isLoading"
          ></textarea>
        </div>

        <button type="submit" class="btn btn--primary" :disabled="isLoading">
          <span v-if="isLoading">Enviando...</span>
          <span v-else>Enviar mensaje</span>
        </button>

        <div v-if="message" :class="['contact__message', messageType]">
          {{ message }}
        </div>
      </form>
    </section>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const isLoading = ref(false);
const message = ref("");
const messageType = ref("");

// Configuración de EmailJS
// Variables de entorno necesarias en .env:
// VITE_EMAILJS_SERVICE_ID=tu_service_id (de Email Services en EmailJS)
// VITE_EMAILJS_TEMPLATE_ID=tu_template_id (de Email Templates en EmailJS)
// VITE_EMAILJS_PUBLIC_KEY=tu_public_key (de Account → General en EmailJS)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

const handleSubmit = async () => {
  // Validar que las credenciales estén configuradas
  if (
    EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
    EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
    EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
  ) {
    showMessage(
      "El formulario no está configurado. Por favor, escríbeme directamente a aaronferrerbarbas@gmail.com",
      "error"
    );
    return;
  }

  // Validación básica
  if (!form.name || !form.email || !form.message) {
    showMessage("Por favor, completa todos los campos", "error");
    return;
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    showMessage("Por favor, ingresa un email válido", "error");
    return;
  }

  isLoading.value = true;
  message.value = "";

  try {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_email: "aaronferrerbarbas@gmail.com",
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    showMessage("¡Mensaje enviado con éxito! Te responderé pronto.", "success");
    
    // Limpiar formulario
    form.name = "";
    form.email = "";
    form.message = "";
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    
    // Mensajes de error más específicos
    let errorMessage = "Hubo un error al enviar el mensaje. ";
    
    if (error.status === 400) {
      errorMessage += "Verifica que el template esté configurado correctamente con las variables: {{from_name}}, {{from_email}}, {{message}}";
    } else if (error.status === 401 || error.status === 403) {
      errorMessage += "Verifica tus credenciales de EmailJS (Service ID, Template ID, Public Key)";
    } else if (error.text) {
      errorMessage += `Error: ${error.text}`;
    } else {
      errorMessage += "Por favor, escríbeme directamente a aaronferrerbarbas@gmail.com";
    }
    
    showMessage(errorMessage, "error");
  } finally {
    isLoading.value = false;
  }
};

const showMessage = (text, type) => {
  message.value = text;
  messageType.value = type;
  
  // Limpiar mensaje después de 5 segundos
  setTimeout(() => {
    message.value = "";
  }, 5000);
};
</script>

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

input:disabled,
textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact__message {
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.contact__message.success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #bbf7d0;
}

.contact__message.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  color: #fecaca;
}
</style>

