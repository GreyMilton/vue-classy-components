<script setup>
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  /**
   * Set the state of the select.
   * 'ready' - select's default resting state.
   * 'disabled' - select is disabled.
   * 'valid' - the select's value is valid.
   * 'invalid' - the select's value is invalid.
   * @values ready, disabled
   */
  state: {
    type: String,
    default: 'ready',
  },
  /**
   * Pass in a skin for the select. Each key of the object represents the target classy prop, and each value is a string of CSS classes.
   * @values Object of classy props and their classes. E.g. { classySelect: 'my-class', classySelectDisabled: 'my-disabled-class' }
   */
  skin: {
    type: Object,
    default: () => {
      return {};
    },
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
  classySelectContainer: {
    type: String,
    default: (props) =>
      props.skin.classySelectContainer ?? 'classy-select-container',
  },
  classySelectContainerReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectContainerReady ?? 'classy-select-container-ready',
  },
  classySelectContainerDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectContainerDisabled ??
      'classy-select-container-disabled',
  },
  classySelectContainerValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectContainerValid ?? 'classy-select-container-valid',
  },
  classySelectContainerInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectContainerInvalid ??
      'classy-select-container-invalid',
  },
  classySelectLabel: {
    type: String,
    default: (props) => props.skin.classySelectLabel ?? 'classy-select-label',
  },
  classySelectLabelReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectLabelReady ?? 'classy-select-label-ready',
  },
  classySelectLabelDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectLabelDisabled ?? 'classy-select-label-disabled',
  },
  classySelectLabelValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectLabelValid ?? 'classy-select-label-valid',
  },
  classySelectLabelInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectLabelInvalid ?? 'classy-select-label-invalid',
  },
  classySelect: {
    type: String,
    default: (props) => props.skin.classySelect ?? 'classy-select',
  },
  classySelectReady: {
    type: String,
    default: (props) => props.skin.classySelectReady ?? 'classy-select-ready',
  },
  classySelectDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabled ?? 'classy-select-disabled',
  },
  classySelectValid: {
    type: String,
    default: (props) => props.skin.classySelectValid ?? 'classy-select-valid',
  },
  classySelectInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalid ?? 'classy-select-invalid',
  },
  classySelectUnselected: {
    type: String,
    default: (props) =>
      props.skin.classySelectUnselected ?? 'classy-select-unselected',
  },
  classySelectUnselectedReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectUnselectedReady ??
      'classy-select-unselected-ready',
  },
  classySelectUnselectedDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectUnselectedDisabled ??
      'classy-select-unselected-disabled',
  },
  classySelectUnselectedValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectUnselectedValid ??
      'classy-select-unselected-valid',
  },
  classySelectUnselectedInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectUnselectedInvalid ??
      'classy-select-unselected-invalid',
  },
  classySelectSelected: {
    type: String,
    default: (props) =>
      props.skin.classySelectSelected ?? 'classy-select-selected',
  },
  classySelectSelectedReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectSelectedReady ?? 'classy-select-selected-ready',
  },
  classySelectSelectedDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectSelectedDisabled ??
      'classy-select-selected-disabled',
  },
  classySelectSelectedValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectSelectedValid ?? 'classy-select-selected-valid',
  },
  classySelectSelectedInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectSelectedInvalid ??
      'classy-select-selected-invalid',
  },
  classySelectDropdown: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdown ?? 'classy-select-dropdown',
  },
  classySelectDropdownReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownReady ?? 'classy-select-dropdown-ready',
  },
  classySelectDropdownDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownDisabled ??
      'classy-select-dropdown-disabled',
  },
  classySelectDropdownValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownValid ?? 'classy-select-dropdown-valid',
  },
  classySelectDropdownInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownInvalid ??
      'classy-select-dropdown-invalid',
  },
  classySelectDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholder ??
      'classy-select-dropdown-placeholder',
  },
  classySelectDropdownPlaceholderReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholderReady ??
      'classy-select-dropdown-placeholder-ready',
  },
  classySelectDropdownPlaceholderDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholderDisabled ??
      'classy-select-dropdown-placeholder-disabled',
  },
  classySelectDropdownPlaceholderValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholderValid ??
      'classy-select-dropdown-placeholder-valid',
  },
  classySelectDropdownPlaceholderInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholderInvalid ??
      'classy-select-dropdown-placeholder-invalid',
  },
  classySelectDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItem ?? 'classy-select-dropdown-item',
  },
  classySelectDropdownItemReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemReady ??
      'classy-select-dropdown-item-ready',
  },
  classySelectDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemDisabled ??
      'classy-select-dropdown-item-disabled',
  },
  classySelectDropdownItemValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemValid ??
      'classy-select-dropdown-item-valid',
  },
  classySelectDropdownItemInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemInvalid ??
      'classy-select-dropdown-item-invalid',
  },
  classySelectValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessage ??
      'classy-select-validation-message',
  },
  classySelectValidationMessageReady: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessageReady ??
      'classy-select-validation-message-ready',
  },
  classySelectValidationMessageDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessageDisabled ??
      'classy-select-validation-message-disabled',
  },
  classySelectValidationMessageValid: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessageValid ??
      'classy-select-validation-message-valid',
  },
  classySelectValidationMessageInvalid: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessageInvalid ??
      'classy-select-validation-message-invalid',
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

