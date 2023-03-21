<template>
  <main>
    <section class="hero-section">
      <header class="p-6">
        <h1 class="font-black text-9xl">Hello</h1>
        <h4 class="font-black text-2xl">My name Tobias</h4>
        <p class="text-2xl">Take a look at <NuxtLink to="/blog">my blog</NuxtLink></p>
        <p class="text-2xl">Or read all <NuxtLink to="/about">about</NuxtLink> me</p>
        <p class="text-2xl">Maybe look at my art on <a href="https://instagram.com/gunnerlicious_tb/" target="_blank">Instagram</a></p>
        <p class="text-2xl">Perhaps follow me on <a href="https://twitter.com/gunnerliciousTB" target="_blank">Twitter</a>, just avoid my likes.</p>
      </header>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'Cool & Fun & Nice'
})
</script>

<style scoped>

</style>
