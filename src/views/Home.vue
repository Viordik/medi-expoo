<template>
  <div class="home">
    <Header />
    <Main />
  </div>
</template>

<style lang="scss">
  @import '../scss/typography.scss';
  @import '../scss/reset.scss';
  @import '../scss/body.scss';
</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'home',
  components: {
    Header,
    Main
  }
}
</script>
