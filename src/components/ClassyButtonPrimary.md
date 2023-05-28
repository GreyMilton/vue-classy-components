### About

A primary button with three states: 'ready', 'disabled', and 'loading'.

### Examples

#### Basic use

```vue
<script>
export default {
  setup() {
    return {
      stages: {
        unchecked: {
          state: 'disabled',
          text: 'Save',
          message: 'Button is disabled. Check the box to enable.',
        },
        checked: {
          state: 'ready',
          text: 'Save',
          message: 'Button is ready. Click to save.',
        },
        saving: {
          state: 'loading',
          text: 'Saving',
          message: 'Button is loading. Please wait 3 seconds.',
        },
        saved: {
          state: 'disabled',
          text: 'Saved',
          message: 'Button is disabled again. Click clear to start over.',
        },
      },
    };
  },
  data() {
    return {
      checked: false,
      clicked: false,
      stage: 'unchecked',
    };
  },
  methods: {
    onSave() {
      this.clicked = true;
      this.stage = 'saving';
      setTimeout(() => {
        this.stage = 'saved';
      }, 3000);
    },
    onClear() {
      this.clicked = false;
      this.checked = false;
      this.stage = 'unchecked';
    },
  },
  watch: {
    checked(value) {
      if (!this.clicked) {
        this.stage = value ? 'checked' : 'unchecked';
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
      :state="stages[stage].state"
      >{{ stages[stage].text }}</ClassyButtonPrimary
    >
  </form>
  <p style="font-style: italic; font-size: 14px">
    {{ stages[stage].message }}
  </p>
  <button
    v-if="stage === 'saved'"
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
