<template>
  <header class="site-header">
    <div class="wrapper">
      <NuxtLink to="/" class="no-underline">
        <figure class="site-logo">
          <h1 class="text-4xl">Site</h1>
        </figure>
      </NuxtLink>

      <nav class="site-nav">
        <ul class="links">
          <li class="link">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li class="link">
            <NuxtLink to="/about">About Me</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader"
}
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
