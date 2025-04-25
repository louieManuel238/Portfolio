<script setup>
import data from '../../data/data.json';
import {inject, watch} from 'vue';
import { useWindowScroll } from '@vueuse/core';

const visibleSection = inject('visibleSection')
const {y} = useWindowScroll();

watch(y,()=>{
    if(y.value<220) visibleSection.value=0;
})

const {profile} = data;
</script>
<template>
    <section class="profile-section" id="profile-section" ref="profileRef">
        <h2>Profile</h2>
        <p class="profile-text">{{ profile }}</p>
    </section>
</template>
<style lang="scss" scoped>
@import '../../styles/partials/variables.scss';
.profile-text{
    font-size: $text-sub-font;
    color: $text-sub-color;
}
</style>