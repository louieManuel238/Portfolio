<script setup>
import {ref} from 'vue';
import { useToggle, useColorMode } from '@vueuse/core'
const isOpenToggle = ref(false)
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
    <button @click="openToggle()" class="theme-toggle__button">
    <img v-if="colorMode === 'dark'" src="/icons/dark-toggle.svg" alt="Dark Mode Icon" class="theme-toggle__img" />
    <img v-if="colorMode === 'light'" src="/icons/light-toggle.svg" alt="Light Mode Icon" class="theme-toggle__img" />
    <img v-if="colorMode === 'cafe'" src="/icons/cafe-toggle.svg" alt="Cafe Mode Icon" class="theme-toggle__img" />
    <img v-if="colorMode === 'contrast'" src="/icons/contrast-toggle.svg" alt="Contrast Mode Icon" class="theme-toggle__img" />
    <span class="theme-toggle__button--text">{{ colorMode.toUpperCase() }}</span>
    </button>
    <div v-if="isOpenToggle" class="theme-toggle__options">
      <button @click="colorMode = 'dark'; openToggle()"><span>Dark</span></button>
      <button @click="colorMode = 'light'; openToggle()"><span>Light</span></button>
      <button @click="colorMode = 'contrast'; openToggle()"><span>Contrast</span></button>
      <button @click="colorMode = 'cafe'; openToggle()"><span>Cafe</span></button>
    </div>
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

</style>