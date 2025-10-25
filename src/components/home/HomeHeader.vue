<template>
  <header>
    <Carousel :currentTrack="currentTrack" :slideDirection="slideDirection" :srcs="srcs" />
    <Releases :currentTrack="currentTrack" :slideDirection="slideDirection" :tracks="tracklist" />
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
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
const delay = 50250 // miliseconds
const timer = setInterval(() => {
  currentTrack.value++
  if (currentTrack.value == tracklist.length) currentTrack.value = 0
}, delay)

// image sources
const srcs = tracklist.map((el) => `images/backgrounds/${el.title}.webp`)

// this manages whether the slide transition should go left or right
// true = right
// false = left
let slideDirection = true
watch(currentTrack, (n, o) => {
  slideDirection = n > o
})
</script>

<style lang="scss" scoped>
header {
  min-height: max(100vh, var(--global-min-section-height));
  position: relative;
  overflow: hidden;
}
</style>
