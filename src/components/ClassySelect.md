### About

A select with an optional label above and an optional validation message below. Has four states: 'ready', 'disabled', 'valid' and 'invalid'.

### Examples

```vue
<script>
export default {
  setup() {
    return {
      options: [
        {
          value: 'ready',
          text: 'Option 1',
        },
        {
          value: 'valid',
          text: 'Valid',
        },
        {
          value: 'invalid',
          text: 'Invalid',
        },
      ],
    };
  },
  data() {
    return {
      value: '',
      disabledValue: '',
      readyLabel: 'Ready',
      validLabel: 'Valid',
      invalidLabel: 'Invalid',
    };
  },
  computed: {
    state() {
      return this.value ? this.value : 'ready';
    },
    validationMessage() {
      if (this.value === 'option-1') {
        return 'Option selected!';
      } else if(this.value === 'valid') {
        return 'Valid selection!';
      } else if(this.value === 'invalid') {
        return 'Invalid selection!';
      }

      return 'Ready to go!';
    },
  }
};
</script>

<template>
  <div class="selects">
    <ClassySelect
      :state="state"
      v-model="value"
      :options="options"
    >
      <template #label>Select</template>
      <template #validationMessage>{{ validationMessage }}</template>
    </ClassySelect>

    <ClassySelect
      v-model="disabledValue"
      state="disabled"
      :options="options"
    >
      <template #label>Disabled</template>
      <template #validationMessage>Disabled select</template>
    </ClassySelect>
</template>

<style scoped>
.selects {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 201px;
}
</style>
```
