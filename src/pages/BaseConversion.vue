<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";
import InfoBox from "../components/common/InfoBox.vue";

const prevNextNavData = {
    prevHref: "/number-bases",
    prevLabel: "Number Bases",
    nextHref: "/binary-arithmetic",
    nextLabel: "Binary Arithmetic",
};

const decToBinData = [
    {
        Digit: 0,
        Division: "119 / 2",
        Result: "59 r1",
    },
    {
        Digit: 1,
        Division: "59 / 2",
        Result: "29 r1",
    },
    {
        Digit: 2,
        Division: "29 / 2",
        Result: " 14 r1",
    },
    {
        Digit: 3,
        Division: "14 / 2",
        Result: "7 r0",
    },
    {
        Digit: 4,
        Division: "7 / 2",
        Result: "3 r1",
    },
    {
        Digit: 5,
        Division: "3 / 2",
        Result: " 1 r1",
    },
    {
        Digit: 6,
        Division: "1 / 2",
        Result: " 0 r1",
    },
];

const binToDecAnnotations = ["Bit", "Power", "Value", "Binary"];

const binToDecData = [
    {
        _7: "2^7",
        _6: "2^6",
        _5: "2^5",
        _4: "2^4",
        _3: "2^3",
        _2: "2^2",
        _1: "2^1",
        _0: "2^0",
    },
    {
        _7: "128",
        _6: "64",
        _5: "32",
        _4: "16",
        _3: "8",
        _2: "4",
        _1: "2",
        _0: "1",
    },
    {
        _7: "1",
        _6: "0",
        _5: "0",
        _4: "1",
        _3: "1",
        _2: "0",
        _1: "1",
        _0: "1",
    },
];

const binToHexAnnotations = ["Binary", "Decimal", "Hex"];

const binToHexData = [
    {
        _1011: "11",
        _0110: "6",
        _1100: "12",
    },
    {
        _1011: "B",
        _0110: "6",
        _1100: "C",
    },
];

const hexToBinAnnotations = ["Hex", "Decimal", "Binary"];

const hexToBinData = [
    {
        _D: "13",
        _4: "4",
        _A: "10",
    },
    {
        _D: "1101",
        _4: "0100",
        _A: "1010",
    },
];

const decToHexData = [
    {
        Digit: 0,
        Division: "499 / 16",
        Result: "31 r3",
    },
    {
        Digit: 1,
        Division: "31 / 16",
        Result: "1 r15",
    },
    {
        Digit: 2,
        Division: "1 / 16",
        Result: " 0 r1",
    },
];

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

        <InfoBox label="Number Base Indicators">
            <p class="!mt-0">
                The little number placed to the side of a number indicates its
                number base. 285<sub>10</sub> is base 10 while
                <span class="monospaced">0110</span><sub>2</sub>
                is base 2.
            </p>

            <p class="!mb-0">
                It's a good idea to include if its omission might cause
                confusion, such as between decimal 412<sub>10</sub> and
                hexadecimal 412<sub>16</sub> which differ greatly in actual
                value.
            </p>
        </InfoBox>

        <MinorHeading id="decimal-binary-conversion"
            >Decimal Binary Conversion</MinorHeading
        >

        <h4 class="h3">Decimal to Binary</h4>

        <p>
            Repeatedly divide the number by 2, recording the remainder until the
            number reaches 0. Read the result from bottom to top before joining
            them together.
        </p>

        <p>
            This example demonstrates how to convert <b>119<sub>10</sub></b> to
            binary.
        </p>

        <Table :data="decToBinData" monospaced fixed />

        <p>
            Add extra 0s to the left side to get an 8-bit (or 16-bit, 32-bit,
            etc) binary number.
        </p>

        <p class="h5 text-center">
            119<sub>10</sub> =
            <b><u class="monospaced">01110111</u><sub>2</sub></b>
        </p>

        <h4 class="h3">Binary to Decimal</h4>

        <p>
            Draw a table with the values of 2 raised to the power of 0 onwards,
            starting from the right side, for as many digits there are. Write
            the binary digits in each column and multiply each by that column's
            value, adding up the results to get the answer.
        </p>

        <p>
            This example demonstrates how to convert
            <b class="monospaced">10011011<sub>2</sub></b> to decimal.
        </p>

        <Table
            :data="binToDecData"
            :annotations="binToDecAnnotations"
            monospaced
            fixed
        />

        <p class="h5 text-center">
            128 * 1 + 64 * 0 + 32 * 0 + 16 * 1 + 8 * 1 + 4 * 0 + 2 * 1 + 1 * 1
        </p>

        <p class="h5 text-center">
            128 + 16 + 8 + 2 + 1 = <b><u>155</u><sub>10</sub></b>
        </p>

        <MinorHeading id="hexadecimal-binary-conversion"
            >Hexadecimal Binary Conversion</MinorHeading
        >

        <h4 class="h3">Hexadecimal to Binary</h4>

        <p>
            Split the hexadecimal number into individual digits and convert to
            their binary equivalent, optionally converting to decimal first.
        </p>

        <p>
            This example demonstrates how to convert
            <b>D4A<sub>16</sub></b> to binary.
        </p>

        <Table
            :data="hexToBinData"
            :annotations="hexToBinAnnotations"
            monospaced
            fixed
        />

        <p class="h5 text-center">
            D4A<sub>16</sub> =
            <b><u class="monospaced">110101001010</u><sub>2</sub></b>
        </p>

        <h4 class="h3">Binary to Hexadecimal</h4>

        <p>
            Split the binary number into groups of four and convert each to
            their hexadecimal equivalent, optionally converting to decimal
            first.
        </p>

        <p>
            This example demonstrates how to convert
            <b class="monospaced">101101101100<sub>2</sub></b> to hexadecimal.
        </p>

        <Table
            :data="binToHexData"
            :annotations="binToHexAnnotations"
            monospaced
            fixed
        />

        <p class="h5 text-center">
            <span class="monospaced">101101101100<sub>2</sub></span> =
            <b><u>B6C</u><sub>16</sub></b>
        </p>

        <MinorHeading id="decimal-hexadecimal-conversion"
            >Decimal Hexadecimal Conversion</MinorHeading
        >

        <h4 class="h3">Decimal to Hexadecimal</h4>

        <p>
            Repeatedly divide the number by 16, recording the remainder until
            the number reaches 0. Read the result from bottom to top, converting
            each number to its hexadecimal equivalent, before joining them
            together.
        </p>

        <p>
            This example demonstrates how to convert
            <b>499<sub>10</sub></b> to hexadecimal.
        </p>

        <Table :data="decToHexData" monospaced fixed />

        <p class="h5 text-center">
            1, 15, 3 = <b><u>1F3</u><sub>16</sub></b>
        </p>

        <h4 class="h3">Hexadecimal to Decimal</h4>

        <p>
            Draw a table with the values of 16 raised to the power of 0 onwards,
            starting from the right side, for as many digits there are. Write
            the hex digits in each column and convert them to decimal.
        </p>

        <p>
            This example demonstrates how to convert
            <b>D2E9<sub>16</sub></b> to decimal.
        </p>

        <Table
            :data="hexToDecData"
            :annotations="hexToDecAnnotations"
            monospaced
            fixed
        />

        <p>
            Finally, multiply each decimal number with its associated column
            value.
        </p>

        <p class="h5 text-center">13 * 4096 + 2 * 256 + 14 * 16 + 9 * 1</p>

        <p class="h5 text-center">
            53248 + 512 + 224 + 9 = <b><u>53993</u><sub>10</sub></b>
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
