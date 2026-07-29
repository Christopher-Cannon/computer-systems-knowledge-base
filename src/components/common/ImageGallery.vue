<template>
    <!--
    The balanced class will set the last item of an odd numbered data set
    to take up two columns in the grid on tablet.

    I don't know how good this looks, so maybe stick to even numbered data
    sets instead.
    -->
    <div class="grid" :class="props.data.length % 2 === 1 ? 'balanced' : ''">
        <a
            v-for="(image, index) in props.data"
            :key="index"
            :href="image.src"
            class="gallery-image-link"
        >
            <img :src="image.src" :alt="image.alt" class="gallery-image">
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
});
</script>

<style scoped>
.gallery-image {
    border-radius: var(--radius-md);
}

.gallery-image:hover {
    opacity: 0.9;
}
</style>