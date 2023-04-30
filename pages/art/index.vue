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
    }
]

</script>

<style scoped>
</style>
