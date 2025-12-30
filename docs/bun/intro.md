---
sidebar_position: 1
title: Introducción a Bun
description: Descubre qué es Bun y por qué está revolucionando el ecosistema de JavaScript.
tags: [bun, javascript, runtime, intro]
---

# Introducción a Bun

**Bun** es un nuevo runtime de JavaScript "todo en uno" diseñado para reemplazar a Node.js. Fue construido desde cero para ser **extremadamente rápido**, centrándose en tres objetivos principales: arrancar rápido, nuevos niveles de rendimiento y ser una herramienta completa y cohesiva.

## 🍔 ¿Qué es Bun?

A diferencia de Node.js que usa el motor V8 (de Google Chrome), Bun utiliza **JavaScriptCore**, el motor de rendimiento desarrollado por Apple para Safari. Esto, junto con estar escrito en el lenguaje **Zig** (conocido por su control de memoria de bajo nivel), le da a Bun una velocidad increíble.

Pero Bun no es solo un runtime, es un **kit de herramientas completo** que incluye:

1.  **Runtime**: Ejecuta JavaScript y TypeScript (soporte nativo).
2.  **Package Manager**: Un reemplazo compatible y ultra veloz para `npm` / `yarn`.
3.  **Bundler**: Empaqueta tu código para producción (reemplazo de Webpack/Vite/Rollup).
4.  **Test Runner**: Un corredor de pruebas integrado estilo Jest.

## 🌟 Características Principales

### Soporte Nativo de TypeScript
Olvídate de configurar `ts-node` o pasos de compilación complejos para desarrollo. Bun ejecuta archivos `.ts` y `.tsx` directamente.

```bash
bun run index.ts
```

### Compatible con Node.js
Bun implementa la mayoría de las APIs de Node.js (como `fs`, `path`, `http`), lo que significa que la mayoría de paquetes de npm funcionan sin cambios.

### Velocidad Extrema
Desde la instalación de paquetes (hasta 30x más rápido que npm) hasta el arranque del servidor, todo está optimizado para la velocidad.

## 🛠 Instalación

Para instalar Bun en macOS, Linux o WSL (Windows Subsystem for Linux), ejecuta:

```bash
curl -fsSL https://bun.sh/install | bash
```

:::info Usuarios de Windows
Actualmente existe una versión experimental nativa para Windows, pero se recomienda encarecidamente usar **WSL 2** para una experiencia estable y completa.
:::

Para verificar la instalación:

```bash
bun --version
```
