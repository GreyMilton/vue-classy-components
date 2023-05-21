<script setup>
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
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
  id: {
    type: String,
    default: () => 'classy-input-' + uuidv4(),
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  min: {
    type: [Number, String],
    default: 0,
  },
  max: {
    type: [Number, String],
    default: 524288,
  },
  minlength: {
    type: [Number, String],
    default: 0,
  },
  maxlength: {
    type: [Number, String],
    default: 524288,
  },
  autocapitalize: {
    type: String,
    default: 'off',
  },
  showLabel: {
    type: Boolean,
    default: true,
  },
  showValidationMessage: {
    type: Boolean,
    default: true,
  },
  classyInputContainer: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainer ?? 'classy-input-container',
  },
  classyInputContainerReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerReady ?? 'classy-input-container-ready',
  },
  classyInputContainerDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerDisabled ??
      'classy-input-container-disabled',
  },
  classyInputContainerReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerReadonly ??
      'classy-input-container-readonly',
  },
  classyInputLabel: {
    type: String,
    default: (props) => props.skin.classyInputLabel ?? 'classy-input-label',
  },
  classyInputLabelReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelReady ?? 'classy-input-label-ready',
  },
  classyInputLabelDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelDisabled ?? 'classy-input-label-disabled',
  },
  classyInputLabelReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelReadonly ?? 'classy-input-label-readonly',
  },
  classyInput: {
    type: String,
    default: (props) => props.skin.classyInput ?? 'classy-input',
  },
  classyInputReady: {
    type: String,
    default: (props) => props.skin.classyInputReady ?? 'classy-input-ready',
  },
  classyInputDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputDisabled ?? 'classy-input-disabled',
  },
  classyInputReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputReadonly ?? 'classy-input-readonly',
  },
  classyInputEmpty: {
    type: String,
    default: (props) => props.skin.classyInputEmpty ?? 'classy-input-empty',
  },
  classyInputEmptyReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyReady ?? 'classy-input-empty-ready',
  },
  classyInputEmptyDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyDisabled ?? 'classy-input-empty-disabled',
  },
  classyInputEmptyReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyReadonly ?? 'classy-input-empty-readonly',
  },
  classyInputFilled: {
    type: String,
    default: (props) => props.skin.classyInputFilled ?? 'classy-input-filled',
  },
  classyInputFilledReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledReady ?? 'classy-input-filled-ready',
  },
  classyInputFilledDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledDisabled ?? 'classy-input-filled-disabled',
  },
  classyInputFilledReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledReadonly ?? 'classy-input-filled-readonly',
  },
  classyInputValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessage ??
      'classy-input-validation-message',
  },
  classyInputValidationMessageReady: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageReady ??
      'classy-input-validation-message-ready',
  },
  classyInputValidationMessageDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageDisabled ??
      'classy-input-validation-message-disabled',
  },
  classyInputValidationMessageReadonly: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageReadonly ??
      'classy-input-validation-message-readonly',
  },
});

const emit = defineEmits(['update:modelValue']);

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
      :autocapitalize="autocapitalize"
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

.classy-input-container-disabled {
  background-color: white;
}
.classy-input-label {
  display: block;
  padding: 0 12px 4px 0;
  width: fit-content;
}

.classy-input-label-disabled {
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

.classy-input-disabled {
  border: 2px solid rgb(0, 0, 0);
  background-color: #9c9c9c;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
}
.classy-input-empty {
  border-color: #472a45;
}

.classy-input-empty-disabled {
  border-color: rgb(0, 0, 0);
  background-color: #9c9c9c;
}
.classy-input-filled {
  border-color: rgb(0, 84, 0);
}

.classy-input-filled-disabled {
  border-color: green;
}

.classy-input-validation-message {
  color: rgb(194, 2, 2);
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
</style>
