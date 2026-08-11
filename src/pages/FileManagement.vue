<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/os-layers",
    prevLabel: "Operating System Layers",
    nextHref: "/binary-hexadecimal",
    nextLabel: "Binary and Hexadecimal",
};
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>File Management</MainHeading>

        <p>
            Everything that concerns how a system manages and organises files
            and folders on storage devices like hard drives, SSDs and flash
            drives, including metadata about each file.
        </p>

        <MinorHeading>File Systems</MinorHeading>

        <p>
            The method and structure an operating system uses to store, retrieve
            and organise files on storage devices, defining how data is named,
            stored and accessed to ensure that both the user and system can find
            files efficiently.
        </p>

        <p>
            There are many file systems out there generally built with a
            specific operating system in mind.
        </p>

        <h4 class="h3">FAT</h4>

        <p>
            File Allocation Table is a simple and widely compatible file system
            first used for floppy disks and older Windows systems, now mostly
            used for portable storage mediums like flash drives.
        </p>

        <p>
            Limitations include no file permissions and a maximum file size of
            4GB, though the more modern
            <abbr title="Extensible File Allocation Table">exFAT</abbr> file
            system allows for files up to 128PB, making it the preferred version
            these days.
        </p>

        <h4 class="h3">NTFS</h4>

        <p>
            New Technology File System was purpose built for modern Windows
            systems and has been in use since XP. It has many useful features,
            such as file permission and compression, journaling for data
            recovery after crashes and support for very large files.
        </p>

        <h4 class="h3">EXT</h4>

        <p>
            Extended File System is an open-source solution used by Linux
            distributions and Unix-based systems. EXT4 is the latest version and
            possesses a similar feature set to NTFS but uses Unix-style
            permissions. Not natively supported by Windows.
        </p>

        <h4 class="h3">Network File System</h4>

        <p>
            A protocol that allows files to be accessed from another computer as
            if they were local. Not a file system in its own right.
        </p>

        <p>
            It facilitates collaboration between individuals as well as
            centralised file backup and access control measures.
        </p>

        <h4 class="h3">Logical Drives</h4>

        <p>
            A virtual division of a physical storagae device into one or more
            partitions. Each partition is given its own drive letter, like C:,
            D:, etc.
        </p>

        <p>
            This can be done by the user for more distinct organisation of files
            or by the operating system for swap space or other system-specific
            reasons.
        </p>

        <MinorHeading>File Hierarchy</MinorHeading>

        <p>
            Files and folders follow a tree-like structure to facilitate
            organisation and reduce the likelihood of name conflicts.
        </p>

        <p>
            The root folder is the starting point and is usually referred to by
            the drive letter. Individual files can be found by following their
            path from the root.
        </p>

        <h4 class="h3">File Locking</h4>

        <p>
            A mechanism that prevents multiple users or processes from editing
            the same file simultaneously, which could cause data corruption. If
            someone opens a file that is already open by another user, they can
            read it but not modify it.
        </p>

        <p>
            This is a big concern for networked operating systems that must
            allow multiple users to access and modify the same files.
        </p>

        <h4 class="h3">File Extensions</h4>

        <p>
            This refers to the suffix at the end of a filename like .html, .js,
            .docx or .jpg, which tells the operating system what type of file it
            is and what programs can open it.
        </p>

        <p>
            In an NTFS system, it is part of the filename but parsed by the file
            explorer to show the correct icon and specify which programs can
            open it.
        </p>

        <h4 class="h3">File Attributes</h4>

        <p>
            These are on/off flags that indicate a certain property or behaviour
            of a file or directory. Notable file attributes for FAT32 files
            systems include:
        </p>

        <ul class="list">
            <li>
                <b>Read-only:</b>
                The file can only be read.
            </li>
            <li>
                <b>Hidden:</b>
                The file is not shown in the file explorer.
            </li>
            <li>
                <b>System:</b>
                The file is used by the operating system and cannot be modified
                at all.
            </li>
            <li>
                <b>Archive:</b>
                The file has been modified since its last backup and should be
                backed up again.
            </li>
        </ul>

        <p>
            NTFS extends this basic set to include a lot more flags and
            features.
        </p>

        <h4 class="h3">File Sizes</h4>

        <p>
            The amount of space a file occupies on a storage device. There are
            two common ways to represent the size of files: decimal units and
            binary units.
        </p>

        <p>
            Historically, '<abbr title="KiloByte">KB</abbr>' equalled 1024 bytes
            since computers naturally work in binary, but storage vendors stuck
            with decimal (1KB = 1000 bytes) because it makes drives look bigger.
            To fix the clash, the
            <abbr title="International Electrotechnical Commission ">IEC</abbr>
            introduced <abbr title="KibiByte">KiB</abbr>,
            <abbr title="MebiByte">MiB</abbr>,
            <abbr title="GibiByte">GiB</abbr>, etc in 1998, but in everyday use
            many people still say “KB” when they really mean “KiB.”
        </p>

        <MinorHeading>ASCII</MinorHeading>

        <p>
            Computers represent characters like letters and digits with binary.
            The American Standard Code for Information Interchange was developed
            in the 1960s as a way of standardising teleprinter code.
        </p>

        <p>
            It uses 7 bit binary numbers for each character for a total of 128
            characters, which includes upper and lowercase letters, numbers,
            punctuation and various control codes.
        </p>

        <p>
            ASCII was built for the English language and lacks support for
            diacritics, Cyrillic, east Asian languages and many special
            characters. Modern systems now generally use Unicode that supports
            millions of characters, covering every language as well as countless
            symbols and emoji.
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped></style>
