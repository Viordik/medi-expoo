<template>
  <section class="overlay"></section>
</template>

<style lang="scss" scoped>
@import "../../scss/typography.scss";
@import "../../scss/body.scss";

.overlay {
  position: absolute;
  z-index: 3;

  width: 100%;
  height: 100vh;

  background-color: rgba($text-color, 0.5);
}

</style>

<script>
export default {
  name: 'Overlay'
}
</script>
