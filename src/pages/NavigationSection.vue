<script setup>
import InfoHeader from '../components/InfoHeader/InfoHeader.vue'
import Navigation from '../components/Navigation/Navigation.vue';
import Socials from '../components/Socials/Socials.vue';
</script>

<template>
    <section class="side-bar">
        <InfoHeader 
            name="Louie Gayao" 
            title="Web Developer"
            description="some decription about what i do - marketing tagline"/>
        <Navigation/>
        <Socials/>
    </section>
</template>

<style lang="scss" scoped>
    .side-bar{
        padding: 6rem 0;
        max-width: 35rem;
        height: 100vh;
    }
</style>
