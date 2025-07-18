<template>
	<nav class="f-row" style="justify-content: space-between;">
		<a href="#" class="f-row">
			<img src="@/assets/images/logo.webp" alt="Logo" class="black-box">
			<p class="sm-hide">
				scramel works<br>
				music production
			</p>
		</a>
		<button class="black-box">
			<i class="ri-menu-line"></i>
		</button>
	</nav>
</template>

<style lang="scss" scoped>
nav {
	// background-color: rgba(0, 0, 0, .5);
	position: fixed;
	flex-direction: row;
	width: 100%;
  height: var(--global-heading-height);
	top: var(--global-section-padding);
  padding: 0 var(--global-section-padding);
	transition: var(--global-transition);
  z-index: var(--global-ui-zindex);
	a {
		text-decoration: none;
	}
}
</style>