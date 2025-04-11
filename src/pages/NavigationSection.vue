<script setup>
import InfoHeader from '../components/InfoHeader/InfoHeader.vue'
import Navigation from '../components/Navigation/Navigation.vue';
import Socials from '../components/Socials/Socials.vue';
</script>

<template>
    <section class="side-bar">
        <div class="side-bar__info">
            <InfoHeader 
                name="Louie Gayao" 
                title="Web Developer"
                description="some decription about what i do - marketing tagline"/>
            <Navigation/>
        </div>
        <Socials/>
    </section>
</template>

<style lang="scss" scoped>
    .side-bar{
        padding: 6rem 0;
        max-width: 35rem;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__info{
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 20%;
        }
    }
</style>
