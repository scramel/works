<template>
  <div class="home__carousel">
    <Transition :name="`slide-${slideDirection ? 'next' : 'prev'}`">
      <img :src="srcs[currentTrack]" alt="Release illustration" :key="currentTrack" />
      <!-- :style="{ objectPosition: 50 + 50 * Math.sign(index - currentTrack) + '%' }" -->
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  currentTrack: {
    type: Number,
    required: true,
  },
  srcs: {
    type: Array,
    required: true,
  },
  slideDirection: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss" scoped>
.home__carousel {
  display: flex;
  width: 100vw;
  position: absolute;
  bottom: 0;
  top: 0;
  z-index: var(--global-background-zindex);
  overflow: hidden;
  filter: brightness(0.5);
  img {
    position: absolute;
    height: 100%;
    width: 100vw;
    object-fit: cover;
  }
}
</style>
