# Vue Classy Components

A flexible, fully and easily styleable, open-source [Vue 3](https://vuejs.org/) Component Library.

All components are written in [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html#composition-api-faq) with script setup.

## How to Style in a Classy Way

All visible elements of every component in this package are easy to style with classes. This can be done in one or more of these three ways:

1. Style the class that relates to the target element with a CSS class selector. This could be done in a parent component and/or a stylesheet. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain>BUTTON</ClassyButtonMain>
</template>

<style scoped>
.classy-button-main {
  color: black;
  font-weight: 700;
  background-color: pink;
}
</style>
```

2. Pass one or more classes in as a prop, and then style them as done in approach 1. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain classy-button-main="my-style my-other-style"
    >BUTTON</ClassyButtonMain
  >
</template>

<style scoped>
.my-style {
  color: black;
  font-weight: 700;
  background-color: pink;
}

.my-other-style {
  margin: 20px;
}
</style>
```

3. Pass a skin object, which contains classes for each inner class you wish to style, as a prop. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain :skin="{ classyButtonMain: 'my-style my-other-style' }"
    >BUTTON</ClassyButtonMain
  >
</template>

<style scoped>
.my-style {
  color: black;
  font-weight: 700;
  background-color: pink;
}

.my-other-style {
  margin: 20px;
}
</style>
```

Approaches are easily combined too!

For instance, several classes can be placed in a skin (3.), with one of them being overwritten by passing the individual prop (2.), and another being overwritten by directly defining the classes styles in css (1.).

Ways 2. and 3. are particularly inspired by the utility first CSS framework [Tailwind CSS](https://tailwindcss.com/).

## What's Coming Up

I have a clear vision for this library, and am excited by what is possible.

Here are some of the components I have in mind:

- ClassyButtonMain
- ClassyInput
- ClassySelect
- ClassyMultiSelect
- ClassyButtonToggle
- ClassyButtonCheckbox
- ClassyButtonRadio
- ClassyButtonDropdown
- ClassyTextArea
- ClassyTooltip
- ClassyPopover
- ClassyAccordion
- ClassyTable
