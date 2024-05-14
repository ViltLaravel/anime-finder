<template>
  <ul role="list" class="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
    <li v-for="animes in anime" :key="animes.mal_id" class="relative">
      <div
        class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img :src="animes.images.jpg.image_url" alt=""
          class="pointer-events-none object-cover group-hover:opacity-75" />
        <a :href="animes.url" class="absolute inset-0 focus:outline-none"></a>
      </div>
      <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ animes.title_english }}
        ({{ animes.episodes }} -episodes)</p>
      <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ animes.title_japanese }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
interface Anime {
  url: string,
  mal_id: string,
  images: {
    jpg: {
      type: string,
      image_url: string
    }
  },
  title_english: string,
  title_japanese: string,
  episodes: string,
}

defineProps({
  anime: Array as PropType<Anime[]>
})

</script>