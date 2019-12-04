<template>
  <main class="main">
    <div class="wrapper">
      <Banner />
    </div>
  </main>
</template>

<style lang="scss">
.main {
  margin: 1.25em 0;
}

</style>

<script>
  import Banner from './main/Banner';

  export default {
    name: 'Main',
    components: {
      Banner
    },

    data: () => {
      return {

      }
    }
  }

</script>
