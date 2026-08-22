<script setup>
import ImageFigure from "../components/common/ImageFigure.vue";
import InfoBox from "../components/common/InfoBox.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";
import Table from "../components/common/Table.vue";

const prevNextNavData = {
    prevHref: "/os-layers",
    prevLabel: "Operating System Layers",
    nextHref: "/number-bases",
    nextLabel: "Number Bases",
};

const asciiDataOne = [
    { Character: "NULL", Decimal: 0, Binary: "00000000" },
    { Character: "START OF HEADING", Decimal: 1, Binary: "00000001" },
    { Character: "START OF TEXT", Decimal: 2, Binary: "00000010" },
    { Character: "END OF TEXT", Decimal: 3, Binary: "00000011" },
    { Character: "TRANSMISSION END", Decimal: 4, Binary: "00000100" },
    { Character: "ENQUIRY", Decimal: 5, Binary: "00000101" },
    { Character: "ACKNOWLEDGE", Decimal: 6, Binary: "00000110" },
    { Character: "BELL", Decimal: 7, Binary: "00000111" },
    { Character: "BACKSPACE", Decimal: 8, Binary: "00001000" },
    { Character: "HORIZONTAL TAB", Decimal: 9, Binary: "00001001" },
    { Character: "LINE FEED", Decimal: 10, Binary: "00001010" },
    { Character: "VERTICAL TAB", Decimal: 11, Binary: "00001011" },
    { Character: "FORM FEED", Decimal: 12, Binary: "00001100" },
    { Character: "CARRIAGE RETURN", Decimal: 13, Binary: "00001101" },
    { Character: "SHIFT OUT", Decimal: 14, Binary: "00001110" },
    { Character: "SHIFT IN", Decimal: 15, Binary: "00001111" },
    { Character: "DATA LINK ESCAPE", Decimal: 16, Binary: "00010000" },
    { Character: "DEVICE CONTROL 1", Decimal: 17, Binary: "00010001" },
    { Character: "DEVICE CONTROL 2", Decimal: 18, Binary: "00010010" },
    { Character: "DEVICE CONTROL 3", Decimal: 19, Binary: "00010011" },
    { Character: "DEVICE CONTROL 4", Decimal: 20, Binary: "00010100" },
    { Character: "NEGATIVE ACKNOWLEDGE", Decimal: 21, Binary: "00010101" },
    { Character: "SYNCHRONOUS IDLE", Decimal: 22, Binary: "00010110" },
    { Character: "END OF TRANS. BLOCK", Decimal: 23, Binary: "00010111" },
    { Character: "CANCEL", Decimal: 24, Binary: "00011000" },
    { Character: "END OF MEDIUM", Decimal: 25, Binary: "00011001" },
    { Character: "SUBSTITUTE", Decimal: 26, Binary: "00011010" },
    { Character: "ESCAPE", Decimal: 27, Binary: "00011011" },
    { Character: "FILE SEPARATOR", Decimal: 28, Binary: "00011100" },
    { Character: "GROUP SEPARATOR", Decimal: 29, Binary: "00011101" },
    { Character: "RECORD SEPARATOR", Decimal: 30, Binary: "00011110" },
    { Character: "UNIT SEPARATOR", Decimal: 31, Binary: "00011111" },

    { Character: "SPACE", Decimal: 32, Binary: "00100000" },
    { Character: "!", Decimal: 33, Binary: "00100001" },
    { Character: '"', Decimal: 34, Binary: "00100010" },
    { Character: "#", Decimal: 35, Binary: "00100011" },
    { Character: "$", Decimal: 36, Binary: "00100100" },
    { Character: "%", Decimal: 37, Binary: "00100101" },
    { Character: "&", Decimal: 38, Binary: "00100110" },
    { Character: "'", Decimal: 39, Binary: "00100111" },
    { Character: "(", Decimal: 40, Binary: "00101000" },
    { Character: ")", Decimal: 41, Binary: "00101001" },
    { Character: "*", Decimal: 42, Binary: "00101010" },
    { Character: "+", Decimal: 43, Binary: "00101011" },
    { Character: ",", Decimal: 44, Binary: "00101100" },
    { Character: "-", Decimal: 45, Binary: "00101101" },
    { Character: ".", Decimal: 46, Binary: "00101110" },
    { Character: "/", Decimal: 47, Binary: "00101111" },

    { Character: "0", Decimal: 48, Binary: "00110000" },
    { Character: "1", Decimal: 49, Binary: "00110001" },
    { Character: "2", Decimal: 50, Binary: "00110010" },
    { Character: "3", Decimal: 51, Binary: "00110011" },
    { Character: "4", Decimal: 52, Binary: "00110100" },
    { Character: "5", Decimal: 53, Binary: "00110101" },
    { Character: "6", Decimal: 54, Binary: "00110110" },
    { Character: "7", Decimal: 55, Binary: "00110111" },
    { Character: "8", Decimal: 56, Binary: "00111000" },
    { Character: "9", Decimal: 57, Binary: "00111001" },

    { Character: ":", Decimal: 58, Binary: "00111010" },
    { Character: ";", Decimal: 59, Binary: "00111011" },
    { Character: "<", Decimal: 60, Binary: "00111100" },
    { Character: "=", Decimal: 61, Binary: "00111101" },
    { Character: ">", Decimal: 62, Binary: "00111110" },
    { Character: "?", Decimal: 63, Binary: "00111111" },
];

