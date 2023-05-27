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
   * @values Object of classy props and their classes. E.g. { classyButtonPrimary: 'my-class', classyButtonPrimaryLoading: 'my-loading-class' }
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
  classyButtonPrimary: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimary ?? 'classy-button-primary',
  },
  /**
   * Style the button with CSS class(es) for its 'ready' state.
   * @values CSS class(es)
   */
  classyButtonPrimaryReady: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryReady ?? 'classy-button-primary-ready',
  },
  /**
   * Style the button with CSS class(es) for its 'loading' state.
   * @values CSS class(es)
   */
  classyButtonPrimaryLoading: {
    type: String,
    default: (props) =>
      props.skin.classyButtonPrimaryLoading ?? 'classy-button-primary-loading',
  },
  /**
   * Style the button with CSS class(es) for its 'disabled' state.
   * @values CSS class(es)
   */
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

.classy-button-primary-ready:focus-visible {
  outline: #ccb362 solid 6px;
}

.classy-button-primary-loading {
  background-color: #6f5a6e;
  border-color: #6f5a6e;
  color: #ffffff;
  cursor: wait;
}

.classy-button-primary-disabled {
  background-color: #6f5a6e;
  border-color: #6f5a6e;
  color: #c8c8c8;
  cursor: not-allowed;
}
</style>
