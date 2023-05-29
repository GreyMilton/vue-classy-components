<script setup>
import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  /**
   * Set the state of the select.
   * 'ready' - select's default resting state.
   * 'disabled' - select is disabled.
   * @values ready, disabled
   */
  state: {
    type: String,
    default: 'ready',
  },
  /**
   * Set an id for the underlying select.
   * @values unique string
   */
  id: {
    type: String,
    default: () => 'classy-select-' + uuidv4(),
  },
  /**
   * Pass in the select's value using v-model.
   * @values string | number
   */
  modelValue: {
    type: [String, Number],
    required: true,
  },
  /**
   * Pass in the options for the select as an array of objects.
   * Each option object must have at least two key/value pairs.
   * One to represent the identifying value of the option,
   * the other to represent the text display for the option.
   * All options must have the same property names for the above.
   */
  options: {
    type: Array,
    required: true,
  },
  /**
   * Pass in a custom property name for the 'value' key of all options.
   * E.g. 'id'.
   */
  optionValue: {
    type: String,
    default: 'value',
  },
  /**
   * Pass in a custom property name for the 'text' key of all options.
   * E.g. 'name'.
   */
  optionText: {
    type: String,
    default: 'text',
  },
  /**
   * Make the select required in a form.
   * @values true, false
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * Set the placeholder for the select.
   * @values valid string
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * Show / hide the label for the select.
   * @values true, false
   */
  showLabel: {
    type: Boolean,
    default: true,
  },
  /**
   * Show / hide the validation message for the select.
   * @values true, false
   */
  showValidationMessage: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([
  /**
   * Updates the passed in select value with v-model
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
</script>

<template>
  <label
    v-if="showLabel"
    :for="id"
  >
    <!-- @slot Label text goes here -->
    <slot name="label">Label</slot>
  </label>
  <select
    :id="id"
    v-model="value"
    :required="required"
    :disabled="state === 'disabled'"
  >
    <option
      disabled
      selected
      hidden
      value=""
    >
      {{ placeholder }}
    </option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option[optionValue]"
    >
      {{ option[optionText] }}
    </option>
  </select>
  <div v-if="showValidationMessage">
    <!-- @slot Validation message text goes here -->
    <slot name="validationMessage" />
  </div>
</template>

<style scoped></style>
