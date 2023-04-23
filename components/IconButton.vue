<template>
  <button type="button" class="btn">
    <slot />
    <span class="sr-only">{{ description }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps({
    description: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.btn {
    @apply text-red-900 border border-red-900 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-700 dark:text-red-700 dark:hover:text-white dark:focus:ring-red-900 dark:hover:bg-red-700
}
</style>
