<script setup>
import ImageFigure from "../components/common/ImageFigure.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";

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
            store it long-term.
        </p>

        <MinorHeading id="mediums">Mediums</MinorHeading>

        <h4 class="h3">Magnetic Tape</h4>

        <SideImage
            src="/public/images/storage/magnetic tape.avif"
            alt="A reel of magnetic tape."
        >
            <p>
                Stores data as magnetic patterns on a thin strip of plastic film
                coated with a magnetic material. Data is accessed sequentially
                which makes it slow, but it's cheap, long-lasting and high
                capacity, meaning it is ideal for large-scale backups and data
                archives.
            </p>
        </SideImage>

        <h4 class="h3">Floppy Disks</h4>

        <SideImage
            src="/public/images/storage/floppy disks.avif"
            alt="Floppy disks of various sizes."
        >
            <p>
                A medium composed of a thin magnetic disk inside a protective
                plastic casing of varying physical size. Data is written and
                read magnetically by a drive head.
            </p>

            <p>
                Obsolete since the turn of the millenium due to relative
                fragility and low storage capacities, usually from hundreds of
                <abbr title="KiloBytes">KB</abbr> to a few
                <abbr title="MegaBytes">MB</abbr>, though some reached into the
                hundreds of MB.
            </p>

            <p>
                It is notable as the basis for the save icon in many software
                applications even today due to how common it was in the 80s and
                90s.
            </p>
        </SideImage>

        <h4 class="h3">Flash Drives</h4>

        <SideImage
            src="/public/images/storage/flash drive.avif"
            alt="A black USB flash drive."
        >
            <p>
                A type of portable storage based on
                <a href="/memory#eeprom" class="link">EEPROM</a> that allows one
                to easily transfer files from one computer to another. It is
                also a convenient alternative to compact disks for installing
                operating systems. Capacities range from the tens to hundreds of
                GB.
            </p>

            <p>
                Still widely used, though not as common due to the prevalence of
                cloud storage services.
            </p>
        </SideImage>

        <h4 class="h3">Compact Disks</h4>

        <SideImage
            src="/public/images/storage/compact disks.avif"
            alt="A stack of compact disks."
        >
            <p>
                Stores data as microscopic pits and islands in a reflective
                layer of the disk. A laser reads the differences as binary data.
                Some types are read-only once burned while others can be written
                to multiple times.
            </p>

            <p>
                Saw heavy use in the 90s and 00s for software, video games and
                music, but digital distribution services have made them a far
                less common sight these days.
            </p>
        </SideImage>

        <h4 class="h3">Hard Disk Drives</h4>

        <SideImage
            src="/public/images/storage/hard drive.avif"
            alt="An exposed 3.5 inch hard drive."
        >
            <p>
                Stores data magnetically on rapidly spinning platters and is
                accessed by a moving read/write head. Cheaper than SSDs per
                terabyte and slower, so they are more commonly used for data
                backups these days.
            </p>

            <p>
                Their mechanical nature cause them to be sensitive to movement
                and shocks, especially in operation.
            </p>
        </SideImage>

        <SideImage
            src="/public/images/storage/hdd platter visualisation.png"
            alt="A diagram showing how data is stored on a hard disk platter."
            class="mt-[2rem]"
        >
            <h5 class="h4">How Data is Stored</h5>

            <p>
                Platters are divided into concentric circles called tracks, and
                each track is split into sectors (the smallest addressable unit,
                usually 512 bytes or 4 KB). Data is stored by magnetising tiny
                regions of the platter in different directions to represent 0s
                and 1s. Each platter surface has its own read/write head,
                stacked on an actuator arm.
            </p>

            <h5 class="h4">How Data is Accessed</h5>

            <p>
                Platters spin at high speed (such as 5,400 or 7,200 RPM). The
                actuator arm moves the read/write head across the platter to the
                correct track. The head senses the orientation of magnetised
                spots when reading, otherwise it changes the magnetic polarity
                of regions to encode data. HDDs can jump between files by moving
                the head and waiting for the right platter sector to spin
                underneath.
            </p>
        </SideImage>

        <h5 class="h4">Performance Factors</h5>

        <ol class="list numbered">
            <li>
                <b>Seek time:</b>
                The time it takes to move the read/write head to the correct
                track.
            </li>
            <li>
                <b>Rotational latency:</b>
                How long it takes for the platter to spin to the right spot.
            </li>
            <li>
                <b>Transfer rate:</b>
                How much data can be read or written in a given period of time.
            </li>
        </ol>

        <p>
            Low seek time, low rotational latency and high transfer rate is
            vital for high performance and responsiveness.
        </p>

        <h4 class="h3">Solid State Drives</h4>

        <SideImage
            src="/public/images/storage/ssd.avif"
            alt="A SanDisk solid state drive."
        >
            <p>
                Uses flash memory chips based on
                <a href="/memory#eeprom" class="link">EEPROM</a> that use
                controllers that optimise for speed and reliability, ensuring
                fast read and write speeds while preventing any one part of the
                drive from wearing out too quickly.
            </p>

            <p>
                Since they are faster and less fragile than hard drives, they
                tend to be used as the primary drive in modern PCs and laptops,
                often used for operating systems, professional software and
                demanding video games.
            </p>
        </SideImage>

        <SideImage
            src="/public/images/storage/ssd grid visualisation.png"
            alt="A diagram showing how data is stored on a solid state drive."
            class="mt-[2rem]"
        >
            <h5 class="h4">How Data is Stored</h5>

            <p>
                SSDs use NAND flash, made of millions of transistors arranged in
                grids. Each memory cell stores a charge (or lack of charge) in
                an insulated gate to determine whether the bit is a 0 or 1. Data
                is organised into pages (e.g. 4-16 KB each), grouped into blocks
                (hundreds of pages).
            </p>

            <h5 class="h4">How Data is Accessed</h5>

            <p>
                The controller can read/write any page instantly as there are no
                moving parts. Flash memory can't overwrite existing data
                directly. To write new data:
            </p>

            <ol class="list numbered">
                <li>Data is written to a free page.</li>
                <li>
                    If updating existing data, the old page is marked invalid.
                </li>
                <li>
                    Entire blocks must eventually be erased and rewritten during
                    garbage collection.
                </li>
            </ol>
        </SideImage>

        <h5 class="h4">Performance Factors</h5>

        <ol class="list numbered">
            <li>
                <b>Latency:</b>
                The time it takes to read or write data and is much faster than
                hard drives, with times measured in microseconds instead of
                milliseconds.
            </li>
            <li>
                <b>Parallelism:</b>
                The ability to read and write data to many cells at once as
                opposed to the linear nature of hard drives.
            </li>
            <li>
                <b>Interface:</b>
                How the device connects to the system.
                <abbr title="Serial Advanced Technology Attachment">SATA</abbr>
                SSDs, as shown above, are limited by the SATA bus (~600MB/s)
                while NVMe SSDs can reach several GB/s over
                <abbr title="Peripheral Component Interconnect Express"
                    >PCI Express</abbr
                >.
            </li>
        </ol>

        <p>
            Even a slow SSD is usually faster than a hard drive, but for maximum
            performance an NVMe drive is your best bet.
        </p>

        <h4 class="h3">NVMe Drives</h4>

        <SideImage
            src="/public/images/storage/nvme.avif"
            alt="Various NVMe drives."
        >
            <p>
                Non-Volatile Memory Express is a protocol designed for flash
                storage using the
                <abbr title="Peripheral Component Interconnect Express"
                    >PCI Express</abbr
                >
                bus instead of
                <abbr title="Serial Advanced Technology Attachment">SATA</abbr>
                for faster read/write speeds. The best option when performance
                is required. Its small size makes it well-suited for laptops.
            </p>
        </SideImage>

        <MinorHeading id="comparing-disk-performance"
            >Comparing Disk Performance</MinorHeading
        >

        <p>
            Consider the three disk drives compared below. Which one do you
            think is the ideal choice based on the following benchmarks?
        </p>

        <ImageFigure
            src="/public/images/storage/disk performance comparison.avif"
            alt="A comparison of three disk drives based on transfer rate and seek time."
        />

        <p>
            <b>Hover to reveal answer</b><br />
            <span class="spoiler">
                Disk 3 is the ideal choice as it has a competitive transfer rate
                and the fastest seek time. While disk 1 has a slightly higher
                transfer rate, it has the slowest seek time.
            </span>
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
