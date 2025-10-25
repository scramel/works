<template>
  <Transition :name="`slide-fade-${slideDirection ? 'next' : 'prev'}`" mode="out-in" tag="article">
    <article :key="currentTrack">
      <h1 class="track-tag">{{ tracks[currentTrack].tag }}</h1>
      <div class="f-row">
        <img
          :src="require(`images/covers/${tracks[currentTrack].title}.webp`)"
          :alt="`${tracks[currentTrack].title} cover art`"
        />
        <h1>{{ tracks[currentTrack].title }}</h1>
      </div>
    </article>
  </Transition>
</template>

<script setup>
import { watch } from 'vue'
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

// this manages whether the slide transition should go left or right
// true = right
// false = left
let slideDirection = true
watch(
  () => props.currentTrack,
  (n, o) => {
    slideDirection = n > o
  },
)
</script>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .track-tag {
    position: absolute;
    top: var(--global-section-padding);
    text-align: center;
    width: fit-content;
    background-color: black;
    padding: 0 60px;
    height: var(--global-heading-height);
    line-height: var(--global-heading-height);
    text-transform: uppercase;
    transition: var(--global-transition);
    @media only screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }
  img {
    max-width: 100vw;
    max-height: 70vh;
    padding: var(--global-section-padding--mobile);
  }
}
</style>
