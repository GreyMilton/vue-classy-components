<script setup>
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  /**
   * Set the input type. Defaults to 'text'.
   * @see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) for available values.
   * @values valid HTML input type
   */
  type: {
    type: String,
    default: 'text',
  },
  /**
   * Set the state of the input.
   * 'ready' - input's default resting state.
   * 'disabled' - input is disabled.
   * 'readonly' - input is readonly.
   * @values ready, disabled, readonly
   */
  state: {
    type: String,
    default: 'ready',
  },
  /**
   * Pass in a skin for the button. Each key of the object represents the target classy prop, and each value is a string of CSS classes.
   * @values Object of classy props and their classes. E.g. { classyInput: 'my-class', classyInputReadonly: 'my-readonly-class' }
   */
  skin: {
    type: Object,
    default: () => {
      return {};
    },
  },
  /**
   * Set an id for the underlying input.
   * @values unique string
   */
  id: {
    type: String,
    default: () => 'classy-input-' + uuidv4(),
  },
  /**
   * Pass in the input's value using v-model.
   * @values string | number
   */
  modelValue: {
    type: [String, Number],
    required: true,
  },
  /**
   * Make the input required in a form.
   * @values true, false
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * Set the placeholder for the input.
   * @values valid string
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * Set a minimum value for the input.
   * @values string | number
   */
  min: {
    type: [Number, String],
    default: 0,
  },
  /**
   * Set a maximum value for the input.
   * @values string | number
   */
  max: {
    type: [Number, String],
    default: 524288,
  },
  /**
   * Set a minimum length for the input value.
   * @values string | number
   */
  minlength: {
    type: [Number, String],
    default: 0,
  },
  /**
   * Set a maximum length for the input value.
   * @values string | number
   */
  maxlength: {
    type: [Number, String],
    default: 524288,
  },
  /**
   * Show / hide the label for the input.
   * @values true, false
   */
  showLabel: {
    type: Boolean,
    default: true,
  },
  /**
   * Show / hide the validation message for the input.
   * @values true, false
   */
  showValidationMessage: {
    type: Boolean,
    default: true,
  },
  /**
   * Style the input's container with CSS class(es).
   * @values CSS class(es)
   */
  classyInputContainer: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainer ?? 'classy-input-container',
  },
  /**
   * Style the input's container with CSS class(es) when 'ready'.
   * @values CSS class(es)
   */
  classyInputContainerReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerReady ?? 'classy-input-container-ready',
  },
  /**
   * Style the input's container with CSS class(es) when 'disabled'.
   * @values CSS class(es)
   */
  classyInputContainerDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerDisabled ??
      'classy-input-container-disabled',
  },
  /**
   * Style the input's container with CSS class(es) when 'readonly'.
   * @values CSS class(es)
   */
  classyInputContainerReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerReadonly ??
      'classy-input-container-readonly',
  },
  /**
   * Style the input's label with CSS class(es)
   * @values CSS class(es)
   */
  classyInputLabel: {
    type: String,
    default: (props) => props.skin.classyInputLabel ?? 'classy-input-label',
  },
  /**
   * Style the input's label with CSS class(es) when 'ready'.
   * @values CSS class(es)
   */
  classyInputLabelReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelReady ?? 'classy-input-label-ready',
  },
  /**
   * Style the input's label with CSS class(es) when 'disabled'.
   * @values CSS class(es)
   */
  classyInputLabelDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelDisabled ?? 'classy-input-label-disabled',
  },
  /**
   * Style the input's label with CSS class(es) when 'readonly'.
   * @values CSS class(es)
   */
  classyInputLabelReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelReadonly ?? 'classy-input-label-readonly',
  },
  /**
   * Style the input with CSS class(es).
   * @values CSS class(es)
   */
  classyInput: {
    type: String,
    default: (props) => props.skin.classyInput ?? 'classy-input',
  },
  /**
   * Style the input with CSS class(es) when 'ready'.
   * @values CSS class(es)
   */
  classyInputReady: {
    type: String,
    default: (props) => props.skin.classyInputReady ?? 'classy-input-ready',
  },
  /**
   * Style the input with CSS class(es) when 'disabled'.
   * @values CSS class(es)
   */
  classyInputDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputDisabled ?? 'classy-input-disabled',
  },
  /**
   * Style the input with CSS class(es) when 'readonly'.
   * @values CSS class(es)
   */
  classyInputReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputReadonly ?? 'classy-input-readonly',
  },
  /**
   * Style the input with CSS class(es) when empty.
   * @values CSS class(es)
   */
  classyInputEmpty: {
    type: String,
    default: (props) => props.skin.classyInputEmpty ?? 'classy-input-empty',
  },
  /**
   * Style the input with CSS class(es) when empty and 'ready'.
   * @values CSS class(es)
   */
  classyInputEmptyReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyReady ?? 'classy-input-empty-ready',
  },
  /**
   * Style the input with CSS class(es) when empty and 'disabled'.
   * @values CSS class(es)
   */
  classyInputEmptyDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyDisabled ?? 'classy-input-empty-disabled',
  },
  /**
   * Style the input with CSS class(es) when empty and 'readonly'.
   * @values CSS class(es)
   */
  classyInputEmptyReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyReadonly ?? 'classy-input-empty-readonly',
  },
  /**
   * Style the input with CSS class(es) when filled.
   * @values CSS class(es)
   */
  classyInputFilled: {
    type: String,
    default: (props) => props.skin.classyInputFilled ?? 'classy-input-filled',
  },
  /**
   * Style the input with CSS class(es) when filled and 'ready'.
   * @values CSS class(es)
   */
  classyInputFilledReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledReady ?? 'classy-input-filled-ready',
  },
  /**
   * Style the input with CSS class(es) when filled and 'disabled'.
   * @values CSS class(es)
   */
  classyInputFilledDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledDisabled ?? 'classy-input-filled-disabled',
  },
  /**
   * Style the input with CSS class(es) when filled and 'readonly'.
   * @values CSS class(es)
   */
  classyInputFilledReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledReadonly ?? 'classy-input-filled-readonly',
  },
  /**
   * Style the validation message below the input with CSS class(es).
   * @values CSS class(es)
   */
  classyInputValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessage ??
      'classy-input-validation-message',
  },
  /**
   * Style the validation message below the input with CSS class(es) when 'ready'.
   * @values CSS class(es)
   */
  classyInputValidationMessageReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageReady ??
      'classy-input-validation-message-ready',
  },
  /**
   * Style the validation message below the input with CSS class(es) when 'disabled'.
   * @values CSS class(es)
   */
  classyInputValidationMessageDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageDisabled ??
      'classy-input-validation-message-disabled',
  },
  /**
   * Style the validation message below the input with CSS class(es) when 'readonly'.
   * @values CSS class(es)
   */
  classyInputValidationMessageReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageReadonly ??
      'classy-input-validation-message-readonly',
  },
});

