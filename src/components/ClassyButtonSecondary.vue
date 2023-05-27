<script setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Set the button type.
   * @values button, submit, reset
   */
  type: {
    type: String,
    default: 'submit',
  },
  /**
   * Set the state of the button.
   * 'ready' - button's default resting state.
   * 'disabled' - button is disabled.
   * 'loading' - button is temporarily disabled and waiting for loading to finish.
   * @values ready, disabled, loading
   */
  state: {
    type: String,
    default: 'ready',
  },
  /**
   * Pass in a skin for the button. Each key of the object represents the target classy prop, and each value is a string of CSS classes.
   * @values Object of classy props and their classes. E.g. { classyButtonSecondary: 'my-class', classyButtonSecondaryLoading: 'my-loading-class' }
   */
  skin: {
    type: Object,
    default: () => {
      return {};
    },
  },
  /**
   * Style the button with CSS class(es).
   * @values CSS class(es)
   */
  classyButtonSecondary: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondary ?? 'classy-button-secondary',
  },
  /**
   * Style the button with CSS class(es) for its 'ready' state.
   * @values CSS class(es)
   */
  classyButtonSecondaryReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondaryReady ?? 'classy-button-secondary-ready',
  },
  /**
   * Style the button with CSS class(es) for its 'loading' state.
   * @values CSS class(es)
   */
  classyButtonSecondaryLoading: {
    type: String,
    default: (props) =>
      props.skin.classyButtonSecondaryLoading ??
      'classy-button-secondary-loading',
  },
  /**
   * Style the button with CSS class(es) for its 'disabled' state.
   * @values CSS class(es)
   */
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
    loading: props.classyButtonSecondaryLoading,
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
    :disabled="state === 'disabled' || state === 'loading'"
    :class="[classyButtonSecondary, classyState]"
    class="remove-default"
  >
    <!--  @slot Button text and/or other content goes here -->
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

.classy-button-secondary-loading {
  background-color: #f8f8f8;
  border-color: #89787c;
  color: #89787c;
  cursor: wait;
}

.classy-button-secondary-disabled {
  background-color: #f7f7f7;
  border-color: #a28c92;
  color: #a28c92;
  cursor: not-allowed;
}
</style>
