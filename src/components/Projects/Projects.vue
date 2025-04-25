<script setup>
import {projects} from '../../data/data.json';
import ProjectCard from './ProjectCard.vue';

import {inject, watch} from 'vue';
import { useWindowScroll  } from '@vueuse/core';

const visibleSection = inject('visibleSection')
const { y } = useWindowScroll();

watch(y,()=>{
    if(y.value>220) visibleSection.value=1;
})
</script>
<template>
    <section class="projects-section" id="projects-section" ref="projectRef">
        <h2>Featured Projects</h2>
        <div class="project-list">
            <div v-for="project in projects"
            class="project-item">
                <ProjectCard :data="project"/>
            </div>
        </div>
        <a href="#">View All</a>
    </section>

</template>
<style lang="scss" scoped>
.project-list{
    display: flex;
    flex-direction: column;
}
</style>