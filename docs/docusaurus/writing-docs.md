---
sidebar_position: 2
title: Writing Content
---

# Writing Documentation

Docusaurus uses Markdown files located in the `docs/` directory.

## Front Matter
Every file should start with a Metadata block called Front Matter:

```markdown
---
id: my-doc-id
title: My Page Title
sidebar_label: Short Title
sidebar_position: 1
---
```

## Common Properties

- **title:** The H1 of the page.
- **sidebar_label:** The text shown in the navigation tree.
- **sidebar_position:** Controls the order of the files (1 is top).
- **draft:** Set to true to hide the page from production.

## Organizing Folders

To change a folder's name in the sidebar, create a ´_category_.json´ file inside it:

```json
{
  "label": "New Folder Name",
  "position": 3
}
```