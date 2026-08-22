<script setup>
import ImageFigure from "../components/common/ImageFigure.vue";
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/types-of-software",
    prevLabel: "Types of Software",
    nextHref: "/os-layers",
    nextLabel: "Operating System Layers",
};

const singleMultiUserData = [
    {
        "Single User":
            "Designed for one user at a time, even if the system allows for multiple user accounts.",
        "Multi User":
            "Supports multiple user accounts using the system simultaneously, typically in server or mainframe environments.",
    },
    {
        "Single User":
            "Often used in personal devices like laptops, desktops and smartphones.",
        "Multi User":
            "The OS manages the CPU, memory and storage so each user gets balanced access to system resources.",
    },
    {
        "Single User":
            "Examples include macOS, Android and consumer versions of Windows.",
        "Multi User":
            "Examples include UNIX, Linux server distributions and mainframe operating systems like IBM z/OS.",
    },
];

const singleMultiProcessorData = [
    {
        "Single Processor": "Runs on systems with just one CPU core.",
        "Multi Processor":
            "Able to run on systems with multiple CPU cores or even multiple CPUs.",
    },
    {
        "Single Processor":
            "Can still support multi-tasking, but tasks share the single CPU through time-slicing.",
        "Multi Processor":
            "Improves system performance and scalability since tasks can be divided between CPU cores",
    },
    {
        "Single Processor":
            "More common in older computers, embedded systems and microcontrollers.",
        "Multi Processor":
            "May include hyperthreading technology, allowing each CPU core to act as two 'logical' cores.",
    },
    {
        "Single Processor":
            "Tend to be lightweight or realtime operating systems.",
        "Multi Processor":
            "Examples include modern Windows and Linux distributions.",
    },
];

const systemData = [
    {
        src: "/public/images/software/windows.avif",
        alt: "Logo for the Microsoft's Windows operating system'.",
    },
    {
        src: "/public/images/software/macos.avif",
        alt: "Logo for Apple's MacOS.",
    },
    {
        src: "/public/images/software/linux.avif",
        alt: "Logo for the Linux kernel.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Operating Systems</MainHeading>

        <p>
            A system software that acts as an intermediary between computer
            hardware and the user. It manages hardware resources, provides a
            platform for applications to run, and ensures efficient and secure
            operation of the system.
        </p>

        <ImageGallery :data="systemData" col3 />

        <p>
            You've likely heard of Windows, macOS and Linux distributions, but
            there are other operating systems available beyond them built for a
            variety of purposes. They can differ by how they manage users,
            processors, tasks, timing and hardware environments. For example:
        </p>

        <ul class="card-grid">
            <li class="card">
                <span
                    >A personal laptop may use a single-user, multi-tasking
                    OS.</span
                >

                <a
                    href="/public/images/operating systems/laptop.avif"
                    class="image-link"
                >
                    <img
                        src="/public/images/operating systems/laptop.avif"
                        alt="A generic laptop computer."
                    />
                </a>
            </li>
            <li class="card">
                <span
                    >A car's engine controller needs a real-time embedded
                    OS.</span
                >

                <a
                    href="/public/images/operating systems/microcontroller.avif"
                    class="image-link"
                >
                    <img
                        src="/public/images/operating systems/microcontroller.avif"
                        alt="A car engine microcontroller."
                    />
                </a>
            </li>
            <li class="card">
                <span
                    >A server farm might use a multi-user, multi-processor,
                    distributed OS.</span
                >

                <a
                    href="/public/images/operating systems/servers.avif"
                    class="image-link"
                >
                    <img
                        src="/public/images/operating systems/servers.avif"
                        alt="Rows of server racks in a data centre."
                    />
                </a>
            </li>
        </ul>

        <MinorHeading id="single-and-multi-user"
            >Single and Multi User</MinorHeading
        >

        <p>
            Operating systems can be designed to work with just one user or
            several at once.
        </p>

        <Table :data="singleMultiUserData" align="left" />

        <MinorHeading id="single-and-multi-processor"
            >Single and Multi Processor</MinorHeading
        >

        <p>
            Operating systems can be designed for single CPU cores or several at
            the same time.
        </p>

        <Table :data="singleMultiProcessorData" align="left" />

        <MinorHeading id="multi-tasking">Multi-tasking</MinorHeading>

        <p>
            Allows more than one program to run at the same time, making the
            system more versatile. There are two main types: pre-emptive and
            cooperative.
        </p>

        <h4 class="h3">Cooperative Scheduling</h4>

        <p>
            Each process voluntarily gives up control of the CPU so other
            processes can get processing time. If a process fails to give up
            control, whether through deliberate design or honest error, the
            entire system can freeze, requiring it to be rebooted.
        </p>

        <p>Found on early macOS (before OS X) and Windows 3.x.</p>

        <h4 class="h3">Pre-emptive Scheduling</h4>

        <p>
            The OS manages how much time each process gets on the CPU and swaps
            between them regularly, preventing one from hoarding system
            resources, and happens fast enough to create the illusion of a
            responsive system. Processes can be in one of three states:
        </p>

        <ul class="list">
            <li><b>Running:</b> The process is using the CPU.</li>
            <li>
                <b>Ready: </b> The process is ready to run and is waiting its
                turn.
            </li>
            <li>
                <b>Waiting: </b> The process cannot proceed until something else
                happens first and cannot be run.
            </li>
        </ul>

        <MinorHeading id="network-os">Network OS</MinorHeading>

        <p>
            Focused on providing services to computers across a network and
            includes features such as remote file access, resource sharing (e.g.
            printers), centralised security and user management. Computers on
            the network that connect to the server may be 'thin clients'. These
            low-spec machines run an OS with minimal features that act as way to
            access server software and resources.
        </p>

        <p>
            Common in companies where many individuals need to collaborate.
            Examples include Windows Server and Linux with Samba.
        </p>

        <p>
            A concern that arises when multiple users have access to the same
            resources is what happens if two or more users try to open the same
            file. The common solution is to allow the first user the ability to
            modify the document while other users can only read it. This is
            known as
            <a href="/file-management#file-locking" class="link"
                >file locking</a
            >
            and helps prevent accidental file corruption.
        </p>

        <ImageFigure
            src="/public/images/operating systems/server os diagram.avif"
            alt="A visualisation of how a computer network interacts with a server-based OS."
            caption="How a computer network interacts with a server-based OS."
        />

        <MinorHeading id="real-time-os">Real-time OS</MinorHeading>

        <p>
            Designed for applications where the system must respond within
            strict deadlines. Examples include RTLinux, FreeRTOS and VxWorks.
        </p>

        <p>
            Soft real-time systems have deadlines that are important for the
            user experience but are not catastrophic if missed, such as video
            streaming. Hard real-time systems have deadlines that could cause
            system failure or danger to users if missed, such as airbag
            deployment.
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
}

.image-link > img {
    border-radius: var(--radius-md);
}
</style>
