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
        classyButtonPrimary: 'classy-button-primary',
      };
    },
  },
  classyButtonPrimary: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimary
        ? props.skin.classyButtonPrimary
        : 'classy-button-primary',
  },
  classyButtonPrimaryReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryReady
        ? props.skin.classyButtonPrimaryReady
        : 'classy-button-primary-ready',
  },
  classyButtonPrimaryWaiting: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryWaiting
        ? props.skin.classyButtonPrimaryWaiting
        : 'classy-button-primary-waiting',
  },
  classyButtonPrimaryDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryDisabled
        ? props.skin.classyButtonPrimaryDisabled
        : 'classy-button-primary-disabled',
  },
});

const stateClasses = computed(() => {
  return {
    ready: props.classyButtonPrimaryReady,
    waiting: props.classyButtonPrimaryWaiting,
    disabled: props.classyButtonPrimaryDisabled,
  };
});

const classyState = computed(() => {
  return stateClasses.value[props.state];
});
</script>

<template>
  <button
    :type="type"
    :disabled="state === 'disabled' || state === 'waiting'"
    :class="[classyButtonPrimary, classyState]"
    class="remove-default">
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
.classy-button-primary {
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  color: white;
  border: 2px solid;
}

.classy-button-primary-ready {
  background-color: #5b0017;
  border-color: #5b0017;
}
.classy-button-primary-ready:hover {
  background-color: #540015;
  border-color: #540015;
}
.classy-button-primary-ready:active {
  background-color: #370000;
  border-color: #370000;
}

.classy-button-primary-waiting {
  background-color: #845e68;
  border-color: #845e68;
  color: rgb(216, 216, 216);
  cursor: wait;
}

.classy-button-primary-disabled {
  background-color: #845e68;
  border-color: #845e68;
  color: rgb(216, 216, 216);
  cursor: not-allowed;
}
</style>
