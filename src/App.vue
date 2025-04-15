<script setup>
import NavigationSection from './pages/NavigationSection.vue';
import MainSection from './pages/MainSection.vue';
import { useElementVisibility } from '@vueuse/core';
import { ref } from 'vue';

const targetVisible = ref(false);
</script>

<template>
  <NavigationSection/>
  <MainSection/>
</template>
