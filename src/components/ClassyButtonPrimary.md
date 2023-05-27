### About

A primary button with three states: 'ready', 'disabled', and 'loading'.

### Examples

#### Basic use

```vue
<script>
export default {
  data() {
    return {
      checked: false,
      clicked: false,
      step: 'unchecked',
      stepData: {
        unchecked: {
          state: 'disabled',
          text: 'Save',
          message: 'Check the box above.',
        },
        checked: {
          state: 'ready',
          text: 'Save',
          message: 'Click to save.',
        },
        saving: {
          state: 'loading',
          text: 'Saving',
          message: 'Please wait.',
        },
        saved: {
          state: 'disabled',
          text: 'Saved',
          message: 'Click clear to start again.',
        },
      },
    };
  },
  methods: {
    onSave() {
      this.clicked = true;
      this.step = 'saving';
      setTimeout(() => {
        this.step = 'saved';
      }, 3000);
    },
    onClear() {
      this.clicked = false;
      this.checked = false;
      this.step = 'unchecked';
    },
  },
  watch: {
    checked(value) {
      if (!this.clicked) {
        this.step = value ? 'checked' : 'unchecked';
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="">
    <div class="checkbox-div">
      <label for="checkbox">Checkbox</label>
      <input
        id="checkbox"
        type="checkbox"
        v-model="checked"
        :disabled="this.clicked"
      />
    </div>
    <ClassyButtonPrimary
      @click="onSave"
      type="submit"
      :state="stepData[step].state"
      >{{ stepData[step].text }}</ClassyButtonPrimary
    >
  </form>
  <p style="font-style: italic;">{{ stepData[step].message }}</p>
  <button
    v-if="step === 'saved'"
    type="button"
    @click="onClear"
  >
    Clear
  </button>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.checkbox-div {
  margin-bottom: 12px;
}

.classy-button-primary {
  width: 112px;
}
</style>
```

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

#### Style using component classes

```vue
<template>
  <div class="buttons">
    <ClassyButtonPrimary>Ready</ClassyButtonPrimary>
    <ClassyButtonPrimary state="disabled">Disabled</ClassyButtonPrimary>
    <ClassyButtonPrimary state="loading">Loading</ClassyButtonPrimary>
  </div>
</template>

<style scoped>
.classy-button-primary {
  width: 300px;
}

.classy-button-primary-ready {
  background-color: #1e7217;
  border-color: #1e7217;
}

.classy-button-primary-ready:hover {
  background-color: #075000;
  border-color: #075000;
}

.classy-button-primary-ready:active {
  background-color: #1e7217;
  border-color: #1e7217;
}

.classy-button-primary-disabled {
  background-color: #444444;
  border-color: #444444;
}

.classy-button-primary-loading {
  background-color: #666666;
  border-color: #666666;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
}
</style>
```

#### More examples coming soon:

- Style with your own classes and 'classy props'
- Completely re-style with a skin
- Style with a combination of approaches
