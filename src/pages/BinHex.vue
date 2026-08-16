<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/file-management",
    prevLabel: "File Management",
    nextHref: "/base-conversion",
    nextLabel: "Base Conversion",
};

const baseComparisonData = [
    {
        Binary: "0",
        Octal: "0",
        Decimal: "0",
        Hexadecimal: "0",
    },
    {
        Binary: "1",
        Octal: "1",
        Decimal: "1",
        Hexadecimal: "1",
    },
    {
        Binary: "10",
        Octal: "2",
        Decimal: "2",
        Hexadecimal: "2",
    },
    {
        Binary: "11",
        Octal: "3",
        Decimal: "3",
        Hexadecimal: "3",
    },
    {
        Binary: "100",
        Octal: "4",
        Decimal: "4",
        Hexadecimal: "4",
    },
    {
        Binary: "101",
        Octal: "5",
        Decimal: "5",
        Hexadecimal: "5",
    },
    {
        Binary: "110",
        Octal: "6",
        Decimal: "6",
        Hexadecimal: "6",
    },
    {
        Binary: "111",
        Octal: "7",
        Decimal: "7",
        Hexadecimal: "7",
    },
    {
        Binary: "1000",
        Octal: "10",
        Decimal: "8",
        Hexadecimal: "8",
    },
    {
        Binary: "1001",
        Octal: "11",
        Decimal: "9",
        Hexadecimal: "9",
    },
    {
        Binary: "1010",
        Octal: "12",
        Decimal: "10",
        Hexadecimal: "A",
    },
    {
        Binary: "1011",
        Octal: "13",
        Decimal: "11",
        Hexadecimal: "B",
    },
    {
        Binary: "1100",
        Octal: "14",
        Decimal: "12",
        Hexadecimal: "C",
    },
    {
        Binary: "1101",
        Octal: "15",
        Decimal: "13",
        Hexadecimal: "D",
    },
    {
        Binary: "1110",
        Octal: "16",
        Decimal: "14",
        Hexadecimal: "E",
    },
    {
        Binary: "1111",
        Octal: "17",
        Decimal: "15",
        Hexadecimal: "F",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Number Bases</MainHeading>

        <p>
            Computers and computing professionals work with several number bases
            besides decimal (base 10) for numerous reasons, particularly binary
            and hexademical.
        </p>

        <p>
            It's worth understanding binary and hex as, aside from helping you
            decipher colour codes and network addresses, they can deepen your
            understanding of what the computer is doing and help you develop
            more optimised programs.
        </p>

        <MinorHeading id="binary">Binary</MinorHeading>

        <p>
            Also known as base 2, it's a number system that only uses two
            digits: 1 and 0. It's used since computers are built with electronic
            circuits that are either on or off.
        </p>

        <p>
            Binary is used for data, program instructions and memory addresses.
            Any program written in a human-readable language must be converted
            to this 'machine code' for the computer to actually run it.
        </p>

        <MinorHeading id="hexadecimal">Hexadecimal</MinorHeading>

        <p>
            Also known as base 16, this number system uses 16 digits with A - F
            representing the last 6 digits. It is a convenient binary shorthand
            since 1 hex digit can represent up to 4 binary bits which can make
            reading and writing binary data easier for humans.
        </p>

        <p>
            Hexadecimal is often used to represent memory addresses, machine
            code dumps, networking protocols and encryption keys. Colour can be
            modelled with three 2-digit hex numbers for use in CSS or other
            environments.
        </p>

        <MinorHeading id="comparing-number-bases"
            >Comparing Number Bases</MinorHeading
        >

        <p>
            This chart demonstrates how binary, octal, decimal and hexademical
            compare between their first 16 numbers. Octal has been added since
            it occasionally appears in computing contexts and makes the
            comparison a little clearer, though this guide won't be covering
            octal conversion or arithmetic.
        </p>

        <Table :data="baseComparisonData" monospaced fixed />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
