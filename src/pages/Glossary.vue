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
        Term: "APU",
        "Stands For": "Accelerated Processing Unit",
        Description:
            "Name given to AMD CPUs that feature integrated graphics chips.",
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
    {
        Term: "TFT",
        "Stands For": "Thin Film Transistor",
        Description: "",
    },
    {
        Term: "IPS",
        "Stands For": "In-Plane Switching",
        Description: "",
    },
    {
        Term: "OLED",
        "Stands For": "Organic Light Emitting Diode",
        Description: "",
    },
];

const cpuGlossary = [
    {
        Term: "CU",
        "Stands For": "Control Unit",
        Description: "Coordinates the activites of the CPU and system.",
    },
    {
        Term: "ALU",
        "Stands For": "Arithmetic and Logic Unit",
        Description: "Carries out binary arithmetic and logical comparisons.",
    },
    {
        Term: "PC",
        "Stands For": "Program Counter",
        Description:
            "Points to the memory address of the next instruction in memory to be copied to the MAR. Increments to the next address after copying.",
    },
    {
        Term: "IR",
        "Stands For": "Instruction Register",
        Description:
            "Holds the current instruction to be decoded and executed.",
    },
    {
        Term: "SP",
        "Stands For": "Stack Pointer",
        Description:
            "Points to the top of the stack in memory.",
    },
    {
        Term: "MAR",
        "Stands For": "Memory Address Register",
        Description:
            "Holds the address of the next piece of data in memory to be placed in the MDR.",
    },
    {
        Term: "MDR",
        "Stands For": "Memory Data Register",
        Description: "Holds data to be retrieved from or sent to memory.",
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
        Term: "SDRAM",
        "Stands For": "Synchronous Dynamic RAM",
        Description: "RAM that syncs transfers with the system clock.",
    },
    {
        Term: "DDR",
        "Stands For": "Double Data Rate",
        Description:
            "Can transfer data on the system clock's rising and falling.",
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

const fileFormatsGlossary = [
    {
        Term: "exe",
        "Stands For": "Executable File",
        Description: "",
    },
    {
        Term: "jpg",
        "Stands For": "Joint Photographic Experts Group",
        Description: "Lossy image format.",
    },
    {
        Term: "png",
        "Stands For": "Portable Network Graphic",
        Description: "Lossless image format.",
    },
    {
        Term: "gif",
        "Stands For": "Graphics Interchange Format",
        Description:
            "Lossless image format with limited colours. Supports animation.",
    },
    {
        Term: "bmp",
        "Stands For": "Bitmap",
        Description: "",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Glossary</MainHeading>

        <p>
            There are many acronyms used in computer systems theory and it can
            be hard to remember them all. Those that you may commonly encounter
            have been recorded below for your convenience.
        </p>

        <MinorHeading id="hardware">Hardware</MinorHeading>

        <Table :data="hardwareGlossary" align="left" />

        <MinorHeading id="cpu">CPU</MinorHeading>

        <Table :data="cpuGlossary" align="left" />

        <MinorHeading id="memory">Memory</MinorHeading>

        <Table :data="memoryGlossary" align="left" />

        <MinorHeading id="file-formats">File Formats</MinorHeading>

        <Table :data="fileFormatsGlossary" align="left" />

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
