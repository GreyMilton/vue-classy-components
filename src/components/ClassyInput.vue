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

  return [
    props.classyInput,
    props.modelValue ? props.classyInputFilled : props.classyInputEmpty,
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
      :placeholder="placeholder"
      :class="inputClasses" />
    <div
      v-if="showValidationMessage"
      :class="classyInputValidationMessage">
      <slot name="validationMessage">Validation Message</slot>
    </div>
  </div>
</template>

<style scoped>
.classy-input-container {
  border: 1px solid green;
}

.classy-input-container-disabled {
  border: 1px solid green;
}
.classy-input-label {
  border: 1px solid green;
}

.classy-input-label-disabled {
  border: 1px solid green;
}
.classy-input {
  border: 1px solid green;
}

.classy-input-disabled {
  border: 1px solid green;
}
.classy-input-empty {
  border: 1px solid green;
}

.classy-input-empty-disabled {
  border: 1px solid green;
}
.classy-input-filled {
  border: 1px solid green;
}

.classy-input-filled-disabled {
  border: 1px solid green;
}

.classy-input-validation-message {
  border: 1px solid green;
}

.classy-input-validation-message-disabled {
  border: 1px solid green;
}
</style>
