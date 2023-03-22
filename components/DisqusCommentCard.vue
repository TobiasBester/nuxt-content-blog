<template>
  <div class="comments">
    <ClientOnly>
      <section class="comments" aria-labelledby="comment">
        <h2 id="comment">Comments</h2>
        <Disqus :identifier="props.title"
                :url="`https://coolandfunandnice.vercel.app/blog/${props.title}`"
                :title="props.title" />
      </section>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>

</style>
