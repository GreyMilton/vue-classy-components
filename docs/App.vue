<script setup>
import ClassyButtonPrimary from '../src/components/ClassyButtonPrimary.vue';
import ClassyButtonSecondary from '../src/components/ClassyButtonSecondary.vue';
import ClassyInput from '../src/components/ClassyInput.vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <div class="classy-div">
    <ClassyButtonSecondary>Cancel</ClassyButtonSecondary>
    <ClassyButtonPrimary>Submit</ClassyButtonPrimary>
    <ClassyInput v-model="inputValue">Submit</ClassyInput>
  </div>
  <div class="classy-div">
    <ClassyButtonSecondary state="loading">Cancel</ClassyButtonSecondary>
    <ClassyButtonPrimary state="loading">Submit</ClassyButtonPrimary>
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
