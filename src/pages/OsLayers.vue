<script setup>
import ImageFigure from "../components/common/ImageFigure.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/operating-systems",
    prevLabel: "Operating Systems",
    nextHref: "/file-management",
    nextLabel: "File Management",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Operating System Layers</MainHeading>

        <p>
            Operating systems are often described as layered systems, where each
            layer handles specific tasks and provides services to the layer
            above it. These layers hide complexity from the user. While the
            exact structure differs from OS to OS, they generally handle the
            same responsibilities.
        </p>

        <p>
            The kernel and memory management deal with low-level hardware, while
            file management and user interface deal with higher-level,
            user-facing tasks.
        </p>

        <ImageFigure
            src="/public/images/os-layers/os-layers.png"
            alt="Diagram of the typical arrangement of operating system layers."
            caption="Typical arrangement of the layers of operating systems with the kernel at the centre."
        />

        <MinorHeading id="kernel">Kernel</MinorHeading>

        <p>
            The core of the OS that runs with full access to the hardware and is
            responsible for managing processes, CPU scheduling, inter-process
            communication and device drivers. The most famous example is likely
            the Linux kernel often used with the GNU operating system.
        </p>

        <h4 class="h3">Memory Protection</h4>

        <p>
            The kernel uses hardware-enforced memory protection to prevent
            unauthorised access where each process is given its own virtual
            address space. Memory space used by the kernel is usually isolated
            from that of other processes.
        </p>

        <p>
            Using the memory management unit (MMU) on the CPU, it can ensure
            that one process cannot read from or write to another process's
            memory space. Attempts to do so result in segmentation faults or
            access violations, stopping the process.
        </p>

        <h4 class="h3">Permissions</h4>

        <p>
            The kernel enforces access control using user IDs and group IDs
            coupled with
            <a href="/file-management#file-attributes" class="link"
                >permission bits or attributes</a
            >
            stored on files and resources, such as read, write and execute. For
            example, if a user has a write permission bit set on a file, they
            are able to overwrite its contents.
        </p>

        <h4 class="h3">Ring Architecture</h4>

        <p>
            Modern CPUs implement privilege levels using rings. Ring 0 offers
            full access and is used by the kernel, ring 3 offers limited access
            and is used by general applications while the rings in between are
            used by device drivers. Modern operatings systems only use two or
            three rings.
        </p>

        <p>
            This separation ensures that user-level code cannot directly execute
            privileged instructions or access kernel memory.
        </p>

        <ImageFigure
            src="/public/images/os-layers/ring-architecture.png"
            alt="Diagram of how privilege rings are arranged with most privileges lying at ring 0 in the centre."
        />

        <MinorHeading id="memory-management">Memory Management</MinorHeading>

        <p>
            Handles allocation and tracking of memory addresses in main memory.
            Determines how processes are allocated and arranged in memory and
            manages swapping data between main memory and virtual memory.
        </p>

        <h4 class="h3">Partitioning</h4>

        <p>
            A type of contiguous memory allocation where processes are assigned
            a single block of memory, keeping all associated data and
            instructions close together. Can lead to poor utilisation of memory
            since free space in a partition cannot be used by other processes.
        </p>

        <h4 class="h3">Segmentation</h4>

        <p>
            A type of non-contiguous allocated memory where processes are
            divided into small chunks, representing variables, functions,
            arrays, etc, and placed wherever there is space in memory, so data
            for one process will tend not to be next to each other.
        </p>

        <p>
            Memory allocation methods like this are preferred in modern
            operating systems since, while more complex than partitioning, it
            allows memory space to be utilised more effectively.
        </p>

        <h4 class="h3">Swapping</h4>

        <p>
            If there isn't enough space in main memory for a new process, other
            processes, usually of a lower priority, can be moved temporarily to
            a storage device to make room. This temporary space is known as the
            page file on Windows and swap space on Linux distributions.
        </p>

        <p>
            Transfers can take time if a lot of data needs to be transferred.
            Thrashing can occur if the system spends more time swapping data
            instead of actually executing processes, slowing the system to a
            crawl.
        </p>

        <MinorHeading id="input-output">Input / Output</MinorHeading>

        <SideImage
            src="/public/images/os-layers/input output.png"
            alt="A venn diagram showing hardware devices that count as input and/or output devices."
        >
            <p>
                A uniform interface for handling communication to and from
                system devices. Since hardware devices vary widely, the OS hides
                this complexity behind device drivers. It is also responsible
                for handling interrupt requests coming from devices.
            </p>
        </SideImage>

        <MinorHeading id="file-management">File Management</MinorHeading>

        <p>
            Manages how data is stored, retrieved and organised. Represents data
            stored on physical devices, like HDDs and SSDs, as a logical
            structure of files and folders for ease of use. Other
            responsibilities include:
        </p>

        <ul class="list">
            <li>
                <b>File system:</b>
                How files are organised on physical storage. There are numerous
                formats used depending on the operating system, such as NTFS,
                FAT32 and EXT4.
            </li>
            <li>
                <b>Access control:</b>
                What permissions do users and user groups on the system have
                when interacting with files, such as read, write and execute.
                While this layer allows permissions to be defined, it is the
                kernel that enforces them.
            </li>
            <li>
                <b>File operations:</b>
                Defines what can be done with files, such as creation, opening,
                writing and deletion.
            </li>
            <li>
                <b>Space management:</b>
                Keeps track of free and used space on physical storage.
            </li>
        </ul>

        <MinorHeading id="user-interface">User Interface</MinorHeading>

        <p>
            The topmost layer that facilitates system interaction by translating
            events or commands initated by the user into system calls (i.e. the
            execution of programs and functions). Can be a simple command line
            interface that accepts only text commands or a sophisticated
            <abbr title="Graphical User Interface">GUI</abbr> featuring windows,
            text inputs, buttons and other common desktop metaphors.
        </p>

        <h4 class="h3">Command Line Interface</h4>

        <SideImage
            src="/public/images/os-layers/terminal.avif"
            alt="A typical command line interface."
        >
            <p>
                These text-based interfaces used to be the standard for
                interacting with computer systems. Even today, they see frequent
                use by computing professionals since it's fast and cheap to make
                programs and utilities that run through a command line. It can
                be a very powerful tool if you know what you are doing.
            </p>

            <p>
                It can take time getting used to if you're coming from years of
                using graphical interfaces. The main hurdles include having to
                learn the commands necessary to do anything, whether with the
                operating system or specific programs.
            </p>
        </SideImage>

        <h4 class="h3">Graphical User Interface</h4>

        <SideImage
            src="/public/images/os-layers/winxp.avif"
            alt="The desktop graphical user interface of the Windows XP operating system."
        >
            <p>
                These allow users to interact with a system using visuals and
                controls based on real-world analogues. Programs appear as
                windows containing buttons, tabs, text inputs, scroll bars and a
                variety of other controls to make interaction more intuitive
                with a mouse and keyboard.
            </p>

            <p>
                The GUI came about as part of a research program from Xerox
                which was eventually picked up by Apple who used it for their
                Lisa desktop computer. Microsoft would later adopt this medium a
                decade later for Windows 3.1, evolving significantly with
                Windows 95. It became the dominant way of system interaction
                since it made more immediate sense to users.
            </p>
        </SideImage>

        <MinorHeading id="layer-interaction">Layer Interaction</MinorHeading>

        <p>
            A typical file operation might result in the following actions taken
            by each OS layer:
        </p>

        <ol class="list numbered">
            <li><b>User interface:</b> User opens a file.</li>
            <li>
                <b>File management:</b>
                The file is located and permissions are checked.
            </li>
            <li>
                <b>I/O:</b>
                File data is read from disk, screen displays output when there
                is something to show.
            </li>
            <li>
                <b>Memory management:</b>
                File contents are loaded into main memory and instructions sent
                to the CPU.
            </li>
            <li>
                <b>Kernel:</b>
                Coordinates everything via CPU process scheduling.
            </li>
        </ol>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
