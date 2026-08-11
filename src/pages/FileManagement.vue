<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/os-layers",
    prevLabel: "Operating System Layers",
    nextHref: "/bin-dec",
    nextLabel: "Binary - Decimal Conversion",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>File Management</MainHeading>

        <p>
            Everything that concerns how a system manages and organises files
            and folders on storage devices, including metadata about each file.
        </p>

        <MinorHeading>File Systems</MinorHeading>

        <h4 class="h3">FAT</h4>
        <h4 class="h3">NTFS</h4>
        <h4 class="h3">EXT</h4>
        <h4 class="h3">Network File System</h4>
        <h4 class="h3">Logical Drives</h4>

        <MinorHeading>File Hierarchy</MinorHeading>

        <h4 class="h3">File Locking</h4>
        <h4 class="h3">File Extensions</h4>
        <h4 class="h3">File Attributes</h4>
        <h4 class="h3">File Sizes</h4>

        <MinorHeading>ASCII</MinorHeading>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
