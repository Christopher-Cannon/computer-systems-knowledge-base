<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/memory",
    prevLabel: "Memory",
    nextHref: "/types-of-software",
    nextLabel: "Types of Software",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Storage</MainHeading>

        <p>
            Computers are constantly working with and modifying data, but not
            all data needs to be stored in working memory all the time. For data
            that is only occasionally used, there needs to be a place to safely
            store them long-term.
        </p>

        <MinorHeading>Mediums</MinorHeading>

        <h4 class="h3">Magnetic Tape</h4>

        <p>
            Stores data as magnetic patterns on a thin strip of plastic film
            coated with a magnetic material. Data is accessed sequentially which
            makes it slow, but it's cheap, long-lasting and high capacity,
            meaning it is ideal for large-scale backups and data archives.
        </p>

        <h4 class="h3">Floppy Disks</h4>

        <p>
            A medium composed of a thin magnetic disk inside a protective
            plastic casing of varying physical size. Data is written and read
            magnetically by a drive head.
        </p>

        <p>
            Obsolete since the turn of the millenium due to relative fragility
            and low storage capacities, usually from hundreds of
            <abbr title="KiloBytes">KB</abbr> to a few
            <abbr title="MegaBytes">MB</abbr>, though some reached into the
            hundreds of MB.
        </p>

        <p>
            It is notable as the basis for the save icon in many software
            applications even today due to how common it was in the 80s and 90s.
        </p>

        <h4 class="h3">Flash Drives</h4>

        <p>
            A type of portable storage based on
            <a href="/memory#eeprom" class="link">EEPROM</a> that allows one to
            easily transfer files from one computer to another. It is also a
            convenient alternative to compact disks for installing operating
            systems. Capacities range from the tens to hundreds of GB.
        </p>

        <p>
            Still widely used, though not as common due to the prevalence of
            cloud storage services.
        </p>

        <h4 class="h3">Compact Disks</h4>

        <p>
            Stores data as microscopic pits and islands in a reflective layer of
            the disk. A laser reads the differences as binary data. Some types
            are read-only once burned while others can be written to multiple
            times.
        </p>

        <p>
            Saw heavy use in the 90s and 00s for software, video games and
            music, but digital distribution services have made them a far less
            common sight these days.
        </p>

        <h4 class="h3">Hard Disk Drives</h4>

        <p>
            Stores data magnetically on rapidly spinning platters and is
            accessed by a moving read/write head. Cheaper than SSDs per terabyte
            and slower, so they are more commonly used for data backups these
            days.
        </p>

        <p>
            Their mechanical nature cause them to be sensitive to movement and
            shocks, especially in operation.
        </p>

        <h4 class="h3">Solid State Drives</h4>

        <p>
            Uses flash memory chips based on
            <a href="/memory#eeprom" class="link">EEPROM</a> that use
            controllers that optimise for speed and reliability, ensuring fast
            read and write speeds while preventing any one part of the drive
            from wearing out too quickly.
        </p>

        <p>
            Since they are faster and less fragile than hard drives, they tend
            to be used as the primary drive in modern PCs and laptops, often
            used for operating systems, professional software and demanding
            video games.
        </p>

        <h4 class="h3">NVMe Drives</h4>

        <p>
            Non-Volatile Memory Express is a protocol designed for flash storage
            using the <abbr title="">PCIe</abbr> bus instead of
            <abbr title="">SATA</abbr> for faster read/write speeds. The best
            option when performance is required. Its small size makes it
            well-suited for laptops.
        </p>

        <MinorHeading>Performance Factors</MinorHeading>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
