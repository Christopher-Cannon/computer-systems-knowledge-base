<script setup>
import { ref } from "vue";

const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
    bg: {
        type: String,
        required: false,
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
        <img
            v-if="props.bg"
            :src="props.bg"
            alt="Slide gallery background."
            class="slide-bg"
        />
        <img
            :src="props.data[slideIndex].path"
            alt=""
            class="slide"
            :style="!props.bg ? `background-color: #fffcfd` : ``"
        />

        <p class="text-center">
            <b>Step {{ slideIndex + 1 }}</b
            ><br />
            {{ props.data[slideIndex].description }}
        </p>

        <div class="button-group">
            <button
                @click="prevStep"
                class="button w-[100%]"
                :class="slideIndex === 0 ? `disabled` : ``"
            >
                Previous Step
            </button>
            <button
                @click="nextStep"
                class="button w-[100%]"
                :class="slideIndex === props.data.length - 1 ? `disabled` : ``"
            >
                Next Step
            </button>
        </div>
    </div>
</template>

<style scoped>
.slide-gallery {
    position: relative;
    margin: 2rem auto;
}

.slide-bg {
    position: absolute;
    top: 0;
    left: 0;
}

.slide {
    border: 2px solid var(--primary);
    border-radius: var(--radius-md);
    position: relative;
}

.button-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

@media (min-width: 1024px) {
    .slide-gallery {
        max-width: 1024px;
    }
}
</style>
