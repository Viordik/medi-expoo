<template>
  <main class="main">
    <div class="wrapper">
      <Banner />
      <CarouselProject />
      <CalendarSubscription />
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
  import CarouselProject from './main/Carousel';
  import CalendarSubscription from './main/CalendarSubscription';

  export default {
    name: 'Main',
    components: {
      Banner,
      CarouselProject,
      CalendarSubscription
    },

    data: () => {
      return {

      }
    }
  }

</script>
