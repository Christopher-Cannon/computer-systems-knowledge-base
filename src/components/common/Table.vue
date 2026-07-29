<template>
    <table>
        <thead>
            <tr>
                <th v-for="heading in tableHeadings" :key="heading">
                    {{ heading }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in props.data" :key="index">
                <td v-for="value in row">{{ value }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
});

const tableHeadings = computed(() => Object.keys(props.data[0]));
</script>

<style scoped>
table {
    background-color: var(--bg-colour);
    border: 2px solid var(--primary);
    border-collapse: separate;
    border-spacing: 0;
    border-radius: var(--radius-md);
    margin: 2rem 0;
    overflow: hidden;
    width: 100%;
}

th {
    background-color: var(--primary);
    color: var(--bg-colour);
    text-transform: capitalize;
}

th,
td {
    padding: 0.25rem 0.5rem;
    text-align: center;
}

tbody>tr {
    transition: background-color 0.15s ease-in-out;
}

tbody>tr:nth-child(2n) {
    background-color: var(--grey);
}

tbody>tr:hover {
    background-color: var(--grey-secondary);
}
</style>