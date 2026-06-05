<template>
    <div class="flex flex-column lg:flex-row justify-between py-5">
        <h1 class="font-bold text-2xl">TITLE</h1>

        <nav>
            <ul class="nav-list flex flex-column lg:flex-row gap-5">
                <li v-for="link in navLinks" :key="link.label">
                    <router-link :to="link.path">{{ link.label }}</router-link>
                </li>
                <dark-mode-toggle />
            </ul>
        </nav>
    </div>
</template>

<script setup>
import DarkModeToggle from "../DarkModeToggle.vue";

const navLinks = [
    { path: "/#top", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/item-browser", label: "Item Browser" },
];

</script>

<style>
    .nav-list {
        align-items: center;
        list-style: none;
        padding: none;
    }
</style>