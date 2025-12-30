---
sidebar_position: 1
title: Getting Started with Docker
description: A developer's guide to containerizing applications.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with Docker

Docker allows you to package an application with all of its dependencies into a standardized unit called a container.

:::info Prerequisite
Ensure you have **Docker Desktop** installed on your machine. You can verify this by running `docker --version` in your terminal.
:::

## 1. The Dockerfile
The `Dockerfile` is a text document that contains all the commands a user could call on the command line to assemble an image.

<Tabs>
  <TabItem value="node" label="Node.js (JS)" default>

  ```dockerfile
  FROM node:20-slim
  WORKDIR /app
  COPY package.json bun.lockb ./
  RUN bun install
  COPY . .
  CMD ["bun", "run", "start"]
  ```
  </TabItem>
  <TabItem value="python" label="Python">

  ```dockerfile
  FROM python:3.11-slim
  WORKDIR /app
  COPY requirements.txt .
  RUN pip install -r requirements.txt
  COPY . .
  CMD ["python", "app.py"]
  ```
  </TabItem>
  <TabItem value="csharp" label="C# (.NET)">

  ```dockerfile
  FROM [mcr.microsoft.com/dotnet/sdk:8.0](https://mcr.microsoft.com/dotnet/sdk:8.0) AS build
  WORKDIR /src
  COPY ["MyApp.csproj", "./"]
  RUN dotnet restore
  COPY . .
  RUN dotnet publish -c Release -o /app
  ```
  </TabItem>
</Tabs>

## 2. Common Commands

:::tip Pro-Tip Use the --rm flag when running containers to automatically remove the container when it exits, keeping your environment clean. 
:::

docker build -t my-app -> Build an image from a Dockerfile
docker run -p 8080:80 my-app -> Run a container mapping port 8080 to 80
docker ps -> List all running containers
docker system prune -> Remove unused data (use with caution!)