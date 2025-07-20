<template>
  <div>
    <img v-for="(src, index) in srcs" :src="src" alt="Release illustration" :style="{ objectPosition: calcImgPosition(index) }">
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentTrack: {
    type: Number,
    required: true
  },
  srcs: {
    type: Array,
    required: true,
  }
});

// dinamically changes the object-position property value of an object-fit: cover img
// this creates a parallax effect in screens with more height than width
const calcImgPosition = computed(() => {
  return (current) => {
    switch (true) {
      case current < props.currentTrack:
        return '0%'
      case current == props.currentTrack:
        return '50%'
      case current > props.currentTrack:
        return '100%'
      default:
        return '50%'
    }
  }
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: var(--global-background-zindex);
  overflow: hidden;
  filter: brightness(.5);
  img {
    height: 100%;
    min-width: 100vw;
    object-fit: cover;
    transform: translate(v-bind("-(currentTrack * 100) + '%'"));
    transition:
      transform var(--global-transition-carousel) ease,
      object-position  var(--global-transition-carousel) ease;
  }
}
</style>
