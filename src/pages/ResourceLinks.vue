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
