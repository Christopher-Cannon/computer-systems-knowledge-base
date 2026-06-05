<script setup>
import { computed } from 'vue';
import items from '../data/items';

const { id } = defineProps({ id: String });
const item = computed(() => items.find((item) => item.id === id))
</script>

<template>
    <div class="py-20 border-1">
        Item

        <hr>

        <router-link to="/item-browser" class="link">Back to Item Browser...</router-link>

        <hr>

        <div v-if="item">
            <p>ID: {{ item.id }}</p>
            <p>{{ item.title }}</p>
        </div>

        <div v-else>
            <p>Couldn't find that item</p>
        </div>
    </div>
</template>

<style>
    
</style>