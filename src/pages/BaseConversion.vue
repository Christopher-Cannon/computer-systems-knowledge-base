<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/number-bases",
    prevLabel: "Number Bases",
    nextHref: "/binary-arithmetic",
    nextLabel: "Binary Arithmetic",
};

const hexToDecAnnotations = ["Digit", "Power", "Value", "Hex", "Decimal"];

const hexToDecData = [
    {
        _3: "16^3",
        _2: "16^2",
        _1: "16^1",
        _0: "16^0",
    },
    {
        _3: "4096",
        _2: "256",
        _1: "16",
        _0: "1",
    },
    {
        _3: "D",
        _2: "2",
        _1: "E",
        _0: "9",
    },
    {
        _3: "13",
        _2: "2",
        _1: "14",
        _0: "9",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Base Conversion</MainHeading>

        <p>
            While calculators exist online to easily convert between any number
            base, it's worth knowing what is actually going on behind the
            scenes. You could even make your own number base conversion
            functions using the following methods.
        </p>

        <MinorHeading>Decimal - Binary</MinorHeading>

        <MinorHeading>Hexadecimal - Binary</MinorHeading>

        <MinorHeading>Decimal - Hexadecimal</MinorHeading>

        <h4 class="h3">Decimal to Hex</h4>

        <h4 class="h3">Hex to Decimal</h4>

        <p></p>

        <Table
            :data="hexToDecData"
            :annotations="hexToDecAnnotations"
            monospaced
            fixed
        />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
