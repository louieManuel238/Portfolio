<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  title: String,
  description: String,
})

</script>

<template>
  <h1>{{ name }}</h1>
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</template>

<style scoped>

</style>