const asciiDataTwo = [
    { Character: "@", Decimal: 64, Binary: "01000000" },

    { Character: "A", Decimal: 65, Binary: "01000001" },
    { Character: "B", Decimal: 66, Binary: "01000010" },
    { Character: "C", Decimal: 67, Binary: "01000011" },
    { Character: "D", Decimal: 68, Binary: "01000100" },
    { Character: "E", Decimal: 69, Binary: "01000101" },
    { Character: "F", Decimal: 70, Binary: "01000110" },
    { Character: "G", Decimal: 71, Binary: "01000111" },
    { Character: "H", Decimal: 72, Binary: "01001000" },
    { Character: "I", Decimal: 73, Binary: "01001001" },
    { Character: "J", Decimal: 74, Binary: "01001010" },
    { Character: "K", Decimal: 75, Binary: "01001011" },
    { Character: "L", Decimal: 76, Binary: "01001100" },
    { Character: "M", Decimal: 77, Binary: "01001101" },
    { Character: "N", Decimal: 78, Binary: "01001110" },
    { Character: "O", Decimal: 79, Binary: "01001111" },
    { Character: "P", Decimal: 80, Binary: "01010000" },
    { Character: "Q", Decimal: 81, Binary: "01010001" },
    { Character: "R", Decimal: 82, Binary: "01010010" },
    { Character: "S", Decimal: 83, Binary: "01010011" },
    { Character: "T", Decimal: 84, Binary: "01010100" },
    { Character: "U", Decimal: 85, Binary: "01010101" },
    { Character: "V", Decimal: 86, Binary: "01010110" },
    { Character: "W", Decimal: 87, Binary: "01010111" },
    { Character: "X", Decimal: 88, Binary: "01011000" },
    { Character: "Y", Decimal: 89, Binary: "01011001" },
    { Character: "Z", Decimal: 90, Binary: "01011010" },

    { Character: "[", Decimal: 91, Binary: "01011011" },
    { Character: "\\", Decimal: 92, Binary: "01011100" },
    { Character: "]", Decimal: 93, Binary: "01011101" },
    { Character: "^", Decimal: 94, Binary: "01011110" },
    { Character: "_", Decimal: 95, Binary: "01011111" },
    { Character: "`", Decimal: 96, Binary: "01100000" },

    { Character: "a", Decimal: 97, Binary: "01100001" },
    { Character: "b", Decimal: 98, Binary: "01100010" },
    { Character: "c", Decimal: 99, Binary: "01100011" },
    { Character: "d", Decimal: 100, Binary: "01100100" },
    { Character: "e", Decimal: 101, Binary: "01100101" },
    { Character: "f", Decimal: 102, Binary: "01100110" },
    { Character: "g", Decimal: 103, Binary: "01100111" },
    { Character: "h", Decimal: 104, Binary: "01101000" },
    { Character: "i", Decimal: 105, Binary: "01101001" },
    { Character: "j", Decimal: 106, Binary: "01101010" },
    { Character: "k", Decimal: 107, Binary: "01101011" },
    { Character: "l", Decimal: 108, Binary: "01101100" },
    { Character: "m", Decimal: 109, Binary: "01101101" },
    { Character: "n", Decimal: 110, Binary: "01101110" },
    { Character: "o", Decimal: 111, Binary: "01101111" },
    { Character: "p", Decimal: 112, Binary: "01110000" },
    { Character: "q", Decimal: 113, Binary: "01110001" },
    { Character: "r", Decimal: 114, Binary: "01110010" },
    { Character: "s", Decimal: 115, Binary: "01110011" },
    { Character: "t", Decimal: 116, Binary: "01110100" },
    { Character: "u", Decimal: 117, Binary: "01110101" },
    { Character: "v", Decimal: 118, Binary: "01110110" },
    { Character: "w", Decimal: 119, Binary: "01110111" },
    { Character: "x", Decimal: 120, Binary: "01111000" },
    { Character: "y", Decimal: 121, Binary: "01111001" },
    { Character: "z", Decimal: 122, Binary: "01111010" },

    { Character: "{", Decimal: 123, Binary: "01111011" },
    { Character: "|", Decimal: 124, Binary: "01111100" },
    { Character: "}", Decimal: 125, Binary: "01111101" },
    { Character: "~", Decimal: 126, Binary: "01111110" },
    { Character: "DELETE", Decimal: 127, Binary: "01111111" },
];