const emit = defineEmits([
  /**
   * Updates the passed in input value with v-model
   * @arg {string, number} value
   */
  'update:modelValue',
]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const stateClasses = computed(() => {
  return {
    ready: {
      container: props.classyInputContainerReady,
      label: props.classyInputLabelReady,
      input: value.value
        ? props.classyInputFilledReady
        : props.classyInputEmptyReady,
      validationMessage: props.classyInputValidationMessageReady,
    },
    disabled: {
      container: props.classyInputContainerDisabled,
      label: props.classyInputLabelDisabled,
      input: value.value
        ? props.classyInputFilledDisabled
        : props.classyInputEmptyDisabled,
      validationMessage: props.classyInputValidationMessageDisabled,
    },
    readonly: {
      container: props.classyInputContainerReadonly,
      label: props.classyInputLabelReadonly,
      input: value.value
        ? props.classyInputFilledReadonly
        : props.classyInputEmptyReadonly,
      validationMessage: props.classyInputValidationMessageReadonly,
    },
  };
});

const classyInputState = computed(() => {
  return stateClasses[props.state];
});
</script>

<template>
  <div :class="[classyInputContainer, classyInputState.container]">
    <label
      v-if="showLabel"
      :for="id"
      :class="[classyInputLabel, classyInputState.label]"
    >
      <!-- @slot Label text goes here -->
      <slot name="label">Label</slot>
    </label>
    <input
      :id="id"
      v-model="value"
      :type="type"
      :required="required"
      :readonly="state === 'readonly'"
      :disabled="state === 'disabled'"
      :min="min"
      :max="max"
      :minlength="minlength"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :class="[classyInput, classyInputState.input]"
      class="remove-default"
    />
    <div
      v-if="showValidationMessage"
      :class="[
        classyInputValidationMessage,
        classyInputState.validationMessage,
      ]"
    >
      <!-- @slot Validation message text goes here -->
      <slot name="validationMessage">Validation Message</slot>
    </div>
  </div>
</template>

<style scoped>
.remove-default {
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: none;
  cursor: text;
  width: 100%;
  height: auto;
}
.classy-input-container {
  background-color: white;
}

.classy-input-container-ready {
  background-color: white;
}
.classy-input-container-disabled {
  background-color: white;
}
.classy-input-container-readonly {
  background-color: white;
}
.classy-input-label {
  display: block;
  padding: 0 12px 4px 0;
  width: fit-content;
}

.classy-input-label-ready {
  display: block;
  padding: 0 12px 4px 0;
  width: fit-content;
}
.classy-input-label-disabled {
  display: block;
  padding: 0 12px 4px 0;
  width: fit-content;
}
.classy-input-label-readonly {
  display: block;
  padding: 0 12px 4px 0;
  width: fit-content;
}
.classy-input {
  border: 2px solid #5b0017;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
}

.classy-input-ready {
  border: 2px solid rgb(0, 0, 0);
  background-color: #9c9c9c;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
}
.classy-input-disabled {
  border: 2px solid rgb(0, 0, 0);
  background-color: #9c9c9c;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
}
.classy-input-readonly {
  border: 2px solid rgb(0, 0, 0);
  background-color: #9c9c9c;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
}
.classy-input-empty {
  border-color: #472a45;
}

.classy-input-empty-ready {
  border-color: rgb(0, 0, 0);
  background-color: #9c9c9c;
}
.classy-input-empty-disabled {
  border-color: rgb(0, 0, 0);
  background-color: #9c9c9c;
}
.classy-input-empty-readonly {
  border-color: rgb(0, 0, 0);
  background-color: #9c9c9c;
}
.classy-input-filled {
  border-color: rgb(0, 84, 0);
}

.classy-input-filled-ready {
  border-color: green;
}
.classy-input-filled-disabled {
  border-color: green;
}
.classy-input-filled-readonly {
  border-color: green;
}

.classy-input-validation-message {
  color: rgb(194, 2, 2);
  font-size: 0.7rem;
  font-style: italic;
  padding: 6px 0 6px 0;
}

.classy-input-validation-message-ready {
  color: rgb(55, 55, 55);
  font-size: 0.7rem;
  font-style: italic;
  padding: 6px 0 6px 0;
}
.classy-input-validation-message-disabled {
  color: rgb(55, 55, 55);
  font-size: 0.7rem;
  font-style: italic;
  padding: 6px 0 6px 0;
}
.classy-input-validation-message-readonly {
  color: rgb(55, 55, 55);
  font-size: 0.7rem;
  font-style: italic;
  padding: 6px 0 6px 0;
}
</style>
