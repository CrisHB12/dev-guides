---
sidebar_position: 3
title: Dockerfile y Temas
description: Cómo crear tus propias imágenes Docker para diferentes lenguajes.
tags: [dockerfile, node, python, csharp]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creando Imágenes con Dockerfile

Un `Dockerfile` es un documento de texto que contiene todas las instrucciones que Docker necesita para construir una imagen. Piensa en él como una receta de cocina automatizada.

## Estructura Básica

La mayoría de los Dockerfiles siguen este patrón:

1.  **FROM**: Define la imagen base (el SO o runtime inicial).
2.  **WORKDIR**: Establece el directorio de trabajo dentro del contenedor.
3.  **COPY**: Copia archivos desde tu máquina al contenedor.
4.  **RUN**: Ejecuta comandos (instalar dependencias, compilar).
5.  **CMD** o **ENTRYPOINT**: El comando que se ejecuta al iniciar el contenedor.

## Ejemplos por Lenguaje

Aquí tienes ejemplos listos para producción para diferentes tecnologías:

<Tabs>
  <TabItem value="node" label="Node.js / Bun" default>

  Para aplicaciones modernas de JavaScript/TypeScript usando **Bun**.

  ```dockerfile title="Dockerfile"
  # Usamos la imagen oficial de Bun
  FROM oven/bun:1.0 as base
  
  WORKDIR /app

  # 1. Copiamos dependencias primero (para aprovechar el caché de capas)
  COPY package.json bun.lockb ./
  
  # 2. Instalamos dependencias
  RUN bun install --frozen-lockfile

  # 3. Copiamos el resto del código
  COPY . .

  # 4. Exponemos el puerto (informativo)
  EXPOSE 3000

  # 5. Comando de inicio
  CMD ["bun", "run", "start"]
  ```
  </TabItem>
  
  <TabItem value="python" label="Python">

  Ejemplo típico para una app Flask o FastAPI.

  ```dockerfile title="Dockerfile"
  # Usamos una versión 'slim' para menor tamaño
  FROM python:3.11-slim

  WORKDIR /app

  # Evita que Python escriba archivos .pyc y bufferee la salida
  ENV PYTHONDONTWRITEBYTECODE=1
  ENV PYTHONUNBUFFERED=1

  COPY requirements.txt .
  RUN pip install --no-cache-dir -r requirements.txt

  COPY . .

  CMD ["python", "app.py"]
  ```
  </TabItem>

  <TabItem value="csharp" label=".NET (C#)">

  Para .NET usamos "Multi-stage builds" para compilar en una imagen y ejecutar en otra más ligera.

  ```dockerfile title="Dockerfile"
  # Etapa de Build (SDK)
  FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
  WORKDIR /src
  COPY ["MiApp/MiApp.csproj", "MiApp/"]
  RUN dotnet restore "MiApp/MiApp.csproj"
  COPY . .
  WORKDIR "/src/MiApp"
  RUN dotnet build -c Release -o /app/build

  # Etapa de Publicación
  FROM build AS publish
  RUN dotnet publish -c Release -o /app/publish

  # Etapa Final (Runtime)
  FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
  WORKDIR /app
  COPY --from=publish /app/publish .
  ENTRYPOINT ["dotnet", "MiApp.dll"]
  ```
  </TabItem>
</Tabs>

## .dockerignore

Siempre debes incluir un archivo `.dockerignore` junto a tu Dockerfile. Funciona igual que `.gitignore`. Esto evita copiar archivos innecesarios al contenedor, reduciendo su tamaño y mejorando la seguridad.

```text title=".dockerignore"
node_modules
dist
build
.git
.env
README.md
Dockerfile
```
