<script setup>
import data from '../../data/data.json';
const {profile} = data;
</script>
<template>
    <section class="profile-section">
        <h2>Profile</h2>
        <p class="profile-text">{{ profile }}</p>
    </section>
</template>
<style lang="scss" scoped>
@import '../../styles/partials/variables.scss';
.profile-text{
    font-size: $text-sub-font;
    color: $text-sub-color;
}
</style>