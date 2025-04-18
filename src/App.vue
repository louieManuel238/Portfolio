<script setup>
import NavigationSection from './pages/NavigationSection.vue';
import MainSection from './pages/MainSection.vue';
import { provide, ref} from 'vue';

const visibleSection = ref('Profile');
provide('visibleSection', visibleSection);
</script>

<template>
  <NavigationSection/>
  <MainSection/>
</template>
