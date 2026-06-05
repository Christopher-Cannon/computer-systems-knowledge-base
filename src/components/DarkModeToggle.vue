<template>
  <button @click="toggleTheme" class="toggle-btn">
    <img v-if="isDarkMode" src="/public/icons/sun-solid-full.svg" alt="">
    <img v-else src="/public/icons/moon-solid-full.svg" alt="">
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme';

const { isDarkMode, toggleTheme } = useTheme();
</script>

<style scoped>
.toggle-btn {
    width: 50px;
}
</style>