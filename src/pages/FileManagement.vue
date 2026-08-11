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

const asciiDataOne = [
    { character: "NULL", decimal: 0, binary: "00000000" },
    { character: "START OF HEADING", decimal: 1, binary: "00000001" },
    { character: "START OF TEXT", decimal: 2, binary: "00000010" },
    { character: "END OF TEXT", decimal: 3, binary: "00000011" },
    { character: "END OF TRANSMISSION", decimal: 4, binary: "00000100" },
    { character: "ENQUIRY", decimal: 5, binary: "00000101" },
    { character: "ACKNOWLEDGE", decimal: 6, binary: "00000110" },
    { character: "BELL", decimal: 7, binary: "00000111" },
    { character: "BACKSPACE", decimal: 8, binary: "00001000" },
    { character: "HORIZONTAL TAB", decimal: 9, binary: "00001001" },
    { character: "LINE FEED", decimal: 10, binary: "00001010" },
    { character: "VERTICAL TAB", decimal: 11, binary: "00001011" },
    { character: "FORM FEED", decimal: 12, binary: "00001100" },
    { character: "CARRIAGE RETURN", decimal: 13, binary: "00001101" },
    { character: "SHIFT OUT", decimal: 14, binary: "00001110" },
    { character: "SHIFT IN", decimal: 15, binary: "00001111" },
    { character: "DATA LINK ESCAPE", decimal: 16, binary: "00010000" },
    { character: "DEVICE CONTROL 1", decimal: 17, binary: "00010001" },
    { character: "DEVICE CONTROL 2", decimal: 18, binary: "00010010" },
    { character: "DEVICE CONTROL 3", decimal: 19, binary: "00010011" },
    { character: "DEVICE CONTROL 4", decimal: 20, binary: "00010100" },
    { character: "NEGATIVE ACKNOWLEDGE", decimal: 21, binary: "00010101" },
    { character: "SYNCHRONOUS IDLE", decimal: 22, binary: "00010110" },
    { character: "END OF TRANS. BLOCK", decimal: 23, binary: "00010111" },
    { character: "CANCEL", decimal: 24, binary: "00011000" },
    { character: "END OF MEDIUM", decimal: 25, binary: "00011001" },
    { character: "SUBSTITUTE", decimal: 26, binary: "00011010" },
    { character: "ESCAPE", decimal: 27, binary: "00011011" },
    { character: "FILE SEPARATOR", decimal: 28, binary: "00011100" },
    { character: "GROUP SEPARATOR", decimal: 29, binary: "00011101" },
    { character: "RECORD SEPARATOR", decimal: 30, binary: "00011110" },
    { character: "UNIT SEPARATOR", decimal: 31, binary: "00011111" },

    { character: "SPACE", decimal: 32, binary: "00100000" },
    { character: "!", decimal: 33, binary: "00100001" },
    { character: '"', decimal: 34, binary: "00100010" },
    { character: "#", decimal: 35, binary: "00100011" },
    { character: "$", decimal: 36, binary: "00100100" },
    { character: "%", decimal: 37, binary: "00100101" },
    { character: "&", decimal: 38, binary: "00100110" },
    { character: "'", decimal: 39, binary: "00100111" },
    { character: "(", decimal: 40, binary: "00101000" },
    { character: ")", decimal: 41, binary: "00101001" },
    { character: "*", decimal: 42, binary: "00101010" },
    { character: "+", decimal: 43, binary: "00101011" },
    { character: ",", decimal: 44, binary: "00101100" },
    { character: "-", decimal: 45, binary: "00101101" },
    { character: ".", decimal: 46, binary: "00101110" },
    { character: "/", decimal: 47, binary: "00101111" },

    { character: "0", decimal: 48, binary: "00110000" },
    { character: "1", decimal: 49, binary: "00110001" },
    { character: "2", decimal: 50, binary: "00110010" },
    { character: "3", decimal: 51, binary: "00110011" },
    { character: "4", decimal: 52, binary: "00110100" },
    { character: "5", decimal: 53, binary: "00110101" },
    { character: "6", decimal: 54, binary: "00110110" },
    { character: "7", decimal: 55, binary: "00110111" },
    { character: "8", decimal: 56, binary: "00111000" },
    { character: "9", decimal: 57, binary: "00111001" },

    { character: ":", decimal: 58, binary: "00111010" },
    { character: ";", decimal: 59, binary: "00111011" },
    { character: "<", decimal: 60, binary: "00111100" },
    { character: "=", decimal: 61, binary: "00111101" },
    { character: ">", decimal: 62, binary: "00111110" },
    { character: "?", decimal: 63, binary: "00111111" },
];

