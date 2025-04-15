<script setup>
import Contact from '../components/Contact/Contact.vue';
import Projects from '../components/Projects/Projects.vue';
</script>
<template>
<section class="hero-section">
    <h2>Profile</h2>
    <Projects/>
    <Contact/>
</section>
</template>
<style lang="scss" scoped>
@import '../styles/partials/mixins';
.hero-section{
    height: 100%;
    width: 100%;
    @include desktop{
        padding: 6rem 2rem;
    }
}
</style>