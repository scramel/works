<template>
  <Navbar/>
  <main>
    <RouterView/>
  </main>
</template>

<script setup>
import Navbar from '@/layouts/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
