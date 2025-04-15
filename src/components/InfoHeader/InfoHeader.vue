<script setup>
import { ref } from 'vue';
import data from '../../data/data.json';
</script>

<template>
<div class="personal-info">
  <h1 class="personal-info__name">{{ data.name }}</h1>
  <h2 class="personal-info__title text-title">{{ data.title }}</h2>
  <p class="personal-info__description text-description">{{ data.description }}</p>
</div>
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
    font-size: $text-sub-font;
    color: $text-sub-color;
  }
}
</style>
