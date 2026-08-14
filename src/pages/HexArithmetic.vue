<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";
import InfoBox from "../components/common/InfoBox.vue";
import SlideGallery from "../components/common/SlideGallery.vue";

const prevNextNavData = {
    prevHref: "/binary-arithmetic",
    prevLabel: "Binary Arithmetic",
    nextHref: "/simple-logic-gates",
    nextLabel: "Simple Logic Gates",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Hexadecimal Arithmetic</MainHeading>

        <MinorHeading>Addition</MinorHeading>

        <MinorHeading>Subtraction</MinorHeading>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
