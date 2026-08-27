<script setup>
import ImageGallery from "../components/common/ImageGallery.vue";
import MainHeading from "../components/common/MainHeading.vue";
import MinorHeading from "../components/common/MinorHeading.vue";
import PrevNextNav from "../components/common/PrevNextNav.vue";
import SideImage from "../components/common/SideImage.vue";

const prevNextNavData = {
    prevHref: "/",
    prevLabel: "Home",
    nextHref: "/cpu-architecture",
    nextLabel: "CPU Architecture",
};

const deviceData = [
    {
        src: "/public/images/hardware overview/desktop.avif",
        alt: "A desktop computer.",
    },
    {
        src: "/public/images/hardware overview/laptop.avif",
        alt: "An HP laptop computer.",
    },
    {
        src: "/public/images/hardware overview/tablets.avif",
        alt: "Several Samsung tablet computers.",
    },
    {
        src: "/public/images/hardware overview/smartphones.avif",
        alt: "Several generic smartphones.",
    },
];
</script>

<template>
    <section class="section wrapper">
        <PrevNextNav :data="prevNextNavData" />

        <MainHeading>Hardware Overview</MainHeading>

        <p>
            The physical parts that make up a computer system, necessary for
            performing computation, managing data and rendering graphical
            output. External devices, also known as peripherals, such as mice,
            keyboards and monitors are required to properly interface with the
            computer.
        </p>

        <p>Computers come in a variety of forms:</p>

        <ul class="list">
            <li>
                <b>Desktops:</b>
                Static devices with core components stored in a separate case
                that are preferred when performance is required. Highly modular
                and easily upgraded.
            </li>
            <li>
                <b>Laptops:</b>
                Portable all-in-one computers that vary in size and power.
                Components in newer laptops are highly integrated, reducing
                their upgradeability but making them relatively lightweight.
            </li>
            <li>
                <b>Smartphones and Tablets:</b>
                Slim and portable touch screen devices that offer reasonable
                computing performance on the go.
            </li>
        </ul>

        <ImageGallery :data="deviceData" />

        <MinorHeading id="internal-components"
            >Internal Components</MinorHeading
        >

        <p>
            These are the components that make up a typical system unit of a
            desktop computer.
        </p>

        <h4 class="h3">CPU</h4>

        <SideImage
            src="/public/images/hardware overview/ryzen cpu.avif"
            alt="Generic AMD Ryzen CPU."
        >
            <p>
                The brain of the computer that processes instructions and makes
                things happen. Modern CPUs usually come with multiple cores and
                some form of frequency boosting and/or hyperthreading technology
                to better handle demanding computation and multi-tasking.
            </p>

            <a href="/cpu-architecture" class="link">Read more...</a>
        </SideImage>

        <h4 class="h3">GPU</h4>

        <SideImage
            src="/public/images/hardware overview/gpu2.avif"
            alt="Generic graphics card."
        >
            <p>
                Handles the rendering of images, video and 3D graphics.
                Dedicated graphics cards are required for serious tasks, such as
                gaming, video editing or 3D modelling. Many CPUs come with
                integrated graphics chips that are enough for general use.
            </p>
        </SideImage>

        <h4 class="h3">RAM</h4>

        <SideImage
            src="/public/images/hardware overview/ram.avif"
            alt="Two RAM sticks."
        >
            <p>
                Temporary working storage space for actively running programs.
                Modern computers usually have 8-16GB DDR4 or DDR5 RAM as a
                minimum, going up to 32GB or more for high-end systems. Faster
                RAM speeds (measured in MHz) can improve data transfer rates.
            </p>

            <a href="/memory" class="link">Read more...</a>
        </SideImage>

        <h4 class="h3">Motherboard</h4>

        <SideImage
            src="/public/images/hardware overview/motherboard.avif"
            alt="An Intel motherboard."
        >
            <p>
                The main circuit board that connects all components together.
                Possesses a CPU socket, RAM slots, expansion slots (PCI, PCIe),
                power connectors and rear
                <abbr title="Input / Output">I/O</abbr> ports. Can come in
                various form factors to fit different case sizes (<abbr
                    title="Advanced Technology eXtended"
                    >ATX</abbr
                >, micro-ATX,
                <abbr title="mini-Information Technology eXtended"
                    >mini-ITX</abbr
                >).
            </p>
        </SideImage>

        <h4 class="h3">Storage</h4>

        <SideImage
            src="/public/images/hardware overview/storage mediums.avif"
            alt="Storage mediums in a row, including a hard drive and various SSDs."
        >
            <p>
                Long-term data storage mediums include hard disk drives (HDDs)
                and solid state drives (SSDs). SSDs are now the standard for
                operating system installation and general usage, coming in
                <abbr title="Serial Advanced Technology Attachment">SATA</abbr>,
                mSATA and NVMe variants.
            </p>

            <p>
                HDDs are generally cheaper at larger sizes (1TB and up) and find
                common use for bulk storage and archival purposes. They are much
                slower than SSDs, are fragile due to their mechanical design and
                may require defragmentation with frequent use to keep them
                performant.
            </p>

            <a href="/storage" class="link">Read more...</a>
        </SideImage>

        <h4 class="h3">Power Supply</h4>

        <SideImage
            src="/public/images/hardware overview/psu.avif"
            alt="A semi-modular power supply unit."
        >
            <p>
                Converts wall electricity into usable power for components. Come
                in different wattage tiers (e.g. 400w, 600w, 750w). Higher tiers
                are required for more demanding components. Usually given a
                rating to denote energy efficiency, such as 80 plus
                bronze/gold/platinum, with higher rated PSUs being more
                efficient and producing less heat.
            </p>
        </SideImage>

        <h4 class="h3">Cooling</h4>

        <SideImage
            src="/public/images/hardware overview/heatsink.avif"
            alt="A large heatsink with two fans."
        >
            <p>
                CPUs and GPUs generate heat under load, so appropriate cooling
                is essential to prevent failure. Heatsinks with fans are common
                and can vary in size, while water cooling solutions may be found
                in high-end systems. Thermal compound is required to properly
                transfer heat from the chip to the cooler. Cases may also have
                fans to help air move through the system.
            </p>
        </SideImage>

        <h4 class="h3">Case</h4>

        <SideImage
            src="/public/images/hardware overview/case1.avif"
            alt="A standard desktop computer case."
        >
            <p>
                Houses internal system components in a hard shell for protection
                and ease of movement. They come in different sizes and shapes
                depending on one's needs. Enthusiasts may prefer aesthetically
                pleasing cases with lighting options and the ability to show off
                the internals.
            </p>
        </SideImage>

        <MinorHeading id="peripherals">Peripherals</MinorHeading>

        <p>
            These are external devices that enable interaction with computer
            systems. Many of these are specialised and are not required for
            general use.
        </p>

        <h4 class="h3">Monitors</h4>

        <SideImage
            src="/public/images/hardware overview/ultrawide monitor.avif"
            alt="An ultrawide monitor on a desk."
        >
            <p>
                Displays visual output from a computer system and come in
                different sizes and aspect ratios (16:9, 21:9, 4:3, 8:5). Modern
                computers support multiple monitor setups, popular with
                professionals and enthusiasts. High refresh rate monitors are
                popular with gamers.
            </p>
        </SideImage>

        <h4 class="h3">Speakers</h4>

        <SideImage
            src="/public/images/hardware overview/speakers.avif"
            alt="A pair of computer speakers."
        >
            <p>
                Provides a way to hear sound generated by the system and may
                connect to internal or external sound cards for better quality.
                Headphones can be used instead for closer audio monitoring
                purposes or greater privacy.
            </p>
        </SideImage>

        <h4 class="h3">Printers</h4>

        <SideImage
            src="/public/images/hardware overview/printer.avif"
            alt="An inkjet printer."
        >
            <p>
                Allows for the reproduction of digital visuals, such as
                documents and images, on paper using ink or toner. Printing in
                colour is usually more expensive since it uses more ink.
            </p>

            <p>
                Some find it easier to read, analyse and annotate research notes
                and/or material on paper. Another merit to physical backups of
                digital resources are that they can be accessed away from a
                computer.
            </p>
        </SideImage>

        <h4 class="h3">Mice</h4>

        <SideImage
            src="/public/images/hardware overview/mouse.avif"
            alt="A generic computer mouse."
        >
            <p>
                Allows one to interact with visual elements and controls of
                graphical user interfaces using an array of buttons plus at
                least one scroll wheel.
            </p>

            <p>
                Higher quality mice may be wireless with a rechargeable battery,
                allow for button remapping or even include sets of weights to
                alter the feel of the device.
            </p>
        </SideImage>

        <h4 class="h3">Keyboards</h4>

        <SideImage
            src="/public/images/hardware overview/keyboard.avif"
            alt="A full-size computer keyboard."
        >
            <p>
                Allows one to interact with a computer system with an array of
                keys representing letters, numbers, symbols and control
                characters. They vary widely in size, layout and the types of
                key switches used.
            </p>

            <p>
                Premium boards often feature long-lasting mechanical switches
                that offer a more precise feel than traditional rubber dome
                keys, though your mileage may vary. Other sought after switches
                include topre and buckling springs.
            </p>
        </SideImage>

        <div style="display:none">

            <MinorHeading id="development-history"
                >Development History</MinorHeading
            >
    
            <p>
                The world of computing hardware and software has changed greatly
                since the 60s and 70s. The lists below highlights important trends
                and developments of the past four decades to put in perspective how
                much technology has developed.
            </p>
    
            <h4 class="h3">1990s</h4>
    
            <ul class="list">
                <li>
                    CPUs were single-core with speeds typically measuring in the
                    hundreds of MHz.
                </li>
                <li>RAM capacity went from a couple of megabytes to hundreds.</li>
                <li>
                    Graphical hardware acceleration provided by discrete graphics
                    cards able to handle popular 3D video games grow in popularity.
                </li>
                <li>
                    Operating systems such as Windows 3.1 and 95 included
                    sophisticated graphical user interfaces, making it easier to
                    interact with computers outside of a command line.
                </li>
                <li>
                    The internet begins gaining traction, though speeds are slow
                    with dial-up connections allowing for data transfer rates of up
                    to 56Kbps.
                </li>
                <li>
                    The Linux kernel was developed early in the decade for inclusion
                    with the GNU operating system which became a popular server OS
                    due to it's free and open-source nature.
                </li>
            </ul>
    
            <h4 class="h3">2000s</h4>
    
            <ul class="list">
                <li>
                    CPUs were initially mostly single-core with a focus on
                    increasing clock speeds before dual and quad-core appeared later
                    in the decade.
                </li>
                <li>RAM space increased from megabytes to gigabytes in size.</li>
                <li>Hard drives grew from tens to hundreds of gigabytes.</li>
                <li>
                    <abbr title="Accelerated Graphics Port">AGP</abbr> phased out in
                    favour of
                    <abbr title="Peripheral Component Interconnect Express"
                        >PCI Express</abbr
                    >, allowing for greater graphics processing bandwidth.
                </li>
                <li>
                    LCD monitors become standard over CRTs due to their less bulky
                    design.
                </li>
                <li>
                    Years of experimentation with mobile phone form factors end with
                    the introduction of the iPhone, the first proper smartphone.
                </li>
            </ul>
    
            <h4 class="h3">2010s</h4>
    
            <ul class="list">
                <li>
                    Multi-core CPUs generally the standard with a focus on improving
                    energy efficiency and power by reducing their physical size.
                </li>
                <li>Having 8 to 16GB of RAM becomes common.</li>
                <li>
                    SSDs become mainstream due to their improved speed and
                    robustness over HDDs.
                </li>
                <li>
                    USB 3 allows for much faster data transfer between the system
                    and peripherals, especially external storage.
                </li>
                <li>
                    Smartphones grow rapidly in popularity, leading to the
                    proliferation of mobile applications and websites.
                </li>
            </ul>
    
            <h4 class="h3">2020s</h4>
    
            <ul class="list">
                <li>
                    CPUs commonly feature 6-8 cores or more with hyperthreading
                    technology and integrated graphics.
                </li>
                <li>
                    GPUs start including raytracing and AI-specific technologies.
                </li>
                <li>
                    NVMe SSDs become popular due to high speeds and low-profile
                    design.
                </li>
                <li>
                    USB-C offers the most versatile USB connector so far with some
                    variants used for device charging and video output.
                </li>
                <li>
                    High refresh rate monitors grow in popularity, especially with
                    gamers.
                </li>
            </ul>
        </div>

        <PrevNextNav :data="prevNextNavData" />
    </section>
</template>
