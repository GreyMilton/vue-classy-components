<script setup>
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'submit',
  },
  state: {
    type: String,
    default: 'ready',
  },
  skin: {
    type: Object,
    default: () => {
      return {
        classyButtonMain: 'classy-button-main',
      };
    },
  },
  classyButtonMain: {
    type: String,
    default: (props) =>
      props.skin.classyButtonMain
        ? props.skin.classyButtonMain
        : 'classy-button-main',
  },
  classyButtonMainReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonMainReady
        ? props.skin.classyButtonMainReady
        : 'classy-button-main-ready',
  },
  classyButtonMainWaiting: {
    type: String,
    default: (props) =>
      props.skin.classyButtonMainWaiting
        ? props.skin.classyButtonMainWaiting
        : 'classy-button-main-waiting',
  },
  classyButtonMainDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyButtonMainDisabled
        ? props.skin.classyButtonMainDisabled
        : 'classy-button-main-disabled',
  },
});

const stateClasses = computed(() => {
  return {
    ready: props.classyButtonMainReady,
    waiting: props.classyButtonMainWaiting,
    disabled: props.classyButtonMainDisabled,
  };
});

const classyState = computed(() => {
  return stateClasses.value[props.state];
});
</script>

<template>
  <button
    :type="type"
    :disabled="state === 'disabled'"
    :class="[classyButtonMain, classyState]"
    class="remove-default"
  >
    <slot />
  </button>
</template>

<style scoped>
.remove-default {
  /* Remove default button styles */
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}
.classy-button-main {
  padding: 30px;
}

.classy-button-main-ready {
  background-color: yellowgreen;
}

.classy-button-main-waiting {
  background-color: yellow;
}

.classy-button-main-disabled {
  background-color: red;
}
</style>
