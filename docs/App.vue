<script setup>
import ClassyButtonPrimary from '../src/components/ClassyButtonPrimary.vue';
import ClassyButtonSecondary from '../src/components/ClassyButtonSecondary.vue';
import ClassyInput from '../src/components/ClassyInput.vue';
</script>

<template>
  <div class="classy-div">
    <ClassyButtonSecondary>Cancel</ClassyButtonSecondary>
    <ClassyButtonPrimary>Submit</ClassyButtonPrimary>
    <ClassyInput>Submit</ClassyInput>
  </div>
  <div class="classy-div">
    <ClassyButtonSecondary state="waiting">Cancel</ClassyButtonSecondary>
    <ClassyButtonPrimary state="waiting">Submit</ClassyButtonPrimary>
  </div>
  <div class="classy-div">
    <ClassyButtonSecondary state="disabled">Cancel</ClassyButtonSecondary>
    <ClassyButtonPrimary state="disabled">Submit</ClassyButtonPrimary>
  </div>
</template>

<style scoped>
@import './style.css';
.classy-div {
  display: flex;
  gap: 1rem;
  align-items: start;
  margin-top: 20px;
}
</style>
