<script setup>
import { ref, watchEffect } from 'vue';
import apiCaller from '../../data/api';
import { RouterLink } from 'vue-router';

const data = ref();
const api = new apiCaller();
watchEffect(async()=>{
  data.value = await api.getUser();
})

</script>

<template>
<header class="personal-info" aria-label="Personal Infromation">
  <h1 class="personal-info__name">
    <RouterLink to="/">{{`${data?.first_name} ${data?.last_name}`}} </RouterLink>
  </h1>
  <h2 class="personal-info__title text-title">{{  data?.title}}</h2>
  <p class="personal-info__description text-description">{{  data?.tagline}}</p>
</header>
</template>

<style lang="scss" scoped>
@import '../../styles/partials/variables';
.personal-info{
  &__name{
    font-size: 2.25rem;
  }
  &__title{
    font-size: 1.125rem;
  }
  &__description{
    font-size: 1rem;
    color: $text-sub-color;
  }
}
</style>
