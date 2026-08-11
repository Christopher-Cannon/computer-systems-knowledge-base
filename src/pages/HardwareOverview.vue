<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/",
    prevLabel: "Home",
    nextHref: "/cpu",
    nextLabel: "CPU Architecture",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Hardware Overview</MainHeading>
        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
