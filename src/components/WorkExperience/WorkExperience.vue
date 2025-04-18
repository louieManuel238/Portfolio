<script setup>
import data from '../../data/data.json';
import WorkCard from './WorkCard.vue';
const work = data.work
</script>
<template>
    <section class="work-section">
        <h2>Work Experience</h2>
        <div class="work-list">
            <div v-for="item in work"
            class="work-item">
                <WorkCard :data="item"/>
            </div>
        </div>
    </section>
</template>
<style lang="scss"></style>