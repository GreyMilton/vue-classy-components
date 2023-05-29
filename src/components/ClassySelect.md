### About

A select with an optional label above and an optional validation message below. Has two states: 'ready' and 'disabled'.

### Examples

#### States

'ready', 'disabled'

```vue
<script>
export default {
  setup() {
    return {
      options: [
        {
          value: 1,
          text: 'One',
        },
        {
          value: 2,
          text: 'Two',
        },
        {
          value: 3,
          text: 'Three',
        },
      ],
    };
  },
  data() {
    return {
      readyValue: '',
      disabledValue: '',
    };
  },
};
</script>

<template>
  <div class="selects">
    <ClassySelect
      v-model="readyValue"
      :options="options"
    >
      <template #label>Ready</template>
      <template #validationMessage>Ready to go!</template>
    </ClassySelect>

    <ClassySelect
      v-model="disabledValue"
      state="disabled"
      :options="options"
    >
      <template #label>Disabled</template>
      <template #validationMessage>Disabled input</template>
    </ClassySelect>
  </div>
</template>

<style scoped>
.selects {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
}
</style>
```
