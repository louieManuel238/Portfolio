<script setup>
import WorkCard from './WorkCard.vue';
import { inject, watch, watchEffect, ref} from 'vue';
import { useWindowScroll } from '@vueuse/core';
import apiCaller from '../../data/api';
import ArrowForward from '../Socials/ArrowForward.vue';

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
            <!-- <RouterLink :to="`/work/${item.id}`"> -->
                <WorkCard :data="item"/>
            <!-- </RouterLink> -->
            </div>
            <span>
                <a href="/Manuel%20Louie%20Gayao%20_%20Web%20Developer.pdf" target="_blank" 
                class="view-all-link"
                aria-label="View Full Résumé (opens in a new tab)">
                    View Full Resume
                    <ArrowForward/>
                </a>
            </span>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
.view-all-link{
@include viewAllLinkStyle;
&:hover{
        .arrow-forward{
            transform: translateX(.45rem);
        }
    }
}
</style>