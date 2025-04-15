<script setup>
import Profile from '../components/Profile/Profile.vue';
import Contact from '../components/Contact/Contact.vue';
import Projects from '../components/Projects/Projects.vue';
</script>
<template>
<section class="hero-section">
    <Profile/>
    <Projects/>
    <Contact/>
</section>
</template>
<style lang="scss" scoped>
@import '../styles/partials/mixins';
.hero-section{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @include desktop{
        padding: 6rem 0 6rem 2rem;
        width: 70%;
        margin: auto;
    }
}
</style>