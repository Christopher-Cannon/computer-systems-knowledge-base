<template>
    <div class="container">
        <router-link :to="props.data.prevHref" class="section-button">
            <div class="subtitle">Previous Section</div>

            <div class="h4">
                {{ props.data.prevLabel }}
            </div>
        </router-link>

        <router-link
            :to="props.data.nextHref"
            class="section-button next-button"
        >
            <div class="subtitle">Next Section</div>

            <div class="h4">
                {{ props.data.nextLabel }}
            </div>
        </router-link>
    </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 3rem auto 2rem;
}

.section-button {
    background-color: var(--grey);
    border: 1px solid var(--grey-secondary);
    border-radius: var(--radius-md);
    padding: 1rem;
    transition: background-color 0.1s ease-in-out, border 0.1s ease-in-out;
    width: 100%;
}

.section-button:hover {
    background-color: var(--grey-secondary);
    border: 1px solid var(--primary-darker);
}

.next-button {
    text-align: right;
}

.subtitle {
    color: var(--text-grey);
    font-size: 0.6rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
}
</style>
