---
sidebar_position: 2
title: Guía de Comandos (CLI)
description: Referencia rápida de los comandos más utilizados en Docker.
tags: [cli, terminal, comandos]
---

# Guía de Comandos Docker (CLI)

Esta guía cubre los comandos esenciales para trabajar con imágenes y contenedores en tu día a día.

## 🏗 Gestión de Imágenes

Antes de correr un contenedor, necesitas una imagen.

| Comando | Descripción |
| :--- | :--- |
| `docker pull <imagen>` | Descarga una imagen desde Docker Hub (ej: `docker pull node:18`). |
| `docker build -t <nombre> .` | Construye una imagen desde un `Dockerfile` en el directorio actual. |
| `docker images` | Lista todas las imágenes descargadas localmente. |
| `docker rmi <imagen>` | Elimina una imagen local. |

### Ejemplo de Build
Construir una imagen llamada `mi-app-web` usando el directorio actual (`.`):

```bash
docker build -t mi-app-web .
```

## 🚀 Gestión de Contenedores

Una vez tienes la imagen, creas contenedores.

| Comando | Descripción |
| :--- | :--- |
| `docker run <imagen>` | Crea e inicia un contenedor. |
| `docker ps` | Muestra los contenedores **en ejecución**. |
| `docker ps -a` | Muestra **todos** los contenedores (incluidos los detenidos). |
| `docker stop <id>` | Detiene un contenedor en ejecución de forma ordenada. |
| `docker rm <id>` | Elimina un contenedor (debe estar detenido). |

### El comando `docker run`

Es el comando más complejo y potente. Aquí tienes las banderas (flags) más comunes:

*   `-d` (**Detached**): Ejecuta el contenedor en segundo plano.
*   `-p` (**Port**): Mapea puertos `host:contenedor`.
*   `--name`: Asigna un nombre personalizado al contenedor.
*   `-v` (**Volume**): Monta un volumen o carpeta local en el contenedor.
*   `--rm`: Elimina el contenedor automáticamente cuando se detiene.

**Ejemplo Completo:**
Correr un servidor web (Nginx) en segundo plano, accesible en el puerto 8080 local:

```bash
docker run -d -p 8080:80 --name mi-servidor nginx
```

## 🧹 Limpieza

Docker puede ocupar mucho espacio en disco con el tiempo.

:::warning Precaución
El siguiente comando es destructivo.
:::

```bash
# Elimina todos los contenedores detenidos, redes no usadas e imágenes "colgantes" (dangling)
docker system prune
```
