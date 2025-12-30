---
slug: mejores-practicas-docker
title: 5 Mejores Prácticas para Dockerfiles en Producción
authors: [devteam]
tags: [docker, best-practices]
date: 2026-01-10
---

Escribir un `Dockerfile` que funcione es fácil. Escribir uno que sea seguro, rápido y ligero requiere un poco más de cuidado. Aquí compartimos las 5 reglas de oro que seguimos en nuestros proyectos.

<!--truncate-->

## 1. Usa imágenes base oficiales y específicas

Evita usar la etiqueta `latest`. Nunca sabes qué versión real estás descargando, lo que hace que tus builds no sean deterministas.

❌ **Mal:**
```dockerfile
FROM node:latest
```

✅ **Bien:**
```dockerfile
FROM node:20.9.0-alpine
```
Usar versiones específicas (`20.9.0`) y variantes ligeras (`alpine` o `slim`) reduce la superficie de ataque y el tamaño de la imagen.

## 2. Ordena tus capas por frecuencia de cambio

Docker cachea cada línea del Dockerfile como una capa. Si una capa cambia, todas las siguientes deben reconstruirse.

Pon lo que **menos cambia** al principio (instalación de dependencias) y lo que **más cambia** al final (tu código fuente).

✅ **Bien:**
```dockerfile
WORKDIR /app
COPY package.json .
RUN npm install      # Esta capa pesada se cachea si package.json no cambia
COPY . .             # Solo esto se reconstruye si cambias tu código
```

## 3. No ejecutes como Root

Por defecto, los contenedores corren como `root`, lo cual es un riesgo de seguridad si alguien logra escapar del contenedor. Crea un usuario con menos privilegios.

```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

## 4. Usa `.dockerignore`

Es el error más común: copiar `node_modules` locales, archivos `.git` o secretos `.env` dentro de la imagen.

Siempre ten un `.dockerignore`:
```text
node_modules
.git
.env
Dockerfile
README.md
```

## 5. Multi-stage Builds

Para lenguajes compilados (Go, Rust, .NET) o para optimizar frontends, usa builds multi-etapa para separar el entorno de construcción del de ejecución.

```dockerfile
# Etapa de Build
FROM node:20 AS builder
RUN npm run build

# Etapa Final (Producción)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```
¡La imagen final solo tendrá Nginx y tus archivos estáticos, pesando unos 20MB en lugar de los 1GB de la imagen de Node!

---

Sigue estos consejos y tus despliegues serán más rápidos y seguros. ¿Tienes algún otro truco? ¡Compártelo con el equipo!
