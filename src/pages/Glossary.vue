<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/logical-operations",
    prevLabel: "Logical Operations",
    nextHref: "/links",
    nextLabel: "Links",
};

const hardwareGlossary = [
    {
        Term: "CPU",
        Description:
            "Central Processing Unit. Processes instructions stored in system memory.",
    },
    {
        Term: "GPU",
        Description: "Graphics Processing Unit. May be discrete or integrated.",
    },
    {
        Term: "HDD",
        Description: "Hard Disk Drive.",
    },
    {
        Term: "SSD",
        Description: "Solid State Drive.",
    },
    {
        Term: "NVMe",
        Description: "Non-Volatile Memory Express.",
    },
    {
        Term: "PCI",
        Description: "Peripheral Component Interconnect.",
    },
    {
        Term: "AGP",
        Description:
            "Accelerated Graphics Port. PCI successor for graphics cards.",
    },
    {
        Term: "PCIe",
        Description:
            "Peripheral Component Interconnect Express. AGP successor.",
    },
    {
        Term: "IDE",
        Description: "Integrated Drive Electronics.",
    },
    {
        Term: "SATA",
        Description: "Serial Advanced Technology Attachment. IDE successor.",
    },
    {
        Term: "USB",
        Description: "Universal Serial Bus.",
    },
    {
        Term: "CRT",
        Description: "Cathode Ray Tube.",
    },
    {
        Term: "LCD",
        Description: "Liquid Crystal Display.",
    },
    {
        Term: "RAM",
        Description: "Random Access Memory. Temporary data storage.",
    },
    {
        Term: "SRAM",
        Description: "Static RAM. Used for CPU cache.",
    },
    {
        Term: "DRAM",
        Description: "Dynamic RAM. Main system memory.",
    },
    {
        Term: "ROM",
        Description:
            "Read-only Memory. Microchips that are programmed in the factory and cannot be changed afterwards.",
    },
    {
        Term: "PROM",
        Description:
            "Programmable ROM. Re-programmable only once after leaving the factory.",
    },
    {
        Term: "EPROM",
        Description:
            "Erasable PROM. Data can be erased by shining UV light through a window for re-programming.",
    },
    {
        Term: "EEPROM",
        Description:
            "Electronically Erasable ROM. Data can be erased electronically for re-programming.",
    },
];

const softwareGlossary = [
    {
        Term: "",
        Description: "",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Glossary</MainHeading>

        <MinorHeading>Hardware</MinorHeading>

        <Table :data="hardwareGlossary" leftAligned />

        <MinorHeading>Software</MinorHeading>

        <Table :data="softwareGlossary" leftAligned />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
