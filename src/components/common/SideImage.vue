<template>
    <div class="side-image">
        <div class="text-box" :class="props.invert ? `order-1` : ``">
            <slot></slot>
        </div>

        <a :href="props.src" class="image-box">
            <img :src="props.src" :alt="props.alt" class="image" />
        </a>
    </div>
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
    invert: {
        type: Boolean,
        required: false,
    },
});
</script>

<style scoped>
.image {
    border-radius: var(--radius-md);
}

@media (max-width: 799.97px) {
    .image {
        margin: 3rem auto;
    }
}

@media (min-width: 800px) {
    .side-image {
        display: flex;
        gap: 1rem;
    }

    .text-box *:first-of-type {
        margin-top: 0;
    }

    .text-box,
    .image-box {
        flex: 1;
    }
}

@media (min-width: 1280px) {
    .side-image {
        gap: 2rem;
    }

    .text-box {
        flex: 9;
    }

    .image-box {
        flex: 6;
    }
}
</style>
