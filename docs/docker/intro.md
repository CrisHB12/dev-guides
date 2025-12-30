---
sidebar_position: 1
title: Introducción a Docker
description: Conceptos fundamentales para entender y empezar a usar Docker.
tags: [docker, contenedores, infraestructura]
---

# Introducción a Docker

Docker es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones. Permite separar tus aplicaciones de tu infraestructura, lo que te permite entregar software rápidamente.

## 🧠 Conceptos Clave

Para entender Docker, primero debemos distinguir dos conceptos fundamentales que a menudo se confunden:

### 1. Imágenes (Images)
Una imagen es una **plantilla de solo lectura** con instrucciones para crear un contenedor Docker. A menudo, una imagen se basa en otra imagen, con alguna personalización adicional.
*   Piensa en ella como una **clase** en programación orientada a objetos.
*   O como el archivo `.iso` de un sistema operativo.

### 2. Contenedores (Containers)
Un contenedor es una **instancia ejecutable** de una imagen. Puedes crear, iniciar, detener, mover o eliminar un contenedor utilizando la API o CLI de Docker.
*   Piensa en él como un **objeto** (instancia de una clase).
*   Es el entorno vivo donde corre tu aplicación.

## 📦 ¿Por qué usar Docker?

*   **Consistencia:** "Funciona en mi máquina" se convierte en "Funciona en todas partes". El contenedor lleva consigo todas sus dependencias.
*   **Aislamiento:** Las aplicaciones no interfieren entre sí. Puedes tener diferentes versiones de Python o Node.js en distintos contenedores sin conflictos.
*   **Portabilidad:** Puedes ejecutar el mismo contenedor en tu laptop, en un servidor de pruebas o en la nube (AWS, Azure, Google Cloud).

## 🛠 Instalación

Para empezar, necesitas instalar **Docker Desktop** (para Windows/Mac) o **Docker Engine** (para Linux).

1.  Ve al sitio oficial: [Docker Get Started](https://www.docker.com/get-started/)
2.  Descarga e instala la versión correspondiente a tu sistema operativo.
3.  Verifica la instalación abriendo una terminal y ejecutando:

```bash
docker --version
```

Deberías ver algo como `Docker version 24.0.x, build ...`.

:::info Docker y WSL 2 (Windows)
Si estás en Windows, se recomienda encarecidamente usar el backend de **WSL 2** (Windows Subsystem for Linux) para obtener el mejor rendimiento. Docker Desktop te pedirá habilitarlo durante la instalación.
:::
