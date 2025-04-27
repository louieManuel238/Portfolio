<script setup>
import JSONdata from '../../data/data.json';
import { ref, watchEffect } from 'vue';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const PORT = import.meta.env.VITE_SERVER_PORT;
const data = ref();

watchEffect(()=>{
  const getUser = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}:${PORT}/user/1`);
      data.value = response.data;
    }catch(error){

    }
  }
  getUser()
})


</script>

<template>
<div class="personal-info">
  <h1 class="personal-info__name">{{`${data?.first_name} ${data?.last_name}` || JSONdata.name}}</h1>
  <h2 class="personal-info__title text-title">{{  data?.title || JSONdata.title}}</h2>
  <p class="personal-info__description text-description">{{  data?.tagline || JSONdata.tagline}}</p>
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
    font-size: 1rem;
    color: $text-sub-color;
  }
}
</style>
