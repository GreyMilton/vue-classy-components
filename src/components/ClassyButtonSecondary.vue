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
  classyButtonSecondary: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondary ?? 'classy-button-secondary',
  },
  classyButtonSecondaryReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondaryReady ?? 'classy-button-secondary-ready',
  },
  classyButtonSecondaryWaiting: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondaryWaiting ??
      'classy-button-secondary-waiting',
  },
  classyButtonSecondaryDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondaryDisabled ??
      'classy-button-secondary-disabled',
  },
});

const stateClasses = computed(() => {
  return {
    ready: props.classyButtonSecondaryReady,
    waiting: props.classyButtonSecondaryWaiting,
    disabled: props.classyButtonSecondaryDisabled,
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
    :class="[classyButtonSecondary, classyState]"
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
.classy-button-secondary {
  padding: 1rem 1.5rem;
  border-radius: 0.8rem;
  color: #684850;
  border: 2px solid;
}

.classy-button-secondary-ready {
  background-color: white;
  border-color: #684850;
}
.classy-button-secondary-ready:hover {
  background-color: #fffdfd;
  border-color: #450011;
  color: #450011;
}

.classy-button-secondary-ready:active {
  background-color: #faf4f4;
  border-color: #30000c;
  color: #30000c;
}

.classy-button-secondary-waiting {
  background-color: rgb(250, 250, 250);
  border-color: #a28c92;
  color: #a28c92;
  cursor: wait;
}

.classy-button-secondary-disabled {
  background-color: rgb(250, 250, 250);
  border-color: #a28c92;
  color: #a28c92;
  cursor: not-allowed;
}
</style>
