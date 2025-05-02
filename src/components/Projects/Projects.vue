<script setup>
import ProjectCard from './ProjectCard.vue';
import {inject, watch, ref, watchEffect} from 'vue';
import { useWindowScroll  } from '@vueuse/core';
import { RouterLink } from 'vue-router';
import apiCaller from '../../data/api';

const visibleSection = inject('visibleSection')
const { y } = useWindowScroll();

watch(y,()=>{
    if(y.value>220) visibleSection.value=1;
})
const api = new apiCaller();
const projects = ref();
watchEffect(async()=>{
    projects.value = await api.getProjects();
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
        <RouterLink to="/" class="view-all-link">View All Projects</RouterLink>
    </section>

</template>
<style lang="scss" scoped>
.project-list{
    display: flex;
    flex-direction: column;
}
</style>