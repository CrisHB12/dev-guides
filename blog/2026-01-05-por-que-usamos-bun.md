---
slug: por-que-usamos-bun
title: ¿Por qué elegimos Bun sobre Node.js?
authors: [devteam]
tags: [bun, opinion]
date: 2026-01-05
---

En el mundo del desarrollo de JavaScript, Node.js ha sido el rey indiscutible durante más de una década. Sin embargo, en **Mural Táctil** hemos tomado la decisión audaz de migrar nuestras herramientas y nuevas guías hacia **Bun**.

¿Por qué cambiar algo que funciona? La respuesta corta es: **Velocidad y Simplicidad**.

<!--truncate-->

## El problema de la "Fatiga de Herramientas"

Antes de Bun, iniciar un proyecto moderno de TypeScript requería una danza compleja:
1.  Instalar Node.js.
2.  Instalar un gestor de paquetes (`npm`, `yarn` o `pnpm`).
3.  Instalar un compilador de TypeScript (`tsc`).
4.  Configurar un Bundler (`Webpack`, `Vite`, `Rollup`).
5.  Configurar un Test Runner (`Jest`, `Mocha`, `Vitest`).
6.  Configurar cargadores de variables de entorno (`dotenv`).

Son **6 herramientas distintas** que hay que configurar y mantener actualizadas.

## La Solución Bun

Bun reemplaza **todas** esas herramientas con un solo binario.

### 1. Todo en Uno
Con Bun, no necesitamos `ts-node`, ni `jest`, ni `dotenv`.
*   ¿Quieres correr un test? `bun test`.
*   ¿Quieres correr un script `.ts`? `bun index.ts`.
*   ¿Quieres instalar paquetes? `bun install`.

Esto reduce drásticamente nuestros archivos de configuración y la complejidad cognitiva para los nuevos desarrolladores.

### 2. Velocidad que se siente
No estamos hablando de mejoras del 10% o 20%. En nuestros pipelines de CI/CD, hemos visto reducciones de tiempo de instalación de dependencias de **minutos a segundos**.

> "El tiempo que un desarrollador pasa esperando a que termine `npm install` es tiempo perdido de creatividad."

## ¿Es arriesgado?

Reconocemos que Bun es más joven que Node.js. Sin embargo, su compatibilidad con las APIs de Node ha alcanzado un punto de madurez donde la mayoría de nuestras dependencias funcionan sin cambios.

Para nosotros, la ganancia en **Experiencia de Desarrollo (DX)** supera con creces los pequeños inconvenientes de adopción temprana.

Si aún no lo has probado, te invitamos a leer nuestra [Guía de Introducción a Bun](../docs/bun/intro) y darle una oportunidad.
