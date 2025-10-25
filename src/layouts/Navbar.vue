<template>
  <nav>
    <a href="#" class="f-row">
      <img src="@/assets/images/logo.webp" alt="Logo" class="black-box" />
      <h5 class="md-hide">
        scramel works<br />
        music production
      </h5>
    </a>
    <button class="black-box">
      <i class="ri-menu-line"></i>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  // background-color: rgba(0, 0, 0, .5); // debug
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: var(--global-heading-height);
  top: var(--global-section-padding);
  padding: 0 var(--global-section-padding);
  transition: var(--global-transition);
  z-index: var(--global-ui-zindex);
  pointer-events: none;
  * {
    pointer-events: all;
  }
  a {
    text-decoration: none;
  }
}
</style>
