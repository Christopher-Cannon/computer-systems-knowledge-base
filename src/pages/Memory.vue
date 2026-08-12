<script setup>
import ImageFigure from "../components/common/ImageFigure.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const ddrData = [
    {
        Type: "SDRAM",
        Released: "1993",
        "Bus Clock (MHz)": "100~166",
        "Data Transfer Rate (MT/s)": "100~166",
        Voltage: "3.3V",
    },
    {
        Type: "DDR",
        Released: "2000",
        "Bus Clock (MHz)": "133~200",
        "Data Transfer Rate (MT/s)": "266~400",
        Voltage: "2.5V",
    },
    {
        Type: "DDR2",
        Released: "2003",
        "Bus Clock (MHz)": "266~400",
        "Data Transfer Rate (MT/s)": "533~800",
        Voltage: "1.8V",
    },
    {
        Type: "DDR3",
        Released: "2007",
        "Bus Clock (MHz)": "533~800",
        "Data Transfer Rate (MT/s)": "1066~1600",
        Voltage: "1.5V",
    },
    {
        Type: "DDR4",
        Released: "2014",
        "Bus Clock (MHz)": "1066~1600",
        "Data Transfer Rate (MT/s)": "2133~3200",
        Voltage: "1.2V",
    },
    {
        Type: "DDR5",
        Released: "2019",
        "Bus Clock (MHz)": "1600~3200",
        "Data Transfer Rate (MT/s)": "3200~6400",
        Voltage: "1.1V",
    },
];

const prevNextNavData = {
    prevHref: "/cpu-architecture",
    prevLabel: "CPU Architecture",
    nextHref: "/storage",
    nextLabel: "Storage",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Memory</MainHeading>

        <p>
            Memory is vital for a system to function. For any computation to
            happen at all, the data and instructions involved must be stored
            somewhere.
        </p>

        <p>It comes in a variety of forms to meet the needs of the system.</p>

        <MinorHeading>Random Access Memory</MinorHeading>

        <p>
            Volatile memory used to store data, instructions and memory
            addresses while programs run. Comes in two distinct forms.
        </p>

        <ul class="list">
            <li>
                <b>Static RAM: </b>
                SRAM is small but fast, used for
                <abbr title="Central Processing Unit">CPU</abbr> caches.
            </li>
            <li>
                <b>Dynamic RAM: </b>
                DRAM is much larger than SRAM, but a lot slower. Used for system
                memory and needs to be constantly refreshed to preserve state.
            </li>
        </ul>

        <h4 class="h3" id="cpu-cache">CPU Cache</h4>

        <p>
            A type of SRAM used for storing data that the CPU is actively
            working with. It's proximity means it is fast and is usually where
            the CPU looks first for what it needs, but is relatively small due
            to space constraints. Modern CPUs made after ~2008 generally have
            three levels of cache available:
        </p>

        <ul class="list">
            <li>
                <b>L1:</b>
                Closest to the CPU cores with each core usually getting its own
                dedicated L1 cache. Very small (in the tens of
                <abbr title="KiloBytes">KB</abbr>) but the fastest to access.
            </li>
            <li>
                <b>L2:</b>
                Larger (hundreds of KB to several
                <abbr title="MegaBytes">MB</abbr>), but slower than L1 cache.
                May be shared between several CPU cores.
            </li>
            <li>
                <b>L3:</b>
                Much larger (tens or hundreds of MB) and slower than L2 cache,
                but is shared by all CPU cores and reduces need to access RAM.
            </li>
        </ul>

        <ImageFigure
            src="/public/images/memory/cache diagram.avif"
            alt="Typical cache layout on a multi-core CPU."
            caption="How cache might be arranged on an eight-core CPU."
        />

        <h4 class="h3">Main Memory</h4>

        <p>
            A type of DRAM used for temporary storage of bulk data that will be
            lost unless powered. Organised into pages of around 4KB in size that
            are allocated to processes by the operating system as required.
        </p>

        <p>
            Double data rate (DDR) memory can transfer data on the rising and
            falling edge of the system clock.
        </p>

        <Table :data="ddrData" />

        <p>
            Main memory contains two primary areas for storing data: the stack
            and the heap.
        </p>

        <h5 class="h4">The Stack</h5>

        <p>
            A region of memory used for short-lived and automatically managed
            data like function parameters, local variables and return addresses
            that specify where to go after executing a function. Follows a last
            in, first out structure, much like a stack of plates.
        </p>

        <p>The stack grows from the highest memory address down.</p>

        <h5 class="h4">The Heap</h5>

        <p>
            A region of memory used for dynamic allocation of objects and data
            structures and isn't as ordered as the stack, meaning it tends to be
            slower. There is a risk of memory leaks if the programmer or garbage
            collector does not free memory correctly.
        </p>

        <p>The heap grows from the lowest memory address up.</p>

        <h4 class="h3">Virtual Memory</h4>

        <p>
            An area on a storage device, such as a
            <abbr title="Hard Disk Drive">HDD</abbr> or
            <abbr title="Solid State Drive">SSD</abbr>, that can be used to
            store rarely used pages of memory if free RAM space runs out. This
            prevents the system from crashing, though fetching data from virtual
            memory is slower than RAM. Often referred to as the page file
            (Windows) or swap space (GNU/Linux).
        </p>

        <p>
            Thrashing can occur if the system spends more time swapping between
            RAM and disk than executing processes. This is made worse by
            fragmented file systems, slow hard drives or simply a lack of RAM.
        </p>

        <h4 class="h3">Direct Memory Access</h4>

        <p>
            Allows hardware devices, such as disk controllers, sound cards and
            network adapters, to read or write to memory directly without
            needing the CPU's assistance.
        </p>

        <p>
            This speeds up data transfers and allows the CPU to concentrate on
            other tasks without constantly being interrupted.
        </p>

        <MinorHeading>Read-Only Memory</MinorHeading>

        <p>
            ROM is non-volatile memory that retains data when power is off and
            usually stores firmware or system instructions needed at boot.
        </p>

        <p>
            It is generally used in electronics where the firmware never changes
            and comes in several forms.
        </p>

        <h4 class="h3">Programmable ROM</h4>

        <p>
            Starts blank and can only be programmed once after manufacture since
            the writing process is destructive.
        </p>

        <p>
            One PROM chip can be configured in many ways as opposed to classic
            ROM that is programmed at the factory.
        </p>

        <h4 class="h3">Erasable PROM</h4>

        <SideImage src="/public/images/forest.avif" alt="A dense forest.">
            <p>
                Can be erased using ultraviolet light and reprogrammed many
                times using special tools.
            </p>

            <p>
                Their increased versatility meant they saw use as
                <abbr title="Basic Input Output System">BIOS</abbr> chips in
                early PCs.
            </p>
        </SideImage>

        <h4 class="h3" id="eeprom">Electrically Erasable ROM</h4>

        <p>
            Can be erased without the need for UV light. Despite being slower
            than main memory (RAM), it eventually took the place of EPROM due to
            it being more convenient.
        </p>

        <p>
            Often used for BIOS settings, microcontroller firmware and smart
            cards. Flash memory, used in
            <abbr title="Universal Serial Bus">USB</abbr> flash drives,
            <abbr title="Secure Digital">SD</abbr> cards and SSDs, are also a
            type of EEPROM.
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
