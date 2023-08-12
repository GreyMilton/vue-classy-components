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
   * @values ready, disabled, valid, invalid
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
   * A third key/value pair, to disable the option when truthy, is optional.
   * Options are enabled by default.
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
   * Pass in a custom key for the 'disabled' key of all options.
   * E.g. 'inactive'.
   */
  optionDisabled: {
    type: String,
    default: 'disabled',
  },
  /**
   * An optional array of values in order to disable certain options.
   * It is an array of optionValue values for each option to disable.
   * This method can be used instead of, or in conjunction with, the other
   * method used for disabling options: passing a key/value pair for
   * disabling each option using the optionDisabled key.
   * @values Array: [value-1, value-2, value-3...]
   */
  disabledOptions: {
    type: Array,
    default: () => [],
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
  classySelectReadyContainer: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyContainer ?? 'classy-select-ready-container',
  },
  classySelectDisabledContainer: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledContainer ??
      'classy-select-disabled-container',
  },
  classySelectValidContainer: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidContainer ?? 'classy-select-valid-container',
  },
  classySelectInvalidContainer: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidContainer ??
      'classy-select-invalid-container',
  },
  classySelectLabel: {
    type: String,
    default: (props) => props.skin.classySelectLabel ?? 'classy-select-label',
  },
  classySelectReadyLabel: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyLabel ?? 'classy-select-ready-label',
  },
  classySelectDisabledLabel: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledLabel ?? 'classy-select-disabled-label',
  },
  classySelectValidLabel: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidLabel ?? 'classy-select-valid-label',
  },
  classySelectInvalidLabel: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidLabel ?? 'classy-select-invalid-label',
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
  classySelectReadyDropdown: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdown ?? 'classy-select-ready-dropdown',
  },
  classySelectDisabledDropdown: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdown ??
      'classy-select-disabled-dropdown',
  },
  classySelectValidDropdown: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdown ?? 'classy-select-valid-dropdown',
  },
  classySelectInvalidDropdown: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdown ??
      'classy-select-invalid-dropdown',
  },
  classySelectDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownPlaceholder ??
      'classy-select-dropdown-placeholder',
  },
  classySelectReadyDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdownPlaceholder ??
      'classy-select-ready-dropdown-placeholder',
  },
  classySelectDisabledDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdownPlaceholder ??
      'classy-select-disabled-dropdown-placeholder',
  },
  classySelectValidDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdownPlaceholder ??
      'classy-select-valid-dropdown-placeholder',
  },
  classySelectInvalidDropdownPlaceholder: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdownPlaceholder ??
      'classy-select-invalid-dropdown-placeholder',
  },
  classySelectDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItem ?? 'classy-select-dropdown-item',
  },
  classySelectReadyDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdownItem ??
      'classy-select-ready-dropdown-item',
  },
  classySelectDisabledDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdownItem ??
      'classy-select-disabled-dropdown-item',
  },
  classySelectValidDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdownItem ??
      'classy-select-valid-dropdown-item',
  },
  classySelectInvalidDropdownItem: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdownItem ??
      'classy-select-invalid-dropdown-item',
  },
  classySelectDropdownItemHighlighted: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemHighlighted ??
      'classy-select-dropdown-item-highlighted',
  },
  classySelectReadyDropdownItemHighlighted: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdownItemHighlighted ??
      'classy-select-ready-dropdown-item-highlighted',
  },
  classySelectDisabledDropdownItemHighlighted: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdownItemHighlighted ??
      'classy-select-disabled-dropdown-item-highlighted',
  },
  classySelectValidDropdownItemHighlighted: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdownItemHighlighted ??
      'classy-select-valid-dropdown-item-highlighted',
  },
  classySelectInvalidDropdownItemHighlighted: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdownItemHighlighted ??
      'classy-select-invalid-dropdown-item-highlighted',
  },
  classySelectDropdownItemEnabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemEnabled ??
      'classy-select-dropdown-item-enabled',
  },
  classySelectReadyDropdownItemEnabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdownItemEnabled ??
      'classy-select-ready-dropdown-item-enabled',
  },
  classySelectDisabledDropdownItemEnabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdownItemEnabled ??
      'classy-select-disabled-dropdown-item-enabled',
  },
  classySelectValidDropdownItemEnabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdownItemEnabled ??
      'classy-select-valid-dropdown-item-enabled',
  },
  classySelectInvalidDropdownItemEnabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdownItemEnabled ??
      'classy-select-invalid-dropdown-item-enabled',
  },
  classySelectDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDropdownItemDisabled ??
      'classy-select-dropdown-item-disabled',
  },
  classySelectReadyDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyDropdownItemDisabled ??
      'classy-select-ready-dropdown-item-disabled',
  },
  classySelectDisabledDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledDropdownItemDisabled ??
      'classy-select-disabled-dropdown-item-disabled',
  },
  classySelectValidDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidDropdownItemDisabled ??
      'classy-select-valid-dropdown-item-disabled',
  },
  classySelectInvalidDropdownItemDisabled: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidDropdownItemDisabled ??
      'classy-select-invalid-dropdown-item-disabled',
  },
  classySelectValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidationMessage ??
      'classy-select-validation-message',
  },
  classySelectReadyValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectReadyValidationMessage ??
      'classy-select-ready-validation-message',
  },
  classySelectDisabledValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectDisabledValidationMessage ??
      'classy-select-disabled-validation-message',
  },
  classySelectValidValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectValidValidationMessage ??
      'classy-select-valid-validation-message',
  },
  classySelectInvalidValidationMessage: {
    type: String,
    default: (props) =>
      props.skin.classySelectInvalidValidationMessage ??
      'classy-select-invalid-validation-message',
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

function optionIsDisabled(option) {
  return (
    option[props.optionDisabled] ||
    props.disabledOptions.includes(option[props.optionValue])
  );
}

function optionIsHighlighted(option) {
  return option[props.optionValue] === highlightedOption[props.optionValue];
}

function select(option) {
  if (!optionIsDisabled(option)) {
    value.value = option[props.optionValue];
  }
}

const enabledOptions = computed(() => {
  return props.options.filter((option) => !optionIsDisabled(option));
});

const highlightedOption = computed(() => {
  return (
    enabledOptions.value[highlightIndex.value] ?? {
      [props.optionValue]: '',
      [props.optionText]: '',
    }
  );
});

function toggleDropdown() {
  highlightIndex.value =
    dropdownOpen.value === false && enabledOptions.value.length > 0 ? 0 : -1;
  dropdownOpen.value = !dropdownOpen.value;
}

function highlightUp() {
  highlightIndex.value =
    highlightIndex.value > 0
      ? highlightIndex.value - 1
      : enabledOptions.value.length - 1;
}

function highlightDown() {
  highlightIndex.value =
    highlightIndex.value > enabledOptions.value.length - 2
      ? 0
      : highlightIndex.value + 1;
}

const stateClasses = computed(() => {
  return {
    ready: {
      container: props.classySelectReadyContainer,
      label: props.classySelectReadyLabel,
      select: [
        props.classySelectReady,
        value.value || value.value === 0
          ? props.classySelectSelectedReady
          : props.classySelectUnselectedReady,
      ],
      dropdown: props.classySelectReadyDropdown,
      dropdownPlaceholder: props.classySelectReadyDropdownPlaceholder,
      dropdownItem: props.classySelectReadyDropdownItem,
      dropdownItemHighlighted: props.classySelectReadyDropdownItemHighlighted,
      dropdownItemEnabled: props.classySelectReadyDropdownItemEnabled,
      dropdownItemDisabled: props.classySelectReadyDropdownItemDisabled,
      validationMessage: props.classySelectReadyValidationMessage,
    },
    disabled: {
      container: props.classySelectDisabledContainer,
      label: props.classySelectDisabledLabel,
      select: [
        props.classySelectDisabled,
        value.value || value.value === 0
          ? props.classySelectSelectedDisabled
          : props.classySelectUnselectedDisabled,
      ],
      dropdown: props.classySelectDisabledDropdown,
      dropdownPlaceholder: props.classySelectDisabledDropdownPlaceholder,
      dropdownItem: props.classySelectDisabledDropdownItem,
      dropdownItemHighlighted:
        props.classySelectDisabledDropdownItemHighlighted,
      dropdownItemEnabled: props.classySelectDisabledDropdownItemEnabled,
      dropdownItemDisabled: props.classySelectDisabledDropdownItemDisabled,
      validationMessage: props.classySelectDisabledValidationMessage,
    },
    valid: {
      container: props.classySelectValidContainer,
      label: props.classySelectValidLabel,
      select: [
        props.classySelectValid,
        value.value || value.value === 0
          ? props.classySelectSelectedValid
          : props.classySelectUnselectedValid,
      ],
      dropdown: props.classySelectValidDropdown,
      dropdownPlaceholder: props.classySelectValidDropdownPlaceholder,
      dropdownItem: props.classySelectValidDropdownItem,
      dropdownItemHighlighted: props.classySelectValidDropdownItemHighlighted,
      dropdownItemEnabled: props.classySelectValidDropdownItemEnabled,
      dropdownItemDisabled: props.classySelectValidDropdownItemDisabled,
      validationMessage: props.classySelectValidValidationMessage,
    },
    invalid: {
      container: props.classySelectInvalidContainer,
      label: props.classySelectInvalidLabel,
      select: [
        props.classySelectInvalid,
        value.value || value.value === 0
          ? props.classySelectSelectedInvalid
          : props.classySelectUnselectedInvalid,
      ],
      dropdown: props.classySelectInvalidDropdown,
      dropdownPlaceholder: props.classySelectInvalidDropdownPlaceholder,
      dropdownItem: props.classySelectInvalidDropdownItem,
      dropdownItemHighlighted: props.classySelectInvalidDropdownItemHighlighted,
      dropdownItemEnabled: props.classySelectInvalidDropdownItemEnabled,
      dropdownItemDisabled: props.classySelectInvalidDropdownItemDisabled,
      validationMessage: props.classySelectInvalidValidationMessage,
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

function optionClasses(option) {
  if (optionIsDisabled(option)) {
    return [
      props.classySelectDropdownItemDisabled,
      classySelectState.value.dropdownItemDisabled,
    ];
  } else if (optionIsHighlighted(option)) {
    return [
      props.classySelectDropdownItemHighlighted,
      classySelectState.value.dropdownItemHighlighted,
    ];
  }
  return [
    props.classySelectDropdownItemEnabled,
    classySelectState.value.dropdownItemEnabled,
  ];
}
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
        ...classySelectState.select,
      ]"
      @click="toggleDropdown"
      @keydown.up.prevent="highlightUp"
      @keydown.down.prevent="highlightDown"
      @keydown.enter.prevent="select(highlightedOption)"
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
          :disabled="option[optionDisabled]"
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
        :class="[
          classySelectDropdownItem,
          classySelectState.dropdownItem,
          ...optionClasses(option),
        ]"
        @click="select(option)"
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
  background-color: white;
}
.classy-select-ready-container {
}
.classy-select-disabled-container {
}
.classy-select-valid-container {
}
.classy-select-invalid-container {
}

.classy-select-label {
  display: block;
  padding: 0 12px 10px 0;
  width: fit-content;
}
.classy-select-ready-label {
}
.classy-select-disabled-label {
  color: #585858;
}
.classy-select-valid-label {
}
.classy-select-invalid-label {
}

.classy-select {
  text-align: left;
  border: 2px solid #565656;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
  background-color: white;
  width: 100%;
}
.classy-select:focus-visible {
  outline: #efd785 solid 6px;
}
.classy-select-ready {
}
.classy-select-disabled {
  border-color: #7a7a7a;
  background-color: #e9e9e9;
  color: #7a7a7a;
}
.classy-select-valid {
  color: rgb(22, 62, 0);
  border-color: #009c0d;
}
.classy-select-invalid {
  color: rgb(99, 0, 0);
  border-color: #a9012b;
}

.classy-select-unselected {
  color: #7a7a7a;
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
  border-color: black;
}
.classy-select-selected-disabled {
}
.classy-select-selected-valid {
}
.classy-select-selected-invalid {
}

.classy-select-dropdown {
  border: 2px solid #565656;
  border-radius: 0.4rem;
  padding: 4px 6px 4px 6px;
  font-size: 0.9rem;
  background-color: white;
}
.classy-select-ready-dropdown {
}
.classy-select-disabled-dropdown {
}
.classy-select-valid-dropdown {
}
.classy-select-invalid-dropdown {
}

.classy-select-dropdown-placeholder {
}
.classy-select-ready-dropdown-placeholder {
}
.classy-select-disabled-dropdown-placeholder {
}
.classy-select-valid-dropdown-placeholder {
}
.classy-select-invalid-dropdown-placeholder {
}

.classy-select-dropdown-item {
}
.classy-select-ready-dropdown-item {
}
.classy-select-disabled-dropdown-item {
}
.classy-select-valid-dropdown-item {
}
.classy-select-invalid-dropdown-item {
}

.classy-select-dropdown-item-highlighted {
}
.classy-select-ready-dropdown-item-highlighted {
}
.classy-select-disabled-dropdown-item-highlighted {
}
.classy-select-valid-dropdown-item-highlighted {
}
.classy-select-invalid-dropdown-item-highlighted {
}

.classy-select-dropdown-item-enabled {
}
.classy-select-ready-dropdown-item-enabled {
}
.classy-select-disabled-dropdown-item-enabled {
}
.classy-select-valid-dropdown-item-enabled {
}
.classy-select-invalid-dropdown-item-enabled {
}

.classy-select-dropdown-item-disabled {
}
.classy-select-ready-dropdown-item-disabled {
}
.classy-select-disabled-dropdown-item-disabled {
}
.classy-select-valid-dropdown-item-disabled {
}
.classy-select-invalid-dropdown-item-disabled {
}

.classy-select-validation-message {
  color: rgb(194, 2, 2);
  font-size: 0.7rem;
  font-style: italic;
  padding: 8px 0 8px 0;
}
.classy-select-ready-validation-message {
  color: rgb(55, 55, 55);
}
.classy-select-disabled-validation-message {
  color: rgb(55, 55, 55);
}
.classy-select-valid-validation-message {
  color: rgb(22, 62, 0);
}
.classy-select-invalid-validation-message {
  color: rgb(99, 0, 0);
}
</style>
