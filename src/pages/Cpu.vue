<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";

const prevNextNavData = {
    prevHref: "/hardware-overview",
    prevLabel: "Hardware Overview",
    nextHref: "/memory",
    nextLabel: "Memory",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>CPU Architecture</MainHeading>

        <p>
            A computer is essentially a system that stores, updates and moves
            around state according to rules set by programs. The central
            processing unit, or CPU, is what makes this happen.
        </p>

        <p>
            It carries out instructions from programs via the fetch-execute
            cycle, ensuring that the system runs at all, and is made up of
            various components, such as registers, buses and interrupt lines.
        </p>

        <MinorHeading>Common Components</MinorHeading>

        <h4 class="h3">Control Unit</h4>

        <p>
            Directs the flow of data within the CPU and between the CPU and
            other system components, such as main memory. It ensures
            instructions are carried out in the correct order and coordinates
            activities by sending control signals across the
            <a href="#control-bus">control bus</a>.
        </p>

        <h5 class="h4">Decoder</h5>

        <p>
            A part of the control unit that decodes binary instructions fetched
            from memory to determine what operation the ALU, registers and buses
            need to carry out.
        </p>

        <h4 class="h3">Arithmetic Logic Unit</h4>

        <p>
            Performs all arithmetic operations (addition, subtraction, etc) and
            logical operations (AND, OR, NOT, etc). it works closely with
            registers to process data.
        </p>

        <h4 class="h3">Registers</h4>

        <p>
            These are small storage spaces inside the CPU used for temporary
            data and instructions. While their close proximity makes them the
            fastest memory space accessible by the CPU, they are also the
            smallest, being anywhere from 1 to 8 bytes in size.
        </p>

        <p>
            Registers can be general purpose or specialised towards a particular
            task.
        </p>

        <h5 class="h4">General Purpose Registers</h5>

        <p>These hold data being worked on and may be used for:</p>

        <ul class="list">
            <li>Arithmetic and logic operations.</li>
            <li>Memory addressing.</li>
            <li>
                Control flow (loop counters, function parameters and returns,
                etc).
            </li>
        </ul>

        <p>
            Number and naming convention can differ between CPU architectures
            (x86-64, ARM, RISC-V).
        </p>

        <h5 class="h4">Special Purpose Registers</h5>

        <p>These are designed for control and coordination, such as:</p>

        <ul class="list">
            <li>
                <b>Program counter:</b>
                Holds the address of the next instruction.
            </li>
            <li>
                <b>Instructions counter:</b>
                Stores the current instruction being executed.
            </li>
            <li>
                <b>Memory address register (MAR):</b>
                Holds the memory address of data to fetch or store.
            </li>
            <li>
                <b>Memory data register (MDR):</b>
                Temporarily holds data being transferred to or from memory.
            </li>
            <li>
                <b>Accumulator:</b>
                Stores the result of the last calculation carried out.
            </li>
        </ul>

        <p>
            As with general purpose registers, the number and naming convention
            may differ between CPU architectures.
        </p>

        <h4 class="h3">Cache</h4>

        <p>
            Small and fast storage space on the CPU die for holding recently
            used instructions and data. Larger but a little slower than
            registers, but much faster than main memory due to being in the CPU.
        </p>

        <p>
            Commonly arranged in a hierarchy of three levels with each level
            getting larger but slower.
        </p>

        <p>
            <a href="/memory#cpu-cache" class="link">Read more...</a>
        </p>

        <h4 class="h3">Buses</h4>

        <p>
            These are communication pathways connecting the CPU to other
            hardware components, like main memory and peripherals. The width of
            a bus, usually in bits, determines how much data can travel along
            it.
        </p>

        <h5 class="h4">Address Bus</h5>

        <p>
            Connects the CPU to main memory and carries memory address location
            to be accessed. Data only flows from CPU to main memory.
        </p>

        <p>
            Its width determines how many different memory locations can be
            accessed. For example, an 8-bit address bus can only access
            2<sup>8</sup>, or 256, memory locations.
        </p>

        <h5 class="h4">Data Bus</h5>

        <p>
            Carries data between the CPU and main memory in either direction for
            reading from or writing to the location specified by the address
            bus.
        </p>

        <h5 class="h4" id="control-bus">Control Bus</h5>

        <p>
            Carries signals from the control unit to other parts of the system
            about what the CPU is doing and is made up of a series of lines
            representing different actions:
        </p>

        <ul class="list">
            <li>
                <b>Read:</b>
                The CPU will read from main memory.
            </li>
            <li>
                <b>Write:</b>
                The CPU will write to main memory.
            </li>
            <li>
                <b>Timing:</b>
                Carries the clock signals that synchronise all events.
            </li>
            <li>
                <b>Interrupt:</b>
                A peripheral needs attention and the CPU should pause its
                current operation to handle it. There are usually multiple
                interrupt request lines (IRQs) available to the system.
            </li>
            <li>
                <b>Reset:</b>
                Reset the CPU to its initial state, whether initiated by the
                user or due to an unrecoverable system error.
            </li>
        </ul>

        <h5 class="h4">Non-Maskable Interrupt</h5>

        <p>
            A high-priority interrupt that cannot be ignored by the CPU often
            used for critical events, such as hardware failure or memory parity
            errors.
        </p>

        <MinorHeading>Fetch-Execute Cycle</MinorHeading>

        <MinorHeading>Architecture</MinorHeading>

        <p>
            Single VS multi-core CPUs, notable architectures (x86-64, Intel
            Core, Ryzen, RISC-V, Snapdragon, Apple M)
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
