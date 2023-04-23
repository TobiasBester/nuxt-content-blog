<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="no-underline">
        <figure class="site-logo">
          <h1 class="text-4xl">Cool & Fun & Nice</h1>
        </figure>
      </NuxtLink>

      <nav class="site-nav">
        <ul class="flex flex-col md:flex-row">
          <li v-for="link in links" :key="link.id" class="link pb-1 md:px-2">
            <NuxtLink :to="link.route">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
    {
        id: 'blog',
        route: '/blog',
        text: 'Blog'
    },
    {
        id: 'art',
        route: '/art',
        text: '"Art"'
    },
    {
        id: 'about',
        route: '/about',
        text: 'About Me'
    },
]
</script>

<style scoped>
.site-header {
    @apply sticky top-0 w-full p-4 bg-red-900 border-b-2 border-slate-50 border-opacity-30 backdrop-blur-lg z-20;
}

.site-header > .wrapper {
    @apply flex items-center justify-between max-w-6xl m-auto;
}

.site-logo {
    @apply font-black text-lg;
}
</style>
