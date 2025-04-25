<script setup>
import data from '../../data/data.json';
import WorkCard from './WorkCard.vue';
import { inject, watch} from 'vue';
import { useWindowScroll } from '@vueuse/core';

const visibleSection = inject('visibleSection')
const {y} = useWindowScroll()

watch(y,()=>{
    if(y.value>1320) visibleSection.value=2;
})
const work = data.work
</script>
<template>
    <section class="work-section" aria-label="Work Experiences" id="work-section" ref="workRef">
        <div class="section-header">
            <h2>Experience</h2>
        </div>
        <div class="work-list">
            <div v-for="item in work"
            class="work-item">
                <WorkCard :data="item"/>
            </div>
        </div>
    </section>
</template>
<style lang="scss"></style>