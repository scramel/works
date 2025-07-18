<template>
  <div>
    <img v-for="src in srcs" :src="src" alt="Release illustration">
  </div>
</template>

<script setup>
const props = defineProps({
    index: {
      type: Number,
      required: true
    },
    srcs: {
      type: Array,
      required: true,
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
  img {
    height: 100%;
    min-width: 100vw;
    object-fit: cover;
    transition: var(--global-transition-carousel) ease;
    transform: translate(v-bind("-(index * 100) + '%'"));
  }
}
</style>