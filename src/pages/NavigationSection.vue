<script setup>
import InfoHeader from '../components/InfoHeader/InfoHeader.vue'
import Navigation from '../components/Navigation/Navigation.vue';
import Socials from '../components/Socials/Socials.vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
</script>

<template>
    <section class="side-bar">
        <div class="side-bar__info">
            <InfoHeader/>
            <Navigation v-if="width > 1023"/>
        </div>
        <Socials/>
    </section>
</template>

<style lang="scss" scoped>
@import '../styles/partials/mixins';
    .side-bar{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        padding: 1rem 0;
        @include tablet{
            gap: 3rem;
            padding: 2rem 0;
        }
        @include desktop{
            padding: 6rem 0;
            max-width: 35rem;
            max-height: 100vh;
            position: sticky;
            top: 0;
            
        }
        &__info{
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 20%;
        }
    }
</style>
