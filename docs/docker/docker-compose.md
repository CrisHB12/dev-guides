---
sidebar_position: 4
title: Docker Compose
description: Orquestación de múltiples contenedores para desarrollo local.
tags: [compose, orquestación, base-de-datos]
---

# Docker Compose

Mientras que `docker run` es genial para un solo contenedor, la mayoría de las aplicaciones modernas tienen varias partes: un backend, un frontend y una base de datos.
**Docker Compose** te permite definir y ejecutar aplicaciones multi-contenedor.

## Archivo `compose.yaml` (o `docker-compose.yml`)

Todo se configura en un archivo YAML. Aquí defines los **servicios**, **redes** y **volúmenes**.

### Ejemplo Completo: Stack Web

Este ejemplo levanta:
1.  Un servidor web (Nginx).
2.  Una base de datos (PostgreSQL).
3.  Una interfaz gráfica para la BD (PgAdmin).

```yaml title="compose.yaml"
version: '3.8'  # Opcional en versiones recientes

services:
  # Servicio 1: Nuestra App Web (simulada con Nginx)
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./sitio-web:/usr/share/nginx/html
    networks:
      - mi-red

  # Servicio 2: La Base de Datos
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: usuario
      POSTGRES_PASSWORD: passwordsecreto
      POSTGRES_DB: midb
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - mi-red

  # Servicio 3: Admin de Base de Datos
  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
    depends_on:
      - db
    networks:
      - mi-red

# Volúmenes persistentes
volumes:
  db-data:

# Redes para comunicación interna
networks:
  mi-red:
```

## Comandos de Compose

| Comando | Descripción |
| :--- | :--- |
| `docker compose up` | Crea e inicia todos los servicios. Añade `-d` para modo detached. |
| `docker compose down` | Detiene y **elimina** contenedores y redes creados por `up`. |
| `docker compose logs -f` | Muestra los logs de todos los servicios en tiempo real. |
| `docker compose ps` | Lista el estado de los servicios del stack. |
| `docker compose exec <servicio> <cmd>` | Ejecuta un comando dentro de uno de los servicios (ej: `docker compose exec db bash`). |

:::tip Persistencia de Datos
Nota el uso de `volumes:` en el servicio `db`. Si destruyes el contenedor con `down`, los datos **permanecerán** en el volumen `db-data`. Sin esto, ¡perderías tu base de datos cada vez que reinicies!
:::
