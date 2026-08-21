<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";
import InfoBox from "../components/common/InfoBox.vue";
import SlideGallery from "../components/common/SlideGallery.vue";

const prevNextNavData = {
    prevHref: "/hex-arithmetic",
    prevLabel: "Hexadecimal Arithmetic",
    nextHref: "/glossary",
    nextLabel: "Glossary",
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
        description: "Continue until you have applied an AND to each column.",
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
        description: "Continue until you have applied an OR to each column.",
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
        description: "Continue until you have applied an XOR to each column.",
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

        <InfoBox label="Truth Tables">
            <p class="!my-0">
                These detail what the outputs are based on input to a logical
                operator. Truth tables have been provided below to help you
                understand how to apply each logical operator to binary numbers.
                Note that AND, OR and XOR gates can have more than 2 inputs.
            </p>
        </InfoBox>

        <MinorHeading id="not">NOT</MinorHeading>

        <p>The input is inverted, so 0 becomes 1 and vice-versa.</p>

        <div class="row">
            <div class="content-box">
                <h4 class="h3">Logic Gate</h4>

                <img
                    src="/public/images/logic/NOT gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <h4 class="h3">Truth Table</h4>

                <Table :data="notTruthTable" monospaced fixed />
            </div>
        </div>

        <h4 class="h3">Binary NOT Operation</h4>

        <p>
            Here is a demonstration on how to carry out a NOT operation on
            <b class="monospaced">01101010</b><sub>2</sub> to get
            <b class="monospaced"><u>10010101</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="notSlidePaths" />

        <MinorHeading id="and">AND</MinorHeading>
        <p>All inputs must be 1 for the output to be 1.</p>

        <div class="row">
            <div class="content-box">
                <h4 class="h3">Logic Gate</h4>

                <img
                    src="/public/images/logic/AND gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <h4 class="h3">Truth Table</h4>

                <Table :data="andTruthTable" monospaced fixed />
            </div>
        </div>

        <h4 class="h3">Binary AND Operation</h4>

        <p>
            Here is a demonstration on how to carry out an AND operation on
            <b class="monospaced">10011110</b><sub>2</sub> and
            <b class="monospaced">10101100</b><sub>2</sub> to get
            <b class="monospaced"><u>10001100</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="andSlidePaths" />

        <MinorHeading id="or">OR</MinorHeading>

        <p>One input must be 1 for the output to be 1.</p>

        <div class="row">
            <div class="content-box">
                <h4 class="h3">Logic Gate</h4>

                <img
                    src="/public/images/logic/OR gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <h4 class="h3">Truth Table</h4>

                <Table :data="orTruthTable" monospaced fixed />
            </div>
        </div>

        <h4 class="h3">Binary OR Operation</h4>

        <p>
            Here is a demonstration on how to carry out an OR operation on
            <b class="monospaced">10011110</b><sub>2</sub> and
            <b class="monospaced">10101100</b><sub>2</sub> to get
            <b class="monospaced"><u>10111110</u></b
            ><sub>2</sub>.
        </p>

        <SlideGallery :data="orSlidePaths" />

        <MinorHeading id="xor">XOR</MinorHeading>

        <p>
            Short for "eXclusive OR", the inputs must be a mix of 1s and 0s for
            the output to be 1.
        </p>

        <div class="row">
            <div class="content-box">
                <h4 class="h3">Logic Gate</h4>

                <img
                    src="/public/images/logic/XOR gate.png"
                    alt=""
                    class="logic-gate"
                />
            </div>

            <div class="table-reducer">
                <h4 class="h3">Truth Table</h4>

                <Table :data="xorTruthTable" monospaced fixed />
            </div>
        </div>

        <h4 class="h3">Binary XOR Operation</h4>

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
    margin: 1.5rem auto 2rem;
    width: 75%;
}

.table-wrapper {
    margin-top: 1.5rem;
}

@media (min-width: 660px) {
    .logic-gate {
        width: 60%;
    }
}

@media (min-width: 900px) {
    .row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .content-box,
    .table-reducer {
        flex: 1;
    }

    .logic-gate {
        margin: 1.5rem 0 2rem;
    }
}
</style>
