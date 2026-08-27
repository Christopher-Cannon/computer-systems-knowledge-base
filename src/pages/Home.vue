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

        <router-link to="/hardware-overview" class="button"
            >Get Started</router-link
        >

        <MinorHeading>Topics Covered</MinorHeading>

        <div class="topic-grid">
            <div>
                <h4 class="h3">1. Hardware</h4>

                <ul class="list">
                    <li>
                        <router-link to="/hardware-overview" class="link"
                            >Hardware Overview</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/hardware-overview#internal-components"
                                    class="link"
                                    >Internal Components</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/hardware-overview#peripherals"
                                    class="link"
                                    >Peripherals</router-link
                                >
                            </li>
                            <li style="display:none">
                                <router-link
                                    to="/hardware-overview#development-history"
                                    class="link"
                                    >Development History</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/cpu-architecture" class="link"
                            >CPU Architecture</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/cpu-architecture#core-cpu-components"
                                    class="link"
                                    >Core CPU Components</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/cpu-architecture#assembly"
                                    class="link"
                                    >Assembly</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/cpu-architecture#fetch-execute-cycle"
                                    class="link"
                                    >Fetch-Execute Cycle</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/cpu-architecture#major-architectures"
                                    class="link"
                                    >Major Architectures</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/cpu-architecture#microarchitecture"
                                    class="link"
                                    >Microarchitecture</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/memory" class="link"
                            >Memory</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/memory#random-access-memory"
                                    class="link"
                                    >Random Access Memory</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/memory#read-only-memory"
                                    class="link"
                                    >Read-Only Memory</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/storage" class="link"
                            >Storage</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link to="/storage#mediums" class="link"
                                    >Mediums</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/storage#comparing-disk-performance"
                                    class="link"
                                    >Comparing Disk Performance</router-link
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
                        <router-link to="/types-of-software" class="link"
                            >Types of Software</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/types-of-software#application-software"
                                    class="link"
                                    >Application Software</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/types-of-software#system-software"
                                    class="link"
                                    >System Software</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/types-of-software#utility-software"
                                    class="link"
                                    >Utility Software</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/types-of-software#apis"
                                    class="link"
                                    >APIs</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/types-of-software#security-concerns"
                                    class="link"
                                    >Security Concerns</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/operating-systems" class="link"
                            >Operating Systems</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/operating-systems#single-and-multi-user"
                                    class="link"
                                    >Single and Multi User</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/operating-systems#single-and-multi-processor"
                                    class="link"
                                    >Single and Multi Processor</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/operating-systems#multi-tasking"
                                    class="link"
                                    >Multi-tasking</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/operating-systems#network-os"
                                    class="link"
                                    >Network OS</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/operating-systems#real-time-os"
                                    class="link"
                                    >Real-time OS</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/os-layers" class="link"
                            >Operating System Layers</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link to="/os-layers#kernel" class="link"
                                    >Kernel</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/os-layers#memory-management"
                                    class="link"
                                    >Memory Management</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/os-layers#input-output"
                                    class="link"
                                    >Input / Output</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/os-layers#file-management"
                                    class="link"
                                    >File Management</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/os-layers#user-interface"
                                    class="link"
                                    >User Interface</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/os-layers#layer-interaction"
                                    class="link"
                                    >Layer Interaction</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/file-management" class="link"
                            >File Management</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/file-management#file-systems"
                                    class="link"
                                    >File Systems</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/file-management#file-hierarchy"
                                    class="link"
                                    >File Hierarchy</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/file-management#ascii"
                                    class="link"
                                    >ASCII</router-link
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
                        <router-link to="/number-bases" class="link"
                            >Number Bases</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/number-bases#binary"
                                    class="link"
                                    >Binary</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/number-bases#hexadecimal"
                                    class="link"
                                    >Hexadecimal</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/number-bases#comparing-number-bases"
                                    class="link"
                                    >Comparing Number Bases</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/base-conversion" class="link"
                            >Base Conversion</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/base-conversion#decimal-binary-conversion"
                                    class="link"
                                    >Decimal Binary Conversion</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/base-conversion#hexadecimal-binary-conversion"
                                    class="link"
                                    >Hexadecimal Binary Conversion</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/base-conversion#decimal-hexadecimal-conversion"
                                    class="link"
                                    >Decimal Hexadecimal Conversion</router-link
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
                        <router-link to="/binary-arithmetic" class="link"
                            >Binary Arithmetic</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/binary-arithmetic#addition"
                                    class="link"
                                    >Addition</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/binary-arithmetic#subtraction"
                                    class="link"
                                    >Subtraction</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/hex-arithmetic" class="link"
                            >Hexadecimal Arithmetic</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/hex-arithmetic#addition"
                                    class="link"
                                    >Addition</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/hex-arithmetic#subtraction"
                                    class="link"
                                    >Subtraction</router-link
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
                        <router-link to="/logical-operations" class="link"
                            >Logical Operations</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/logical-operations#not"
                                    class="link"
                                    >NOT</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/logical-operations#and"
                                    class="link"
                                    >AND</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/logical-operations#or"
                                    class="link"
                                    >OR</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/logical-operations#xor"
                                    class="link"
                                    >XOR</router-link
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
                        <router-link to="/glossary" class="link"
                            >Glossary</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link
                                    to="/glossary#hardware"
                                    class="link"
                                    >Hardware</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/glossary#cpu" class="link"
                                    >CPU</router-link
                                >
                            </li>
                            <li>
                                <router-link to="/glossary#memory" class="link"
                                    >Memory</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/glossary#software"
                                    class="link"
                                    >Software</router-link
                                >
                            </li>
                            <li>
                                <router-link
                                    to="/glossary#file-formats"
                                    class="link"
                                    >File Formats</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul class="list">
                    <li>
                        <router-link to="/links" class="link"
                            >Resource Links</router-link
                        >

                        <ul class="list !mt-[0.5rem]">
                            <li>
                                <router-link to="/links#cpu" class="link"
                                    >CPU</router-link
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
.button {
    display: block;
    font-weight: bold;
    padding: 0.75rem 2rem;
    text-align: center;
    max-width: 400px;
    margin: 2rem auto;
}

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
