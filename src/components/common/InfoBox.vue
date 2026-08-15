<template>
    <aside
        class="info-box"
        :class="
            props.warning ? `warning-box` : props.danger ? `danger-box` : ``
        "
    >
        <header class="info-box-header">
            <img
                v-if="props.warning"
                src="/public/icons/triangle-exclamation-solid-full.svg"
                alt=""
                class="info-box-icon"
            />
            <img
                v-else-if="props.danger"
                src="/public/icons/bomb-solid-full.svg"
                alt=""
                class="info-box-icon"
            />
            <img
                v-else
                src="/public/icons/circle-info-solid-full.svg"
                alt=""
                class="info-box-icon"
            />
            <span>{{ defaultLabel }}</span>
        </header>

        <div class="info-box-body">
            <slot></slot>
        </div>
    </aside>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    label: {
        type: String,
        required: false,
    },
    warning: {
        type: Boolean,
        required: false,
    },
    danger: {
        type: Boolean,
        required: false,
    },
});

const defaultLabel = computed(() => {
    if (props.label) {
        return props.label;
    }
    return props.warning ? "Caution" : props.danger ? "Danger" : "Info";
});
</script>

<style scoped>
.info-box {
    border: 3px solid var(--info);
    border-radius: var(--radius-md);
    margin: 2rem auto;
}

.info-box-header {
    background-color: var(--info);
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
}

.warning-box {
    border-color: var(--warning);
}

.warning-box .info-box-header {
    background-color: var(--warning);
    color: #262626;
}

.danger-box {
    border-color: var(--danger);
}

.danger-box .info-box-header {
    background-color: var(--danger);
}

.info-box-icon {
    width: 30px;
}

.info-box-body {
    background-color: var(--grey);
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    padding: 1rem;
}
</style>
