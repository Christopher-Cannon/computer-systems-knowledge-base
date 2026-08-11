<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/storage",
    prevLabel: "Storage",
    nextHref: "/operating-systems",
    nextLabel: "Operating Systems",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Types of Software</MainHeading>

        <p>
            Software is the set of instructions, data, or programs that tell a
            computer how to work. It is intangible, unlike the hardware that
            make up the physical system, and can range from low-level system
            code, like the operating system, to high-level applications run on
            top, like web browsers, image editors and games.
        </p>

        <MinorHeading>Application Software</MinorHeading>

        <p>
            We use these to carry out specific tasks, whether for professional
            (database management, video editing, audio engineering) or
            recreational purposes (video games, audio and video players). All
            other types of software are to ensure these can run effectively.
        </p>

        <MinorHeading>System Software</MinorHeading>

        <p>
            Runs the computer, managing hardware and providing a platform for
            other programs. Examples include operating systems and device
            drivers, which computers would be generally useless without. Common
            functions include:
        </p>

        <ul class="list">
            <li>
                Control and management of memory, file systems, processes and
                the CPU.
            </li>
            <li>Handling user interface events and command line input.</li>
            <li>
                Handling of peripheral devices and other
                <abbr title="Input Output">IO</abbr>, like keyboards, mice and
                networks.
            </li>
        </ul>

        <MinorHeading>Utility Software</MinorHeading>

        <p>
            Designed to maintain, manage and optimise a computer system. It
            performs specialised tasks like file management, disk cleanup, data
            backup, security and performance monitoring to keep the system
            running smoothly. Examples include:
        </p>

        <ul class="list">
            <li>Program uninstallers</li>
            <li>Firewalls</li>
            <li>Backup and archival software</li>
            <li>File compression</li>
            <li>File explorers</li>
            <li>Disk management tools</li>
            <li>System diagnostics and optimisers</li>
        </ul>

        <h4 class="h3">Security</h4>

        <p>
            Designed to protect systems and data from external threats that can
            destabilise or destroy them. Antiviruses search for and neutralise
            viruses, spyware and other malware, encryption software ensure data
            privacy by requiring a key to access files while firewalls can block
            incoming network traffic from specific addresses.
        </p>

        <h4 class="h3">File Compression</h4>

        <p>
            Reduces the size of files so they take up less storage space and
            transfer faster over networks. Compression involves algorithms to
            re-encode information with fewer bits than the original
            representation, which can be reversed to produce the original file
            if the compression method was lossless.
        </p>

        <p>
            Groups of files can be compressed into archives while individual
            files, especially media files, can be encoded with a given method to
            reduce file size.
        </p>

        <p>
            Lossy compression, often used with images, audio and video with the
            <abbr title="Joint Photographic Experts Group">JPEG</abbr>,
            <abbr title="Moving Picture Experts Group Layer III">MP3</abbr> and
            <abbr title="Advanced Video Coding">AVC</abbr> methods, is
            destructive and removes data to reduce file size. Repeatedly
            compressing a file with a lossy method can result in noticeably
            compromised quality.
        </p>

        <h4 class="h3">Disk Management</h4>

        <p>
            For monitoring and managing storage drives and can come in various
            forms:
        </p>

        <ul class="list">
            <li>
                Partitioners can split drives into sections for organisation
                purposes or operating system requirements.
            </li>
            <li>
                Formatters can wipe data and prepare a drive for use with a
                given file system.
            </li>
            <li>
                Defragmenters rearrange files on hard drives so that related
                data is close together, leading to more efficient running. Not
                required for SSDs.
            </li>
            <li>
                Cleaners can remove unneeded files, like installation files and
                logs.
            </li>
            <li>
                Error checkers can monitor disk health and attempt to fix issues
                found with them.
            </li>
        </ul>

        <MinorHeading>APIs</MinorHeading>

        <p>
            Application Programming Interfaces allow complex functionality to be
            abstracted behind a set of functions or endpoints, often in the form
            of a library or framework. This allows programmers to, for example,
            build a user interface without having to worry about how the library
            is implemented.
        </p>

        <p>
            APIs can also be found hosted on the internet that will return
            structured data when requested, usually in the form of
            <abbr title="JavaScript Object Notation">JSON</abbr> or
            <abbr title="eXtensible Markup Language">XML</abbr>. Requests are
            made by sending the API a URL, which can contain various parameters.
            This is commonly used by single-page web applications to retrieve
            data from a centralised database.
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
