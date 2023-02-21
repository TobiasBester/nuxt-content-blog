<template>
  <div class="tag-list" :class="{ active: expanded }">
    <button @click="toggleExpand" class="cta w-icon">
      <TagIcon class="icon solid"></TagIcon>
      <span>Tags</span>
    </button>
    <ul class="article-tags" :class="{ expanded }">
      <li v-for="(tag, i) in articleTags" :key="i" class="tag">
        <NuxtLink :to="`/blog/tags/${tag}`" class="font-semibold">{{ tag }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { TagIcon } from '@heroicons/vue/24/solid'

const expanded = ref(false)

const flatten = (tags, key) => {
  return tags.map(tag => {
    let _tag = tag
    if (tag[key]) {
      _tag = flatten(tag[key])
    }
    return _tag
  }).flat(1)
}

const toggleExpand = () => {
  expanded.value = !expanded.value
}

const { data } = await useAsyncData('tags', () => queryContent('blog').only(['tags']).find())

const articleTags = [...new Set(flatten(data.value, 'tags'))]
</script>

<style scoped>
.tag-list {
  @apply flex items-center gap-2 p-2 border border-transparent  rounded-lg;
}

.tag-list.active {
  @apply border-slate-200;
}

.article-tags {
  @apply transition-all max-w-0 overflow-hidden;
}

.article-tags.expanded {
  @apply max-w-full;
}
</style>
