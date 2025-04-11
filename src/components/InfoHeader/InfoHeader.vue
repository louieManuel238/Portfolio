<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  title: String,
  description: String,
})

</script>

<template>
<div class="personal-info">
  <h1 class="personal-info__name">{{ name }}</h1>
  <h2 class="personal-info__title">{{ title }}</h2>
  <p class="personal-info__description">{{ description }}</p>
</div>
</template>

<style scoped>

</style>
