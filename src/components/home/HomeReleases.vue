<template>
  <Transition :name="`slide-fade-${slideDirection ? 'next' : 'prev'}`" mode="out-in">
    <div class="home__releases" :key="currentTrack">
      <h1 class="text text--tag">{{ tracks[currentTrack].tag }}</h1>
      <article class="f-row">
        <img
          class="cover-art normalize-padding"
          :src="`images/covers/${tracks[currentTrack].title}.webp`"
          :alt="`${tracks[currentTrack].title} cover art`"
        />
        <aside class="f-col details normalize-padding">
          <h1 class="text text--title">{{ tracks[currentTrack].title }}</h1>
          <h2 class="text">{{ tracks[currentTrack].artist }}</h2>
          <h3 class="text">{{ tracks[currentTrack].subtitle }}</h3>
          <div class="mt-1-5 f-row">
            <a :href="tracks[currentTrack].url" target="_blank">
              <button class="button button--secondary">
                <h3>▶ Listen</h3>
              </button>
            </a>
            <div class="f-row f-row--wrap">
              <a
                v-for="platform in tracks[currentTrack].platforms"
                :href="platform.url"
                class="platform-icon"
                target="_blank"
              >
                <img :src="`images/logos/${platform.name}.webp`" :alt="platform.name" />
              </a>
            </div>
          </div>
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
      min-width: 42vw;
      padding-right: var(--global-section-padding);
    }
  }
  .text {
    width: fit-content;
    transition: var(--global-transition);
    padding-left: 40px;
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
      padding: 0 40px;
      background-color: white;
      color: black;
      text-align: center;
      font-weight: bold;
    }
    @media only screen and (max-width: 1200px) {
      padding: 0 40px;
    }
  }
  .cover-art {
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
  .platform-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 40px;
    }
  }
}
</style>
