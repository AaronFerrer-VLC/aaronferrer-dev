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

## 🚢 Deploy

El proyecto está listo para desplegar en Vercel:

1. Sube el repo a GitHub
2. En Vercel, importa el proyecto desde GitHub
3. Framework: Vite
4. Build command: `npm run build`
5. Output directory: `dist`

