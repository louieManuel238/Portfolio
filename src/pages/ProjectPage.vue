<script setup>
import { RouterLink } from 'vue-router';
import {watchEffect, ref} from 'vue';
import { useHead, useSeoMeta } from '@unhead/vue'
import apiCaller from '../data/api';
import github from '../components/Socials/GitHub.vue'
import webIcon from '../components/Socials/Web.vue';
import ArrowBack from '../components/Socials/ArrowBack.vue';
import data from '../data/data.json';
// import projectList from '../data/projects.json';
// const {projects} = projectList;
useHead({
    title: 'Projects',
    titleTemplate: '%s %separator %siteName',
    templateParams: {
        siteName: 'Louie Gayao'
    },
    script: [
    {
        src: "https://www.googletagmanager.com/gtag/js?id=G-R4YCPQ0027",
        async: true
    },
    {
        children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-R4YCPQ0027');
        `
    },
    {
        children: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MH3JKG43');
        `
    },
    ]
});

useSeoMeta({
  title: 'Projects',
  description: 'List of Projects',
   ogTitle: '%s',
});

const api = new apiCaller();
const projects = ref();
const user = ref();
watchEffect(async()=>{
    projects.value = await api.getProjectList();
    user.value = await api.getUser();

})

</script>
<template>
    <main>
        
        <section class="hero-section">
            <div class="back-navigation__button">
                <RouterLink to="/" class="back-to-main">
                    <ArrowBack/> <h1> {{`${user?.first_name} ${user?.last_name}`}}</h1>
                </RouterLink>
            </div>
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
                                <div v-for="link of project.link" class="project-link--icons">
                                    <a v-if="link?.deployed" :href="link.deployed" target="_blank" aria-label="Open Deployed Project (new tab)"><webIcon/></a>
                                    <a v-if="link?.github" :href="link.github"  target="_blank" aria-label="Open Github Repository (new tab)"><github class="icon"/></a>
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
            padding: 10px 0 0 0;
          
            width: fit-content;
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
.project-link{
    &--icons{
        width: 100%;
        display: flex;
        gap: 10px;
    }
}
.back-to-main{
    width: 100%;
    display: flex;
    gap: 1rem;
    &:hover{
        .arrow-back{
            transform: translateX(-0.25rem);
        }
    }
}
</style>