<template>
  <ul class="prev-next-cont">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev._path">
        <ArrowLeftIcon class="icon stroke" />
        <span>{{ prev.title }}</span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next._path">
        <span>{{ next.title }}</span>
        <ArrowRightIcon class="icon stroke" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/solid"

defineProps({
  prev: {
    type: Object
  },
  next: {
    type: Object
  }
})
</script>

<style scoped>
.prev-next-cont {
  @apply flex gap-4 justify-between p-4 border border-slate-200 rounded-lg;
}
.link-item a {
  @apply flex gap-2;
}
</style>
