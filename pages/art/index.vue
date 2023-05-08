<template>
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">"Art"</h1>
        <p class="font-medium text-lg">Some images. Click on an image to possibly see behind-the-scenes details.</p>
      </div>
    </header>
    <section class="page-section">
      <div class="grid grid-cols-1 gap-2">
        <img-thumbnail
            v-for="image in images"
            :key="image.id"
            v-bind="image"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ImgThumbnail from "~/components/ImgThumbnail.vue"

interface ImageInfo {
    id: string,
    src: string,
    alt: string,
    caption: string,
    reference?: string,
    related?: ImageInfo[],
}

const images: ImageInfo[] = [
    {
        id: 'mountains',
        src: 'images/art/mountains-1vPblXnxhds.webp',
        alt: 'MS Painting of brown mountains with a blue river',
        caption: 'Mountains - 2022 - MS Paint',
        reference: 'https://unsplash.com/photos/1vPblXnxhds',
    },
    {
        id: 'cp-39',
        src: 'images/art/cyberpunk/photomode_39.webp',
        alt: 'In-game screenshot from Cyberpunk 2077',
        caption: 'Cyberpunk 2077',
        related: [{
            id: 'cp-1',
            src: 'images/art/cyberpunk/photomode_1.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-2',
            src: 'images/art/cyberpunk/photomode_2.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-3',
            src: 'images/art/cyberpunk/photomode_3.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-4',
            src: 'images/art/cyberpunk/photomode_4.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-5',
            src: 'images/art/cyberpunk/photomode_5.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-6',
            src: 'images/art/cyberpunk/photomode_6.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-7',
            src: 'images/art/cyberpunk/photomode_7.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-8',
            src: 'images/art/cyberpunk/photomode_8.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-9',
            src: 'images/art/cyberpunk/photomode_9.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-10',
            src: 'images/art/cyberpunk/photomode_10.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-11',
            src: 'images/art/cyberpunk/photomode_11.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-12',
            src: 'images/art/cyberpunk/photomode_12.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-13',
            src: 'images/art/cyberpunk/photomode_13.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-14',
            src: 'images/art/cyberpunk/photomode_14.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-15',
            src: 'images/art/cyberpunk/photomode_15.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-16',
            src: 'images/art/cyberpunk/photomode_16.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-17',
            src: 'images/art/cyberpunk/photomode_17.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-18',
            src: 'images/art/cyberpunk/photomode_18.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-19',
            src: 'images/art/cyberpunk/photomode_19.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-20',
            src: 'images/art/cyberpunk/photomode_20.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-21',
            src: 'images/art/cyberpunk/photomode_21.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-22',
            src: 'images/art/cyberpunk/photomode_22.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-23',
            src: 'images/art/cyberpunk/photomode_23.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-24',
            src: 'images/art/cyberpunk/photomode_24.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-25',
            src: 'images/art/cyberpunk/photomode_25.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-26',
            src: 'images/art/cyberpunk/photomode_26.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-27',
            src: 'images/art/cyberpunk/photomode_27.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-28',
            src: 'images/art/cyberpunk/photomode_28.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-29',
            src: 'images/art/cyberpunk/photomode_29.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-30',
            src: 'images/art/cyberpunk/photomode_30.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-31',
            src: 'images/art/cyberpunk/photomode_31.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-32',
            src: 'images/art/cyberpunk/photomode_32.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-33',
            src: 'images/art/cyberpunk/photomode_33.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-34',
            src: 'images/art/cyberpunk/photomode_34.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-35',
            src: 'images/art/cyberpunk/photomode_35.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-36',
            src: 'images/art/cyberpunk/photomode_36.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-37',
            src: 'images/art/cyberpunk/photomode_37.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-38',
            src: 'images/art/cyberpunk/photomode_38.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }, {
            id: 'cp-40',
            src: 'images/art/cyberpunk/photomode_40.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Cyberpunk 2077',
        }]
    },
    {
        id: 'cliffside-lake',
        src: 'images/art/drawing-cliff-lake.webp',
        alt: 'Graphite drawing of lake surrounded by forest cliffs',
        caption: 'Cliffside Lake - 2021 - Graphite',
        related: [{
            id: 'cliffside-lake-ref',
            src: 'images/art/drawing-cliff-lake-ref.webp',
            alt: 'Reference image of lake surrounded by forest cliffs',
            caption: 'Reference',
        }],
    },
    {
        id: 'rdr2-3',
        src: 'images/art/rdr2/3.webp',
        alt: 'In-game screenshot from Cyberpunk 2077',
        caption: 'Red Dead Redemption 2',
        related: [{
            id: 'rdr2-0',
            src: 'images/art/rdr2/0.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-1',
            src: 'images/art/rdr2/1.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-2',
            src: 'images/art/rdr2/2.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-4',
            src: 'images/art/rdr2/4.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-5',
            src: 'images/art/rdr2/5.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-6',
            src: 'images/art/rdr2/6.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-7',
            src: 'images/art/rdr2/7.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-8',
            src: 'images/art/rdr2/8.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-9',
            src: 'images/art/rdr2/9.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-10',
            src: 'images/art/rdr2/10.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-11',
            src: 'images/art/rdr2/11.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-12',
            src: 'images/art/rdr2/12.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-13',
            src: 'images/art/rdr2/13.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-14',
            src: 'images/art/rdr2/14.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-15',
            src: 'images/art/rdr2/15.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-16',
            src: 'images/art/rdr2/16.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-17',
            src: 'images/art/rdr2/17.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-18',
            src: 'images/art/rdr2/18.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-19',
            src: 'images/art/rdr2/19.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-20',
            src: 'images/art/rdr2/20.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-21',
            src: 'images/art/rdr2/21.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-22',
            src: 'images/art/rdr2/22.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-23',
            src: 'images/art/rdr2/23.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-24',
            src: 'images/art/rdr2/24.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-25',
            src: 'images/art/rdr2/25.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-26',
            src: 'images/art/rdr2/26.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-27',
            src: 'images/art/rdr2/27.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-28',
            src: 'images/art/rdr2/28.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-29',
            src: 'images/art/rdr2/29.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-30',
            src: 'images/art/rdr2/30.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-31',
            src: 'images/art/rdr2/31.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, {
            id: 'rdr2-32',
            src: 'images/art/rdr2/32.webp',
            alt: 'In-game screenshot from Cyberpunk 2077',
            caption: 'Red Dead Redemption 2',
        }, ]
    },
    {
        id: 'mr-bubz',
        src: 'images/art/mr-bubz.webp',
        alt: 'Black pen drawing of a close-up shot of a small dog with bulging eyes',
        caption: 'Mr Bubz - 2020 - Pen',
        reference: 'https://www.youtube.com/watch?v=ihUQ3ZE4kB8'
    },
    {
        id: 'wenger',
        src: 'images/art/wenger.webp',
        alt: 'Graphite drawing of Arsene Wenger looking forward',
        caption: 'Le Professeur - 2015 - Graphite',
        related: [{
            id: 'wenger-ref',
            src: 'images/art/wenger-ref-2.webp',
            alt: 'Reference image of Arsene Wenger drawing below actual image',
            caption: 'Reference vs drawing',
        }],
    },
    {
        id: 'spielberg',
        src: 'images/art/spielberg.webp',
        alt: 'Graphite drawing of Steven Spielberg looking into camera',
        caption: 'Spielberg - 2013 - Graphite',
        related: [{
            id: 'spielberg-ref',
            src: 'images/art/spielberg-ref.webp',
            alt: 'Reference image of Steven Spielberg drawing',
            caption: 'Reference',
        }],
    },
    {
        id: 'ouma-oom-bob',
        src: 'images/art/ouma-oom-bob.webp',
        alt: 'Graphite drawing of a smiling old man and woman sitting besides each other on a couch',
        caption: 'Ouma en Oom Bob - 2013 - Graphite',
        related: [{
            id: 'ouma-oom-bob-comparison',
            src: 'images/art/ouma-oom-bob-comparison.webp',
            alt: 'Framed drawing of old couple above reference image',
            caption: 'From reference to framed final product',
        }, {
            id: 'ouma-oom-bob-oom-bob',
            src: 'images/art/ouma-oom-bob-oom-bob.webp',
            alt: 'Half of drawing with old man',
            caption: 'Oom Bob',
        }, {
            id: 'ouma-oom-ouma',
            src: 'images/art/ouma-oom-bob-ouma.webp',
            alt: 'Half of drawing with old woman',
            caption: 'Ouma',
        }, {
            id: 'ouma-oom-bob-irl',
            src: 'images/art/ouma-oom-bob-irl.webp',
            alt: 'Image of old couple holding framed drawing of themselves',
            caption: 'Happy customers (I didn\'t really charge them)',
        }],
    },
]

</script>

<style scoped>
</style>
