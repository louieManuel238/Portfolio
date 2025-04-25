<script setup>
import Profile from '../components/Profile/Profile.vue';
import Contact from '../components/Contact/Contact.vue';
import Projects from '../components/Projects/Projects.vue';
import WorkExperience from '../components/WorkExperience/WorkExperience.vue';
</script>
<template>
<section class="hero-section">
    <Profile/>
    <Projects/>
    <WorkExperience/>
    <Contact/>
</section>
</template>
<style lang="scss">
@import '../styles/partials/mixins';
.hero-section{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @include desktop{
        padding: 6rem 0 6rem 2rem;
        width: 70%;
        margin: auto;
        gap: 128px;
    }
}
.section-header{
    position: sticky;
    top: 0;
    width: 100vw;
    backdrop-filter: blur(20px);
    padding: 1rem;
    margin-left: -1rem;
    @include desktop{
        position: relative;
    }
}
</style>