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
      return {};
    },
  },
  classyButtonPrimary: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimary ?? 'classy-button-primary',
  },
  classyButtonPrimaryReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryReady ?? 'classy-button-primary-ready',
  },
  classyButtonPrimaryLoading: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryLoading ?? 'classy-button-primary-loading',
  },
  classyButtonPrimaryDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryDisabled ??
      'classy-button-primary-disabled',
  },
});

const stateClasses = computed(() => {
  return {
    ready: props.classyButtonPrimaryReady,
    loading: props.classyButtonPrimaryLoading,
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
    :disabled="state === 'disabled' || state === 'loading'"
    :class="[classyButtonPrimary, classyState]"
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
.classy-button-primary {
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  color: white;
  border: 2px solid;
}

.classy-button-primary-ready {
  background-color: #472a45;
  border-color: #472a32;
}
.classy-button-primary-ready:hover {
  background-color: #372235;
  border-color: #372235;
}
.classy-button-primary-ready:active {
  background-color: #562a53;
  border-color: #562a53;
}

.classy-button-primary-loading {
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
