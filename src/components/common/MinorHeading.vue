<template>
    <h3 class="h2 minor-heading" :id="props.id ? props.id : ``">
        <slot></slot>
    </h3>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: false,
    },
});
</script>

<style scoped>
.minor-heading {
    border-bottom: 2px solid var(--primary);
    margin: 2rem 0 1.5rem;
}
</style>
