<template>
  <header>
    <Carousel :currentTrack="currentTrack" :srcs="srcs" />
    <Releases :currentTrack="currentTrack" :tracks="tracklist" />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { require } from '@/assets/js/utils.js'
import releases from './releases.js'

// components
import Carousel from '@/components/home/HomeCarousel.vue'
import Releases from '@/components/home/HomeReleases.vue'

// tracklist
const tracklist = [
  { ...releases.latest.sample(), tag: 'Latest' }, // random latest
  { ...releases.popular.sample(), tag: 'Popular' }, // random popular
  { ...releases.featured.sample(), tag: 'Featured' }, // random featured
]

// current track
const currentTrack = ref(0)

// carousel loop
const delay = 5250 // miliseconds
const timer = setInterval(() => {
  currentTrack.value++
  if (currentTrack.value == tracklist.length) currentTrack.value = 0
}, delay)

// image sources
const srcs = tracklist.map((el) => `images/backgrounds/${el.title}.webp`)
</script>

<style lang="scss" scoped>
header {
  min-height: max(100vh, var(--global-min-section-height));
  position: relative;
  overflow: hidden;
}
</style>
