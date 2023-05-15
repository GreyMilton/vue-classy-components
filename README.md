# Vue Classy Components

A flexible, fully and easily styleable, open-source [Vue 3](https://vuejs.org/) Component Library.

All components are written in [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html#composition-api-faq) with script setup.

## How to Style in a Classy Way

All visible elements of every component are easy to style with classes, in one of three ways:

1. Style the class that relates to the target element in a parent component / stylesheet. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain>BUTTON</ClassyButtonMain>
</template>

<style scoped>
.classy-button-main {
  background-color: pink;
}
</style>
```

2. Pass the class in as a prop. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain classy-button-main="my-style">BUTTON</ClassyButtonMain>
</template>

<style scoped>
.my-style {
  background-color: pink;
}
</style>
```

3. Pass a skin with the class in it as a prop. e.g. for the Component 'ClassyButtonMain' and its core button element with class 'classy-button-main'

```vue
<template>
  <ClassyButtonMain :skin="{ classyButtonMain: 'my-style' }"
    >BUTTON</ClassyButtonMain
  >
</template>

<style scoped>
.my-style {
  background-color: pink;
}
</style>
```

Approaches are easily combined too!

For instance, several classes can be placed in a skin (3.), with one of them being overwritten by passing the individual prop (2.), and another being overwritten by directly defining the classes styles in css (1.).

Ways 2. and 3. are particularly inspired by the utility first CSS framework [Tailwind CSS](https://tailwindcss.com/).

## What's Coming Up

I have built a large Vue Component Library before, and I have a clear vision for this one. All I need is time!

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
