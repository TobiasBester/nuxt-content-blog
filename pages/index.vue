<template>
  <main>
    <section class="hero-section">
      <header class="p-6">
        <h1 class="font-black text-8xl">Welcome to my site</h1>
        <p>Take a look at <NuxtLink to="/blog">my blog</NuxtLink></p>
      </header>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'All articles'
})
</script>

<style scoped>

</style>
