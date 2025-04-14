<script setup>
import { ref } from 'vue';
import data from '../../data/data.json';
</script>

<template>
<div class="personal-info">
  <h1 class="personal-info__name">{{ data.name }}</h1>
  <h2 class="personal-info__title">{{ data.title }}</h2>
  <p class="personal-info__description">{{ data.description }}</p>
</div>
</template>

<style lang="scss" scoped>
.personal-info{
  &__name{
    font-size: 3rem;
  }
}
</style>
