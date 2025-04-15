<script setup>
import {ref} from 'vue';
import {projects} from '../../data/data.json';
import ProjectCard from './ProjectCard.vue';

const Projects = ref(projects);
</script>
<template>
    <section class="projects-section">
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