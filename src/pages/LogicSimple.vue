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
    prevHref: "/hex-arithmetic",
    prevLabel: "Hexadecimal Arithmetic",
    nextHref: "/",
    nextLabel: "Next Topic",
};

const notTruthTable = [
    {
        A: 0,
        Output: 1,
    },
    {
        A: 1,
        Output: 0,
    },
];

const andTruthTable = [
    {
        A: 0,
        B: 0,
        Output: 0,
    },
    {
        A: 1,
        B: 0,
        Output: 0,
    },
    {
        A: 0,
        B: 1,
        Output: 0,
    },
    {
        A: 1,
        B: 1,
        Output: 1,
    },
];

const orTruthTable = [
    {
        A: 0,
        B: 0,
        Output: 0,
    },
    {
        A: 1,
        B: 0,
        Output: 1,
    },
    {
        A: 0,
        B: 1,
        Output: 1,
    },
    {
        A: 1,
        B: 1,
        Output: 1,
    },
];

const xorTruthTable = [
    {
        A: 0,
        B: 0,
        Output: 0,
    },
    {
        A: 1,
        B: 0,
        Output: 1,
    },
    {
        A: 0,
        B: 1,
        Output: 1,
    },
    {
        A: 1,
        B: 1,
        Output: 0,
    },
];

const notSlidePaths = [
    {
        path: "/public/images/logic/not-1.png",
        description:
            "Write the binary number down and start inverting each bit.",
    },
    {
        path: "/public/images/logic/not-2.png",
        description: "0 = 1.",
    },
    {
        path: "/public/images/logic/not-3.png",
        description: "1 = 0.",
    },
    {
        path: "/public/images/logic/not-4.png",
        description: "Continue until all bits have been inverted.",
    },
];

const andSlidePaths = [
    {
        path: "/public/images/logic/and-1.png",
        description:
            "Write each binary number down so the first is above the second.",
    },
    {
        path: "/public/images/logic/and-2.png",
        description: "0 AND 0 = 0.",
    },
    {
        path: "/public/images/logic/and-3.png",
        description: "1 AND 0 = 0.",
    },
    {
        path: "/public/images/logic/and-4.png",
        description: "1 AND 1 = 1.",
    },
    {
        path: "/public/images/logic/and-5.png",
        description: "Continue until you have applied an AND to each bit.",
    },
];

const orSlidePaths = [
    {
        path: "/public/images/logic/or-1.png",
        description:
            "Write each binary number down so the first is above the second.",
    },
    {
        path: "/public/images/logic/or-2.png",
        description: "0 OR 0 = 0.",
    },
    {
        path: "/public/images/logic/or-3.png",
        description: "1 OR 0 = 1.",
    },
    {
        path: "/public/images/logic/or-4.png",
        description: "1 OR 1 = 1.",
    },
    {
        path: "/public/images/logic/or-5.png",
        description: "Continue until you have applied an OR to each bit.",
    },
];

const xorSlidePaths = [
    {
        path: "/public/images/logic/xor-1.png",
        description:
            "Write each binary number down so the first is above the second.",
    },
    {
        path: "/public/images/logic/xor-2.png",
        description: "0 XOR 0 = 0.",
    },
    {
        path: "/public/images/logic/xor-3.png",
        description: "1 XOR 0 = 1.",
    },
    {
        path: "/public/images/logic/xor-4.png",
        description: "1 XOR 1 = 0.",
    },
    {
        path: "/public/images/logic/xor-5.png",
        description: "Continue until you have applied an XOR to each bit.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Logical Operations</MainHeading>

        <p>
            This is a part of Boolean logic, a branch of mathematics that is
            concerned with true and false values. It is particularly suited to
            computers due to how they represent state with circuits that are
            either on or off.
        </p>

        <p>
            Logic gates are the basic building blocks of any computer system
            which turn on and off according to their inputs and the type of gate
            it is. They can be combined in a variety of ways to form more
            complex circuits that can perform functions such as adding binary
            numbers and storing state. As shown below, each gate is represented
            with a standard shape to make circuit diagrams easier to understand.
        </p>

        <p>
            The same idea can be applied to the transformation of binary
            numbers, a useful technique to be aware of when engaged with
            low-level programming tasks.
        </p>

        <InfoBox>
            <p class="!my-0">
                Use the truth tables below to understand how to apply each
                logical operation to binary numbers. Note that AND, OR and XOR
                gates can have more than 2 inputs.
            </p>
        </InfoBox>

        <MinorHeading>NOT</MinorHeading>

        <div class="row">
            <div class="content-box">
                <p>The input is inverted, so 0 becomes 1 and vice-versa.</p>

                <img
                    src="/public/images/logic/NOT gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <Table :data="notTruthTable" monospaced fixed />
            </div>
        </div>

        <p>
            Here is a demonstration on how to carry out a NOT operation on
            <b class="monospaced">01101010</b><sub>2</sub> to get
            <b class="monospaced"><u>10010101</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="notSlidePaths" />

        <MinorHeading>AND</MinorHeading>

        <div class="row">
            <div class="content-box">
                <p>All inputs must be 1 for the output to be 1.</p>

                <img
                    src="/public/images/logic/AND gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <Table :data="andTruthTable" monospaced fixed />
            </div>
        </div>

        <p>
            Here is a demonstration on how to carry out an AND operation on
            <b class="monospaced">10011110</b><sub>2</sub> and
            <b class="monospaced">10101100</b><sub>2</sub> to get
            <b class="monospaced"><u>10001100</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="andSlidePaths" />

        <MinorHeading>OR</MinorHeading>

        <div class="row">
            <div class="content-box">
                <p>One input must be 1 for the output to be 1.</p>

                <img
                    src="/public/images/logic/OR gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <Table :data="orTruthTable" monospaced fixed />
            </div>
        </div>

        <p>
            Here is a demonstration on how to carry out an OR operation on
            <b class="monospaced">10011110</b><sub>2</sub> and
            <b class="monospaced">10101100</b><sub>2</sub> to get
            <b class="monospaced"><u>10111110</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="orSlidePaths" />

        <MinorHeading>XOR</MinorHeading>

        <div class="row">
            <div class="content-box">
                <p>
                    The inputs must be a mix of 1s and 0s for the output to be
                    1.
                </p>

                <img
                    src="/public/images/logic/XOR gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <Table :data="xorTruthTable" monospaced fixed />
            </div>
        </div>

        <p>
            Here is a demonstration on how to carry out an XOR operation on
            <b class="monospaced">10011110</b><sub>2</sub> and
            <b class="monospaced">10101100</b><sub>2</sub> to get
            <b class="monospaced"><u>00110010</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="xorSlidePaths" />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped>
.logic-gate {
    border-radius: var(--radius-md);
    margin: 2rem auto;
    width: 50%;
}

@media (min-width: 900px) {
    .row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .content-box {
        flex: 3;
    }

    .table-reducer {
        flex: 2;
    }

    .table-reducer > h4 {
        margin: 0.5rem auto 1rem;
    }

    .table-reducer > div {
        margin: 1rem auto;
    }

    .logic-gate {
        margin: 2rem 0;
    }
}
</style>
