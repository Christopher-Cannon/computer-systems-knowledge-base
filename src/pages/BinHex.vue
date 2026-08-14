<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/file-management",
    prevLabel: "File Management",
    nextHref: "/base-conversion",
    nextLabel: "Base Conversion",
};

const baseComparisonData = [
    {
        Decimal: "0",
        Binary: "0000",
        Hexadecimal: "0",
    },
    {
        Decimal: "1",
        Binary: "0001",
        Hexadecimal: "1",
    },
    {
        Decimal: "2",
        Binary: "0010",
        Hexadecimal: "2",
    },
    {
        Decimal: "3",
        Binary: "0011",
        Hexadecimal: "3",
    },
    {
        Decimal: "4",
        Binary: "0100",
        Hexadecimal: "4",
    },
    {
        Decimal: "5",
        Binary: "0101",
        Hexadecimal: "5",
    },
    {
        Decimal: "6",
        Binary: "0110",
        Hexadecimal: "6",
    },
    {
        Decimal: "7",
        Binary: "0111",
        Hexadecimal: "7",
    },
    {
        Decimal: "8",
        Binary: "1000",
        Hexadecimal: "8",
    },
    {
        Decimal: "9",
        Binary: "1001",
        Hexadecimal: "9",
    },
    {
        Decimal: "10",
        Binary: "1010",
        Hexadecimal: "A",
    },
    {
        Decimal: "11",
        Binary: "1011",
        Hexadecimal: "B",
    },
    {
        Decimal: "12",
        Binary: "1100",
        Hexadecimal: "C",
    },
    {
        Decimal: "13",
        Binary: "1101",
        Hexadecimal: "D",
    },
    {
        Decimal: "14",
        Binary: "1110",
        Hexadecimal: "E",
    },
    {
        Decimal: "15",
        Binary: "1111",
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

        <MinorHeading>Binary</MinorHeading>

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

        <MinorHeading>Hexadecimal</MinorHeading>

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

        <MinorHeading>Comparing Number Bases</MinorHeading>

        <Table :data="baseComparisonData" monospaced />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
