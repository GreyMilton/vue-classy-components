### About

A secondary button with three states: 'ready', 'disabled', and 'loading'.

### Examples

#### States

'ready', 'disabled', and 'loading'

```vue
<template>
  <div class="buttons">
    <ClassyButtonSecondary>Ready</ClassyButtonSecondary>

    <ClassyButtonSecondary state="disabled">Disabled</ClassyButtonSecondary>

    <ClassyButtonSecondary state="loading">Loading</ClassyButtonSecondary>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
}
</style>
```
