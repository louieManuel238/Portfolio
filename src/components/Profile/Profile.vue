<script setup>
import data from '../../data/data.json';
const {profile} = data;
</script>
<template>
    <section class="profile-section">
        <h2>Profile</h2>
        <p>{{ profile }}</p>
    </section>
</template>
<style lang="scss" scoped>
</style>