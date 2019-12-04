<template>
  <section class="logo">
    <div class="logo__img-wrapper">
      <a href="#!">
        <img class="logo__img" :src="logoImg" alt="medi-expo">
      </a>
    </div>

    <div class="logo__personal-area">
      <a class="logo__link" href="#!">Личный кабинет</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import "../../scss/typography.scss";
  @import "../../scss/body.scss";


  .logo {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    &__img-wrapper {
      max-width: 500px;
      max-height: 39px;
    }

    &__img {
      width: 100%;
      height: 100%;
    }

    &__personal-area {
      width: 100%;
      max-width: rem(320px);
      margin: 0.625em auto 0;
      padding: 0.625em;

      background-color: $light-blue-darken;
      border-radius: 0.3125em;
    }

    &__link {
      position: relative;

      display: inline-block;

      font-weight: 600;
      color: $white;

      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;

        display: block;
        width: 0;
        height: 2px;

        background-color: $white;

        transition: width 0.2s ease-in-out;
      }

      &:hover::after,
      &:focus::after {
        width: 100%;
      }
    }
  }

  @media #{$tablet} {
    .logo {
      flex-direction: row;

      &__personal-area {
        max-width: rem(170px);
        margin: 0;
      }
    }
  }

</style>

<script>
  export default {
    name: 'Logo',

    data: () => {
      return {
        logoImg: 'https://www.mediexpo.ru/fileadmin/templates/images/logo-inner.png'
      }
    }
  }

</script>
