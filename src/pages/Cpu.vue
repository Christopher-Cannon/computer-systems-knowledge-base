<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import ImageFigure from "../components/common/ImageFigure.vue";
import SlideGallery from "../components/common/SlideGallery.vue";
import InfoBox from "../components/common/InfoBox.vue";
import SideImage from "../components/common/SideImage.vue";
import feCycleSlidePaths from "../data/fe-cycle";

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

        <ul class="card-grid">
            <li class="card">
                <h6 class="h5 !mt-0">Program Counter</h6>
                Holds the address of the next instruction.
            </li>
            <li class="card">
                <h6 class="h5 !mt-0">Instruction Register</h6>
                Stores the current instruction being executed.
            </li>
            <li class="card">
                <h6 class="h5 !mt-0">Stack Pointer</h6>
                Points to the top of the stack, an area in main memory for
                storing function calls, variables and such.
            </li>
            <li class="card">
                <h6 class="h5 !mt-0">Memory Address Register (MAR)</h6>
                Holds the memory address of data to fetch or store.
            </li>
            <li class="card">
                <h6 class="h5 !mt-0">Memory Data Register (MDR)</h6>
                Temporarily holds data being transferred to or from memory.
            </li>
            <li class="card">
                <h6 class="h5 !mt-0">Accumulator</h6>
                Stores the result of the last calculation carried out.
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

        <ImageFigure
            src="/public/images/cpu/bus width.png"
            alt="A comparison between an 8-bit and 16-bit bus."
            caption="Wider buses allow more data through at once."
        />

        <h5 class="h4">Address Bus</h5>

        <SideImage
            src="/public/images/cpu/address bus.png"
            alt="A diagram showing how the address bus is uni-directional towards memory."
        >
            <p>
                Connects the CPU to main memory and carries memory address
                location to be accessed. Data only flows from CPU to main
                memory.
            </p>

            <p>
                The width of the address bus is important as it affects how many
                memory locations can be accessed. For example, an 8-bit address
                bus can only access 2<sup>8</sup>, or 256, memory locations.
            </p>
        </SideImage>

        <h5 class="h4">Data Bus</h5>

        <SideImage
            src="/public/images/cpu/data bus.png"
            alt="A diagram showing how the data bus is bi-directional."
        >
            <p>
                Carries data between the CPU and main memory in either direction
                for reading from or writing to the location specified by the
                address bus.
            </p>
        </SideImage>

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

        <MinorHeading id="assembly">Assembly</MinorHeading>

        <p>
            Assembly is a low-level programming language that makes machine code
            readable to humans and allows the programmer to write programs that
            interact directly with hardware. It acts as an intermediary between
            high-level languages like Python and JavaScript and binary which the
            CPU understands.
        </p>

        <p>
            Assembly programs can be highly performant if you know what you are
            doing, but they can be challenging to write. High-level languages
            were developed as abstractions of assembly to make writing programs
            more intuitive.
        </p>

        <p>
            Instructions in assembly are generally made up of a command (such as
            MOV, ADD or SUB) and one or more operands which specify data or
            memory addresses. A simple program that adds two numbers together
            might look like:
        </p>

        <code>
            <pre>; Load the first number into register AL
<b>mov al, [num1]</b>

; Add the second number, which is located in memory, to AL
<b>add al, [num2]</b>

; Save the result to the appropriate memory location
<b>mov [result], al</b>

; System call to display the result
<b>mov eax, 4</b>       ; System call code for output
<b>mov ebx, 1</b>       ; File descriptor for output (stdout)
<b>mov ecx, result</b>  ; Pointer to the result
<b>mov edx, 1</b>       ; Number of bytes to output
<b>int 0x80</b>         ; System call

; Exit the program
<b>mov eax, 1</b>       ; System call code for exit
<b>xor ebx, ebx</b>     ; Exit status code
<b>int 0x80</b>         ; System call</pre>
        </code>

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

        <h4 class="h3">Example Program</h4>

        <p>
            The following is part of a simple assembly-like program (not based
            on a real language, it is purely for demonstration purposes) that
            adds two numbers together. Lets see how a simplified CPU might
            execute this program fragment.
        </p>

        <code>
            <pre><b>MOV r0 09</b>    ; Move data at address 09 into register r0
