<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";
import InfoBox from "../components/common/InfoBox.vue";

const prevNextNavData = {
    prevHref: "/base-conversion",
    prevLabel: "Base Conversion",
    nextHref: "/hexadecimal-arithmetic",
    nextLabel: "Hexadecimal Arithmetic",
};

const binAdditionRulesData = [
    {
        Operation: "0 + 0",
        "What to do": "0 goes underneath.",
    },
    {
        Operation: "1 + 0",
        "What to do": "1 goes underneath.",
    },
    {
        Operation: "1 + 1",
        "What to do": "0 goes underneath, carry 1 to the column on the left.",
    },
    {
        Operation: "1 + 1 + 1 carry",
        "What to do": "1 goes underneath, carry 1 to the column on the left.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Binary Arithmetic</MainHeading>

        <MinorHeading>Addition</MinorHeading>

        <p>
            Binary addition is just like long addition with decimal numbers,
            though it can feel a little alien at first due to all the 1s and 0s.
            The rules of binary addition are as follows:
        </p>

        <Table :data="binAdditionRulesData" />

        <InfoBox label="Ensuring Readable Working">
            <p class="!my-0">
                When laying out your working, make sure you keep the binary
                numbers in neatly aligned columns. This will improve readability
                and reduce the likelihood of placing carry digits in the wrong
                place.
            </p>
        </InfoBox>

        <MinorHeading>Subtraction</MinorHeading>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
