<script setup>

import { provide, ref} from 'vue';
import { RouterView } from 'vue-router';

const visibleSection = ref('Profile');
provide('visibleSection', visibleSection);
</script>

<template>
  <RouterView/>
</template>
