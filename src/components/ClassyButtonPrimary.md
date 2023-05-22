### About

A primary button with three states: 'ready', 'disabled', and 'loading'.

### Examples

#### States

'ready', 'disabled', and 'loading'

```vue
<template>
  <div class="buttons">
    <ClassyButtonPrimary>Ready</ClassyButtonPrimary>

    <ClassyButtonPrimary state="disabled">Disabled</ClassyButtonPrimary>

    <ClassyButtonPrimary state="loading">Loading</ClassyButtonPrimary>
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
