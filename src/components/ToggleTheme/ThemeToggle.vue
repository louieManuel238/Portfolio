<script setup>
import {ref} from 'vue';
import { useToggle, useColorMode, useAnimate } from '@vueuse/core';
import DarkToggle from '../Icons/DarkToggle.vue';
import LightToggle from '../Icons/LightToggle.vue';
import ContrastToggle from '../Icons/ContrastToggle.vue';
import CafeToggle from '../Icons/CafeToggle.vue';


const isOpenToggle = ref(false);
const openToggle = useToggle(isOpenToggle);
const colorMode = useColorMode({
  modes:{
    dim: 'contrast',
    cafe: 'cafe',
  },
});
</script>

<template>
  
  <div class="theme-toggle">
    <button @click="openToggle()" class="theme-toggle__button" aria-label="Toggle to select theme">
      <DarkToggle v-if="colorMode === 'dark'" class="theme-toggle__img" />
      <LightToggle v-if="colorMode === 'light'" class="theme-toggle__img" />
      <CafeToggle v-if="colorMode === 'cafe'"  class="theme-toggle__img" />
      <ContrastToggle v-if="colorMode === 'contrast'" class="theme-toggle__img" />
      <span class="theme-toggle__button--text">{{ colorMode.toUpperCase() }}</span>
    </button>
    <Transition name="slide">
      <div v-if="isOpenToggle" class="theme-toggle__options">
        <button @click="colorMode = 'dark'; openToggle()"><span class="theme-toggle__text">Dark</span></button>
        <button @click="colorMode = 'light'; openToggle()"><span class="theme-toggle__text">Light</span></button>
        <button @click="colorMode = 'contrast'; openToggle()"><span class="theme-toggle__text">Contrast</span></button>
        <button @click="colorMode = 'cafe'; openToggle()"><span class="theme-toggle__text">Cafe</span></button>
      </div>  
    </Transition>
  </div>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
.theme-toggle{
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  background-color: #5f6c79;
  border-radius: 15px;
  height: 30px;
  
  &__button{
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #435364;
    border-radius: 10px;
    padding: 0 1rem;
    &--text{
      display: none;
      @include large-mobile{
        display: initial;
      }
    }
  }
  &__options{
    display: flex;
    align-items: center;
  }
}
.dark{
  color: $text-dark-main-color;
  background-color: $background-dark-main-color;
}
.light{
 @include lightTheme;
 .theme-toggle {
  background-color: #5f6c79;
  &__button{
    background-color: #b7bdc4;
  }
 
 }
}
.contrast{
  filter: contrast(1.2);
}
.cafe{
  @include lightTheme;
  filter: hue-rotate(315deg) brightness(0.9);
  filter: sepia(20%);
  .theme-toggle {
  background-color: #5f6c79;
  &__button{
    background-color: #b7bdc4;
  }
 }
}
.slide-enter-from,
.slide-leave-to{ 
  transform: translateX(20px);
  opacity: 0;}
.slide-enter-active,
.slide-leave-active{
  transition: all .2s ease-out;
}
</style>