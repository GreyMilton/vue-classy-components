### About

A input with an optional label above and an optional validation message below. Has five states: 'ready', 'disabled', 'readonly', 'valid' and 'invalid'. Can also be styled differently when 'empty' or 'filled'.

### Examples

#### States

'ready', 'disabled', 'readonly', 'valid' & 'invalid'

```vue
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>

<template>
  <div class="buttons">
    <ClassyInput v-model="input">
      <template #label>Ready</template>
    </ClassyInput>

    <ClassyInput
      v-model="input"
      state="disabled"
    >
      <template #label>Disabled</template>
    </ClassyInput>

    <ClassyInput
      v-model="input"
      state="readonly"
    >
      <template #label>Readonly</template>
    </ClassyInput>

    <ClassyInput
      v-model="input"
      state="valid"
    >
      <template #label>Valid</template>
    </ClassyInput>

    <ClassyInput
      v-model="input"
      state="invalid"
    >
      <template #label>Invalid</template>
    </ClassyInput>
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
