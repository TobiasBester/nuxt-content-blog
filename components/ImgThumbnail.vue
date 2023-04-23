<template>
  <div class="p-1 pb-4 flex flex-col">
    <lazy-nuxt-img
        :src="src"
        :alt="alt"
        class="cursor-pointer"
        @click="expand"
    />
    <div class="py-2 text-center">
      <span>{{ caption }}</span><br/>
      <a v-if="reference"
         :href="reference"
         target="_blank"
      >Reference</a>
    </div>
  </div>

  <div v-if="expanded" class="modal">
    <div class="flex flex-col md:flex-row justify-evenly md:justify-between h-full">
      <div class="p-1 text-center grid h-full">
        <lazy-nuxt-img
            :src="currentImg.src"
            :alt="currentImg.alt"
            class="modal-img"
        />
      </div>
      <div class="text-center justify-center flex flex-col md:w-80 m-5 md:m-10">
        <p>{{ currentImg.caption }}</p>
        <a v-if="currentImg.reference"
           :href="currentImg.reference"
           target="_blank"
        >Reference</a>
        <div v-if="related?.length > 0" class="flex flex-row py-2 justify-around">
          <button class="w-icon" @click="goToPrevImg">
            <ArrowLeftCircleIcon class="icon solid"/>
          </button>
          <span>{{ currentImgIdx + 1 }}/{{ numImages }}</span>
          <button class="w-icon" @click="goToNextImg">
            <ArrowRightCircleIcon class="icon solid"/>
          </button>
        </div>
        <button @click="shrink" class="w-icon mt-5 md:mt-10">
          Close
          <XCircleIcon class="icon solid"/>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {XCircleIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon} from '@heroicons/vue/24/solid'
import {computed} from "#imports";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        default: 'Image'
    },
    reference: {
        type: String,
        default: null,
    },
    related: {
        type: Array,
        required: false
    }
})

const expanded = ref(false)
const expand = () => {
    expanded.value = true
}
const shrink = () => {
    expanded.value = false
    currentImgIdx.value = 0
}

const currentImgIdx = ref(0)

const currentImg = computed(() => {
    if (currentImgIdx.value === 0) {
        return mainImg.value
    }
    if (!props.related || props.related?.length < currentImgIdx.value) {
        return mainImg.value
    }

    return props.related![currentImgIdx.value - 1]
})

const numImages = computed(() => {
    const numRelated = props.related ? props.related.length : 0
    return numRelated + 1
})

const mainImg = computed(() => ({
    src: props.src,
    alt: props.alt,
    caption: props.caption,
    reference: props.reference
}))

const goToPrevImg = () => {
    if (currentImgIdx.value === 0) {
        currentImgIdx.value = numImages.value - 1
        return
    }
    currentImgIdx.value = Math.max(currentImgIdx.value - 1, 0)
}

const goToNextImg = () => {
    if (currentImgIdx.value === numImages.value - 1) {
        currentImgIdx.value = 0
        return
    }
    currentImgIdx.value = Math.min(currentImgIdx.value + 1, numImages.value - 1)
}

</script>

<style scoped>
.modal {
    @apply fixed z-50 pt-2 pb-8 px-2 left-0 top-0 w-full h-full overflow-hidden bg-black bg-opacity-90
}

.modal-img {
    max-width: 100%;
    max-height: 100vh;
    margin: auto;
}
</style>
