<template>
    <a 
        :href="props.href" 
        class="link" 
        :target="props.external ? `_blank` : `_self`"
    >
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    external: {
        type: Boolean,
        required: false,
    },
});
</script>
