<template>
  <Layout v-model="searchAnime" @click="showDev">
    <Content :anime="anime" />
  </Layout>
  <Developer :show="show" @close="hideDev" />
</template>

<script setup lang="ts">
//@ts-ignore
import Layout from "@/assets/components/Layout.vue"
//@ts-ignore
import Content from "@/assets/components/Content.vue"
//@ts-ignore
import Developer from '@/assets/components/Developer.vue'

import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { debounce } from "vue-debounce";

const show = ref(false)
const showDev = () => {
  show.value = true
}
const hideDev = () => {
  show.value = false
}

interface Anime {
  url: '',
  mal_id: '',
  images: {
    jpg: {
      type: '',
      image_url: ''
    }
  },
  title_english: '',
  title_japanese: '',
  episodes: '',
}

const searchAnime: any = ref('')
const anime: any = ref<Anime[]>([])
const fetchAnime = async () => {
  try {
    const res = await axios.get('https://api.jikan.moe/v4/anime');
    if (res) {
      anime.value = res.data.data
    }
  } catch (error) {
    console.log('Error fetching anime :', error)
  }
}

const handleSearch = async (searchAnime: string) => {
  try {
    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchAnime}`);
    if (res) {
      anime.value = res.data.data
    }
  } catch (error) {
    console.log('No Anime found :', error)
  }
}

onMounted(async () => {
  fetchAnime();
})

const debouncedHandleSearch = debounce(handleSearch, 400);

onMounted(async () => {
  await fetchAnime();
});

watch(() => searchAnime.value, (newQuery) => {
  if (newQuery) {
    debouncedHandleSearch(newQuery);
  }
}
);
</script>
