<template>
    <header class="page-header">
        <div class="top-bar">
            <h1 class="h3">
                <router-link to="/#top">
                    Computer Systems Fundamentals
                </router-link>
            </h1>

            <div class="flex gap-[1rem]">
                <dark-mode-toggle class="hide-desktop" />

                <button class="mobile-nav-btn hide-desktop" @click="toggleNav">
                    <img
                        :src="`/icons/bars-solid-full${suffix}.svg`"
                        alt=""
                        id="open-btn"
                    />
                    <img
                        :src="`/icons/xmark-solid-full${suffix}.svg`"
                        alt=""
                        id="close-btn"
                        class="hide-mobile"
                    />
                </button>
            </div>
        </div>

        <nav id="navigation" class="hide-mobile">
            <ul class="nav-list">
                <li
                    v-for="(category, index) in navLinks"
                    :key="index"
                    class="nav-list-item"
                >
                    <span class="h4 category-heading hide-desktop">
                        {{ `${index + 1}` + ". " }}
                    </span>
                    <span class="h4 category-heading">
                        {{ category.label }}
                    </span>

                    <ul class="dropdown">
                        <li v-for="link in category.sublinks" :key="link.label">
                            <router-link
                                :to="link.path"
                                @click="toggleNav"
                                class="nav-link"
                            >
                                {{ link.label }}
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="mb-[-4px] ml-[1rem]">
                    <dark-mode-toggle class="hide-mobile" />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import DarkModeToggle from "../DarkModeToggle.vue";
import { useTheme } from "../../composables/useTheme";
import { ref, watch } from "vue";

const { theme } = useTheme();
const navIsVisible = ref(false);
const suffix = ref(theme.value === "dark" ? "-white" : "");

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
    (newTheme) => (suffix.value = newTheme === "dark" ? "-white" : "")
);

const navLinks = [
    {
        path: "/",
        label: "Hardware",
        sublinks: [
            { path: "/hardware-overview", label: "Hardware Overview" },
            { path: "/cpu-architecture", label: "CPU Architecture" },
            { path: "/memory", label: "Memory" },
            { path: "/storage", label: "Storage" },
        ],
    },
    {
        path: "/",
        label: "Software",
        sublinks: [
            { path: "/types-of-software", label: "Types of Software" },
            { path: "/operating-systems", label: "Operating Systems" },
            { path: "/os-layers", label: "OS Layers" },
            { path: "/file-management", label: "File Management" },
        ],
    },
    {
        path: "/",
        label: "Conversions",
        sublinks: [
            { path: "/number-bases", label: "Number Bases" },
            { path: "/base-conversion", label: "Base Conversion" },
        ],
    },
    {
        path: "/",
        label: "Arithmetic",
        sublinks: [
            { path: "/binary-arithmetic", label: "Binary Arithmetic" },
            { path: "/hex-arithmetic", label: "Hex Arithmetic" },
        ],
    },
    {
        path: "/",
        label: "Logic",
        sublinks: [
            { path: "/logical-operations", label: "Logical Operations" },
        ],
    },
    {
        path: "/",
        label: "Resources",
        sublinks: [
            { path: "/glossary", label: "Glossary" },
            { path: "/links", label: "Resource Links" },
        ],
    },
];
</script>

<style scoped>
.page-header {
    border-bottom: 1px solid var(--grey-secondary);
    padding-left: 1rem;
    padding-right: 1rem;
}

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

.h3 {
    margin: 1rem 0;
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

.nav-list-item {
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
    .nav-list {
        border-bottom: 1px solid var(--grey-secondary);
    }
    .hide-mobile {
        display: none;
    }
}

@media (min-width: 900px) {
    .nav-list-item {
        width: calc(33% - 0.75rem);
    }
}

@media (min-width: 1440px) {
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .top-bar {
        display: block;
    }

    h1 {
        line-height: 1.1;
    }

    .nav-list {
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        padding-left: 0;
        padding-right: 0;
        flex-wrap: nowrap;
        position: static;
    }

    .nav-list-item {
        min-width: min-content;
        max-width: min-content;
        position: relative;
        padding: 0;
    }

    .category-heading {
        cursor: pointer;
        display: block;
        font-size: 1.2rem;
        padding: 0.5rem;
    }

    .dropdown {
        background-color: var(--grey);
        border: 1px solid var(--grey-secondary);
        border-radius: var(--radius-sm);
        gap: 0;
        display: none;
        padding: 0.5rem;
        position: absolute;
        margin-top: 0;
        left: -4.5rem;
        right: -4.5rem;
    }

    .nav-list-item:hover > .dropdown {
        display: block;
    }

    .nav-link {
        padding: 0.5rem 1rem;
    }

    .hide-desktop {
        display: none;
    }
}
</style>
