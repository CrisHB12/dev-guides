---
sidebar_position: 1
title: Configuración con Bun
---

# Configuración de Docusaurus con Bun

Docusaurus es un generador de sitios estáticos moderno diseñaado para documentación. El uso de **Bun** hace que la instalación y el proceso de construcción sean significativamente más rápidos y eficientes.

## 🛠 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Bun](https://bun.sh/) (v1.0.0 o superior)
- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada, aunque Bun reemplaza su uso en la mayoría de los casos de desarrollo local)

## 🚀 Instalación y Creación del Proyecto

Para crear un nuevo proyecto desde cero utilizando la plantilla "classic" (recomendada para la mayoría de sitios de documentación), ejecuta el siguiente comando en tu terminal:

```bash
bunx create-docusaurus@latest mi-sitio-web classic --typescript
```

Esto generará una carpeta llamada `mi-sitio-web` con la estructura base del proyecto lista para usar.

## 📂 Estructura del Proyecto

Una vez creado el proyecto, verás una estructura de archivos como esta. Es importante entender qué hace cada parte:

```text
mi-sitio-web/
├── blog/                   # Contiene los archivos del blog (formato Markdown).
├── docs/                   # Contiene la documentación principal. Aquí es donde escribirás más.
├── src/                    # Código fuente personalizado.
│   ├── components/         # Tus componentes de React personalizados.
│   └── css/                # Archivos CSS globales (como custom.css).
├── static/                 # Archivos estáticos públicos (imágenes, favicons, robots.txt).
├── docusaurus.config.ts    # Archivo de configuración principal del sitio (título, URL, plugins).
├── sidebars.ts             # Configuración de la barra lateral de navegación.
└── package.json            # Lista de dependencias y scripts del proyecto.
```

## 💻 Comandos Esenciales

Estos son los comandos que utilizarás frecuentemente durante el desarrollo:

| Acción | Comando Bun | Descripción |
| :--- | :--- | :--- |
| **Instalar Dependencias** | `bun install` | Instala todas las dependencias listadas en el archivo `package.json`. Ejecuta esto primero si clonas un repositorio. |
| **Desarrollo Local** | `bun start` | Inicia un servidor de desarrollo local en `http://localhost:3000`. Recarga automáticamente los cambios. |
| **Construir (Build)** | `bun run build` | Genera los archivos estáticos optimizados para producción en la carpeta `build`. |
| **Servir Producción** | `bun run serve` | Sirve localmente los archivos generados en la carpeta `build` para probar el sitio tal como se verá en producción. |

## 🌟 Siguientes Pasos

Una vez tengas tu entorno configurado:

1.  Explora la carpeta `docs/` y comienza a editar o crear nuevos archivos `.md`.
2.  Configura tu barra lateral en `sidebars.ts` si necesitas una estructura de navegación personalizada.
3.  Personaliza el aspecto visual en `src/css/custom.css`.