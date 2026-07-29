<script setup>
import ImageFigure from '../components/common/ImageFigure.vue';
import ImageGallery from '../components/common/ImageGallery.vue';
import InfoBox from '../components/common/InfoBox.vue';
import Link from '../components/common/Link.vue';
import MainHeading from '../components/common/MainHeading.vue';
import MinorHeading from '../components/common/MinorHeading.vue';
import Table from '../components/common/Table.vue';

const imageGalleryItems = [
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
    {
        "src": "/public/images/forest.avif",
        "alt": "A dense forest.",
    },
];

const tableData = [
    {
        "id": 1,
        "title": "Keyboard",
        "description": "For inputting text.",
    },
    {
        "id": 2,
        "title": "Mouse",
        "description": "For interacting with interfaces.",
    },
    {
        "id": 3,
        "title": "Monitor",
        "description": "Allows you to see things.",
    },
];

</script>

<template>
    <section class="section wrapper">
        <MainHeading>Overview</MainHeading>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rerum dicta cum. Vero, voluptatibus quia suscipit eveniet repudiandae consequuntur ipsa omnis? Est perferendis reiciendis nesciunt.
        </p>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus hic reprehenderit illum ipsam similique quo reiciendis deleniti alias, iste odio aspernatur assumenda eaque repudiandae consequatur dolorum iure, possimus sed.
        </p>

        <ImageGallery :data="imageGalleryItems" />

        <MinorHeading>Something Else</MinorHeading>

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae voluptate facere dolorem?
        </p>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic similique alias expedita saepe! Enim quo aut eius.
        </p>

        <ImageFigure
            src="/public/images/forest.avif" 
            alt="A dense forest."
            caption="You can add commentary here."
        />

        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eum <Link href="/test">here is a link</Link> ipsum cum quam suscipit porro voluptates quas, blanditiis quibusdam asperiores atque repudiandae?
        </p>
        
        <InfoBox label="Something to Think About">
            <p class="!mt-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tempore modi esse impedit nobis labore.
            </p>

            <ImageFigure
                src="/public/images/forest.avif" 
                alt="A dense forest."
                caption="You can add commentary here."
            />
    
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore impedit dignissimos esse tempora ea at velit quibusdam facere recusandae!
            </p>
    
            <ul class="list">
                <li>
                    <a href="#" class="link">Test link to nowhere</a>
                </li>
                <li>
                    <a href="#" class="link">Test link to nowhere</a>
                </li>
                <li>
                    <a href="#" class="link">Test link to nowhere</a>
                </li>
            </ul>
        </InfoBox>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga, dolorem nam velit numquam repudiandae autem totam illum sunt enim voluptatem, ut eos labore dolore eligendi! Eligendi similique a nobis ipsum?
        </p>

        <Table :data="tableData" />

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus minus, necessitatibus eveniet at assumenda et voluptatum odio aliquam vel commodi velit. Eaque, aliquid eligendi impedit aliquam dolores nam.
        </p>
    </section>
</template>