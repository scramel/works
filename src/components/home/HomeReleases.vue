<template>
  <Transition :name="`slide-fade-${slideDirection ? 'next' : 'prev'}`" mode="out-in">
    <div class="home__releases" :key="currentTrack">
      <h1 class="text text--tag">{{ tracks[currentTrack].tag }}</h1>
      <article class="f-row">
        <img
          class="normalize-padding"
          :src="require(`images/covers/${tracks[currentTrack].title}.webp`)"
          :alt="`${tracks[currentTrack].title} cover art`"
        />
        <aside class="f-col details normalize-padding">
          <h1 class="text text--title">{{ tracks[currentTrack].title }}</h1>
          <h2 class="text">{{ tracks[currentTrack].artist }}</h2>
          <h3 class="text">{{ tracks[currentTrack].subtitle }}</h3>
        </aside>
      </article>
      <!-- <div></div> -->
      <div :style="{ height: 'var(--global-heading-height)' }"></div>
    </div>
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
.home__releases {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  padding: var(--global-section-padding);
  article {
    flex: 1;
    gap: 0;
    aside {
      padding-right: var(--global-section-padding);
    }
  }
  .text {
    width: fit-content;
    padding: 0 40px;
    transition: var(--global-transition);
    &--tag {
      padding: 0 60px;
      line-height: var(--global-heading-height);
      height: var(--global-heading-height);
      text-align: center;
      background-color: black;
      text-transform: uppercase;
      z-index: var(--global-ui-zindex);
    }
    &--title {
      background-color: white;
      color: black;
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }
  img {
    transition: var(--global-transition) padding;
    padding: var(--global-section-padding);
    height: min(
      100vw,
      calc(
        max(100vh, var(--global-min-section-height)) - var(--global-section-padding) *
          2 - var(--global-heading-height) * 2
      )
    );
  }
}
</style>
