<template>
  <button @click="toggleTheme" class="toggle-btn">
    <span v-if="isDarkMode">Dark</span>
    <span v-else>light</span>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme';

const { isDarkMode, toggleTheme } = useTheme();
</script>

<style scoped>
.toggle-btn {
    background-color: var(--primary);
    border: 0;
    border-radius: 0.25rem;
    color: white;
    cursor: pointer;
    padding: 0.25rem 1rem;
}

.toggle-btn:hover {
    background-color: var(--primary-darker);
}
</style>