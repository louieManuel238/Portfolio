<script setup>

import { provide, ref} from 'vue';
import { RouterView } from 'vue-router';
import ThemeToggle from './components/ToggleTheme/ThemeToggle.vue';

const visibleSection = ref('Profile');
provide('visibleSection', visibleSection);

</script>

<template>
  <ThemeToggle/>
  <RouterView/>
</template>