const asciiDataTwo = [
    { character: "@", decimal: 64, binary: "01000000" },

    { character: "A", decimal: 65, binary: "01000001" },
    { character: "B", decimal: 66, binary: "01000010" },
    { character: "C", decimal: 67, binary: "01000011" },
    { character: "D", decimal: 68, binary: "01000100" },
    { character: "E", decimal: 69, binary: "01000101" },
    { character: "F", decimal: 70, binary: "01000110" },
    { character: "G", decimal: 71, binary: "01000111" },
    { character: "H", decimal: 72, binary: "01001000" },
    { character: "I", decimal: 73, binary: "01001001" },
    { character: "J", decimal: 74, binary: "01001010" },
    { character: "K", decimal: 75, binary: "01001011" },
    { character: "L", decimal: 76, binary: "01001100" },
    { character: "M", decimal: 77, binary: "01001101" },
    { character: "N", decimal: 78, binary: "01001110" },
    { character: "O", decimal: 79, binary: "01001111" },
    { character: "P", decimal: 80, binary: "01010000" },
    { character: "Q", decimal: 81, binary: "01010001" },
    { character: "R", decimal: 82, binary: "01010010" },
    { character: "S", decimal: 83, binary: "01010011" },
    { character: "T", decimal: 84, binary: "01010100" },
    { character: "U", decimal: 85, binary: "01010101" },
    { character: "V", decimal: 86, binary: "01010110" },
    { character: "W", decimal: 87, binary: "01010111" },
    { character: "X", decimal: 88, binary: "01011000" },
    { character: "Y", decimal: 89, binary: "01011001" },
    { character: "Z", decimal: 90, binary: "01011010" },

    { character: "[", decimal: 91, binary: "01011011" },
    { character: "\\", decimal: 92, binary: "01011100" },
    { character: "]", decimal: 93, binary: "01011101" },
    { character: "^", decimal: 94, binary: "01011110" },
    { character: "_", decimal: 95, binary: "01011111" },
    { character: "`", decimal: 96, binary: "01100000" },

    { character: "a", decimal: 97, binary: "01100001" },
    { character: "b", decimal: 98, binary: "01100010" },
    { character: "c", decimal: 99, binary: "01100011" },
    { character: "d", decimal: 100, binary: "01100100" },
    { character: "e", decimal: 101, binary: "01100101" },
    { character: "f", decimal: 102, binary: "01100110" },
    { character: "g", decimal: 103, binary: "01100111" },
    { character: "h", decimal: 104, binary: "01101000" },
    { character: "i", decimal: 105, binary: "01101001" },
    { character: "j", decimal: 106, binary: "01101010" },
    { character: "k", decimal: 107, binary: "01101011" },
    { character: "l", decimal: 108, binary: "01101100" },
    { character: "m", decimal: 109, binary: "01101101" },
    { character: "n", decimal: 110, binary: "01101110" },
    { character: "o", decimal: 111, binary: "01101111" },
    { character: "p", decimal: 112, binary: "01110000" },
    { character: "q", decimal: 113, binary: "01110001" },
    { character: "r", decimal: 114, binary: "01110010" },
    { character: "s", decimal: 115, binary: "01110011" },
    { character: "t", decimal: 116, binary: "01110100" },
    { character: "u", decimal: 117, binary: "01110101" },
    { character: "v", decimal: 118, binary: "01110110" },
    { character: "w", decimal: 119, binary: "01110111" },
    { character: "x", decimal: 120, binary: "01111000" },
    { character: "y", decimal: 121, binary: "01111001" },
    { character: "z", decimal: 122, binary: "01111010" },

    { character: "{", decimal: 123, binary: "01111011" },
    { character: "|", decimal: 124, binary: "01111100" },
    { character: "}", decimal: 125, binary: "01111101" },
    { character: "~", decimal: 126, binary: "01111110" },
    { character: "DELETE", decimal: 127, binary: "01111111" },
];
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

        <div class="table-columns">
            <Table :data="asciiDataOne" />
            <Table :data="asciiDataTwo" />
        </div>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>

<style scoped>
@media (min-width: 900px) {
    .table-columns {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
}
</style>