const stateClasses = computed(() => {
  return {
    ready: {
      container: props.classySelectContainerReady,
      label: props.classySelectLabelReady,
      select: [
        props.classySelectReady,
        value.value || value.value === 0
          ? props.classySelectSelectedReady
          : props.classySelectUnselectedReady,
      ],
      dropdown: props.classySelectDropdownReady,
      dropdownPlaceholder: props.classySelectDropdownPlaceholderReady,
      dropdownItem: props.classySelectDropdownItemReady,
      validationMessage: props.classySelectValidationMessageReady,
    },
    disabled: {
      container: props.classySelectContainerDisabled,
      label: props.classySelectLabelDisabled,
      select: [
        props.classySelectDisabled,
        value.value || value.value === 0
          ? props.classySelectSelectedDisabled
          : props.classySelectUnselectedDisabled,
      ],
      dropdown: props.classySelectDropdownDisabled,
      dropdownPlaceholder: props.classySelectDropdownPlaceholderDisabled,
      dropdownItem: props.classySelectDropdownItemDisabled,
      validationMessage: props.classySelectValidationMessageDisabled,
    },
    valid: {
      container: props.classySelectContainerValid,
      label: props.classySelectLabelValid,
      select: [
        props.classySelectValid,
        value.value || value.value === 0
          ? props.classySelectSelectedValid
          : props.classySelectUnselectedValid,
      ],
      dropdown: props.classySelectDropdownValid,
      dropdownPlaceholder: props.classySelectDropdownPlaceholderValid,
      dropdownItem: props.classySelectDropdownItemValid,
      validationMessage: props.classySelectValidationMessageValid,
    },
    invalid: {
      container: props.classySelectContainerInvalid,
      label: props.classySelectLabelInvalid,
      select: [
        props.classySelectInvalid,
        value.value || value.value === 0
          ? props.classySelectSelectedInvalid
          : props.classySelectUnselectedInvalid,
      ],
      dropdown: props.classySelectDropdownInvalid,
      dropdownPlaceholder: props.classySelectDropdownPlaceholderInvalid,
      dropdownItem: props.classySelectDropdownItemInvalid,
      validationMessage: props.classySelectValidationMessageInvalid,
    },
  };
});

const classySelectState = computed(() => {
  return stateClasses.value[props.state];
});

const classySelectUnselectedOrSelected = computed(() => {
  return value.value || value.value === 0
    ? props.classySelectSelected
    : props.classySelectUnselected;
});
</script>

<template>
  <div :class="[classySelectContainer, classySelectState.container]">
    <div
      v-if="showLabel"
      :id="labelId"
      :class="[classySelectLabel, classySelectState.label]"
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
      :class="[
        classySelect,
        classySelectUnselectedOrSelected,
        classySelectState.select,
      ]"
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
        >{{
          value || value === 0 ? selectedOption[optionText] : placeholder
        }}</slot
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
      :class="[classySelectDropdown, classySelectState.dropdown]"
    >
      <li
        v-if="showDropdownPlaceholder"
        class="li-remove-default"
        :class="[
          classySelectDropdownPlaceholder,
          classySelectState.dropdownPlaceholder,
        ]"
      >
        {{ dropdownPlaceholder }}
      </li>
      <li
        v-for="option in options"
        :key="option[optionValue]"
        class="li-remove-default"
        :class="[classySelectDropdownItem, classySelectState.dropdownItem]"
        @click="select(option[optionValue])"
      >
        {{ option[optionText] }}
      </li>
    </ul>

    <div
      v-if="showValidationMessage"
      :class="[
        classySelectValidationMessage,
        classySelectState.validationMessage,
      ]"
    >
      <!-- @slot Validation message text goes here -->
      <slot name="validationMessage" />
    </div>
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

.classy-select-container {
}
.classy-select-container-ready {
}
.classy-select-container-disabled {
}
.classy-select-container-valid {
}
.classy-select-container-invalid {
}

.classy-select-label {
}
.classy-select-label-ready {
}
.classy-select-label-disabled {
}
.classy-select-label-valid {
}
.classy-select-label-invalid {
}

.classy-select {
}
.classy-select-ready {
}
.classy-select-disabled {
}
.classy-select-valid {
}
.classy-select-invalid {
}

.classy-select-unselected {
}
.classy-select-unselected-ready {
}
.classy-select-unselected-disabled {
}
.classy-select-unselected-valid {
}
.classy-select-unselected-invalid {
}

.classy-select-selected {
}
.classy-select-selected-ready {
}
.classy-select-selected-disabled {
}
.classy-select-selected-valid {
}
.classy-select-selected-invalid {
}

.classy-select-dropdown {
}
.classy-select-dropdown-ready {
}
.classy-select-dropdown-disabled {
}
.classy-select-dropdown-valid {
}
.classy-select-dropdown-invalid {
}

.classy-select-dropdown-placeholder {
}
.classy-select-dropdown-placeholder-ready {
}
.classy-select-dropdown-placeholder-disabled {
}
.classy-select-dropdown-placeholder-valid {
}
.classy-select-dropdown-placeholder-invalid {
}

.classy-select-dropdown-item {
}
.classy-select-dropdown-item-ready {
}
.classy-select-dropdown-item-disabled {
}
.classy-select-dropdown-item-valid {
}
.classy-select-dropdown-item-invalid {
}

.classy-select-validation-message {
}
.classy-select-validation-message-ready {
}
.classy-select-validation-message-disabled {
}
.classy-select-validation-message-valid {
}
.classy-select-validation-message-invalid {
}
</style>
