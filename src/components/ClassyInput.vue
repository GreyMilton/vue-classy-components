<script setup>
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
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
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
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
  classyInputContainerDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputContainerDisabled ??
      'classy-input-container-disabled',
  },
  classyInputLabel: {
    type: String,
    default: (props) => props.skin.classyInputLabel ?? 'classy-input-label',
  },
  classyInputLabelDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputLabelDisabled ?? 'classy-input-label-disabled',
  },
  classyInput: {
    type: String,
    default: (props) => props.skin.classyInput ?? 'classy-input',
  },
  classyInputDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputDisabled ?? 'classy-input-disabled',
  },
  classyInputEmpty: {
    type: String,
    default: (props) => props.skin.classyInputEmpty ?? 'classy-input-empty',
  },
  classyInputEmptyDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputEmptyDisabled ?? 'classy-input-empty-disabled',
  },
  classyInputFilled: {
    type: String,
    default: (props) => props.skin.classyInputFilled ?? 'classy-input-filled',
  },
  classyInputFilledDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputFilledDisabled ?? 'classy-input-filled-disabled',
  },
  classyInputValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessage ??
      'classy-input-validation-message',
  },
  classyInputValidationMessageDisabled: {
    type: String,
    default: (props) =>
      props.skin.classyInputValidationMessageDisabled ??
      'classy-input-validation-message-disabled',
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

const inputClasses = computed(() => {
  if (props.disabled) {
    return [
      props.classyInputDisabled,
      props.modelValue
        ? props.classyInputFilledDisabled
        : props.classyInputEmptyDisabled,
    ];
  }
  console.log('hello???');
  return [
    props.classyInput,
    value.value ? props.classyInputFilled : props.classyInputEmpty,
  ];
});
</script>

<template>
  <div :class="disabled ? classyInputContainerDisabled : classyInputContainer">
    <label
      v-if="showLabel"
      :for="id"
      :class="disabled ? classyInputLabelDisabled : classyInputLabel">
      <slot name="label">Label</slot>
    </label>
    <input
      :id="id"
      v-model="value"
      :type="type"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autocapitalize="autocapitalize"
      :class="inputClasses"
      class="remove-default" />
    <div
      v-if="showValidationMessage"
      :class="classyInputValidationMessage">
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
}

.classy-input-container-disabled {
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
