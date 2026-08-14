<script setup>
import { ref } from "vue";

const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
});

const slideIndex = ref(0);

function prevStep() {
    slideIndex.value -= 1;

    if (slideIndex.value < 0) {
        slideIndex.value = 0;
    }
}

function nextStep() {
    slideIndex.value += 1;

    if (slideIndex.value === props.data.length) {
        slideIndex.value = props.data.length - 1;
    }
}
</script>

<template>
    <div class="slide-gallery">
        <img :src="props.data[slideIndex].path" alt="" class="slide" />

        <p class="text-center">
            <b>Step {{ slideIndex + 1 }}</b
            ><br />
            {{ props.data[slideIndex].description }}
        </p>

        <div class="button-group">
            <button
                @click="prevStep"
                class="w-[100%]"
                :class="slideIndex === 0 ? `disabled` : ``"
            >
                Previous Step
            </button>
            <button
                @click="nextStep"
                class="w-[100%]"
                :class="slideIndex === props.data.length - 1 ? `disabled` : ``"
            >
                Next Step
            </button>
        </div>
    </div>
</template>

<style scoped>
.slide-gallery {
    margin: 2rem auto;
}

.slide {
    background-color: var(--white);
    border: 2px solid var(--primary);
    border-radius: var(--radius-md);
}

.button-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

button {
    background-color: var(--primary);
    border-radius: var(--radius-sm);
    color: var(--white);
    padding: 0.5rem 1rem;
    transition: background-color 0.1s ease-in-out;
}

.disabled {
    background-color: var(--mid-grey);
}

button:not(.disabled):hover {
    background-color: var(--primary-darker);
}

@media (min-width: 1024px) {
    .slide-gallery {
        max-width: 1024px;
    }
}
</style>
