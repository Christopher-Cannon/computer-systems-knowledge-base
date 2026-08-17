<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";

const prevNextNavData = {
    prevHref: "/storage",
    prevLabel: "Storage",
    nextHref: "/operating-systems",
    nextLabel: "Operating Systems",
};

const applicationData = [
    {
        src: "/public/images/software/msword.avif",
        alt: "Logo for the Microsoft Word word processor.",
    },
    {
        src: "/public/images/software/inkscape.avif",
        alt: "Logo for the open-source vector tool Inkscape.",
    },
    {
        src: "/public/images/software/audacity.avif",
        alt: "Logo for the audio editing tool Audacity.",
    },
];

const utilityData = [
    {
        src: "/public/images/software/sevenzip.avif",
        alt: "Logo for the 7Zip file compression software'.",
    },
    {
        src: "/public/images/software/winrar.avif",
        alt: "Logo for the WinRAR file compression software.",
    },
    {
        src: "/public/images/software/avg.avif",
        alt: "Logo for the AVG antivirus software.",
    },
    {
        src: "/public/images/software/malwarebytes.avif",
        alt: "Logo for the MalwareBytes antivirus software.",
    },
];
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

        <MinorHeading id="application-software"
            >Application Software</MinorHeading
        >

        <p>
            We use these to carry out specific tasks, whether for professional
            (database management, video editing, audio engineering) or
            recreational purposes (video games, audio and video players). All
            other types of software are to ensure these can run effectively.
        </p>

        <ImageGallery :data="applicationData" col3 />

        <MinorHeading id="system-software">System Software</MinorHeading>

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

        <h4 class="h3">Device Drivers</h4>

        <p>
            A small piece of software that enables an operating system the
            ability to understand and communicate with hardware devices. All
            peripherals require drivers to be used and, while operating systems
            come with generic drivers for standard devices like keyboards and
            mice, specialist devices often require driver installation before
            they can be fully utilised.
        </p>

        <MinorHeading id="utility-software">Utility Software</MinorHeading>

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

        <ImageGallery :data="utilityData" />

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

        <MinorHeading id="apis">APIs</MinorHeading>

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

        <MinorHeading id="security-concerns">Security Concerns</MinorHeading>

        <p>
            We use software and the internet regularly for all kinds of
            purposes, from professional work and recreation to conducting
            financial transactions and managing government services. Criminals
            see a valuable opportunity to sabotage systems, steal valuable
            information, gain unauthorised access to user accounts and bank
            details or even simply deny access to important resources.
        </p>

        <p>
            It is vital to be aware of security issues that affect users of
            software and the internet to prevent harm or significant loss.
        </p>

        <h4 class="h3">Malware</h4>

        <p>
            Software designed to steal sensitive data, damage computer systems
            or spy on users.
        </p>

        <ul class="list">
            <li>
                <b>Virus:</b>
                Infects files and spreads when the host program runs, usually
                interfering with the running of the system.
            </li>
            <li>
                <b>Worm:</b>
                Automatically replicates itself across networks.
            </li>
            <li>
                <b>Trojan:</b>
                A virus disguised as legitimate software.
            </li>
            <li>
                <b>Spyware:</b>
                Secretly monitors user activity, such as keyboard input for
                uncovering user credentials, which is sent back to the attacker.
            </li>
            <li>
                <b>Ransomware:</b>
                Encrypts files, preventing them from being opened, and demands
                payment for decryption.
            </li>
        </ul>

        <h4 class="h3">Network Attacks</h4>

        <p>
            These target users and networked computing infrastructure to steal
            sensitive data, take over systems or deny access to resources.
        </p>

        <ul class="list">
            <li>
                <b>Phishing:</b>
                The practice of deceiving users with fake emails or websites to
                get them to hand over sensitive information, such as login
                credentials or session keys.
            </li>
            <li>
                <b>Directed Denial of Service:</b>
                Floods a server with high-volumes of network traffic to deny
                access by genuine users.
            </li>
            <li>
                <b>SQL Injection:</b>
                A technique that involves getting the server to run unauthorised
                database queries by sending SQL through form inputs, search
                bars, etc.
            </li>
            <li>
                <b>Man in the Middle:</b>
                The interception of traffic between two parties, potentially
                revealing data like login credentials or encryption keys.
            </li>
        </ul>

        <h4 class="h3">Mitigation</h4>

        <p>
            While there is no such thing as perfect security, there are ways to
            defend yourself, whether by technical means or through simple
            awareness.
        </p>

        <ul class="card-grid">
            <li class="card">Use firewalls to block unauthorised traffic.</li>
            <li class="card">
                Install anti-virus software to detect and remove malware.
            </li>
            <li class="card">
                Encrypt data to better protect it during transit.
            </li>
            <li class="card">Ensure important software is kept up-to-date.</li>
            <li class="card">
                Be wary of suspicious emails, especially if they come with
                unanticipated attachments.
            </li>
            <li class="card">
                Check URLs to ensure they are legitimate before entering any
                sensitive data.
            </li>
        </ul>

        <h4 class="h3">Passwords</h4>

        <p>
            A password is a common way to prove a user is who they say they are
            so they can be granted access to accounts and systems. Attackers may
            try to gain access to accounts via several methods.
        </p>

        <ul class="list">
            <li>
                <b>Brute force:</b>
                All combinations of a password are tried until a match is found.
            </li>
            <li>
                <b>Dictionary attack:</b>
                A more considerate approach where common words and entries in
                leaked password lists are tried.
            </li>
            <li>
                <b>Credential stuffing:</b>
                Username and password combinations from previous data breaches
                are tried.
            </li>
        </ul>

        <h5 class="h4">Good Practices</h5>

        <p>
            Strong passwords are important, especially if an account or system
            has financial information attached to it. Ideally, they should:
        </p>

        <ul class="list">
            <li>Be long, containing at least 12 characters or more.</li>
            <li>
                Contain a mix of upper and lowercase letters, numbers and
                symbols.
            </li>
            <li>Avoid predictable patterns or personal information.</li>
            <li>Be unique to the account it's used for.</li>
            <li>
                Be changed every couple of months, especially after a major data
                breach.
            </li>
        </ul>

        <p>
            Other recommendations include using a password manager and
            multi-factor authentication as an extra layer of security. While
            some of these methods can result in time-consuming logins, it's
            better to be safe than sorry when important personal information is
            on the line.
        </p>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
