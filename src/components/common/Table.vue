<template>
    <div class="table-wrapper">
        <div v-if="props.annotations" class="row-annotations">
            <div v-for="label in props.annotations" :key="label">
                {{ label }}
            </div>
        </div>

        <table :style="props.fixed ? `table-layout: fixed` : ``">
            <thead>
                <tr>
                    <th v-for="heading in tableHeadings" :key="heading">
                        {{ heading.replace("_", "") }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in props.data" :key="index">
                    <td
                        v-for="value in row"
                        :class="props.monospaced ? `monospaced` : ``"
                        :style="props.align ? `text-align: ${props.align}` : ``"
                    >
                        {{ value }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    data: {
        type: [Object],
        required: true,
    },
    annotations: {
        type: [String],
        required: false,
    },
    align: {
        type: String,
        required: false,
    },
    fixed: {
        type: Boolean,
        required: false,
    },
    monospaced: {
        type: Boolean,
        required: false,
    },
});

const tableHeadings = computed(() => Object.keys(props.data[0]));
</script>

<style scoped>
.table-wrapper {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    width: 100%;
    margin: 2rem 0;
}

.row-annotations {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-top: 0.25rem;
    text-align: right;
}

.row-annotations div {
    padding: 0.33rem 0;
}

table {
    background-color: var(--bg-colour);
    border: 2px solid var(--primary);
    border-collapse: separate;
    border-radius: var(--radius-md);
    border-spacing: 0;
    overflow: hidden;
    width: 100%;
}

th {
    background-color: var(--primary);
    color: var(--bg-colour);
}

th,
td {
    padding: 0.25rem 1rem;
    text-align: center;
}

tbody > tr {
    transition: background-color 0.15s ease-in-out;
}

tbody > tr:nth-child(2n) {
    background-color: var(--grey);
}

tbody > tr:hover {
    background-color: var(--grey-secondary);
}
</style>
