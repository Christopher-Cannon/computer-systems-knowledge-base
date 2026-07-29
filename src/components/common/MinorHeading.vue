<template>
    <h3 class="h2 minor-heading">
        <slot></slot>
    </h3>
</template>

<style scoped>
.minor-heading {
    border-bottom: 2px solid var(--primary);
    margin: 2rem 0 1.5rem;
}
</style>