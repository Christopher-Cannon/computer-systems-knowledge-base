<script setup>
import items from '../data/items';
</script>

<template>
    <div class="py-20 border-1">
        ItemBrowser

        <hr>

        <ul>
            <li v-for="item in items" :key="item.id">
                <router-link :to="`/item-browser/${item.id}`" class="link">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style>
    
</style>