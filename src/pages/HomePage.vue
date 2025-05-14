<script setup>
import NavigationSection from './NavigationSection.vue';
import MainSection from './MainSection.vue';
import { useHead, useSeoMeta } from '@unhead/vue'
useHead({
  title: 'Web Developer',
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    siteName: 'Louie Gayao'
  }
});
useSeoMeta({
  description: 'Louie Gayao Home Page, Web Developer, Full-Stack Developer',
  ogTitle: '%s', 
});


</script>
<template>
    <NavigationSection/>
    <MainSection/>
</template>