<b>MOV r1 0A</b>    ; Move data at address 0A into register r1
<b>ADD r0 r1</b>    ; Add data in register r0 with data in register r0
<b>NXT 0C</b>       ; Go to next instruction at address 0C
</pre>
        </code>

        <InfoBox label="About This Diagram">
            <p class="!mt-0">
                This is a vastly simplified processor structure that has
                necessary components like cache removed to convey the core
                concepts of the fetch-execute cycle more clearly.
            </p>

            <p class="!mb-0">
                In actuality, reading from memory can take many clock cycles,
                meaning the above instructions could take much longer to
                complete if this were factored in.
            </p>
        </InfoBox>

        <SlideGallery
            :data="feCycleSlidePaths"
            bg="/public/images/fe cycle/fe cycle bg.png"
        />

        <InfoBox label="Next Steps">
            <p class="!my-0">
                As you can see, this sequence of 4 instructions took about 30
                cycles to complete. Considering the contents of memory, what do
                you think will happen next?
            </p>
        </InfoBox>

        <MinorHeading id="major-architectures"
            >Major Architectures</MinorHeading
        >

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
            addresses instead of the previous ~4GB limit. Developed by
            <abbr title="Advanced Micro Devices">AMD</abbr> in 1999 in response
            to Intel's Itanium (IA-64) architecture and first saw use in AMD's
            Opteron processor in 2003. Intel later developed their own variation
            called Intel64, though the differences between the two are minimal.
        </p>

        <p>
            Remains the most common architecture for desktop and laptop
            computers and has seen multiple revisions since its inception.
        </p>

        <ul class="list">
            <li>
                <b>Intel Core:</b>
                A series of desktop and laptop-oriented processors first
                introducing in the latter half of the 2000s. Featured
                hyperthreading technology early on for improved performance
                while modern chips include a mix of performance and efficiency
                cores for more specialised handling of workloads to improve
                power consumption.
            </li>
            <li>
                <b>AMD Ryzen:</b>
                A competitor to Intel's Core-series of processors first
                introduced in 2017 and saw a major performance increase over
                AMD's previous offerings. Desktop variants are popular with
                gamers and professionals due high core counts,
                <abbr title="Simultaneous Multi-Threading">SMT</abbr> technology
                and 3D cache in some models that greatly increase the amount of
                SRAM available to the CPU.
            </li>
        </ul>

        <ImageFigure
            src="/public/images/cpu/i5 13th gen die.avif"
            alt="Diagram of a 13th gen Intel Core-i5 CPU die."
            caption="Layout of a 13th gen Intel Core-i5 CPU die."
        />

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
                efficiency cores for improved power efficiency.
            </li>
        </ul>

        <MinorHeading id="microarchitecture">Microarchitecture</MinorHeading>

        <p>
            This refers to the ways in which processors are designed and how
            circuits are arranged to improve computational performance and
            efficiency.
        </p>

        <ul class="card-grid grid-col-2">
            <li class="card">
                <h5 class="h5 !mt-0">Branch Prediction</h5>
                The CPU attempts to guess the result of a conditional branch
                ahead of time based on prior branch results. Comes at the risk
                of bad guesses which require work to be redone, wasting time.
            </li>
            <li class="card">
                <h5 class="h5 !mt-0">Out-of-Order Execution</h5>
                Allows an instruction to be executed ahead an older one if its
                required data is readily available instead of idling while data
                is fetched.
            </li>
            <li class="card">
                <h5 class="h5 !mt-0">Multithreading</h5>
                Allows the processor to switch to executing instructions for
                another program thread while data is fetched from main memory
                for the first thread. Does not speed up threads but does improve
                multi-tasking performance.
            </li>

            <li class="card">
                <h5 class="h5 !mt-0">Multiprocessing</h5>
                The system has multiple CPUs cores that allow it to work on
                multiple program threads simultaneously.
            </li>
        </ul>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
