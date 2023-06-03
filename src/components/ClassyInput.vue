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
   * 'valid' - input value is valid.
   * 'invalid' - input value is invalid.
   * @values ready, disabled, readonly, valid, invalid
   */
  state: {
    type: String,
    default: 'ready',
  },
  /**
   * Pass in a skin for the input. Each key of the object represents the target classy prop, and each value is a string of CSS classes.
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
    default: '',
  },
  /**
   * Set a maximum value for the input.
   * @values string | number
   */
  max: {
    type: [Number, String],
    default: '',
  },
  /**
   * Set a minimum length for the input value.
   * @values string | number
   */
  minlength: {
    type: [Number, String],
    default: '',
  },
  /**
   * Set a maximum length for the input value.
   * @values string | number
   */
  maxlength: {
    type: [Number, String],
    default: '',
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
   * Style the input's container with CSS class(es) when input value is 'valid'.
   * @values CSS class(es)
   */
  classyInputContainerValid: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerValid ?? 'classy-input-container-valid',
  },
  /**
   * Style the input's container with CSS class(es) when input value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputContainerInvalid: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerInvalid ??
      'classy-input-container-invalid',
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
   * Style the input's label with CSS class(es) when input value is 'valid'.
   * @values CSS class(es)
   */
  classyInputLabelValid: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelValid ?? 'classy-input-label-valid',
  },
  /**
   * Style the input's label with CSS class(es) when input value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputLabelInvalid: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelInvalid ?? 'classy-input-label-invalid',
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
   * Style the input with CSS class(es) when its value is 'valid'.
   * @values CSS class(es)
   */
  classyInputValid: {
    type: String,
    default: (props) => props.skin.classyInputValid ?? 'classy-input-valid',
  },
  /**
   * Style the input with CSS class(es) when its value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputInvalid: {
    type: String,
    default: (props) => props.skin.classyInputInvalid ?? 'classy-input-invalid',
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
   * Style the input with CSS class(es) when empty and value is 'valid'.
   * @values CSS class(es)
   */
  classyInputEmptyValid: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyValid ?? 'classy-input-empty-valid',
  },
  /**
   * Style the input with CSS class(es) when empty and value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputEmptyInvalid: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyInvalid ?? 'classy-input-empty-invalid',
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
   * Style the input with CSS class(es) when filled and value is 'valid'.
   * @values CSS class(es)
   */
  classyInputFilledValid: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledValid ?? 'classy-input-filled-valid',
  },
  /**
   * Style the input with CSS class(es) when filled and value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputFilledInvalid: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledInvalid ?? 'classy-input-filled-invalid',
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
  /**
   * Style the validation message below the input with CSS class(es) when input value is 'valid'.
   * @values CSS class(es)
   */
  classyInputValidationMessageValid: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageValid ??
      'classy-input-validation-message-valid',
  },
  /**
   * Style the validation message below the input with CSS class(es) when input value is 'invalid'.
   * @values CSS class(es)
   */
  classyInputValidationMessageInvalid: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageInvalid ??
      'classy-input-validation-message-invalid',
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
      input: [
        props.classyInputReady,
        value.value || value.value === 0
          ? props.classyInputFilledReady
          : props.classyInputEmptyReady,
      ],
      validationMessage: props.classyInputValidationMessageReady,
    },
    disabled: {
      container: props.classyInputContainerDisabled,
      label: props.classyInputLabelDisabled,
      input: [
        props.classyInputDisabled,
        value.value || value.value === 0
          ? props.classyInputFilledDisabled
          : props.classyInputEmptyDisabled,
      ],
      validationMessage: props.classyInputValidationMessageDisabled,
    },
    readonly: {
      container: props.classyInputContainerReadonly,
      label: props.classyInputLabelReadonly,
      input: [
        props.classyInputReadonly,
        value.value || value.value === 0
          ? props.classyInputFilledReadonly
          : props.classyInputEmptyReadonly,
      ],
      validationMessage: props.classyInputValidationMessageReadonly,
    },
    valid: {
      container: props.classyInputContainerValid,
      label: props.classyInputLabelValid,
      input: [
        props.classyInputValid,
        value.value || value.value === 0
          ? props.classyInputFilledValid
          : props.classyInputEmptyValid,
      ],
      validationMessage: props.classyInputValidationMessageValid,
    },
    invalid: {
      container: props.classyInputContainerInvalid,
      label: props.classyInputLabelInvalid,
      input: [
        props.classyInputInvalid,
        value.value || value.value === 0
          ? props.classyInputFilledInvalid
          : props.classyInputEmptyInvalid,
      ],
      validationMessage: props.classyInputValidationMessageInvalid,
    },
  };
});

const classyInputState = computed(() => {
  return stateClasses.value[props.state];
});

const classyInputEmptyOrFilled = computed(() => {
  return value.value || value.value === 0
    ? props.classyInputFilled
    : props.classyInputEmpty;
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
      :class="[classyInput, classyInputEmptyOrFilled, classyInputState.input]"
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
      <slot name="validationMessage" />
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
}
.classy-input-container-disabled {
}
.classy-input-container-readonly {
}
.classy-input-container-valid {
}
.classy-input-container-invalid {
}
.classy-input-label {
  display: block;
  padding: 0 12px 10px 0;
  width: fit-content;
}

.classy-input-label-ready {
}
.classy-input-label-disabled {
  color: #585858;
}
.classy-input-label-readonly {
  color: #585858;
}
.classy-input-label-valid {
}
.classy-input-label-invalid {
}
.classy-input {
  border: 2px solid #565656;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
  background-color: white;
}
.classy-input:focus-visible {
  outline: #efd785 solid 6px;
}

.classy-input-ready {
}
.classy-input-disabled {
  border-color: #7a7a7a;
  background-color: #e9e9e9;
  color: #7a7a7a;
}
.classy-input-readonly {
  border-color: #6b6b6b;
  background-color: #e9e9e9;
  color: #6b6b6b;
}
.classy-input-valid {
  border-color: #009c0d;
}
.classy-input-invalid {
  border-color: #a9012b;
}
.classy-input-empty {
}
.classy-input-empty-ready {
}
.classy-input-empty-disabled {
}
.classy-input-empty-readonly {
}
.classy-input-empty-valid {
}
.classy-input-empty-invalid {
}
.classy-input-filled {
}

.classy-input-filled-ready {
  border-color: black;
}
.classy-input-filled-disabled {
}
.classy-input-filled-readonly {
}
.classy-input-filled-valid {
}
.classy-input-filled-invalid {
}

.classy-input-validation-message {
  color: rgb(194, 2, 2);
  font-size: 0.7rem;
  font-style: italic;
  padding: 8px 0 8px 0;
}

.classy-input-validation-message-ready {
  color: rgb(55, 55, 55);
}
.classy-input-validation-message-disabled {
  color: rgb(55, 55, 55);
}
.classy-input-validation-message-readonly {
  color: rgb(55, 55, 55);
}
.classy-input-validation-message-valid {
  color: rgb(22, 62, 0);
}
.classy-input-validation-message-invalid {
  color: rgb(99, 0, 0);
}
</style>
