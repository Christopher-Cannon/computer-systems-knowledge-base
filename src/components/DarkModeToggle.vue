<template>
    <button @click="toggleTheme" class="toggle-btn">
        <img v-if="theme === 'dark'" src="/icons/sun-solid-full.svg" alt="" />
        <img v-else src="/icons/moon-solid-full.svg" alt="" />
    </button>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.toggle-btn {
    width: 50px;
}
</style>