const filePermissionsData = [
    {
        Binary: "000",
        Octal: "0 (0+0+0)",
        "String Representation": "---",
        Permissions: "No Permissions",
    },
    {
        Binary: "001",
        Octal: "1 (0+0+1)",
        "String Representation": "--x",
        Permissions: "Execute",
    },
    {
        Binary: "010",
        Octal: "2 (0+2+0)",
        "String Representation": "-w-",
        Permissions: "Write",
    },
    {
        Binary: "011",
        Octal: "3 (0+2+1)",
        "String Representation": "-wx",
        Permissions: "Write + Execute",
    },
    {
        Binary: "100",
        Octal: "4 (4+0+0)",
        "String Representation": "r--",
        Permissions: "Read",
    },
    {
        Binary: "101",
        Octal: "5 (4+0+1)",
        "String Representation": "r-x",
        Permissions: "Read + Execute",
    },
    {
        Binary: "110",
        Octal: "6 (4+2+0)",
        "String Representation": "rw-",
        Permissions: "Read + Write",
    },
    {
        Binary: "111",
        Octal: "7 (4+2+1)",
        "String Representation": "rwx",
        Permissions: "Read + Write + Execute",
    },
];

const fileSizeBinaryData = [
    {
        "Binary Name": "Kibibyte (KiB)",
        Binary: "1,024",
    },
    {
        "Binary Name": "Mebibyte (MiB)",
        Binary: "1,048,576",
    },
    {
        "Binary Name": "Gibibyte (GiB)",
        Binary: "1,073,741,824",
    },
    {
        "Binary Name": "Tebibyte (TiB)",
        Binary: "1,099,511,627,776",
    },
];

