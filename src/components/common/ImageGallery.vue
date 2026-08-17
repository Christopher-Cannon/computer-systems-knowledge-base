<template>
    <!--
    The balanced class will set the last item of an odd numbered data set
    to take up two columns in the grid on tablet.

    I don't know how good this looks, so maybe stick to even numbered data
    sets instead.
    -->
    <div class="grid" :class="props.col3 ? `col-3` : ``">
        <a
            v-for="(image, index) in props.data"
            :key="index"
            :href="image.src"
            class="gallery-image-link"
        >
            <img :src="image.src" :alt="image.alt" class="gallery-image" />
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
    col3: {
        type: Boolean,
        required: false,
    },
});
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 3rem auto;
    max-width: 900px;
}

.gallery-image {
    border-radius: var(--radius-md);
    height: 100%;
}

@media (min-width: 600px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }

    .col-3 {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media (min-width: 900px) {
    .grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .col-3 {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
