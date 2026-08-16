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
        "Stands For": "Central Processing Unit",
        Description: "Processes instructions stored in system memory.",
    },
    {
        Term: "GPU",
        "Stands For": "Graphics Processing Unit",
        Description: "May be discrete or integrated.",
    },
    {
        Term: "HDD",
        "Stands For": "Hard Disk Drive",
        Description: "",
    },
    {
        Term: "SSD",
        "Stands For": "Solid State Drive",
        Description: "",
    },
    {
        Term: "NVMe",
        "Stands For": "Non-Volatile Memory Express",
        Description: "",
    },
    {
        Term: "PCI",
        "Stands For": "Peripheral Component Interconnect",
        Description: "",
    },
    {
        Term: "AGP",
        "Stands For": "Accelerated Graphics Port",
        Description: "PCI successor for graphics cards.",
    },
    {
        Term: "PCIe",
        "Stands For": "Peripheral Component Interconnect Express",
        Description: "AGP successor.",
    },
    {
        Term: "IDE",
        "Stands For": "Integrated Drive Electronics",
        Description: "",
    },
    {
        Term: "SATA",
        "Stands For": "Serial Advanced Technology Attachment",
        Description: "IDE successor.",
    },
    {
        Term: "USB",
        "Stands For": "Universal Serial Bus",
        Description: "",
    },
    {
        Term: "CRT",
        "Stands For": "Cathode Ray Tube",
        Description: "",
    },
    {
        Term: "LCD",
        "Stands For": "Liquid Crystal Display",
        Description: "",
    },
];

const cpuGlossary = [
    {
        Term: "CU",
        "Stands For": "Control Unit",
        Description: "",
    },
    {
        Term: "ALU",
        "Stands For": "Arithmetic and Logic Unit",
        Description: "",
    },
    {
        Term: "PC",
        "Stands For": "Program Counter",
        Description: "",
    },
    {
        Term: "IR",
        "Stands For": "Instruction Register",
        Description: "",
    },
    {
        Term: "MAR",
        "Stands For": "Memory Address Register",
        Description: "",
    },
    {
        Term: "MDR",
        "Stands For": "Memory Data Register",
        Description: "",
    },
];

const memoryGlossary = [
    {
        Term: "RAM",
        "Stands For": "Random Access Memory",
        Description: "Temporary data storage.",
    },
    {
        Term: "SRAM",
        "Stands For": "Static RAM",
        Description: "Used for CPU cache.",
    },
    {
        Term: "DRAM",
        "Stands For": "Dynamic RAM",
        Description: "Main system memory.",
    },
    {
        Term: "ROM",
        "Stands For": "Read-only Memory",
        Description:
            "Microchips that are programmed in the factory and cannot be changed afterwards.",
    },
    {
        Term: "PROM",
        "Stands For": "Programmable ROM",
        Description: "Re-programmable only once after leaving the factory.",
    },
    {
        Term: "EPROM",
        "Stands For": "Erasable PROM",
        Description:
            "Data can be erased by shining UV light through a window for re-programming.",
    },
    {
        Term: "EEPROM",
        "Stands For": "Electronically Erasable ROM",
        Description: "Data can be erased electronically for re-programming.",
    },
];

const softwareGlossary = [
    {
        Term: "OS",
        "Stands For": "Operating System",
        Description: "",
    },
    {
        Term: "",
        "Stands For": "",
        Description: "",
    },
    {
        Term: "",
        "Stands For": "",
        Description: "",
    },
    {
        Term: "",
        "Stands For": "",
        Description: "",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Glossary</MainHeading>

        <MinorHeading>Hardware</MinorHeading>

        <Table :data="hardwareGlossary" align="left" />

        <MinorHeading>CPU</MinorHeading>

        <Table :data="cpuGlossary" align="left" />

        <MinorHeading>Memory</MinorHeading>

        <Table :data="memoryGlossary" align="left" />

        <MinorHeading>Software</MinorHeading>

        <Table :data="softwareGlossary" align="left" />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
