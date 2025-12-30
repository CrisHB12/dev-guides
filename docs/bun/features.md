---
sidebar_position: 3
title: Todo lo que puedes hacer
description: Explorando las múltiples herramientas integradas en Bun - Tests, Bundling, Servidor y más.
tags: [features, testing, bundling, server, scripts]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Todo lo que puedes hacer con Bun

Bun no es solo para correr scripts; es una navaja suiza para el desarrollo web.

## 1. Gestor de Paquetes (Bun Install)

Bun es un gestor de paquetes compatible con npm. Lee tu `package.json` e instala dependencias a una velocidad absurda.

```bash
bun install
bun add react
bun add -D typescript
bun remove lodash
```

## 2. Ejecutar Scripts (Bun Run)

Reemplaza `npm run`. Bun arranca la tarea casi instantáneamente, ahorrando esos 200ms de retraso cada vez que ejecutas un comando.

```bash
bun run start
bun run build
bun run test
```

:::tip Shell Scripts
También puedes ejecutar scripts de shell directamente: `bun run script.sh`.
:::

## 3. Test Runner (Bun Test)

Bun incluye un corredor de pruebas integrado que es compatible con la sintaxis de **Jest**. No necesitas instalar nada extra.

<Tabs>
  <TabItem value="test" label="math.test.ts">

  ```typescript
  import { describe, expect, test } from "bun:test";

  describe("matemáticas", () => {
    test("suma correctamente", () => {
      expect(2 + 2).toBe(4);
    });
  });
  ```
  </TabItem>
</Tabs>

Ejecútalo con:

```bash
bun test
```

## 4. Servidor HTTP (Bun.serve)

Crear un servidor de alto rendimiento es trivial con la API nativa `Bun.serve`. Es mucho más rápido que Express o Fastify en Node.

```typescript title="server.ts"
Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("¡Hola Bun!");
    if (url.pathname === "/json") return Response.json({ hello: "world" });
    return new Response("404!", { status: 404 });
  },
});

console.log("Servidor corriendo en http://localhost:3000");
```

## 5. Bundler (Empaquetador)

Bun puede empaquetar tu código para producción, reemplazando a Webpack, Rollup o Parcel.

```bash
bun build ./index.ts --outdir ./out --target browser
```

Esto compila TypeScript, minifica código y resuelve módulos, generando archivos listos para el navegador.

## 6. Watch Mode (Recarga en caliente)

Bun tiene un modo "watch" universal que reinicia el proceso instantáneamente cuando guardas un archivo.

```bash
bun --watch index.ts
bun test --watch
```

## 7. Lectura de Archivos (Bun.file)

Una API optimizada para leer archivos perezosamente (lazily).

```typescript
const archivo = Bun.file("package.json");
const contenido = await archivo.text(); // o .json(), .arrayBuffer()
console.log(contenido);
```

## 8. Lectura de Variables de Entorno

Bun lee automáticamente los archivos `.env` sin necesidad de librerías como `dotenv`.

```typescript
// Lee .env automáticamente
console.log(process.env.API_KEY);
```