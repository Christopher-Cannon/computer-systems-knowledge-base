<template>
    <figure class="image">
        <a :href="props.src" target="_blank">
            <img :src="props.src" :alt="props.alt">
        </a>

        <figcaption v-if="props.caption">{{ props.caption }}</figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
});
</script>

<style scoped>

figure {
    margin: 2rem auto;
    max-width: 900px;
}

figure img {
    border-radius: var(--radius-md);
}

figcaption {
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 0.5rem;
    text-align: center;
}
</style>