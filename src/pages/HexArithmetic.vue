<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import InfoBox from "../components/common/InfoBox.vue";
import SlideGallery from "../components/common/SlideGallery.vue";

const prevNextNavData = {
    prevHref: "/binary-arithmetic",
    prevLabel: "Binary Arithmetic",
    nextHref: "/logical-operations",
    nextLabel: "Logical Operations",
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

        <p>
            Adding and subtracting hexadecimal numbers isn't too difficult if
            you're familiar with doing such operations on decimal numbers, it
            just takes some practice to get used to.
        </p>

        <MinorHeading id="addition">Addition</MinorHeading>

        <p>
            Hexadecimal addition is no different to long addition of decimal
            numbers. Each number involved in the calculation is placed on top of
            each other with addition starting from the right. Any numbers that
            are too large for one column are carried over to the next.
        </p>

        <p>
            Here is a demonstration on how to carry out
            <b>5BC3</b><sub>16</sub> + <b>28CA</b><sub>16</sub> to get
            <b><u>848D</u></b
            ><sub>16</sub>.
        </p>

        <SlideGallery :data="hexAdditionSlidePaths" />

        <MinorHeading id="subtraction">Subtraction</MinorHeading>

        <p>
            Hexadecimal subtraction is much like long subtraction of decimal
            numbers. Each number involved in the calculation is placed on top of
            each other with subtraction starting from the right. Numbers are
            borrowed from the left to prevent subtractions becoming negative.
        </p>

        <p>
            Here is a demonstration on how to carry out
            <b>80B3</b><sub>16</sub> - <b>38E5</b><sub>16</sub> to get
            <b><u>47CE</u></b
            ><sub>16</sub>.
        </p>

        <SlideGallery :data="hexSubtractionSlidePaths" />

        <InfoBox warning>
            <p class="!my-0">
                Remember that all numbers in the above slides are hexadecimal.
                Be careful that you don't confuse numbers in calculations like
                13<sub>16</sub> - 5<sub>16</sub> for decimal values.
            </p>
        </InfoBox>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
