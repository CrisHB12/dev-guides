---
sidebar_position: 3
title: Componentes y Sintaxis
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Componentes Interactivos y Sintaxis Avanzada

Docusaurus soporta **MDX**, lo que significa que puedes utilizar componentes de React directamente dentro de tus archivos Markdown. Esto permite crear documentación mucho más interactiva y dinámica.

## 1. Admonitions (Avisos/Llamadas)

Las "admonitions" son bloques especiales para resaltar información importante, advertencias o consejos.

### Sintaxis

Utiliza `:::` seguido del tipo de aviso.

```markdown
:::info Información
Usa esto para información general o contexto adicional.
:::

:::tip Consejo
Usa esto para consejos útiles, trucos o atajos.
:::

:::warning Advertencia
Usa esto para cosas con las que el usuario debe tener cuidado.
:::

:::danger Peligro
Usa esto para advertencias críticas o posible pérdida de datos.
:::
```

### Resultado Visual

:::info Información
Usa esto para información general o contexto adicional.
:::

:::tip Consejo
Usa esto para consejos útiles, trucos o atajos.
:::

:::warning Advertencia
Usa esto para cosas con las que el usuario debe tener cuidado.
:::

:::danger Peligro
Usa esto para advertencias críticas o posible pérdida de datos.
:::

## 2. Pestañas (Tabs)

Las pestañas son excelentes para mostrar alternativas, como código en diferentes lenguajes o instrucciones para diferentes sistemas operativos.

### Importación Requerida

Debes importar los componentes al inicio de tu archivo `.mdx`:

```javascript
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

### Sintaxis y Ejemplo

<Tabs>
  <TabItem value="js" label="JavaScript">
    ```javascript
    console.log("Hola Mundo");
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```python
    print("Hola Mundo")
    ```
  </TabItem>
  <TabItem value="bash" label="Bash">
    ```bash
    echo "Hola Mundo"
    ```
  </TabItem>
</Tabs>

## 3. Bloques de Código

Docusaurus utiliza [Prism](https://prismjs.com/) para el resaltado de sintaxis.

### Títulos en Bloques de Código

Puedes añadir un título al bloque de código añadiendo `title="ruta/archivo.js"` después del lenguaje.

```javascript title="src/saludo.js"
console.log("¡Hola con un título!");
```

### Resaltado de Líneas

Puedes resaltar líneas específicas usando comentarios mágicos.

```javascript
function demo() {
  console.log('Esta línea es normal');
  // highlight-next-line
  console.log('Esta línea estará resaltada');
}
```

## 4. Detalles Desplegables

Puedes usar el elemento estándar de HTML `<details>` y `<summary>` para crear secciones colapsables.

<details>
  <summary>Haz clic para ver más detalles</summary>
  <p>Aquí hay contenido oculto que solo se muestra cuando el usuario lo solicita. Es útil para FAQs o registros largos.</p>
</details>

```html
<details>
  <summary>Haz clic para ver más detalles</summary>
  <p>Aquí hay contenido oculto...</p>
</details>
```