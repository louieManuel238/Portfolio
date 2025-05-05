<script setup>
import { useDark, useToggle, useColorMode } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const colorMode = useColorMode({
  modes:{
    dim: 'dim',
    cafe: 'cafe',
  },
});
</script>

<template>
  
  <div class="theme-toggle">
    <div>
    <button>Toggle</button>
  </div>
  <button @click="colorMode = 'dark'"><span>Dark</span></button>
  <button @click="colorMode = 'light'"><span>Light</span></button>
  <button @click="colorMode = 'dim'"><span>Dim</span></button>
  <button @click="colorMode = 'cafe'"><span>Cafe</span></button>
  </div>
</template>

<style lang="scss">
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;
.theme-toggle{
  position: absolute;
  top: 0;
  right: 0;
}
.dark{
  color: $text-dark-main-color;
  background-color: $background-dark-main-color;
}
.light{
  color: $text-light-main-color;
  background-color:  $background-light-main-color;
  .tech-list__tag {
    color: $text-light-tag-color;
    background-color: $background-light-tag-color;
  }
  .text-description, .profile-text{
    color: $text-light-sub-color;
  }
  .project-card, .work-card{
    &:hover{
      color: $text-light-tag-color;
    }
  }
  .contact{
    &__input{
      background-color: $background-light-input-color;
    }
  }
  .work-date{
    color: $text-light-sub-color;
  }
  .button-regular{
    background-color: #3b3939;
  }
  .focused{
    color: $text-light-tag-color;
    font-weight: 600;
  }
  .contact{
    &__input{
      color: $text-light-main-color;
    }
  }
}
.dim{
  color: #ffffffde;
  background-color: #0E1D35;
}
.cafe{
  color: #ffffffde;
  background-color: #b9b79d;
}

</style>