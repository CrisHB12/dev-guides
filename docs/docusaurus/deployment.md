---
sidebar_position: 4
title: Despliegue (Deployment)
---

# Despliegue de tu Sitio

Docusaurus genera un sitio estático, lo que significa que puedes alojarlo en casi cualquier servicio de hosting web. Aquí te explicamos cómo desplegar tu documentación.

## Generar el Build

Antes de desplegar, siempre necesitas generar los archivos estáticos. En la raíz de tu proyecto ejecuta:

```bash
bun run build
```

Esto creará una carpeta `build/` con todos tus archivos HTML, CSS y JS optimizados. Puedes subir el contenido de esta carpeta a cualquier servidor web.

## Despliegue en GitHub Pages

Docusaurus tiene soporte nativo para GitHub Pages.

### Configuración en `docusaurus.config.ts`

Asegúrate de tener estas propiedades configuradas correctamente en tu archivo `docusaurus.config.ts`:

```typescript
const config: Config = {
  // ...
  url: 'https://tu-usuario.github.io', // Tu URL base de GitHub Pages
  baseUrl: '/nombre-repo/', // El nombre de tu repositorio (con barras al inicio y final)
  organizationName: 'tu-usuario', // Tu nombre de usuario u organización de GitHub
  projectName: 'nombre-repo', // El nombre de tu repositorio
  deploymentBranch: 'gh-pages', // (Opcional) La rama donde se desplegará
  trailingSlash: false,
  // ...
};
```

### Comando de Despliegue

Docusaurus proporciona un comando unificado para construir y desplegar.

**Si usas SSH:**

```bash
USE_SSH=true bun run deploy
```

**Si usas HTTPS (con usuario/contraseña o token):**

```bash
GIT_USER=<TuUsuarioGitHub> bun run deploy
```

Este comando:
1.  Generará el build.
2.  Creará (si no existe) la rama `gh-pages`.
3.  Subirá los archivos estáticos a esa rama.

## Despliegue en Vercel

Vercel es una excelente opción para proyectos Docusaurus por su facilidad de uso y CDN global.

1.  Crea una cuenta en [Vercel](https://vercel.com/).
2.  Instala Vercel CLI o conecta tu repositorio de GitHub desde el panel de Vercel.
3.  Importa tu proyecto. Vercel detectará automáticamente que es un proyecto Docusaurus.
4.  La configuración de build por defecto (`npm run build` o `bun run build`) y el directorio de salida (`build`) suelen ser correctos.
5.  Haz clic en **Deploy**.

## Despliegue en Netlify

1.  Crea una cuenta en [Netlify](https://www.netlify.com/).
2.  Haz clic en "New site from Git".
3.  Conecta tu proveedor (GitHub, GitLab, etc.).
4.  Configura los comandos de build:
    -   **Build command:** `bun run build` (o `npm run build`)
    -   **Publish directory:** `build`
5.  Haz clic en **Deploy site**.
