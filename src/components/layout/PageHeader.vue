<template>
    <header class="page-header">
        <div class="top-bar wrapper">
            <h1 class="h3">
                <router-link to="/#top">
                    Computer Systems Fundamentals
                </router-link>
            </h1>

            <div class="flex gap-[1rem]">
                <dark-mode-toggle />
    
                <button class="mobile-nav-btn" @click="toggleNav">
                    <img
                        :src="`/public/icons/bars-solid-full${suffix}.svg`"
                        alt="" 
                        id="open-btn"
                    >
                    <img
                        :src="`/public/icons/xmark-solid-full${suffix}.svg`"
                        alt="" 
                        id="close-btn" 
                        class="hide-mobile"
                    >
                </button>
            </div>
        </div>

        <nav id="navigation" class="hide-mobile">
            <ul class="nav-list">
                <li v-for="(category, index) in navLinks" :key="index">
                    <span class="h4 category-heading hide-desktop">
                        {{ `${index + 1}` + '. ' }}
                    </span>
                    <span class="h4 category-heading">
                        {{ category.label }}
                    </span>

                    <ul class="dropdown">
                        <li v-for="link in category.sublinks" :key="link.label">
                            <router-link :to="link.path" class="nav-link">
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import DarkModeToggle from "../DarkModeToggle.vue";
import { useTheme } from '../../composables/useTheme';
import { ref, watch } from "vue";

const { theme } = useTheme();
const navIsVisible = ref(false);
const suffix = ref(theme.value === 'dark' ? '-white' : '');

const toggleNav = () => {
    navIsVisible.value = !navIsVisible.value;

    if (navIsVisible.value) {
        document.querySelector("#navigation").classList.remove("hide-mobile");
        document.querySelector("#open-btn").classList.add("hide-mobile");
        document.querySelector("#close-btn").classList.remove("hide-mobile");
    } else {
        document.querySelector("#navigation").classList.add("hide-mobile");
        document.querySelector("#open-btn").classList.remove("hide-mobile");
        document.querySelector("#close-btn").classList.add("hide-mobile");
    }
};

watch(
    theme, 
    (newTheme) => suffix.value = newTheme === 'dark' ? '-white' : ''
);

const navLinks = [
    { path: "/", label: "Hardware", sublinks: [
        { path: "/hardware-overview", label: "Overview"},
        { path: "/cpu", label: "CPU"},
        { path: "/memory", label: "Memory"},
        { path: "/storage", label: "Storage"},
    ] },
    { path: "/", label: "Software", sublinks: [
        { path: "/types-of-software", label: "Types of Software"},
        { path: "/operating-systems", label: "Operating Systems"},
        { path: "/os-layers", label: "OS Layers"},
        { path: "/file-management", label: "File Management"},
    ] },
    { path: "/", label: "Conversions", sublinks: [
        { path: "/bin-dec", label: "Binary - Decimal"},
        { path: "/bin-hex", label: "Binary - Hex"},
        { path: "/dec-hex", label: "Decimal - Hex"},
    ] },
    { path: "/", label: "Arithmetic", sublinks: [
        { path: "/binary-addition", label: "Binary Addition"},
        { path: "/binary-subtraction", label: "Binary Subtraction"},
        { path: "/hex-addition", label: "Hex Addition"},
        { path: "/hex-subtraction", label: "Hex Subtraction"},
    ] },
    { path: "/", label: "Logic", sublinks: [
        { path: "/logic-simple-gates", label: "Simple Logic Gates"},
        { path: "/logic-complex-gates", label: "Complex Logic Gates"},
    ] },
];
</script>

<style>
    nav {
        position: relative;
        width: 100%;
    }

    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .mobile-nav-btn {
        position: relative;
        width: 50px;
    }

    .mobile-nav-btn > img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .nav-list {
        background-color: var(--bg-colour);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        list-style: none;
        padding: 1rem;
        position: absolute;
        text-align: center;
        width: 100%;
    }

    .nav-list > li {
        padding-bottom: 0.5rem;
        width: calc(50% - 0.5rem);
    }

    .category-heading {
        font-weight: bold;
    }

    .dropdown {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .nav-link {
        background-color: var(--grey);
        border-radius: var(--radius-sm);
        display: block;
        padding: 0.25rem;
    }

    .nav-link:hover {
        background-color: var(--grey-secondary);
    }

    @media (max-width: 1439.97px) {
        .hide-mobile {
            display: none;
        }
    }

    @media (min-width: 900px) {
        .nav-list > li {
            width: calc(33% - 0.75rem);
        }
    }

    @media (min-width: 1440px) {
        .nav-list > li {
            width: calc(20% - 1rem);
        }

        .hide-desktop {
            display: none;
        }
    }
</style>