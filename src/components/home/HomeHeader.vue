<template>
	<header>
		<Carousel :index="trackindex" :srcs="srcs"/>
		<h1>Header section!</h1>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/home/HomeCarousel.vue';
import releases from './releases.js';

// tracklist
const tracklist = [
	{ ...releases.latest.sample(), tag: "Latest" }, // random latest
	{ ...releases.popular.sample(), tag: "Popular" }, // random popular
	{ ...releases.featured.sample(), tag: "Featured" } // random featured
];

// current track
const trackindex = ref(0);

// carousel loop
const delay = 5250; // miliseconds
const timer = setInterval(() => {
	trackindex.value++;
	if (trackindex.value == tracklist.length) trackindex.value = 0;
}, delay);

// image sources
const srcs = tracklist.map(el => new URL(`/src/assets/images/backgrounds/${el.title}.webp`, import.meta.url));
</script>
