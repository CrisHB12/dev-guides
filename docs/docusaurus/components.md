---
sidebar_position: 3
title: Components & Syntax
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Interactive Components

Docusaurus supports MDX, which allows you to use React components inside Markdown.

## 1. Admonitions (Callouts)

### Syntax:

```markdown
:::info Info
Use this for general information.
:::

:::tip Tip
Use this for helpful advice or shortcuts.
:::

:::warning Warning
Use this for things users should be careful about.
:::

:::danger Danger
Use this for critical warnings or potential data loss.
:::
```
### Examples: 

:::info Info
Use this for general information.
:::

:::tip Tip
Use this for helpful advice or shortcuts.
:::

:::warning Warning
Use this for things users should be careful about.
:::

:::danger Danger
Use this for critical warnings or potential data loss.
:::

## 2. Multi-Language Tabs
Use tabs to show different code snippets for the same concept.

### Syntax:

### Example:
<Tabs>
  <TabItem value="js" label="JavaScript">
    ```javascript
    console.log("Hello");
    ```
  </TabItem>
  <TabItem value="py" label="Python">
    ```python
    print("Hello")
    ```
  </TabItem>
</Tabs>

## 3. Code Blocks
Standard Markdown triple backticks are used. You can add titles:

```javascript title="src/hello.js"
console.log("Hello with a title!");
```