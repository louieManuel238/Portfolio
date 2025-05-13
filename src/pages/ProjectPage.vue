<script setup>
import { RouterLink } from 'vue-router';
import {watchEffect, ref} from 'vue';
import apiCaller from '../data/api';
import github from '../components/Socials/GitHub.vue'
// import projectList from '../data/projects.json';
// const {projects} = projectList;
const api = new apiCaller();
const projects = ref();
watchEffect(async()=>{
    projects.value = await api.getProjectList();
})

</script>
<template>
    <main>
        <div class="back-navigation__button"><RouterLink to="/">Back</RouterLink></div>
        <section class="hero-section">
            <h1>All Projects</h1>
            <div>
                <table class="project-table">
                    <thead class="project-table__head">
                        <tr class="project-table__head-row">
                            <th class="project-table__col">Year</th>
                            <th class="project-table__col">Project</th>
                            <th class="project-table__col">Tech Stack</th>
                            <th class="project-table__col"></th>
                        </tr>
                    </thead>
                    <tbody class="project-table__body">
                        <tr v-for="project of projects" class="project-table__row">
                            <td class="project-table__col year">{{ project.year }}</td>
                            <td class="project-table__col">{{ project.title }}</td>
                            <td class="project-table__col tech-list">
                                <div v-for="item of project.tech" class="tech-list__tag">{{ item }}</div>
                            </td>
                            <td class="project-table__col">
                                <div v-for="link of project.link">
                                    <a v-if="link?.deployed" :href="link.deployed">Web</a>
                                    <a v-if="link?.github" :href="link.github"><github class="icon"/></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
.hero-section{
    width: 100%;
    gap: 2rem;

}
.project-table{
    width: 100%;
    &__head{
       text-align: left;
       th{
        padding: .625rem 0 1.25rem 0;
       }
    }
    &__body{
       td{
        padding: 10px 1.25rem 1.25rem 0;
       }
    }
    &__col{
        max-width: 100%;
        &:first-child{
            padding-right: 1.25rem;
        }
        &:nth-child(2){
            font-weight: 600;
        }
        &:nth-child(3){
            display: none;
            @include desktop{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
            }
        }
        &:nth-child(4) {
            display: none;
            @include large-mobile {
            display: table-cell;
            padding: 0;
            }
            @include desktop {
            display: table-cell;
            }
        }

    }
    &__row{
        vertical-align: top;
        line-height: 24px;
        padding: 2px;
        border-bottom: 1px solid rgba(97, 97, 97, 0.226);
        &:hover{
            background-color: #18305550;
        }
    }
}
.tech-list{
    display: flex;
    gap: 5px;
    &__tag{
        @include tag;
        display: flex;
        font-size: 11px;
        
    }
}
.year{
    @include date;
    font-size: .90rem;
}
.back-navigation__button{
    padding: 1rem;
}
</style>