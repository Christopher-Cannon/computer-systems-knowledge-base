<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";

const prevNextNavData = {
    prevHref: "/logical-operations",
    prevLabel: "Logical Operations",
    nextHref: "/links",
    nextLabel: "Links",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Glossary</MainHeading>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
