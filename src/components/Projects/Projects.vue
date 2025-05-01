<script setup>
import {projects} from '../../data/data.json';
import ProjectCard from './ProjectCard.vue';

import {inject, watch} from 'vue';
import { useWindowScroll  } from '@vueuse/core';
import { RouterLink } from 'vue-router';

const visibleSection = inject('visibleSection')
const { y } = useWindowScroll();

watch(y,()=>{
    if(y.value>220) visibleSection.value=1;
})
</script>
<template>
    <section class="projects-section" aria-label="Featured Project" id="projects-section" ref="projectRef">
        <div class="section-header">
            <h2>Featured Projects</h2>
        </div>
        <div class="project-list">
            <div v-for="project in projects"
            class="project-item">
                <ProjectCard :data="project"/>
            </div>
        </div>
        <RouterLink to="/">View All Projects</RouterLink>
    </section>

</template>
<style lang="scss" scoped>
.project-list{
    display: flex;
    flex-direction: column;
}
</style>