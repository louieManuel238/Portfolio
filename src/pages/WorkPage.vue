<script setup>
import { useRouteParams } from '@vueuse/router';
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import apiCaller from '../data/api';

const id = useRouteParams('id');
const data = ref();
const api = new apiCaller();
watchEffect(async()=>{
    data.value = await api.getWorkExperienceByID(id.value);

})

</script>
<template>
    <main>
        <header>
            <RouterLink to="/">back buton</RouterLink>
        </header>
    <section>
        <h1>{{data?.title}}</h1>
        <h2>{{ data?.company }}</h2>
        <p>{{ new Date(data?.start_date).getFullYear() }} - {{ new Date(data?.end_date).getFullYear() }}</p>
    </section>
    <section>
        <h2>Key Contributions</h2>
        <ul>
            <li>Developed and implemented responsive web designs to enhance user experience.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality projects on time.</li>
            <li>Optimized website performance, reducing load times by 30%.</li>
            <li>Designed and maintained reusable components for scalability and efficiency.</li>
            <li>Conducted code reviews to ensure adherence to best practices and coding standards.</li>
        </ul>
    </section>
    <section>
        <h2>Key Roles</h2>
        <ul>
            <li>Lead front-end developer for multiple client projects, ensuring timely delivery.</li>
            <li>Mentored junior developers, fostering growth and improving team productivity.</li>
            <li>Translated client requirements into technical specifications and actionable tasks.</li>
            <li>Maintained project documentation and provided technical support post-deployment.</li>
            <li>Implemented agile methodologies to streamline development processes.</li>
        </ul>
    </section>
    <section>
        <h2>Skills</h2>
        <ul>
            <li v-for="skill of data?.tech">{{ skill  }}</li>
        </ul>
    </section>
</main>
</template>
<style lang="scss">
</style>