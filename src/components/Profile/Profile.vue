<script setup>
import {inject, watch, watchEffect, ref} from 'vue';
import { useWindowScroll } from '@vueuse/core';
import apiCaller from '../../data/api';

const visibleSection = inject('visibleSection')
const {y} = useWindowScroll();
watch(y,()=>{
    if(y.value<220) visibleSection.value=0;
})

const api = new apiCaller();
const data = ref();
watchEffect(async()=>{
  const {about} = await api.getUser();
  data.value = about;
})


</script>
<template>
    <section class="profile-section" aria-label="About Me" id="profile-section" ref="profileRef">
        <div class="section-header">
            <h2>Profile</h2>
        </div>
        <p class="profile-text">{{ data }}</p>
    </section>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables.scss' as *;
.profile-text{
    font-size: 1rem;
    color: $text-dark-sub-color;
    white-space: pre-wrap;
}
.light{
    .profile-text{
        color: $text-light-sub-color;
    }
}
</style>