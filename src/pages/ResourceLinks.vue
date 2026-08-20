<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";

const prevNextNavData = {
    prevHref: "/glossary",
    prevLabel: "Glossary",
    nextHref: "/",
    nextLabel: "Home",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Resource Links</MainHeading>

        <MinorHeading id="cpu">CPU</MinorHeading>

        <ul class="list">
            <li>
                <a
                    href="https://en.wikipedia.org/wiki/Microprocessor_chronology"
                    class="link"
                    target="_blank"
                    >Microprocessor Chronology</a
                >
                - <b>wikipedia.org</b><br />
                A timeline of microprocessors from the 70s to modern day.
            </li>
            <li>
                <a
                    href="https://embeddedprep.com/popular-cpu-architectures-in-2025/"
                    class="link"
                    target="_blank"
                    >Popular CPU Architectures in 2026</a
                >
                - <b>embeddedprop.com</b><br />
                An overview of common CPU architectures and the ways they can differ.
            </li>
            <li>
                <a
                    href="https://codefinity.com/blog/Assembler-Programming"
                    class="link"
                    target="_blank"
                    >Assembler Programming</a
                >
                - <b>codefinity.com</b><br />An introduction to assembly language concepts.
            </li>
            <li>
                <a
                    href="https://www.baeldung.com/cs/fetch-execute-cycle"
                    class="link"
                    target="_blank"
                    >Introduction to the Fetch-Execute Cycle</a
                >
                - <b>baeldung.com</b><br />An alternative overview of the
                fetch-execute cycle.
            </li>
        </ul>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
