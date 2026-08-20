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

        <MinorHeading id="core-cpu-components"
            >Core CPU Components</MinorHeading
        >

        <p>
            While processors are built and arranged in different ways, they tend
            to contain the same basic components in some shape or form.
        </p>

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
            smallest, being anywhere from 8 to 64-bits in size.
        </p>

        <p>
            A modern 64-bit processor is named so because that's how big its
            registers are, which in turn support 64-bit operating systems.
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
            Number and naming convention differ between CPU architectures
            (x86-64, ARM, RISC-V).
        </p>

        <h5 class="h4">Special Purpose Registers</h5>

        <p>These are designed for control and coordination, such as:</p>

        <ul class="list">
            <li>
                <b>Program Counter:</b>
                Holds the address of the next instruction.
            </li>
            <li>
                <b>Instructions Register:</b>
                Stores the current instruction being executed.
            </li>
            <li>
                <b>Memory Address Register (MAR):</b>
                Holds the memory address of data to fetch or store.
            </li>
            <li>
                <b>Memory Data Register (MDR):</b>
                Temporarily holds data being transferred to or from memory.
            </li>
            <li>
                <b>Accumulator:</b>
                Stores the result of the last calculation carried out.
            </li>
            <li>
                <b>Stack Pointer:</b>
                Points to the top of the stack, an area in main memory for
                storing function calls, variables and where to go once a
                function has finished executing.
            </li>
        </ul>

        <p>
            As with general purpose registers, the number and naming convention
            differ between CPU architectures.
        </p>

        <h4 class="h3">Cache</h4>

        <p>
            Small and fast storage space on the CPU die for holding recently
            used instructions and data. Larger and slower than registers, but
            much faster than main memory due to being in the CPU.
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

        <MinorHeading id="fetch-execute-cycle"
            >Fetch-Execute Cycle</MinorHeading
        >

        <p>
            Also known as the fetch-decode-execute cycle, this is the execution
            pipeline that the CPU follows from the moment it is powered on until
            the system is shut down and involves the fetching of program
            instructions from memory, decoding and then executing them before
            restarting the cycle.
        </p>

        <p>
            Modern CPUs can handle billions of instructions every second and are
            optimised to handle fetching while decoding, decoding while
            executing and executing while fetching to reduce downtime and boost
            performance.
        </p>

        <p>
            While not mentioned below, reading memory addresses and fetching
            data from memory will involve the address and data buses.
        </p>

        <ol class="list numbered">
            <h4 class="h3 !ml-[-2rem] !mt-[1rem] !mb-[0.5rem]">Fetch</h4>

            <li>
                Read program counter for the memory address of the next
                instruction.
            </li>
            <li>Copy the address into the MAR.</li>
            <li>Fetch the instruction at the MAR address into the MDR.</li>
            <li>
                Copy the instruction in the MDR into the instruction register.
            </li>
            <li>The program counter moves to the next instruction.</li>

            <h4 class="h3 !ml-[-2rem] !mt-[1rem] !mb-[0.5rem]">Decode</h4>

            <li>
                The control unit decodes the instruction in the instruction
                register.
                <ul class="list !mb-0">
                    <li>
                        A instruction is made up of an op code, which describes
                        what operation should be performed, and an operand,
                        which is data or the memory address of a piece of data.
                    </li>
                </ul>
            </li>

            <h4 class="h3 !ml-[-2rem] !mt-[1rem] !mb-[0.5rem]">Execute</h4>

            <li>
                The CPU executes the instruction according to its op code.
                <ul class="list !mb-[0.5rem]">
                    <li>
                        This may involve storing data in a register, comparing
                        values or performing calculations using the ALU.
                    </li>
                </ul>
            </li>
            <li>
                The result of the instruction is stored in the accumulator or
                elsewhere in memory.
            </li>
        </ol>

        <MinorHeading id="architectures">Architectures</MinorHeading>

        <p>
            Many CPU architectures have been developed over the years to meet
            different requirements, whether it's performance, compatibility or
            power efficiency. A desktop workstation will require more
            computational power than a thermostat, so each will have an
            appropriate CPU to suit their needs.
        </p>

        <p>
            Below is a brief overview of the most relevant architectures today.
        </p>

        <h4 class="h3">x86-64</h4>

        <p>
            Also known as AMD64, A 64-bit extension of the x86 architecture that
            allows for over 18 million <abbr title="TeraBytes">TB</abbr> memory
            addresses instead of the previous ~4GB limit. Developed by AMD in
            1999 in response to Intel's Itanium (IA-64) architecture and first
            saw use in AMD's Opteron processor in 2003. Intel later developed
            their own variation called Intel64, though the differences between
            the two are minimal.
        </p>

        <p>
            Remains the most common architecture for desktop and laptop
            computers and has seen multiple revisions since its inception.
        </p>

        <h5 class="h4">Intel Core</h5>
        <h5 class="h4">AMD Ryzen</h5>

        <h4 class="h3">RISC-V</h4>

        <p>
            A free, open-source architecture developed in 2010 by the University
            of California and is the fifth generation of RISC first developed in
            1981. It is designed for simplicity and efficiency as its name
            suggests: Reduced Instruction Set Computer.
        </p>

        <p>
            Because it can be used without having to pay license fees or
            royalties, it is a popular choice for cheap systems like
            microcontrollers as well as for exploration in educational settings.
            Several major CPU architectures are based on RISC.
        </p>

        <ul class="list">
            <li>
                <b>PowerPC:</b>
                Saw use in Apply desktop and laptop computers from 1994 to 2006,
                major games consoles like the Xbox 360, PS3 and Wii as well as
                some Martian rovers. It doesn't see much use these days outside
                of embedded systems.
            </li>
            <li>
                <b>ARM:</b>
                A proprietary design introduced in 1981 for the BBC Micro, it is
                a popular choice for mobile computing due its low power
                consumption, though it has been used in supercomputing. Famously
                powered the Nintendo DS.
            </li>
            <li>
                <b>Snapdragon:</b>
                A series of multi-core
                <abbr title="Systems on Chips">SoCs</abbr> made by Qualcomm
                based on ARM used mainly in smartphones as well as some laptops
                and embedded devices.
            </li>
            <li>
                <b>Apple Silicon:</b>
                A series of processors based on ARM introduced in 2020 and used
                exclusively for Apple hardware. Like Intel's recent Core-series
                of processors, M-series chips feature a mix of performance and
                efficiency cores for improved power efficiency, especially for
                mobile devices.
            </li>
        </ul>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
