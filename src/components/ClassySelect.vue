<script setup>
import { ref, computed } from 'vue';
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
   * Set an id for the label of the select button
   * @values unique string
   */
  labelId: {
    type: String,
    default: () => 'classy-select-label-' + uuidv4(),
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
    default: 'placeholder',
  },
  /**
   * Set a placeholder to show in the dropdown.
   * @values valid string
   */
  dropdownPlaceholder: {
    type: String,
    default: (props) => props.placeholder,
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
   * Show / hide a placeholder in the dropdown.
   * @values true, false
   */
  showDropdownPlaceholder: {
    type: Boolean,
    default: false,
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

const selectedOption = computed(() => {
  return (
    props.options.find(
      (option) => option[props.optionValue] === value.value
    ) ?? { [props.optionValue]: '', [props.optionText]: '' }
  );
});

const selectButton = ref(null);
const dropdownOpen = ref(false);
const highlightIndex = ref(-1);

function select(selectedValue) {
  value.value = selectedValue;
}

const highlightedOption = computed(() => {
  return (
    props.options[highlightIndex.value] ?? {
      [props.optionValue]: '',
      [props.optionText]: '',
    }
  );
});

function toggleDropdown() {
  highlightIndex.value =
    dropdownOpen.value === false && props.options.length > 0 ? 0 : -1;
  dropdownOpen.value = !dropdownOpen.value;
}

function highlightUp() {
  highlightIndex.value =
    highlightIndex.value > 0
      ? highlightIndex.value - 1
      : props.options.length - 1;
}

function highlightDown() {
  highlightIndex.value =
    highlightIndex.value > props.options.length - 2
      ? 0
      : highlightIndex.value + 1;
}
</script>

<template>
  <div
    v-if="showLabel"
    :id="labelId"
    @click="selectButton.focus()"
  >
    <!-- @slot Label text goes here -->
    <slot name="label">Label</slot>
  </div>

  <button
    :id="id"
    ref="selectButton"
    type="button"
    :required="required"
    :disabled="state === 'disabled'"
    :aria-labelledBy="labelId"
    class="button-remove-default button-position"
    @click="toggleDropdown"
    @keydown.up.prevent="highlightUp"
    @keydown.down.prevent="highlightDown"
    @keydown.enter.prevent="select(highlightedOption.value)"
  >
    <!-- @slot Select's main button text goes here-->
    <slot
      name="button"
      :selected-option="selectedOption"
      :placeholder="placeholder"
      >{{ value ? selectedOption[optionText] : placeholder }}</slot
    >

    <!-- Invisible select (for making the select required in a form) -->
    <select
      :id="id"
      v-model="value"
      tabindex="-1"
      aria-hidden="true"
      :required="required"
      :disabled="state === 'disabled'"
      class="invisible-select"
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
  </button>

  <ul
    v-show="dropdownOpen"
    class="ul-remove-default"
  >
    <li
      v-if="showDropdownPlaceholder"
      class="li-remove-default"
    >
      {{ dropdownPlaceholder }}
    </li>
    <li
      v-for="option in options"
      :key="option[optionValue]"
      class="li-remove-default"
      @click="select(option[optionValue])"
    >
      {{ option[optionText] }}
    </li>
  </ul>

  <div v-if="showValidationMessage">
    <!-- @slot Validation message text goes here -->
    <slot name="validationMessage" />
  </div>
</template>

<style scoped>
.button-position {
  position: relative;
}

.button-remove-default {
  padding: 0;
  border: none;
  margin: 0;
  font: inherit;
  line-height: normal;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.invisible-select {
  opacity: 0;
  width: inherit;
  position: absolute;
  pointer-events: none;
}

.ul-remove-default {
  margin: 0;
  padding: 0;
  list-style: none;
}

.li-remove-default {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
