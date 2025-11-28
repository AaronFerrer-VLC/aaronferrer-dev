# Portafolio de Aarón Ferrer

Portafolio personal desarrollado con Vue 3 + Vite.

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del proyecto

```
dev-portfolio/
├─ index.html
├─ vite.config.js
├─ public/
│  ├─ cv-aaron-ferrer.pdf
│  └─ photo-perfil.webp
├─ src/
│  ├─ main.js
│  ├─ App.vue
│  ├─ router/
│  │  └─ index.js
│  ├─ assets/
│  │  └─ main.css
│  ├─ components/
│  │  ├─ Navbar.vue
│  │  └─ ProjectCard.vue
│  └─ pages/
│     ├─ Home.vue
│     ├─ Projects.vue
│     ├─ About.vue
│     └─ Contact.vue
```

## 📝 Notas

- Asegúrate de copiar tu CV (`cv-aaron-ferrer.pdf`) y foto de perfil (`photo-perfil.webp`) a la carpeta `public/`
- Actualiza los enlaces de GitHub en `src/pages/Projects.vue` con tus repositorios reales
- Actualiza la información de contacto en `src/pages/Contact.vue`

## 📧 Configurar formulario de contacto (EmailJS)

El formulario de contacto usa EmailJS para enviar emails sin backend. Para configurarlo:

### Pasos de configuración:

1. **Crea una cuenta gratuita** en [EmailJS](https://www.emailjs.com/)

2. **Crea un servicio de email:**
   - Ve a "Email Services" → "Add New Service"
   - **OPCIÓN RECOMENDADA:** Selecciona **"Mailjet"** (en "Transactional Services")
     - Tiene plan gratuito (6,000 emails/mes)
     - No requiere OAuth
     - Configuración simple: solo necesitas tu API Key y Secret Key de Mailjet
   - **ALTERNATIVA:** Selecciona **"SMTP server"** (en "Personal Services")
     - Permite usar cualquier servidor SMTP
     - Para Gmail: usa contraseña de aplicación (no OAuth)

3. **Crea un template de email:**
   - Ve a "Email Templates" → "Create New Template"
   - Configura el template con estas variables:
     - `{{from_name}}` - Nombre del remitente
     - `{{from_email}}` - Email del remitente
     - `{{message}}` - Mensaje
   - En "To Email" pon: `aaronferrerbarbas@gmail.com`
   - En "From Name" puedes poner: `{{from_name}}`
   - En "Subject" puedes poner: `Nuevo mensaje de contacto de {{from_name}}`

4. **Obtén tus credenciales:**
   - Service ID: Lo verás en "Email Services"
   - Template ID: Lo verás en "Email Templates"
   - Public Key: Lo verás en "Account" → "General"

5. **Crea un archivo `.env`** en la raíz del proyecto:
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

6. **Reinicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

**Nota:** En producción (Vercel), agrega estas variables en la configuración de Environment Variables del proyecto.

### Solución al error de Gmail:

Si intentas usar Gmail y te sale el error "Request had insufficient authentication scopes", usa el servicio **"EmailJS"** en su lugar, que es más simple y no requiere configuración de OAuth de Google.

## 🚢 Deploy en Vercel

### Paso 1: Subir a GitHub

Si aún no tienes el proyecto en GitHub:

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Portfolio Vue 3"

# Crear repositorio en GitHub y luego:
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M main
git push -u origin main
```

### Paso 2: Desplegar en Vercel

1. **Ve a [Vercel](https://vercel.com)** y crea una cuenta (o inicia sesión con GitHub)

2. **Importa tu proyecto:**
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configuración del proyecto:**
   - **Framework Preset:** Vite (debería detectarse automáticamente)
   - **Build Command:** `npm run build` (ya viene por defecto)
   - **Output Directory:** `dist` (ya viene por defecto)
   - **Install Command:** `npm install` (ya viene por defecto)

4. **Variables de entorno (IMPORTANTE):**
   - En la sección "Environment Variables", agrega estas 3 variables:
     - `VITE_EMAILJS_SERVICE_ID` = tu_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = tu_template_id
     - `VITE_EMAILJS_PUBLIC_KEY` = tu_public_key
   - Asegúrate de que estén marcadas para "Production", "Preview" y "Development"

5. **Deploy:**
   - Click en "Deploy"
   - Espera a que termine el build (1-2 minutos)
   - ¡Listo! Tu portafolio estará en línea

### Paso 3: Dominio personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

### Notas importantes:

- **Variables de entorno:** Asegúrate de agregar las 3 variables de EmailJS en Vercel, o el formulario no funcionará
- **Actualizar Open Graph:** En `index.html`, actualiza la línea 19 con tu URL de Vercel cuando tengas el dominio
- **Build automático:** Cada push a `main` desplegará automáticamente una nueva versión

