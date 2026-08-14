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

const binAdditionSlidePaths = [
    {
        path: "/public/images/binary addition/bin-addition-1.png",
        description:
            "Write each binary number down with one on top of the other.",
    },
    {
        path: "/public/images/binary addition/bin-addition-2.png",
        description: "0 + 0 = 0.",
    },
    {
        path: "/public/images/binary addition/bin-addition-3.png",
        description: "1 + 0 = 1.",
    },
    {
        path: "/public/images/binary addition/bin-addition-4.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-5.png",
        description: "1 + 1 + carry 1 = 1, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-6.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-7.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-8.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-9.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary addition/bin-addition-10.png",
        description: "Leftover carry digits go in their own column.",
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

        <h4 class="h3">Example</h4>

        <p>
            This example will demonstrate how to add
            <span class="monospaced">11011110</span> and
            <span class="monospaced">00101100</span> together.
        </p>

        <SlideGallery :data="binAdditionSlidePaths" />

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

<style scoped>
.slide-gallery {
    margin: 2rem auto;
}

.slide {
    border-radius: var(--radius-md);
}

.button-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

button {
    background-color: var(--primary);
    border-radius: var(--radius-sm);
    color: var(--white);
    padding: 0.5rem 1rem;
    transition: background-color 0.1s ease-in-out;
}

.disabled {
    background-color: var(--mid-grey);
}

button:not(.disabled):hover {
    background-color: var(--primary-darker);
}

@media (min-width: 1024px) {
    .slide-gallery {
        max-width: 1024px;
    }
}
</style>
