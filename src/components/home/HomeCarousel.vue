<template>
  <div class="home__carousel">
    <img
      v-for="(src, index) in srcs"
      :src="src"
      alt="Release illustration"
      :style="{ objectPosition: 50 + 50 * Math.sign(index - currentTrack) + '%' }"
    />
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
    height: 100%;
    min-width: 100vw;
    object-fit: cover;
    transform: translate(v-bind("-(currentTrack * 100) + '%'"));
    transition:
      transform var(--global-transition-carousel) ease,
      object-position var(--global-transition-carousel) ease;
  }
}
</style>
