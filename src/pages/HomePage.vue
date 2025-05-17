<script setup>
import NavigationSection from './NavigationSection.vue';
import MainSection from './MainSection.vue';
import { useHead, useSeoMeta } from '@unhead/vue';

useHead({
  title: 'Web Developer',
  titleTemplate: '%s %separator %siteName',
  templateParams: {
    siteName: 'Louie Gayao'
  },
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-R4YCPQ0027",
      async: true
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R4YCPQ0027');
      `
    }
  ]
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