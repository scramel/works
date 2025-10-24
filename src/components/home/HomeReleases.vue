<template>
  <TransitionGroup name="slide-fade-next" tag="article">
    <template v-for="(track, index) in tracks" :key="track.title">
      <div v-if="currentTrack == index">
        <h1>{{ track.tag }}</h1>
        <img
          :src="require(`images/covers/${track.title}.webp`)"
          :alt="`${track.title} cover art`"
        />
      </div>
    </template>
  </TransitionGroup>
</template>

<script setup>
import { require } from '@/assets/js/utils.js'

const props = defineProps({
  tracks: {
    type: Array,
    required: true,
  },
  currentTrack: {
    type: Number,
    default: 0,
  },
})
</script>

<style lang="scss" scoped>
article {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  h1 {
    background-color: black;
  }
  div {
    position: absolute;
    overflow: hidden;
    img {
      max-width: 100vw;
      max-height: 70vh;
      padding: 1.5rem; // --global-section-padding mobile
    }
  }
}
</style>