const fileSizeDecimalData = [
    {
        "Decimal Name": "Kilobyte (KB)",
        Decimal: "1,000",
    },
    {
        "Decimal Name": "Megabyte (MB)",
        Decimal: "1,000,000",
    },
    {
        "Decimal Name": "Gigabyte (GB)",
        Decimal: "1,000,000,000",
    },
    {
        "Decimal Name": "Terabyte (TB)",
        Decimal: "1,000,000,000,000",
    },
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

        <MinorHeading id="file-systems">File Systems</MinorHeading>

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
            systems and has been in use since XP. It supports file permissions
            and compression, journaling for data recovery after crashes and can
            handle very large files.
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
            A virtual division of a physical storage device into one or more
            partitions. Each partition is given its own drive letter, like C:,
            D:, etc.
        </p>

        <p>
            This can be done by the user for more distinct organisation of files
            or by the operating system for swap space or other system-specific
            reasons.
        </p>

        <ImageFigure
            src="/public/images/file management/disk partitions.avif"
            alt="Interface showing various disks containing numerous partitions."
            caption="Disks divided into multiple partitions as shown in Windows computer management tool."
        />

        <MinorHeading id="file-hierarchy">File Hierarchy</MinorHeading>

        <p>
            Files and folders (AKA directories) follow a tree-like structure to
            facilitate organisation and reduce the likelihood of name conflicts.
            The root folder is the starting point and is usually referred to by
            the drive letter. Individual files can be found by following their
            path from the root. The folder you are currently in (viewed from a
            command line, file explorer, etc) is known as the 'current working
            directory'.
        </p>

        <SideImage
            src="/public/images/file management/file system.png"
            alt="A map of a typical file hierarchy."
        >
            <p>
                In the following hierarchy, three folders exist at the root:
                Pictures, Documents and website. Each contain files and/or
                folders of their own. There are several ways file locations can
                be expressed.
            </p>

            <h4 class="h3">Absolute Path</h4>

            <p>
                The full path starting from the drive root, for example:<br />
                <span class="monospaced inline-block !mt-[0.5rem]"
                    ><b>D:/Pictures/Wallpapers/duck.jpg</b></span
                >
            </p>

            <p>
                The path will break if the files or folders contained in it are
                renamed, moved or deleted.
            </p>

            <h4 class="h3">Relative Path</h4>

            <p>
                The path to a file from elsewhere in the file hierarchy. For
                example, if we wanted to access mountain.jpg and website was the
                current working directory, the following relative path would be
                required:<br />
                <span class="monospaced inline-block !mt-[0.5rem]"
                    ><b>../Pictures/mountain.jpg</b></span
                >
            </p>

            <p>
                The '..' means 'go up one folder level'. We have to come out of
                the website folder to reach the Pictures folder. For index.html
                to link to another web page, it could simply use the path:<br />
                <span class="monospaced inline-block !mt-[0.5rem]"
                    ><b>contact.html</b></span
                >
            </p>
        </SideImage>

        <h4 class="h3 !mt-[1rem]">Root-relative Path</h4>

        <p>
            Occasionally, you may encounter paths like:<br />
            <span class="monospaced inline-block !mt-[0.5rem]"
                ><b>/images/duck.jpg</b></span
            >
        </p>

        <p>
            This type of path is often used in web and software development
            projects where a project root has been defined, allowing for
            absolute paths that start relative to the project root instead of
            the drive root (like C:, D:, etc). This means the project can be
            moved anywhere else in the project hierarchy without the links
            breaking. You can safely ignore this until you start working with,
            for example, React JS or Vue JS.
        </p>

        <InfoBox label="File and Folder Naming" warning>
            <p class="!mt-0">
                Windows tends to be case-insensitive when it comes to files and
                folders, so
                <span class="monospaced"><b>../pictures/Mountain.jpg</b></span>
                and
                <span class="monospaced"><b>../Pictures/mountain.jpg</b></span>
                would be considered equivalent.
            </p>

            <p class="!mb-0">
                However, other operating systems such as Linux distributions are
                case-sensitive, so these paths would be considered distinct. The
                second path would work just fine, but the first would not.
            </p>
        </InfoBox>

        <h4 class="h3" id="file-locking">File Locking</h4>

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

        <h4 class="h3" id="file-attributes">File Attributes</h4>

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
            features. File permissions on Windows operating systems are managed
            using a combination of these attributes.
        </p>

        <h5 class="h4">Unix-style Permissions</h5>

        <p>
            MacOS and Linux distributions use Unix-style permissions where files
            are assigned a digit representing one of up to eight sets of
            permissions. There are three categories of user (owner, group,
            other) while there are three types of permissions (read, write,
            execute). These are typically managed through the command line using
            the
            <span class="font-bold monospaced"
                ><abbr title="Change Mode">chmod</abbr></span
            >
            and
            <span class="font-bold monospaced"
                ><abbr title="Change Owner">chown</abbr></span
            >
            commands.
        </p>

        <Table :data="filePermissionsData" monospaced />

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

        <div class="table-columns">
            <Table :data="fileSizeBinaryData" monospaced />
            <Table :data="fileSizeDecimalData" monospaced />
        </div>

        <InfoBox class="!mt-[1rem]">
            <p class="!my-0">
                This means that a HDD advertised with a capacity of 500GB
                contains only 5,000,000,000 bytes instead of 5,368,709,120 bytes
                since the decimal system is being used, which is why the drive
                reports a capacity of 465GB in the operating system.
            </p>
        </InfoBox>

        <MinorHeading id="ascii">ASCII</MinorHeading>

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
            <Table :data="asciiDataOne" monospaced />
            <Table :data="asciiDataTwo" monospaced />
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

    .table-columns > .table-wrapper {
        margin: 1rem 0;
    }
}
</style>
