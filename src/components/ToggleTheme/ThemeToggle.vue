<script setup>
import { useDark, useToggle, useColorMode } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const colorMode = useColorMode({
  modes:{
    
  }
});
</script>

<template>
  <button @click="colorMode = 'dark'"><span>Dark</span></button>
  <button @click="colorMode = 'light'"><span>Light</span></button>
  <button @click="colorMode = 'light'"><span>Dim</span></button>
  <button @click="colorMode = 'light'"><span>Cafe</span></button>
</template>