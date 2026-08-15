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

const hexAdditionSlidePaths = [
    {
        path: "/public/images/hex addition/hex-add-1.png",
        description: "Write each hex number down with one on top of the other.",
    },
    {
        path: "/public/images/hex addition/hex-add-2.png",
        description: "3 + A = D.",
    },
    {
        path: "/public/images/hex addition/hex-add-3.png",
        description:
            "C + C = 18. Place 8 below and carry the 1 to the next column.",
    },
    {
        path: "/public/images/hex addition/hex-add-4.png",
        description:
            "B + 8 + 1 = 14. Place 4 below and carry the 1 to the next column.",
    },
    {
        path: "/public/images/hex addition/hex-add-5.png",
        description: "5 + 2 + 1 = 8.",
    },
];

const hexSubtractionSlidePaths = [
    {
        path: "/public/images/hex subtraction/hex-sub-1.png",
        description: "Write each hex number down with one on top of the other.",
    },
    {
        path: "/public/images/hex subtraction/hex-sub-2.png",
        description:
            "3 - 5 results in a negative number. Borrow 1 from the left, so B becomes A to get 13 - 5 which equals E.",
    },
    {
        path: "/public/images/hex subtraction/hex-sub-3.png",
        description:
            "A - E results in a negative number too, but we can't borrow from the 0 to the left. Instead, borrow from the 8 and reduce it and any number between by 1.",
    },
    {
        path: "/public/images/hex subtraction/hex-sub-4.png",
        description: "1A - E = C.",
    },
    {
        path: "/public/images/hex subtraction/hex-sub-5.png",
        description: "F - 8 = 7.",
    },
    {
        path: "/public/images/hex subtraction/hex-sub-6.png",
        description: "7 - 3 = 4.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Hexadecimal Arithmetic</MainHeading>

        <MinorHeading>Addition</MinorHeading>

        <SlideGallery :data="hexAdditionSlidePaths" />

        <MinorHeading>Subtraction</MinorHeading>

        <SlideGallery :data="hexSubtractionSlidePaths" />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
