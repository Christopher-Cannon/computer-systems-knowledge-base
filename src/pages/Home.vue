<script setup>
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import SideImage from "../components/common/SideImage.vue";
</script>

<template>
    <section class="section wrapper">
        <MainHeading>Overview</MainHeading>

        <p>
            This resource provides fundamental knowledge on computing hardware,
            software, converting between number bases, logical operations and
            arithmetic in binary and hexadecimal. There is also a glossary of
            acronyms and terminology alongside a list of additional resources
            that may be of use.
        </p>

        <p>
            It should go without saying that you do not have to follow the
            topics in the order prescribed. Contents are subject to change.
        </p>

        <MinorHeading>Topics Covered</MinorHeading>

        <div class="topic-grid">
            <div>
                <h4 class="h3">1. Hardware</h4>

                <ul class="list">
                    <li>
                        <a href="/hardware-overview" class="link"
                            >Hardware Overview</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/hardware-overview#internal-components"
                                    class="link"
                                    >Internal Components</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/hardware-overview#peripherals"
                                    class="link"
                                    >Peripherals</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/hardware-overview#development-history"
                                    class="link"
                                    >Development History</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/cpu-architecture" class="link"
                            >CPU Architecture</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/cpu-architecture#core-cpu-components"
                                    class="link"
                                    >Core CPU Components</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/cpu-architecture#fetch-execute-cycle"
                                    class="link"
                                    >Fetch-Execute Cycle</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/cpu-architecture#architectures"
                                    class="link"
                                    >Architectures</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/memory" class="link">Memory</a>

                        <ul class="list">
                            <li>
                                <a
                                    href="/memory#random-access-memory"
                                    class="link"
                                    >Random Access Memory</a
                                >
                            </li>
                            <li>
                                <a href="/memory#read-only-memory" class="link"
                                    >Read-Only Memory</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/storage" class="link">Storage</a>

                        <ul class="list">
                            <li>
                                <a href="/storage#mediums" class="link"
                                    >Mediums</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/storage#comparing-disk-performance"
                                    class="link"
                                    >Comparing Disk Performance</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="h3">2. Software</h4>

                <ul class="list">
                    <li>
                        <a href="/types-of-software" class="link"
                            >Types of Software</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/types-of-software#application-software"
                                    class="link"
                                    >Application Software</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/types-of-software#system-software"
                                    class="link"
                                    >System Software</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/types-of-software#utility-software"
                                    class="link"
                                    >Utility Software</a
                                >
                            </li>
                            <li>
                                <a href="/types-of-software#apis" class="link"
                                    >APIs</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/types-of-software#security-concerns"
                                    class="link"
                                    >Security Concerns</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/operating-systems" class="link"
                            >Operating Systems</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/operating-systems#single-and-multi-user"
                                    class="link"
                                    >Single and Multi User</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/operating-systems#single-and-multi-processor"
                                    class="link"
                                    >Single and Multi Processor</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/operating-systems#multi-tasking"
                                    class="link"
                                    >Multi-tasking</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/operating-systems#network-os"
                                    class="link"
                                    >Network OS</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/operating-systems#real-time-os"
                                    class="link"
                                    >Real-time OS</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/os-layers" class="link"
                            >Operating System Layers</a
                        >

                        <ul class="list">
                            <li>
                                <a href="/os-layers#kernel" class="link"
                                    >Kernel</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/os-layers#memory-management"
                                    class="link"
                                    >Memory Management</a
                                >
                            </li>
                            <li>
                                <a href="/os-layers#input-output" class="link"
                                    >Input / Output</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/os-layers#file-management"
                                    class="link"
                                    >File Management</a
                                >
                            </li>
                            <li>
                                <a href="/os-layers#user-interface" class="link"
                                    >User Interface</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/os-layers#layer-interaction"
                                    class="link"
                                    >Layer Interaction</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/file-management" class="link"
                            >File Management</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/file-management#file-systems"
                                    class="link"
                                    >File Systems</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/file-management#file-hierarchy"
                                    class="link"
                                    >File Hierarchy</a
                                >
                            </li>
                            <li>
                                <a href="/file-management#ascii" class="link"
                                    >ASCII</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="h3">3. Conversions</h4>

                <ul class="list">
                    <li>
                        <a href="/number-bases" class="link">Number Bases</a>

                        <ul class="list">
                            <li>
                                <a href="/number-bases#binary" class="link"
                                    >Binary</a
                                >
                            </li>
                            <li>
                                <a href="/number-bases#hexadecimal" class="link"
                                    >Hexadecimal</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/number-bases#comparing-number-bases"
                                    class="link"
                                    >Comparing Number Bases</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/base-conversion" class="link"
                            >Base Conversion</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/base-conversion#decimal-binary-conversion"
                                    class="link"
                                    >Decimal Binary Conversion</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/base-conversion#hexadecimal-binary-conversion"
                                    class="link"
                                    >Hexadecimal Binary Conversion</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/base-conversion#decimal-hexadecimal-conversion"
                                    class="link"
                                    >Decimal Hexadecimal Conversion</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="h3">4. Arithmetic</h4>

                <ul class="list">
                    <li>
                        <a href="/binary-arithmetic" class="link"
                            >Binary Arithmetic</a
                        >

                        <ul class="list">
                            <li>
                                <a
                                    href="/binary-arithmetic#addition"
                                    class="link"
                                    >Addition</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/binary-arithmetic#subtraction"
                                    class="link"
                                    >Subtraction</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/hex-arithmetic" class="link"
                            >Hexadecimal Arithmetic</a
                        >

                        <ul class="list">
                            <li>
                                <a href="/hex-arithmetic#addition" class="link"
                                    >Addition</a
                                >
                            </li>
                            <li>
                                <a
                                    href="/hex-arithmetic#subtraction"
                                    class="link"
                                    >Subtraction</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="h3">5. Logic</h4>

                <ul class="list">
                    <li>
                        <a href="/logical-operations" class="link"
                            >Logical Operations</a
                        >

                        <ul class="list">
                            <li>
                                <a href="/logical-operations#not" class="link"
                                    >NOT</a
                                >
                            </li>
                            <li>
                                <a href="/logical-operations#and" class="link"
                                    >AND</a
                                >
                            </li>
                            <li>
                                <a href="/logical-operations#or" class="link"
                                    >OR</a
                                >
                            </li>
                            <li>
                                <a href="/logical-operations#xor" class="link"
                                    >XOR</a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="h3">6. Resources</h4>

                <ul class="list">
                    <li>
                        <a href="/glossary" class="link">Glossary</a>

                        <ul class="list">
                            <li></li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <a href="/links" class="link">Links</a>

                        <ul class="list">
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (min-width: 900px) {
    .topic-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
}

@media (min-width: 1280px) {
    .topic-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
