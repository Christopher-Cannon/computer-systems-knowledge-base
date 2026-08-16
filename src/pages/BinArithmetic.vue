<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";
import InfoBox from "../components/common/InfoBox.vue";
import SlideGallery from "../components/common/SlideGallery.vue";

const prevNextNavData = {
    prevHref: "/base-conversion",
    prevLabel: "Base Conversion",
    nextHref: "/hex-arithmetic",
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

const binSubtractionSlidePaths = [
    {
        path: "/public/images/binary subtraction/binary-add-2c-0a.png",
        description: "Label each number as A and B respectively.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-0b.png",
        description: "Invert the second number and add 1 to it.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-1.png",
        description:
            "Write each binary number down with one on top of the other.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-2.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-3.png",
        description: "1 + 0 = 1.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-4.png",
        description: "1 + 0 = 1.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-5.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-6.png",
        description: "1 + 0 = 1.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-7.png",
        description: "0 + 0 = 0.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-8.png",
        description: "1 + 0 = 0.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-9.png",
        description: "1 + 1 = 0, carry 1 to the next column.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-10.png",
        description: "Leftover carry digits go in their own column.",
    },
    {
        path: "/public/images/binary subtraction/binary-add-2c-11.png",
        description:
            "The result of a subtraction should be the same length as its input terms, so remove the 8th bit.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Binary Arithmetic</MainHeading>

        <p>
            Adding and subtracting binary numbers can feel a little alien at
            first due to all the 1s and 0s, but it isn't that different to
            decimal arithmetic. Interestingly, if you know how to add binary
            numbers together, then you almost know enough to subtract them too
            using a particular method.
        </p>

        <MinorHeading id="addition">Addition</MinorHeading>

        <p>
            Binary addition is just like long addition with decimal numbers. The
            rules of binary addition are as follows:
        </p>

        <Table :data="binAdditionRulesData" />

        <p>
            Here is a demonstration on how to carry out
            <b class="monospaced">11011110</b><sub>2</sub> +
            <b class="monospaced">00101100</b><sub>2</sub> to get
            <b class="monospaced"><u>100001010</u></b
            ><sub>2</sub>.
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

        <MinorHeading id="subtraction">Subtraction</MinorHeading>

        <p>
            Subtracting binary numbers can be done using long subtraction as
            with decimal numbers, but is arguably easier if you use the
            <a
                href="https://www.geeksforgeeks.org/digital-logic/twos-complement/"
                class="link"
                target="_blank"
                >two's complement</a
            >
            method, which is a way of representing signed integers in computer
            systems. This involves inverting the second number and performing
            long addition as before. Because this is still technically a
            subtraction operation, any overflow should be omitted from the
            solution.
        </p>

        <p>
            If the left-most bit of the solution (AKA most significant bit or
            MSB) is 0, the result is a positive number and you leave it as is.
            If it's 1, the result is a negative number, meaning you have to
            invert the result and add 1 to it again.
        </p>

        <p>
            Here is a demonstration on how to carry out
            <b class="monospaced">10001001</b><sub>2</sub> -
            <b class="monospaced">00110011</b><sub>2</sub> to get
            <b class="monospaced"><u>01010110</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="binSubtractionSlidePaths" />

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
