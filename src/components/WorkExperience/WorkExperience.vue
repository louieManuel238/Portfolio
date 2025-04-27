<script setup>
import data from '../../data/data.json';
import WorkCard from './WorkCard.vue';
import { inject, watch, watchEffect, ref} from 'vue';
import { RouterLink } from 'vue-router';
import { useWindowScroll } from '@vueuse/core';
import apiCaller from '../../data/api';

const visibleSection = inject('visibleSection')
const {y} = useWindowScroll()

watch(y,()=>{
    if(y.value>1320) visibleSection.value=2;
})
const work = ref();

const api = new apiCaller();
watchEffect(async()=>{
    work.value = await api.getWorkExperience();
})

</script>
<template>
    <section class="work-section" aria-label="Work Experiences" id="work-section" ref="workRef">
        <div class="section-header">
            <h2>Experience</h2>
        </div>
        <div class="work-list">
            <div v-for="item in work"
            class="work-item">
            <RouterLink :to="`/work/${item.id}`">
                <WorkCard :data="item"/>
            </RouterLink>
            </div>
        </div>
    </section>
</template>
<style lang="scss"></style>