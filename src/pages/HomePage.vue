<script setup>
import NavigationSection from './NavigationSection.vue';
import MainSection from './MainSection.vue';
import { useHead, useSeoMeta } from '@unhead/vue';

useHead({
  title: 'Web Developer  %separator Full-Stack',
  titleTemplate: '%siteName %separator %s',
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
    },
    {
        children: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MH3JKG43');
        `
    },
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