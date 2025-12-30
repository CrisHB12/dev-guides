---
sidebar_position: 2
title: Escribiendo Contenido
---

# Escribiendo Documentación

Docusaurus utiliza archivos Markdown ubicados en el directorio `docs/` para generar las páginas de documentación. Esta flexibilidad permite escribir contenido rico y estructurado fácilmente.

## 📝 Front Matter (Metadatos)

Cada archivo de documentación debe comenzar con un bloque de metadatos llamado **Front Matter**. Este bloque define cómo Docusaurus trata la página.

```markdown
---
id: mi-id-doc
title: Título de mi Página
sidebar_label: Título Corto en Barra Lateral
sidebar_position: 1
description: Una breve descripción para SEO.
---
```

### Propiedades Comunes

- **id:** Identificador único del documento (opcional, por defecto es el nombre del archivo).
- **title:** El encabezado H1 de la página.
- **sidebar_label:** El texto que se muestra en el árbol de navegación lateral.
- **sidebar_position:** Número que controla el orden de los archivos en la barra lateral (1 aparece primero).
- **draft:** Si se establece en `true`, la página no se incluirá en la compilación de producción.
- **slug:** Permite personalizar la URL de la página (ej: `/mi-url-personalizada`).

## 📁 Organización de Carpetas

Docusaurus genera la barra lateral basándose en la estructura de carpetas.

### Categorías

Para cambiar el nombre de una carpeta en la barra lateral o su posición, crea un archivo llamado `_category_.json` dentro de esa carpeta:

```json
{
  "label": "Nombre de la Carpeta",
  "position": 3,
  "link": {
    "type": "generated-index",
    "description": "Descripción opcional para la página índice de la categoría."
  }
}
```

## 🔗 Enlaces (Links)

### Enlaces Internos

Puedes enlazar a otros documentos usando rutas relativas. Docusaurus resolverá automáticamente los enlaces, incluso si cambian las rutas finales.

```markdown
[Enlace a otro documento](./otro-documento.md)
[Enlace a una imagen](../static/img/docusaurus.png)
```

### Enlaces Externos

Simplemente usa la URL completa:

```markdown
[Visita Google](https://google.com)
```

## 🖼 Imágenes y Archivos Estáticos

Las imágenes estáticas deben colocarse en la carpeta `static/img`. Puedes referenciarlas en tu Markdown como si `static/` fuera la raíz:

```markdown
![Logo de Docusaurus](/img/logo.svg)
```

O usando rutas relativas si la imagen está en la misma carpeta que el documento:

```markdown
![Imagen Local](./mi-imagen.png)
```

## ✨ Markdown Estándar

Docusaurus soporta toda la sintaxis estándar de Markdown:

- **Negrita**: `**texto**`
- *Cursiva*: `*texto*`
- Listas ordenadas y desordenadas
- Citas (`>`)
- Bloques de código