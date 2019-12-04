<template>
  <header>
    <div class="wrapper">
      <Logo />
      <NavMenu />
    </div>
  </header>
</template>

<script>
import Logo from './header/Logo';
import NavMenu from './header/NavMenu';

export default {
  name: 'Header',
  props: {

  },
  components: {
    Logo,
    NavMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
