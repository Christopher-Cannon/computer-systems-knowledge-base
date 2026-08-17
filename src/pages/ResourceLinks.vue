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

        <ul class="list">
            <li>
                <a href="#" class="link">Resource Link</a> - A description about
                the link, such as what information you can find through it.
            </li>
        </ul>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
